var config = require('./config')
var dev = (config.dev !== undefined)

// Libraries
var fs = require('fs')
var path = require('path')
var https = require('https')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

// Database
var db = require('./database')

// Starting express
var app = express()
app.set('view engine', 'pug')
app.get('*.gz', function (req, res, next) {
	res.set('Content-Encoding', 'gzip')
	next()
})
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

// Default metadata
let og = {
	title: "Tu vestido ideal | Get2Wear",
	type: "website",
	image: "https://s3.amazonaws.com/dressapp.public/structure/seo/og20180804.jpg",
	description: "Imagina un armario que tiene exactamente lo que estás buscando. Bienvenido al futuro: la revolución del alquiler está aquí.",
	url: "http://www.get2wear.com/"
}
let twitter = {
	card: 'summary',
	site: '@gettowear',
	title: "Tu vestido ideal | Get2Wear",
	image: "https://s3.amazonaws.com/dressapp.public/structure/seo/og20180804_rect.jpg",
	description: "Imagina un armario que tiene exactamente lo que estás buscando. Bienvenido al futuro: la revolución del alquiler está aquí."
}

let paths = [
	'/vestidos',
	'/perfil',
	'/favoritos',
	'/armario',
	'/vestidos/:c/:s',
	'/que-es-get2wear/:c/:s',
	'/faq',
	'/alquila',
	'/inscripcion',
	'/inscripcion/fotos',
	'/tutorial',
	'/mivestier',
	'/miperfil',
	'/checkout',
	'/tutoriales',
	'/promo',
	'/aliados'
]

let mobilePaths = [
	'/mobile/vestidos/:c/:s',
	'/mobile/detalles/:r',
	'/mobile/faq'
]

app.get(mobilePaths, function(req, res) {
	res.render('mobile')
})

app.get('/productos/:c/:s', function(req, res) {
	let params = req.params
	res.redirect(`/vestidos/women/formal`)
})

app.get(paths, function(req, res) {
	// console.log(JSON.stringify(req.params))
	defaultRender(req, res)
})

app.get('/', function(req, res) {
	defaultRender(req, res)
})

app.get('/registro', function(req, res) {
	res.render('register', {})
})

app.get('/pagorealizado', function(req, res) {
	let downloadLink = '/'
	if(req.query.ref_payco !== undefined) {
		downloadLink = 'http://www.get2wear.com/api/invoice?ref_payco='+req.query.ref_payco
	}
	res.render('paymentdone', {invoice: downloadLink})
})

// app.get('/paynow', function(req, res) {
// 	res.render('payexample', {})
// })

function defaultRender(req, res) {
	res.render('home', {
		og,
		twitter
	})
}

// Find dress
const SELECT_RENTABLE_DETAILS = 'SELECT "Rentables".title, "Rentables".photo, "Rentables".description, "Subcategories".compound FROM "Rentables", "Subcategories" WHERE "Rentables".id=$1 AND subcategory="Subcategories".id'

function uppercaseFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// app.get('/detalles/:c/:s/:r', function(req, res) {
// 	res.render('home', {
// 		og: {
// 			title: og.title,
// 			type: "product",
// 			image: og.image,
// 			description: og.description,
// 			url: "http://www.get2wear.com/opengraph/rentable/"+req.params.r
// 		},
// 		twitter: twitter
// 	})
// })

app.get('/detalles/:r', function(req, res) {
	let params = req.params
	db.connect(() => {
		db.query(false, SELECT_RENTABLE_DETAILS, [params.r])
		.then((result) => {
			let title = og.title
			let image = og.image
			let description = og.description
			let url = og.url
			if(result.rows.length > 0) {
				let rentable = result.rows[0]
				title = rentable.title+' | Get2Wear'
				image = rentable.photo
				description = rentable.description + '. Encuentra este y más '+rentable.compound+' en Get2Wear.',
				url = "http://www.get2wear.com/detalles/"+params.r
			}
			res.render('home', {
				og: {
					title: title,
					type: "product",
					image: image,
					description: description,
					url: url
				},
				twitter: {
					card: 'summary',
					site: twitter.site,
					title: title,
					image: image,
					description: description
				}
			})
		})
		.catch((error) => {
			defaultRender(req, res)
		})
	})
})

app.get('/api/email/confirm', function(req, res) {
	if(req.query.c === undefined) {
		res.render('expired')
	} else {
		confirmMail(req.query.c)
		.then((response) => {
			res.render('confirmed')
		})
		.catch((error) => {
			res.render('expired')
		})
	}
})

const SELECT_CONFIRMATION_CODE = 'SELECT * FROM "EmailConfirmationCodes" WHERE id=$1'
const UPDATE_CONFIRMATION = 'UPDATE "Users" SET validations=$1 WHERE id=$2;'
const DELETE_CONFIRMATION_CODE = 'DELETE FROM "EmailConfirmationCodes" WHERE id=$1'

function confirmMail(code) {
	return new Promise((resolve, reject) => {
		db.connect(() => {
			db.query(false, SELECT_CONFIRMATION_CODE, [code])
			.then((result) => {
				if(result.rows.length > 0 && result.rows[0].expiration > (new Date()).getTime()) {
					db.query(false, UPDATE_CONFIRMATION, [1, result.rows[0].user])
					.then((result) => {
						db.query(false, DELETE_CONFIRMATION_CODE, [code])
						.then((result) => {
							resolve(null)
						})
						.catch((error) => {
							reject(null)
						})
					})
					.catch((error) => {
						reject(null)
					})
				} else {
					reject(null)
				}
			})
		})
	})
}

app.use('/:route', (req, res, next) => {
    res.status(404).render('notfound', {title: "Pagina no encontrada", route: req.params.route})
})

const port = 9000
if(!dev) {
	app.listen(port, function(err) {
		if(err) return console.log('Hubo un error'), process.exit(1)
		console.log('Get2Wear-landing escuchando en el puerto '+port)
	})
} else {
	// *** HTTPS localhost ***
	const certOptions = {
		key: fs.readFileSync(path.resolve('ssl/cert/server.key')),
		cert: fs.readFileSync(path.resolve('ssl/cert/server.crt'))
	}
	var server = https.createServer(certOptions, app).listen(port, function(err) {
		if(err) return console.log('Hubo un error'), process.exit(1)
		console.log('Get2Wear-TEST escuchando en https://localhost:'+port)
	})
}

// try {
// 	const AutoDeploy = require('./AutoDeploy')
// } catch(e) {
// 	console.log('Fail to init AutoDeploy')
// }