(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1105:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(2),o=f(l),i=a(101),r=f(a(169)),s=f(a(411)),u=a(23),c=f(a(22)),d=a(48),m=f(a(1317)),h=f(a(1318));a(1319);var p=a(1320);function f(e){return e&&e.__esModule?e:{default:e}}a(274);var g=a(1321),v=function(){var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(l,o){try{var i=t[l](o),r=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(r).then(function(e){n("next",e)},function(e){n("throw",e)});e(r)}("next")})}}(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.fixRotation(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),w=a(408).default,E={textAlign:"center"},b={fontSize:18,color:"#61147D",fontWeight:"bold"},y={fontSize:22,color:"#be3176"},C={fontSize:28,color:"#52CC8C"},x=1e3,I=1600;function S(e,t){return e>=x&&t>=I}var k=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.email=null,a.validateEmail=function(){if(null!=a.email&&r.default.isEmail(a.email)){a.setState({checkingEmail:!0});var e={headers:{},queryParams:{email:a.email}};a.apigClient.invokeApi({},"/admin/users/owners/exists","GET",e,{}).then(function(e){if(console.log("/admin/users/owners/exists",e),1==e.data.status){var t=a.state.code;null==t&&(t="NO-CODE");var n=null!=a.email&&null!=t;a.setState({user:a.email,code:t,valid:n,checkingEmail:!1}),c.default.postulate.returningUser(),d.pixel.owners.startPhotoUpload()}else a.setState({user:a.email,checkingEmail:!1}),a.props.dispatch({type:"register",payload:{email:a.email}}),c.default.postulate.needsToRegisterFromUploadPhotos(),d.pixel.owners.startPhotoUpload()}).catch(function(e){console.log("error",e),alert("Intentelo de nuevo"),a.setState({checkingEmail:!1})})}else console.log("email",a.email),alert("No es un correo válido!")},a.onSelectFile=function(e){if(e.target.files&&e.target.files.length>0){var t=new FileReader,n=e.target.files[0],l=!1;t.onloadend=function(){var e=t.result;if(l)return a.setState({file:n,src:e}),void a.calculateOriginalSize(e);l=!0,v([e]).then(function(e){var a=e[0];t.readAsDataURL(a)}).catch(function(e){return console.log("error",e)})},t.readAsDataURL(n)}},a.calculateOriginalSize=function(e){try{var t=new Image,n=a;t.onload=function(){var e={width:this.width>0?this.width:x,height:this.height>0?this.height:I},t={w:x/e.width,h:I/e.height},a=.8*Math.min(1/t.w,1/t.h);t.w=t.w*a*100,t.h=t.h*a*100;var l={x:0,y:0,width:t.w,height:t.h},o=t.w/t.h;console.log("proportions",t),console.log("ratio",o),n.setState({dimension:e,crop:l,ratio:o}),n.onCropComplete(l),console.log("dimension",e),S(e.width,e.height)||n.showQualityTips()},t.src=e}catch(e){a.setState({dimension:{width:x,height:I}})}},a.checkImageSize=function(){return null!=a.state.dimension&&S(a.state.dimension.width,a.state.dimension.height)},a.UPLOAD_URL="https://www.get2wear.com/api/owners/photos/upload",a.handleChange=function(e,t){switch(t){case 300:a.email=e}},a.showQualityTips=function(){window.location.hash="tips-fotos-calidad"},a.onImageLoaded=function(e){console.log("onImageLoaded",e)},a.onCropChange=function(e){var t=a.state,n=t.crop,l=t.ratio,o=Math.abs(e.width-n.width),i=Math.abs(e.height-n.height);e.x<0&&(e.x=0),e.y<0&&(e.y=0),e.x>100&&(e.x=100),e.y>100&&(e.y=100),o>i?(e.x+e.width>100&&(e.width=100-e.x),e.height=e.width/l):(e.y+e.height>100&&(e.height=100-e.y),e.width=e.height*l);var r=n.width-e.width,s=n.height-e.height;e.x+=r/2,e.y+=s/2,a.setState({crop:e})},a.onCropComplete=function(e){console.log("onCropComplete",e);var t=a.state.dimension;a.cropImage({x:t.width*e.x/100,y:t.height*e.y/100,width:t.width*e.width/100,height:t.height*e.height/100})},a.cropImage=function(e){var t=new Image;t.src=a.state.src,(0,p.getCroppedImg)(t,e,"cropped.jpg").then(function(e){var t=new FileReader;t.onloadend=function(){a.setState({croppedImage:t.result,blobImage:e})},t.readAsDataURL(e)}).catch(function(e){return console.log("error",e)})},a.renderLoading=function(){return o.default.createElement("div",{className:"align-center"},o.default.createElement("img",{src:"https://s3.amazonaws.com/dressapp.public/logos/logo_rotating_medium.gif",alt:""}),o.default.createElement("br",null),o.default.createElement("p",{style:E},"Subiendo... Esto puede tardar varios segundos dependiendo del tamaño de la foto y la velocidad de tu Internet."))},a.renderImageBox=function(){var e=a.state,t=e.src,n=e.crop;return o.default.createElement("div",null,a.state.isUploading?a.renderLoading():null!=t&&o.default.createElement("div",null,a.checkImageSize()?null:o.default.createElement("div",null,o.default.createElement("p",{style:C},"¡Esta foto es muy pequeña!"),o.default.createElement("br",null),o.default.createElement("p",null,void 0!==a.state.dimension&&null!=a.state.dimension?"Tu foto mide "+a.state.dimension.width+"x"+a.state.dimension.height+" y el mínimo requerido es "+x+"x"+I:null),o.default.createElement("br",null),o.default.createElement("button",{className:"align-center pink-button",onClick:a.showQualityTips},"¿Por qué no puedo subir esta foto?"),o.default.createElement("br",null),o.default.createElement("br",null)),o.default.createElement("table",{className:"align-center"},o.default.createElement("tr",null,o.default.createElement("td",{className:"align-center",style:b},"Original"),o.default.createElement("td",{className:"align-center",style:b},"Vista previa")),o.default.createElement("tr",null,o.default.createElement("td",{className:"cell-padding"},o.default.createElement("div",{className:"preview-image"},o.default.createElement(h.default,{src:t,crop:n,onImageLoaded:a.onImageLoaded,onComplete:a.onCropComplete,onChange:a.onCropChange}))),o.default.createElement("td",{className:"cell-padding"},o.default.createElement("div",{className:"preview-image bordered-image"},o.default.createElement("img",{src:a.state.croppedImage,width:"100%",height:"100%"})))))))},a.hasValidEmail=function(){return a.props.valid||a.state.valid},a.state={ratio:1,uploadedImages:0,croppedImage:null,file:null,dimension:null,src:null,crop:{x:10,y:10,width:80,height:80},checkingEmail:!1,isRedirected:!1,user:e.email,code:e.code,isUploading:!1,showQualityModal:!1,valid:!1,initialMessage:"Selecciona una imagen"},a.apigClient=w.newClient({invokeUrl:"https://w8hcgg7vi8.execute-api.us-east-1.amazonaws.com/dev"}),self=a,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"componentDidMount",value:function(){}},{key:"uploadPhoto",value:function(e){var t=this,a=this.state,n=a.user,l=a.code,o=a.blobImage;console.log("uploadPhoto("+n+", "+l+")"),null!=n&&void 0!==n||(n="reportaracamilo@notienecorreo.com"),null!=l&&void 0!==l||(l="NO-CODE"),null!=o&&void 0!==o||alert("Parece que no ha sido posible procesar esta imagen, por favor envíala a alquiler@get2wear.com Estamos buscando como resolver el incoveniente."),null==n||null==l||null==o?alert("Faltan datos por completar"):(this.setState({isUploading:!0}),s.default.post(this.UPLOAD_URL).field("user",n).field("code",l).field("ext",(0,m.default)(this.state.file.name)).attach("photo",o).end(function(e,a){e?(console.log("err",e),t.setState({isUploading:!1,initialMessage:"La conexión se detuvo, por favor reportanos el problema a alquiler@get2wear.com"}),alert("Error al intentar subir la foto, intente más tarde")):(console.log("res",a),1==a.body.status?(t.setState({uploadedImages:t.state.uploadedImages+1,isUploading:!1,file:null,src:null,blobImage:null,croppedImage:null,initialMessage:t.state.uploadedImages<2?"Puedes subir otra foto del mismo vestido":"Felicidades!!! completaste el mínimo de 3 fotos"}),d.pixel.owners.completedPhotoUpload(),alert("Foto subida!")):(t.setState({isUploading:!1,initialMessage:"La conexión se detuvo, por favor reportanos el problema a alquiler@get2wear.com"}),alert("La conexión se detuvo, por favor reportanos el problema a alquiler@get2wear.com")))}))}},{key:"_crop",value:function(){this.setState({croppedImage:this.refs.cropper.getCroppedCanvas().toDataURL()})}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{style:{textAlign:"center",marginTop:30}},o.default.createElement("h1",{className:"common-section-title"},"Herramienta para subir fotos"),o.default.createElement("p",{style:b},"¿Quien está registrando la información?"),o.default.createElement("br",null),this.hasValidEmail()?o.default.createElement("p",null,this.state.user):o.default.createElement("div",null,this.state.checkingEmail?o.default.createElement("p",null,"Verificando correo..."):this.state.email?o.default.createElement("p",null,this.state.email):o.default.createElement("div",null,o.default.createElement("input",{id:"owner_user",placeholder:"Correo electrónico",name:"email",type:"text",inputMode:"email",className:"postulate-input",onChange:function(t){return e.handleChange(t.target.value,300)},defaultValue:""}),o.default.createElement("button",{className:"continue",onClick:this.validateEmail},"Iniciar"))),o.default.createElement("div",{className:"flex-horizontal-wrap-center",style:{marginTop:10}},this.hasValidEmail()&&o.default.createElement("div",null,null==this.state.file&&o.default.createElement("div",null,o.default.createElement("br",null),o.default.createElement("p",{style:y},this.state.initialMessage)),o.default.createElement("br",null),o.default.createElement("input",{className:"bordered-style align-center",type:"file",onChange:function(t){return e.onSelectFile(t)}})),this.hasValidEmail()&&!this.state.isUploading&&this.checkImageSize()&&o.default.createElement("button",{className:"green-button button-upload-photo",onClick:function(t){return e.uploadPhoto(t)}},"Subir")),o.default.createElement("div",{style:{marginTop:20}}),this.renderImageBox(),o.default.createElement("div",{style:{marginBottom:20}}))}}]),t}();t.default=(0,i.connect)(function(e,t){var a=u.appStore.user,n=null;null!=a&&(n=a.email);var l=e.code;return void 0!==l&&null!=l||(l="NO-CODE"),{email:n,code:l,user:e.user,owner:e.owner,valid:!1}})(k)},1320:function(e,t,a){"use strict";t.getCroppedImg=function(e,t,a){var n=document.createElement("canvas");return n.width=t.width,n.height=t.height,n.getContext("2d").drawImage(e,t.x,t.y,t.width,t.height,0,0,t.width,t.height),new Promise(function(e,t){n.toBlob(function(t){t.name=a,e(t)},"image/jpeg")})}}}]);