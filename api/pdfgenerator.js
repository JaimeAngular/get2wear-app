const PDFDocument = require('pdfkit')
const blobStream  = require('blob-stream')

// const multer = require('multer')
// const multerS3 = require('multer-s3')
const AWS = require('aws-sdk')
const config = require('../config')
// const ext = require('file-extension')

const GREEN = '#52CC8C'
const GRAY = '#272727'
const PINK = '#BE3176'
const PURPLE = '#61147D'

const s3 = new AWS.S3({
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretKey
})

exports.certificateExample = {
	sender: 'cjortegon@gmail.com',
	pricing: {
		rentalPrice: 73800,
		deposit: 45000,
		ownerEarning: 26000,
		backupValue: 100000
	},
	laundry: {
		type: 999,
		name: '(Lavatex - Mujer) Fiesta liso corto',
		survey: [
			{q: 'Escoja la que más se acerque al tipo de prenda', a: 'Vestido corto'},
			{q: '¿Como es la textura de la tela?', a: 'Lisa'},
			{q: '¿Tiene aderezos como lentejuelas o pedrería?', a: 'No'}
		]
	},
	sizes: {
		s1: 10,
		q1: 'flexibles',
		s3: 30,
		q3: 'rigido',
		s4: 40,
		q4: 'flexibles',
		s5: 50,
		q5: 'rigidos',
		brasize: '34B'
	}
}

const emptyPricing = {
    rentalPrice: 0,
    deposit: 0,
    ownerEarning: 0,
    backupValue: 0
}

const emptyLaundry = {
    type: 0,
	name: 'No fue seleccionada',
	survey: []
}

const emptySizes = {
    s1: 0,
    q1: '(Sin marcar)',
    s3: 0,
    q3: '(Sin marcar)',
    s4: 0,
    q4: '(Sin marcar)',
    s5: 0,
    q5: '(Sin marcar)',
    brasize: '(Sin marcar)'
}

exports.generateCertificate = (res, req) => {
    var doc = new PDFDocument();
    if(req.sender === undefined) {
        req.sender = '---'
    }
    if(req.pricing === undefined) {
        req.pricing = emptyPricing
    }
    if(req.laundry === undefined) {
        req.laundry = emptyLaundry
    }
    if(req.sizes === undefined) {
        req.sizes = emptySizes
    }

    let {sender, pricing, laundry, sizes} = req

    // Logo
    doc.scale(1)
    .translate(210, 40)
    .path('M176.98739,95.49351c-.99465-5.67125-2.4091-8.66375-8.37254-14.16223a55.581,55.581,0,0,0-13.84267-9.60081l-1.08211,2.16625c.61771.32108,1.54421.7811,1.72825.87487a7.09411,7.09411,0,0,1,2.38458,1.40431,2.468,2.468,0,0,1,.39361,2.97774,2.577,2.577,0,0,1-3.38882.94434l-12.72658-6.35724a2.59162,2.59162,0,0,1-1.24971-3.39665,2.52808,2.52808,0,0,1,3.46071-1.09931L147.697,70.9456l.96376-1.92935-1.20916-.50324c-2.3039-.95887-4.66911-1.77269-6.95681-2.56041l-1.59456-.55053c-.55609-.19337-1.17216-.38061-1.85428-.58845-2.85566-.87029-6.76691-1.22573-12.30112-4.66519a57.54638,57.54638,0,0,1-17.758-17.49386c-2.64374-4.2962-8.45632-4.04647-12.841-4.43055l.00277-.45278a1.281,1.281,0,0,0-1.281-1.28881H90.53905c.0078-.67489.01657-2.99271.01906-3.21043.0049-.47785.02289-.96794.01881-1.85434l.0078-.22669a5.31093,5.31093,0,0,0-.53351-2.67957c-.88476-1.75811-3.62967-2.67386-4.80311-3.06446l-.08078-.02773a10.88373,10.88373,0,0,1-6.79479-6.36377,10.19711,10.19711,0,0,1,.73-8.80524A10.13225,10.13225,0,0,1,90.16344,5.13978a9.86883,9.86883,0,0,1,8.1415,7.31866,14.15588,14.15588,0,0,1,.42164,2.08593c.0685.455.13781.91.23159,1.35691a2.16919,2.16919,0,0,0,2.52382,1.87064,2.25677,2.25677,0,0,0,2.18133-2.46592c-.28867-5.60541-2.59966-9.83515-6.86854-12.57343-6.398-4.10009-13.291-3.56515-18.90948,1.46292a14.2508,14.2508,0,0,0-4.666,14.40982c1.32837,5.94382,4.88374,9.82781,10.56743,11.5427,1.83068.55287,2.12424.76489,2.12424,2.45532,0,.56592-.00127,3.09015-.00484,3.8791H84.23951a1.281,1.281,0,0,0-1.28095,1.28881l.00277.45278c-4.38463.38408-10.19721.13435-12.841,4.43055a57.54649,57.54649,0,0,1-17.758,17.49386c-5.53421,3.43946-9.44546,3.7949-12.30112,4.66519-.68212.20784-1.2982.39508-1.85428.58845l-1.59457.55053c-2.28769.78772-4.6529,1.60154-6.95681,2.56041l-1.13668.47306.97879,1.95953,3.37681-1.68681a2.59174,2.59174,0,0,1,3.46644,1.0407,2.52811,2.52811,0,0,1-1.19952,3.42731L22.38066,80.10117a2.57206,2.57206,0,0,1-3.31651-.83818,2.44181,2.44181,0,0,1-.09906-2.49691c.39111-1.16976,2.07848-1.66454,2.72381-1.99449.19081-.09724,1.18281-.58947,1.79776-.911l-1.081-2.1641A55.512,55.512,0,0,0,8.49236,81.33128c-5.96344,5.49848-7.37789,8.491-8.37253,14.16223-.46664,2.66031.4092,6.09386,2.98689,7.50826,2.26471,1.24152,6.49532,1.3249,13.79151-5.34436.662-.60557,2.93287-2.66622,4.34-3.76483,1.23816-.963,2.3012-1.80775,3.25619-2.56826a51.86557,51.86557,0,0,1,8.878-6.12607,60.20257,60.20257,0,0,1,9.78627-4.14208l.32266-.11152c1.17766-.40874,2.43657-.8234,3.74363-1.25518,5.19411-1.71673,11.08951-3.66259,16.41175-6.61483a49.815,49.815,0,0,0,4.70327-3.15253,35.97285,35.97285,0,0,1,6.7901-4.228,32.14244,32.14244,0,0,1,6.066-1.76606,41.32356,41.32356,0,0,1,7.31607-.52831,41.80585,41.80585,0,0,1,7.35745.52831,32.32653,32.32653,0,0,1,6.08668,1.76606,36.02511,36.02511,0,0,1,6.8005,4.228,49.83951,49.83951,0,0,0,4.70841,3.15253c5.32224,2.95224,11.22018,4.8981,16.4143,6.61483,1.30706.43178,2.56729.84644,3.74495,1.25518l.32328.11152a60.20549,60.20549,0,0,1,9.78663,4.14208,51.86658,51.86658,0,0,1,8.87816,6.12607c.955.76051,2.01809,1.60521,3.25625,2.56826,1.40716,1.09861,3.67808,3.15926,4.34013,3.76483,7.29619,6.66926,11.52675,6.58588,13.79146,5.34436C176.57814,101.58737,177.454,98.15382,176.98739,95.49351Z')
    .fill(PINK, 'even-odd')
    .restore();
    doc.translate(-210, -40)
    
    // Title
    doc.fontSize(25).fillColor(PURPLE)
    doc.text('Resumen de la inscripción', 160, 170);
    doc.fontSize(18).fillColor(PINK)
    doc.text('Envía este documento a alquiler@thedressapp.com', 80, 198)
    doc.fontSize(14).fillColor(PURPLE)
    doc.text('Recuerda adjuntar las fotos en uso de tus vestidos', 140, 220)

    // Prices
    doc.fontSize(12).fillColor(GRAY)
    let startY = 250
    doc.text('Asociado: '+sender, 50, startY)
    startY += 17
    doc.text('Valor de alquiler: $ '+currency(parseInt(pricing.rentalPrice))+' COP', 50, startY)
    startY += 17
    doc.text('Depósito de seguridad: $ '+currency(parseInt(pricing.deposit))+' COP', 50, startY)
    startY += 17
    doc.text('Tus ganancias: $ '+currency(parseInt(pricing.ownerEarning))+' COP', 50, startY)
    startY += 17
    doc.text('Valor de respaldo: $ '+currency(parseInt(pricing.backupValue))+' COP', 50, startY)
    startY += 15
    doc.fontSize(8)
    doc.text('* DRESSAPPCO S.A.S. responde por el valor de respaldo en caso de un incidente', 55, startY)

    // Laundry
    doc.fontSize(13).fillColor(GREEN)
    startY += 20
    doc.text('Lavandería', 50, startY+0)
    doc.fontSize(10).fillColor(GRAY)
    startY += 16
    doc.text('Tipo: '+laundry.name, 50, startY)
    startY += 12
    doc.text('Codigo Dressapp: '+laundry.type, 50, startY)
    laundry.survey.map((s) => {
        startY += 12
        doc.text(s.q+' -> '+s.a, 50, startY)
    })

    // Sizes
    doc.fontSize(13).fillColor(GREEN)
    startY += 25
    doc.text('Medidas', 50, startY)
    doc.fontSize(10).fillColor(GRAY)
    startY += 16
    doc.text('Tiene '+sizes.s2+'cm '+sizes.q2+' en la base del busto y se encuentra el rango: '+sizes.brasize, 50, startY)
    startY += 12
    doc.text('Cintura -> '+sizes.s3+'cm '+sizes.q3, 50, startY)
    startY += 12
    doc.text('Cadera -> '+sizes.s4+'cm '+sizes.q4, 50, startY)
    startY += 12
    doc.text('Estatura -> '+sizes.s5+'cm ', 50, startY)
    startY += 12
    doc.fontSize(8)
    doc.text('* La estatura corresponde a la persona quien usa el vestido en las fotos', 50, startY)

    // Footer
    doc.fontSize(9).fill(PURPLE)
    startY += 30
    doc.text('Al enviar este documento acepta los términos y condiciones de DRESSAPP', 50, startY)
    startY += 30
    doc.text('Documento generado en www.thedressapp.com', 50, startY)
    startY += 10
    doc.text('DRESSAPP es un producto de DRESSAPPCO S.A.S', 50, startY)
    startY += 10
    doc.text('Cali, Colombia', 50, startY)
    
    // Upload to S3
    let stream = doc.pipe(blobStream())
    doc.end()
    stream.on('finish', () => {
        let blob = stream.toBlob('application/pdf')
        S3.putObject({
            Body: blob,
            Bucket: 'dressapp.private',
            ContentType: 'image/jpeg',
            Key: 'submits',
        }).promise()
    })

    // Push to client
    let filename = encodeURIComponent('certificado_precios') + '.pdf'
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    doc.pipe(res)
    doc.end()

    res.send('Ready!')
}

function currency(number) {
    return number.toLocaleString('currency')
}