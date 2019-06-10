(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1272:function(e,a,o){(e.exports=o(13)(!1)).push([e.i,".tips-container{width:100%;margin-top:20px;display:-ms-flexbox;display:-webkit-flex;display:flex;flex-direction:column}.tip-box{width:80%;padding:20px;margin:auto;text-align:left;line-height:1.3em;margin-bottom:20px}.tip-body{font-size:1.2em;text-align:justify;line-height:1.15em}.tip-body strong{color:#9144ad}.tip-body h2{font-weight:700;margin-bottom:7px}.tip-body small{font-style:italic;font-size:.8em}.tip-body a{color:#52cc8c;text-decoration:none}.shadow-green{box-shadow:1px 1px 10px rgba(82,204,114,.8)}.shadow-purple{box-shadow:1px 1px 10px rgba(97,20,125,.6)}.shadow-pink{box-shadow:1px 1px 10px rgba(190,49,118,.7)}.tip-title{margin-top:8px;margin-bottom:8px;font-size:14pt;font-weight:700}",""])},1283:function(e,a,o){var r=o(1272);"string"==typeof r&&(r=[[e.i,r,""]]);var t={transform:void 0},n=o(14)(r,t);r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(1272,function(){var a=o(1272);"string"==typeof a&&(a=[[e.i,a,""]]),n(a)}),e.hot.dispose(function(){n()})},1311:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var o=0;o<a.length;o++){var r=a[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,o,r){return o&&e(a.prototype,o),r&&e(a,r),a}}(),t=o(2),n=function(e){return e&&e.__esModule?e:{default:e}}(t);o(1283);var s=function(e){function a(e){return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e))}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,t.PureComponent),r(a,[{key:"render",value:function(){return n.default.createElement("div",{className:"tip-box "+this.props.shadowClass},n.default.createElement("div",null,n.default.createElement("img",{width:16,height:28,src:"https://s3.amazonaws.com/dressapp.public/structure/icons/other/bulb_pink.png"}),n.default.createElement("span",{className:"tip-title",style:{marginBottom:10,marginLeft:10}},this.props.title)),n.default.createElement("div",{style:{marginBottom:5}}),n.default.createElement("div",{className:"tip-body",dangerouslySetInnerHTML:{__html:this.props.text}}))}}]),a}();a.default=s},415:function(e,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var o=0;o<a.length;o++){var r=a[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,o,r){return o&&e(a.prototype,o),r&&e(a,r),a}}(),t=o(2),n=l(t),s=o(101);o(1283);var i=l(o(1311));function l(e){return e&&e.__esModule?e:{default:e}}var c=[{i:0,c:1,h:"Subir Fotos",b:"Puedes comenzar subiendo las fotos ¡Mira los tips para unas fotos perfectas!<br/><br/>Luego podras relacionar la información como detalles y medidas."},{i:1,c:1,h:"Registrar Información",b:"Si aún no tienes las fotos en uso, puedes comenzar relacionando la información del vestido. Podrás completar el proceso subiendo las fotos después."},{i:2,c:2,h:"Precio Retail",b:"Si no recuerdas el precio al que la compraste solo debes poner el precio que estimas que alguien estaría dispuesto a pagar por ella como nueva.<br/><br/>Este valor lo conocerán tus clientes."},{i:3,c:2,h:"Tu Ganancia",b:"Es lo que ganaras por solo entregar tu prenda en el tiempo acordado y en excelentes condiciones. Sin riesgos y sin molestarte. Puedes modificarla cuando quieras.<br/><br/>Incide directamente en el valor de Alquiler que deberan pagar tus clientes por ella."},{i:4,c:0,h:"Lavanderia",b:"En Get2Wear cuidamos de tus prendas bajo los más altos estándares de calidad, por eso nos encargamos de realizar el procedimiento de lavandería una vez se ha prestado el servicio, para entregártela lista para un próximo uso o alquiler.<br/><br/>La prenda será lavada por LAVATEX S.A.S bajo un convenio que logra las mejores tarifas y permite ofrecer un precio de alquiler más atractivo."},{i:5,c:2,h:"Tipo de Tela",b:"<strong>Algodón o Sintéticas:</strong> Telas hechas de algodón <small>(es el material más usado en telas)</small> o telas sintéticas como poliester, nylon, spandex, poliamida, acrílica, etc.<br/><br/><strong>Lino, Terciopelo, Seda o Telas especiales:</strong> Telas hechas de Lino, Tercipoleo, Seda <small>(textura suave, lisa y de brillo natural)</small>, u otras telas especiales que requieren un proceso de limpieza especial o en seco."},{i:6,c:0,h:null,b:'<p class="tip-title">Lisa</p><img width="150" height="150" src="https://s3.amazonaws.com/dressapp.public/structure/owners/instructions/lisa.jpg" /><br/><p class="tip-title">Pliegues</p><img width="150" height="150" src="https://s3.amazonaws.com/dressapp.public/structure/owners/instructions/prensada.jpg" />'},{i:7,c:2,h:"Forro",b:'Es una segunda tela que hay al interior de algunas prendas.<br/><br/><img width="150" height="150" src="https://s3.amazonaws.com/dressapp.public/structure/owners/instructions/enagua.jpg" />'},{i:8,c:0,h:"Lentejuelas o Pedrería",b:"Son piedritas o aderezos de cualquier tipo que se bordan en la tela de la prenda con fines decorativos.<br/><br/>La minima presencia de estos elementos hacen que la prenda deba ser tratada con cuidado para evitar daños al vestido."},{i:9,c:2,h:"Telas blancas",b:"Las telas blancas deben ser tratadas por aparte para evitar que se manchen o cambien su aspecto."},{i:10,c:0,h:"Valor de respaldo",b:"Es el valor total por el que te respondera Get2Wear. si la prenda sufre hurto o daños irreversibles que consideres como una perdida total para el uso esta.<br/><br/>El valor comercial de una prenda de ultima colección que ya ha sido usada no supera el 50% del valor de retail como nueva.<br/><br/>Al alquilarla en Get2Wear la prenda tendria un uso y un usuario adicional, por eso consideramos justo el valor de respaldo que proponemos."},{i:11,c:0,h:"",b:"<h2>1. A partir de tus medidas</h2><p>Según como te quede la prenda en cada contorno estima la medida ideal.</p><br/><h2>2. Directamente sobre la prenda</h2><p>Ubica cada contorno sobre esta y conservando su forma haz la medición.</p>"},{i:12,c:0,h:"Busto",b:"Selecciona 1 ó 2 tamaños de busto que pueda tener la persona que quiera usar este vestido.<br/><br/>No olvides marcar si la tela en el contorno de la Espalda es Rigido o Flexible."},{i:13,c:2,h:"Cintura",b:"Este contorno se ubica en la parte del vestido que esta aproximadamente 3cm por encima del ombligo.<br/><br/>Debes medir de lado a lado por el frente y relacionar el valor multiplicado por 2.<br/><br/>Algunas prendas tienen doble tela, en este caso debes tomar la medida de la tela interior que va sobre el cuerpo."},{i:14,c:0,h:"Cadera",b:"Este contorno se ubica en la parte del vestido que esta sobre la parte más pronunciada de los gluteos.<br/><br/>Debes medir de lado a lado por el frente y relacionar el valor multiplicado por 2.<br/><br/>Algunas prendas tienen doble tela; En este caso debes tomar la medida de la tela interior que va sobre el cuerpo."},{i:15,c:2,h:"Altura",b:"Para facilitar la búsqueda de tu prenda a tus posibles clientes, es importante que nos digas la altura de la persona que ya la ha usado."},{i:16,c:2,h:"Título y Descripción",b:"Cuenta lo mejor de tus prendas. Descríbelas resaltando los detalles del diseño, menciona los componentes o accesorios incorporados que no se notan fácilmente en las fotos y da consejos de uso para que sepan que es justo lo que estaban buscando."},{i:17,c:2,h:"Medidas del vestido",b:"Debes relacionar las medidas ideales que debe tener una persona en cada contorno que aplique según el diseño de la prenda (Espalda, Cintura o Cadera).<br/><br/>Identifica con la prenda en uso en donde se ubica cada uno y haz la medicion poniendola sobre una superficie plana conservando su forma como se mostrara a continuación."},{i:18,c:0,h:"Subir Fotos",b:"Si aún no has subido las fotos de tu prenda podras hacerlo despues, o puedes hacerlo inmediatamente dando click en SUBIR FOTOS.<br/><br/>Si ya has subido las fotos y completaste el registro recibiras un correo de parte de Get2Wear con la informacion que debes conocer para  Alquilar tus prendas de manera exitosa., y entre 4-5 dias podras verla publicada en la plataforma"},{i:19,c:0,h:"Foto Original",b:'Para garantizar la resolución debes seleccionar la foto del archivo original, sin haberla editado o cortado, tal y como fue tomada.<br/><br/>Si la tomaste con el celular puedes subirla directamente o puedes subirla desde tu computador enviándotela al correo en el tamaño original.<br/><br/><a href="#tips-fotos-perfectas">Tips para unas fotos perfectas</a>'},{i:20,c:0,h:"Tips para tomar fotos",b:"<li>Tomalas en un lugar con mucha luz</li><li>Deben hacerse a 4 pasos de distancia</li><li>No deben editarse ni cortarse, para eso es esta herramienta.</li>"},{i:21,c:0,h:"Fotos que enamoran",b:"Hazles sentir la magia que sentiste la primera vez que usaste esta prenda. Tomalas en un lugar bien iluminado y  que contraste con esta."}],d=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var o=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return o.shadowClassForTip=function(e){switch(e%3){case 0:return"shadow-green";case 1:return"shadow-purple";case 2:return"shadow-pink"}},o}return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,t.Component),r(a,[{key:"render",value:function(){var e=this;return console.log("render",this.props.name),n.default.createElement("div",{className:"tips-container"},this.props.tips.map(function(a){return console.log("tip",a),n.default.createElement(i.default,{title:c[a].h,text:c[a].b,shadowClass:e.shadowClassForTip(c[a].c)})}))}}]),a}();a.default=(0,s.connect)(function(e,a){return{tips:e.tips}})(d)}}]);