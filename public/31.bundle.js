(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1111:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(2),r=function(e){return e&&e.__esModule?e:{default:e}}(l),o=a(20),i=a(171);a(1337);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.renderForHome=function(){var e=a.state.news;return r.default.createElement("div",null,r.default.createElement("div",{className:"blog-box"},r.default.createElement("br",null),r.default.createElement("div",{className:"caption"},"Nuestro blog de belleza  y cuidado donde encontraras tips y consejos de las marcas aliadas e invitados especiales para que siempre luzcas perfecta."),r.default.createElement("br",null),r.default.createElement("div",{className:"bottom-content"},r.default.createElement(o.Link,{to:"/blog"},r.default.createElement("button",{className:"align-center pink-soft-button blog-button"},"Ver Blog")),r.default.createElement(i.BrowserView,null,r.default.createElement("div",{className:"last-articles"},e.map(function(e){return r.default.createElement("a",{href:e.url,target:"_blank"},r.default.createElement("div",{className:"triangle-wrapper"},r.default.createElement("div",{className:"triangle-white"},r.default.createElement("p",null,e.title)),r.default.createElement("div",{className:"triangle",style:{backgroundImage:"url("+e.img+")"}})))}))))),r.default.createElement("br",null))},a.renderForPartners=function(){return r.default.createElement("div",null,r.default.createElement("div",{className:"blog-box"},r.default.createElement("div",{className:"caption-white"},r.default.createElement("p",null,"Muestra tu expertise, genera contenido y posiciona tu marca entre las consumidoras y en los buscardores web a través de nuestro blog."),r.default.createElement("div",{style:{marginTop:40}}),r.default.createElement("a",{href:"mailto:alquiler@get2wear.com"},r.default.createElement("button",{className:"align-center pink-soft-button blog-button"},"Quiero participar")))),r.default.createElement("br",null))},a.state={news:[{img:"https://goo.gl/BeSyyD",title:"Tips para cuidar mejor tu cabello",url:"https://google.com"},{img:"https://goo.gl/BeSyyD",title:"8 razones por las que debes estar a la moda este verano",url:"https://google.com"}]},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.Component),n(t,[{key:"render",value:function(){switch(this.props.type){case 0:return this.renderForHome();case 2:return this.renderForPartners();default:return r.default.createElement("div",null)}}}]),t}();t.default=c},1281:function(e,t,a){(e.exports=a(13)(!1)).push([e.i,'.blog-box{padding-left:30px;padding-right:30px;margin-left:auto;margin-right:auto;width:90%;background:url("https://s3.amazonaws.com/dressapp.public/structure/backgrounds/blog-teaser.jpg");background-size:cover;background-repeat:no-repeat;background-position:50% 50%}.blog-box .caption{color:#666;background:hsla(0,0%,100%,.4);padding:4px}.blog-box .caption-white{color:#fff;text-align:center;margin:0 10vh;padding-top:40px;font-weight:700}.blog-box .teaser{height:inherit;vertical-align:bottom;margin:0;display:table-cell}.blog-box .teaser:after{content:"";display:block;height:10px}@media screen and (min-device-width:800px){.blog-box{height:20vh;min-height:270px;max-height:320px;max-width:1180px;font-size:1.6em;line-height:1.4em}.blog-box .caption{width:70%}}@media screen and (max-device-width:800px){.blog-box{height:320px;font-size:2.6em}.blog-box .blog-button{font-size:1.3em}}.blog-box .bottom-content{display:flex;flex-direction:row;justify-content:space-between;vertical-align:bottom}.triangle-wrapper{margin-left:10px}@media screen and (min-width:1100px){.triangle,.triangle-white,.triangle-wrapper{width:224px;height:126px;padding-right:70px}.triangle-white{font-size:.7em;line-height:.95em}}@media screen and (max-width:1100px){.triangle,.triangle-white,.triangle-wrapper{width:192px;height:108px;padding-right:80px}.triangle-white{font-size:.6em;line-height:.85em}}.last-articles{display:flex;flex-direction:row;align-content:flex-end}.last-articles a{color:#666;text-decoration:none}.triangle{position:absolute;clip-path:polygon(0 0,100% 0,100% 100%);display:table-cell;vertical-align:bottom}.triangle-white{position:absolute;background:#fff;clip-path:polygon(0 0,0 100%,100% 100%);display:table-cell;display:flex;padding-left:5px;padding-bottom:5px;align-items:flex-end;align-content:left}',""])},1337:function(e,t,a){var n=a(1281);"string"==typeof n&&(n=[[e.i,n,""]]);var l={transform:void 0},r=a(14)(n,l);n.locals&&(e.exports=n.locals),n.locals||e.hot.accept(1281,function(){var t=a(1281);"string"==typeof t&&(t=[[e.i,t,""]]),r(t)}),e.hot.dispose(function(){r()})}}]);