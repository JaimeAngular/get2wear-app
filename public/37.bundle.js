(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{669:function(e,n,t){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}return t.m=e,t.c=n,t.p="",t(0)}([function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),u=t(1),a=d(u),l=d(t(2)),s=d(t(10)),f=d(t(12)),c=d(t(13)),p=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(t(14));function d(e){return e&&e.__esModule?e:{default:e}}var y=["🔙","⏰"],h=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={textLines:[],isDone:!1},t.onTypingDone=function(){t.mounted&&(t.setState({isDone:!0}),t.props.onTypingDone())},t.delayGenerator=function(e,n,r,o){var i=t.props.avgTypingDelay,u=t.props.stdTypingDelay;return t.props.delayGenerator(i,u,{line:e,lineIdx:n,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return p.gaussianRnd(e,n)}})},t.typeLine=function(e,n){if(!t.mounted)return Promise.resolve();var r=e,o=t.props.onLineTyped;return p.isBackspaceElement(e)?(e.props.delay>0&&(t.introducedDelay=e.props.delay),r=String("🔙").repeat(e.props.count)):p.isDelayElement(e)&&(t.introducedDelay=e.props.ms,r="⏰"),new Promise(function(e,i){t.setState({textLines:t.state.textLines.concat([""])},function(){p.eachPromise(r,t.typeCharacter,r,n).then(function(){return o(r,n)}).then(e).catch(i)})})},t.typeCharacter=function(e,n,r,o){if(!t.mounted)return Promise.resolve();var i=t.props.onCharacterTyped;return new Promise(function(u){var a=t.state.textLines.slice();p.sleep(t.introducedDelay).then(function(){t.introducedDelay=null;var l="🔙"===e;if("⏰"===e)u();else{if(l&&o>0){for(var s=o-1,f=a[s],c=s;c>=0&&(!(f.length>0)||y.includes(f[0]));c--)f=a[s=c];a[s]=f.substr(0,f.length-1)}else a[o]+=e;t.setState({textLines:a},function(){var a=t.delayGenerator(r,o,e,n);i(e,n),setTimeout(u,a)})}})})},t.mounted=!1,t.linesToType=[],t.introducedDelay=null,e.children&&(t.linesToType=p.extractTextFromElement(e.children)),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,u.Component),i(n,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,n=e.children,t=e.startDelay;n?t>0&&"undefined"!=typeof window?setTimeout(this.typeAllLines.bind(this),t):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,n){if(n.textLines.length!==this.state.textLines.length)return!0;for(var t=0;t<n.textLines.length;t++){if(this.state.textLines[t]!==n.textLines[t])return!0}return this.state.isDone!==n.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return p.eachPromise(n,this.typeLine).then(function(){return e.onTypingDone()})}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.cursor,r=this.state.isDone,i=p.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+n},i,a.default.createElement(s.default,o({isDone:r},t)))}}]),n}();h.propTypes={children:l.default.node,className:l.default.string,avgTypingDelay:l.default.number,stdTypingDelay:l.default.number,startDelay:l.default.number,cursor:l.default.object,onCharacterTyped:l.default.func,onLineTyped:l.default.func,onTypingDone:l.default.func,delayGenerator:l.default.func},h.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:p.gaussianRnd},n.default=h,h.Backspace=f.default,h.Delay=c.default},function(e,n){e.exports=t(3)},function(e,n,t){e.exports=t(9)()},function(e,n,t){var o=t(4),i=t(5),u=t(6),a=t(7),l=t(8);e.exports=function(e,n){var t="function"==typeof Symbol&&Symbol.iterator,s="@@iterator";var f="<<anonymous>>",c={array:h("array"),bool:h("boolean"),func:h("function"),number:h("number"),object:h("object"),string:h("string"),symbol:h("symbol"),any:y(o.thatReturnsNull),arrayOf:function(e){return y(function(n,t,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=n[t];if(!Array.isArray(u)){var l=m(u);return new d("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an array.")}for(var s=0;s<u.length;s++){var f=e(u,s,r,o,i+"["+s+"]",a);if(f instanceof Error)return f}return null})},element:function(){return y(function(n,t,r,o,i){var u=n[t];if(!e(u)){var a=m(u);return new d("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected a single ReactElement.")}return null})}(),instanceOf:function(e){return y(function(n,t,r,o,i){if(!(n[t]instanceof e)){var u=e.name||f,a=function(e){if(!e.constructor||!e.constructor.name)return f;return e.constructor.name}(n[t]);return new d("Invalid "+o+" `"+i+"` of type `"+a+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null})},node:function(){return y(function(e,n,t,r,o){if(!v(e[n]))return new d("Invalid "+r+" `"+o+"` supplied to `"+t+"`, expected a ReactNode.");return null})}(),objectOf:function(e){return y(function(n,t,r,o,i){if("function"!=typeof e)return new d("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=n[t],l=m(u);if("object"!==l)return new d("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var f=e(u,s,r,o,i+"."+s,a);if(f instanceof Error)return f}return null})},oneOf:function(e){if(!Array.isArray(e))return o.thatReturnsNull;return y(function(n,t,r,o,i){for(var u=n[t],a=0;a<e.length;a++)if(p(u,e[a]))return null;var l=JSON.stringify(e);return new d("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+l+".")})},oneOfType:function(e){if(!Array.isArray(e))return o.thatReturnsNull;for(var n=0;n<e.length;n++){var t=e[n];if("function"!=typeof t)return u(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",g(t),n),o.thatReturnsNull}return y(function(n,t,r,o,i){for(var u=0;u<e.length;u++){var l=e[u];if(null==l(n,t,r,o,i,a))return null}return new d("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")})},shape:function(e){return y(function(n,t,r,o,i){var u=n[t],l=m(u);if("object"!==l)return new d("Invalid "+o+" `"+i+"` of type `"+l+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var f=e[s];if(f){var c=f(u,s,r,o,i+"."+s,a);if(c)return c}}return null})}};function p(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}function d(e){this.message=e,this.stack=""}function y(e){function t(t,r,o,u,l,s,c){(u=u||f,s=s||o,c!==a)&&(n&&i(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[o]?t?null===r[o]?new d("The "+l+" `"+s+"` is marked as required in `"+u+"`, but its value is `null`."):new d("The "+l+" `"+s+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,o,u,l,s)}var r=t.bind(null,!1);return r.isRequired=t.bind(null,!0),r}function h(e){return y(function(n,t,r,o,i,u){var a=n[t];return m(a)!==e?new d("Invalid "+o+" `"+i+"` of type `"+b(a)+"` supplied to `"+r+"`, expected `"+e+"`."):null})}function v(n){switch(void 0===n?"undefined":r(n)){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(v);if(null===n||e(n))return!0;var o=function(e){var n=e&&(t&&e[t]||e[s]);if("function"==typeof n)return n}(n);if(!o)return!1;var i,u=o.call(n);if(o!==n.entries){for(;!(i=u.next()).done;)if(!v(i.value))return!1}else for(;!(i=u.next()).done;){var a=i.value;if(a&&!v(a[1]))return!1}return!0;default:return!1}}function m(e){var n=void 0===e?"undefined":r(e);return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,n){return"symbol"===e||"Symbol"===n["@@toStringTag"]||"function"==typeof Symbol&&n instanceof Symbol}(n,e)?"symbol":n}function b(e){if(void 0===e||null===e)return""+e;var n=m(e);if("object"===n){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return n}function g(e){var n=b(e);switch(n){case"array":case"object":return"an "+n;case"boolean":case"date":case"regexp":return"a "+n;default:return n}}return d.prototype=Error.prototype,c.checkPropTypes=l,c.PropTypes=c,c}},function(e,n){function t(e){return function(){return e}}var r=function(){};r.thatReturns=t,r.thatReturnsFalse=t(!1),r.thatReturnsTrue=t(!0),r.thatReturnsNull=t(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,n){var t=function(e){};e.exports=function(e,n,r,o,i,u,a,l){if(t(n),!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,o,i,u,a,l],c=0;(s=new Error(n.replace(/%s/g,function(){return f[c++]}))).name="Invariant Violation"}throw s.framesToPop=1,s}}},function(e,n,t){var r=t(4);e.exports=r},function(e,n){e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,n,t){e.exports=function(e,n,t,r,o){}},function(e,n,t){var r=t(4),o=t(5),i=t(7);e.exports=function(){function e(e,n,t,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function n(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n};return t.checkPropTypes=r,t.PropTypes=t,t}},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(1),u=l(i),a=l(t(2));function l(e){return e&&e.__esModule?e:{default:e}}t(11);var s=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==(void 0===n?"undefined":r(n))&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t._isReRenderingCursor=!1,t.state={shouldRender:t.props.show},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+(void 0===n?"undefined":r(n)));e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,i.Component),o(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout(function(){return n.setState({shouldRender:!1})},this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,n=e.show,t=e.isDone;n&&(t||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},function(){e.setState({shouldRender:!0},function(){e._isReRenderingCursor=!1})})}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return u.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),n}();s.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},s.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},n.default=s},function(e,n){},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(1)),o=i(t(2));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("noscript",null)};u.componentName="Backspace",u.propTypes={count:o.default.number,delay:o.default.number},u.defaultProps={count:1,delay:0},n.default=u},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0});var r=i(t(1)),o=i(t(2));function i(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("noscript",null)};u.componentName="Delay",u.propTypes={ms:o.default.number.isRequired},n.default=u},function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.sleep=void 0;var r=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(t.push(u.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.gaussianRnd=function(e,n){for(var t=0,r=0;r<12;r++)t+=Math.random();return t-=6,Math.round(t*n)+e},n.eachPromise=function(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),o=2;o<t;o++)r[o-2]=arguments[o];return Array.from(e).reduce(function(e,t,o){return e.then(function(){return n.apply(void 0,[t,o].concat(r))})},Promise.resolve())},n.exclude=i,n.isBackspaceElement=u,n.isDelayElement=a,n.extractTextFromElement=function(e){var n=e?[e]:[],t=[];for(;n.length>0;){var r=n.pop();if(o.default.isValidElement(r))u(r)||a(r)?t.unshift(r):o.default.Children.forEach(r.props.children,function(e){n.push(e)});else if(Array.isArray(r)){var i=!0,l=!1,s=void 0;try{for(var f,c=r[Symbol.iterator]();!(i=(f=c.next()).done);i=!0){var p=f.value;n.push(p)}}catch(e){l=!0,s=e}finally{try{!i&&c.return&&c.return()}finally{if(l)throw s}}}else t.unshift(r)}return t},n.cloneElement=l,n.cloneElementWithSpecifiedText=function(e){var n=e.element,t=e.textLines;if(!n)return;return function e(n,t,i){if(i>=t.length)return[null,i];var s=i;var f=function(n){var o=e(n,t,s),i=r(o,2),u=i[0],a=i[1];return s=a,u};var c=o.default.isValidElement(n)&&!(u(n)||a(n));if(c){var p=o.default.Children.map(n.props.children,f)||[];return[l(n,p),s]}if(Array.isArray(n)){var d=n.map(f);return[d,s]}return[t[s],s+1]}(n,t,0)[0]};var o=function(e){return e&&e.__esModule?e:{default:e}}(t(1));n.sleep=function(e){return new Promise(function(n){return null!=e?setTimeout(n,e):n()})};function i(e,n){var t={};for(var r in e)-1===n.indexOf(r)&&(t[r]=e[r]);return t}function u(e){return e&&e.type&&"Backspace"===e.type.componentName}function a(e){return e&&e.type&&"Delay"===e.type.componentName}function l(e,n){var t=e.type,r=i(e.props,["children"]),u=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+t+"-"+u,o.default.createElement.apply(o.default,[t,r].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(n)))}}])}}]);