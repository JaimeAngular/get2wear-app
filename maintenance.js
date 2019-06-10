// Libraries
var express = require('express')

// Starting express
var app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))

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

app.use(function(req, res, next){
    res.render('maintenance', {
		og: og,
		twitter: twitter
	});
})

app.listen(9000, function(err) {
	if(err) return console.log('Hubo un error'), process.exit(1)
	console.log('DressApp-landing escuchando en el puerto 9000')
})
