(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n(20),i=n(101),s=n(102);var c=n(408).default,u={fontSize:24,fontWeight:"bold",marginTop:5},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.selectPhoto=function(e){var t=""+e,o=n.state.selectedPhotos;void 0!==o[t]?o[t]=void 0:o[t]=null;var a=0;for(var l in o)o.hasOwnProperty(l)&&void 0!==o[l]&&a++;n.setState({selectedPhotos:o,canSend:a>0})},n.isSelected=function(e){return void 0!==n.state.selectedPhotos[e+""]},n.sendPhotos=function(){n.setState({canSend:!1});var e="";n.props.owner.photos.map(function(t){n.isSelected(t.timestamp)&&(e+=t.timestamp+",")});var t={text:n.props.email+" ("+n.props.submit.code+"): "+e},o={headers:{},queryParams:t};console.log("/admin/telegram/sendtoall",t),n.apigClient.invokeApi({},"/admin/telegram/sendtoall","GET",o,{}).then(function(e){console.log("/admin/telegram/sendtoall",e),1==e.data.status&&alert("Selección enviada!")}).catch(function(e){console.log("error",e),alert("Intentelo de nuevo"),n.setState({checkingEmail:!1})})},n.currencyInput=function(e,t){var n=(0,s.getNumberFrom)(e);return document.getElementById(t).value=(0,s.currency)(n),n},n.state={loading:!0,selectedPhotos:{},canSend:!1},n.apigClient=c.newClient({invokeUrl:"https://w8hcgg7vi8.execute-api.us-east-1.amazonaws.com/dev"}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){console.log("didMount"),this.props.dispatch({type:"tips",payload:{tips:null==this.props.submit?[]:[18]}})}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps",e),null!=e.submit&&this.props.dispatch({type:"tips",payload:{tips:[18]}})}},{key:"render",value:function(){return l.default.createElement("div",{className:"align-center"},l.default.createElement("h1",{style:{marginTop:20,marginBottom:20}},null==this.props.submit?"Enviando...":"¡Descripción del vestido enviada!"),null==this.props.submit?l.default.createElement("div",{style:{textAlign:"center"}},l.default.createElement("img",{src:"https://s3.amazonaws.com/dressapp.public/logos/logo_rotating_medium.gif",alt:""})):l.default.createElement("div",null,l.default.createElement("p",{style:u},"Código de inscripción: ",l.default.createElement("em",{style:{color:"#52CC8C"}},this.props.submit.code)),l.default.createElement("br",null),l.default.createElement("div",{className:"flex-horizontal-nowrap-center"},l.default.createElement("a",{className:"download-button",target:"_blank",href:"https://www.get2wear.com/api/pricing/download?email="+this.props.email+"&code="+this.props.submit.code},"Descargar certificado"),l.default.createElement("span",{style:{marginLeft:20,color:"#be3176"}},"Guarda muy bien este código")),l.default.createElement("div",{className:"flex-horizontal-nowrap-spaced",style:{marginTop:40}},l.default.createElement("div",null,l.default.createElement(r.Link,{to:"/inscripcion/fotos?u="+this.props.email+"&c="+this.props.submit.code},l.default.createElement("button",{className:"align-center green-box"},"Subir",l.default.createElement("br",null),"fotos")),l.default.createElement("br",null),l.default.createElement("br",null),l.default.createElement("a",{href:"#tips-fotos",className:"alter title-tips"},"¡Tips para unas fotos perfectas!")),l.default.createElement("div",null,void 0!==this.props.description&&null!=this.props.description&&l.default.createElement("div",{className:"sizes-box"},l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement("tr",null,l.default.createElement("td",null,this.props.description.title)),l.default.createElement("tr",null,l.default.createElement("td",null,"Marca: ",this.props.description.brand))))),this.state.canSend&&l.default.createElement("div",{style:{marginTop:20}},l.default.createElement("button",{className:"green-button",onClick:this.sendPhotos},"Enviar selección de fotos"))))))}}]),t}();t.default=(0,i.connect)(function(e,t){return{email:e.email,photos:e.photos,submit:e.submit,description:e.description}})(d)}}]);