(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0zjV":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2Z2ljb24taW5zdGFncmFtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgdmlld0JveD0iMCAwIDU5NS4zIDg0MS45IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1OTUuMyA4NDEuOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE3My42LDE3Mi45aDI0OA0KCWM2OS40LDAsMTI0LDU0LjYsMTI0LDEyNHYyNDhjMCw2OS40LTU0LjYsMTI0LTEyNCwxMjRoLTI0OGMtNjkuNCwwLTEyNC01NC42LTEyNC0xMjR2LTI0OEM0OS42LDIyNy41LDEwNC4yLDE3Mi45LDE3My42LDE3Mi45eiIvPg0KPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0zOTYuOSw0MDYuMQ0KCWM3LjQsNTQuNi0yOS44LDEwNC4yLTg0LjMsMTExLjZjLTU0LjYsNy40LTEwNC4yLTI5LjgtMTExLjYtODQuM2MtNy40LTUyLjEsMjkuOC0xMDQuMiw4NC4zLTExMS42YzkuOS0yLjUsMTkuOC0yLjUsMjkuOCwwDQoJQzM1Ny4yLDMyOS4yLDM4OS40LDM2MS40LDM5Ni45LDQwNi4xeiIvPg0KPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHgxPSI0MzQuMSIgeTE9IjI4NC41IiB4Mj0iNDM0LjEiIHkyPSIyODQuNSIvPg0KPC9zdmc+DQo="},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("sc67"),n("AqHK"),n("pJf4"),n("pS08"),n("R48M");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function m(){u=e(s.map((function(e){return e.props}))),T.canUseDOM?t(u):n&&(u=n(u))}var T=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){s.push(this),m()},c.componentDidUpdate=function(){m()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),m()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(T,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(T,"canUseDOM",l),T}}},"9nFO":function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InN2Z2ljb24tZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgdmlld0JveD0iMCAwIDU5NS4zIDg0MS45IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1OTUuMyA4NDEuOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTIwMy40LDYxNC40DQoJYy0xMjQsMzcuMi0xMjQtNjItMTczLjYtNzQuNCBNMzc3LDY4OC44di05Ni43YzIuNS0yNC44LTcuNC00Ny4xLTIyLjMtNjQuNWM3Ni45LTcuNCwxNTguNy0zNy4yLDE1OC43LTE3My42DQoJYzAtMzQuNy0xMi40LTY3LTM3LjItOTQuM2MxMi40LTI5LjgsOS45LTY0LjUtMi41LTk0LjNjMCwwLTI5LjgtOS45LTk2LjcsMzcuMmMtNTctMTQuOS0xMTYuNi0xNC45LTE3My42LDANCgljLTY3LTQ0LjYtOTYuNy0zNC43LTk2LjctMzQuN2MtMTIuNCwyNy4zLTEyLjQsNjItMi41LDkxLjhDNzkuNCwyODQuNSw2NywzMTkuMyw2NywzNTRjMCwxMzMuOSw4MS45LDE2My43LDE1OC43LDE3My42DQoJYy0xNy40LDE3LjQtMjQuOCwzOS43LTIyLjMsNjQuNXY5Ni43Ii8+DQo8L3N2Zz4NCg=="},Gytx:function(e,t,n){n("n7j8"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!c(u))return!1;var s=e[u],m=t[u];if(!1===(a=n?n.call(r,s,m,u):void 0)||void 0===a&&s!==m)return!1}return!0}},LbRr:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("TJpk");var c=function(e){var t,r;function c(t){var n;return(n=e.call(this,t)||this).handleScroll=function(e){window.pageYOffset>50?n.setState({hasScrolled:!0}):n.setState({hasScrolled:!1})},n.state={hasScrolled:!1},n}r=e,(t=c).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var l=c.prototype;return l.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},l.render=function(){return a.a.createElement("div",{className:this.state.hasScrolled?"Header HeaderScrolled":"Header"},a.a.createElement(o.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"uxpages.com"),a.a.createElement("link",{rel:"canonical",to:"https://uxpages.com"})),a.a.createElement("div",{className:"availability"},a.a.createElement("h6",null,"I am currently not available but feel free to get in touch !",a.a.createElement(i.a,{className:"fat_underline",to:"#contactForm",onClick:"track('Click-contact-project-topbar-index','Click-contact-project-topbar-index')"},"  contact me"))),a.a.createElement("nav",{className:"sidebar-nav"},a.a.createElement(i.a,{className:"menu__item",to:"/"},a.a.createElement("img",{src:n("kadF"),alt:"test"})),a.a.createElement(i.a,{className:"menu__item",to:"#recent_work"},a.a.createElement("span",{className:"menu__item-name"},"case studies")),a.a.createElement(i.a,{className:"menu__item",to:"#skills"},a.a.createElement("span",{className:"menu__item-name"},"capabilities")),a.a.createElement(i.a,{className:"menu__item",to:"#side_project"},a.a.createElement("span",{className:"menu__item-name"},"side project")),a.a.createElement(i.a,{className:"menu__item",to:"#contactForm"},a.a.createElement("span",{className:"menu__item-name"},"contact"))))},c}(a.a.Component);t.a=c},TJpk:function(e,t,n){n("MIFh"),n("wZFJ"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok"),n("LagC"),n("pS08"),n("sc67"),n("R48M"),n("E5k/"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=m(n("q1tI")),o=m(n("17x9")),c=m(n("8+s/")),l=m(n("bmMU")),u=n("v1p5"),s=n("hFT/");function m(e){return e&&e.__esModule?e:{default:e}}function T(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f,p,y,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),I=(f=A,y=p=function(e){function t(){return E(this,t),d(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=T(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=T(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(f,a)},a(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(i.default.Component),p.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},p.defaultProps={defer:!0,encodeSpecialCharacters:!0},p.peek=f.peek,p.rewind=function(){var e=f.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},y);I.renderStatic=I.rewind,t.Helmet=I,t.default=I},"W/9C":function(e,t,n){"use strict";n("pJf4");var r=n("q1tI"),a=n.n(r),i=n("Wbzz");n("YbXK"),n("cFtU"),n("rzGZ"),n("Dq+y"),n("8npG");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),n=Array.from(t).reduce((function(e,t){var n=t[0],r=t[1];return e[n]=r,"email"===n&&(e._replyTo=r),e}),{});return JSON.stringify(n)};document.getElementById("contactForm").addEventListener("submit",(function(n){var r=this;n.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/xwnnlkqm",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Message sent, thank you!",r.reset()}))}))});t.a=function(e){var t;e.siteTitle;return a.a.createElement("div",{className:"footer_bg"},a.a.createElement("div",{className:"row align-center"},a.a.createElement("div",{className:"small-11 columns padding10_top padding5_bottom"},a.a.createElement("h2",{className:""},"That's all, folks ! let's get in touch. "),a.a.createElement("div",{className:"skills_underline_orange"}),a.a.createElement("p",{className:"padding5_top"},"Let's create great experiences and make your project generate more revenue. I am currently NOT available for projects in Europe."),a.a.createElement("p",null,"Get in touch with me by filling the form below. You can also directly  ",a.a.createElement("a",{href:"https://calendly.com/uxpages/30min",target:"_blank",rel:"noopener",className:"link_underlined"}," schedule a call ",a.a.createElement("span",{className:"target_blank"})))),a.a.createElement("div",{className:"small-11 medium-6 columns white border-radius-left-side"},a.a.createElement("form",{action:"https://formspree.io/xwnnlkqm",name:"contactForm",id:"contactForm",method:"post",className:"topBefore padding5_top"},a.a.createElement("label",{for:"email"},a.a.createElement("span",{className:"label-form"},"Leave your e-mail...")),a.a.createElement("input",{className:"_gotcha",type:"text",name:"_gotcha"}),a.a.createElement("input",((t={name:"_replyto",id:"email",type:"email"}).name="Email",t.required=!0,t)),a.a.createElement("label",{className:"label-form padding5_top",for:"message"},a.a.createElement("span",null,"Write your message...")),a.a.createElement("textarea",{id:"message",className:"",name:"message",cols:"1",rows:"6"}),a.a.createElement("input",{id:"send-button",className:"submitBtn",type:"submit",value:"Send"}))),a.a.createElement("div",{className:"small-11 medium-5 columns orange border-radius-right-side"},a.a.createElement(i.a,{to:"mailto:hola@uxpages.com",className:"email_footer"},"hola@uxpages.com"),a.a.createElement("p",null),a.a.createElement(i.a,{to:"#",target:"_blank",rel:"noopener"},a.a.createElement("img",{className:"icon-svg svgicon-instagram",src:n("0zjV"),alt:"uxpages research"})),a.a.createElement(i.a,{to:"https://github.com/Robespra",target:"_blank",rel:"noopener"},a.a.createElement("img",{className:"icon-svg svgicon-github",src:n("9nFO"),alt:"uxpages research"})))),a.a.createElement("div",{className:"bottom-navbar"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row align-center"},a.a.createElement(i.a,{className:"menu__item",to:"#recent_work"},a.a.createElement("span",{className:"menu__item-name"},"case studies")),a.a.createElement(i.a,{className:"menu__item",to:"#skills"},a.a.createElement("span",{className:"menu__item-name"},"capabilities")),a.a.createElement(i.a,{className:"menu__item",to:"#side_project"},a.a.createElement("span",{className:"menu__item-name"},"side project")),a.a.createElement(i.a,{className:"menu__item",to:"#contactForm"},a.a.createElement("span",{className:"menu__item-name"},"contact"))))),a.a.createElement("footer",null,a.a.createElement("div",{className:"row large-unstack align-center"},a.a.createElement("div",{className:"column"},a.a.createElement("small",null,"© 2020 uxpages eirl")))))}},Wbzz:function(e,t,n){"use strict";n("YBKJ");var r=n("q1tI"),a=n.n(r),i=n("+ZDr"),o=n.n(i);n.d(t,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},YBKJ:function(e,t,n){"use strict";var r=n("emib"),a=n("qDzq"),i=n("CCE/"),o=n("TUPI"),c=n("kxs/"),l=n("96qb"),u=n("chL8").f,s=n("Drra").f,m=n("rjfK").f,T=n("EU/P").trim,E=r.Number,d=E,f=E.prototype,p="Number"==i(n("nsRs")(f)),y="trim"in String.prototype,A=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var n,r,a,i=(t=y?t.trim():T(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var o,l=t.slice(2),u=0,s=l.length;u<s;u++)if((o=l.charCodeAt(u))<48||o>a)return NaN;return parseInt(l,r)}}return+t};if(!E(" 0o1")||!E("0b1")||E("+0x1")){E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(p?l((function(){f.valueOf.call(n)})):"Number"!=i(n))?o(new d(A(t)),n,E):A(t)};for(var I,N=n("QPJK")?u(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;N.length>S;S++)a(d,I=N[S])&&!a(E,I)&&m(E,I,s(d,I));E.prototype=f,f.constructor=E,n("IYdN")(r,"Number",E)}},bmMU:function(e,t,n){"use strict";n("pJf4"),n("Ll4R"),n("q8oJ"),n("C9fy"),n("klQ5"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("MIFh");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),m=r(n);if(s&&m){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=m)return!1;var T=t instanceof Date,E=n instanceof Date;if(T!=E)return!1;if(T&&E)return t.getTime()==n.getTime();var d=t instanceof RegExp,f=n instanceof RegExp;if(d!=f)return!1;if(d&&f)return t.toString()==n.toString();var p=a(t);if((l=p.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!i.call(n,p[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=p[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("U6Bt"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("AqHK"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kadF:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhbHF1ZV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEyOS4zIDQxLjciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOS4zIDQxLjciIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSAwIDMwLjk3NzUpIiBmaWxsPSIjMzAzMTM2IiBmb250LWZhbWlseT0iJ0RpZG90JyIgZm9udC1zaXplPSIzNiI+dXhwYWdlczwvdGV4dD4NCjwvc3ZnPg0K"},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},rzlk:function(e,t,n){"use strict";n.r(t);n("E5k/");var r=n("q1tI"),a=n.n(r),i=n("IOVJ");t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},v1p5:function(e,t,n){(function(e){n("wZFJ"),n("HQhv"),n("1dPr"),n("JHok"),n("MIFh"),n("sc67"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("OeI1"),n("AqHK"),n("U6Bt"),n("sC2a"),n("E5k/"),n("m210"),n("4DPX"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n("q1tI")),o=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},m=function(e){var t=p(e,c.TAG_NAMES.TITLE),n=p(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=p(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},T=function(e){return p(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},E=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},d=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},f=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&S("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),l=0;l<i.length;l++){var u=i[l],s=(0,o.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},p=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},y=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){y(e)}),0)}),A=function(e){return clearTimeout(e)},I="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||y:e.requestAnimationFrame||y,N="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,S=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,h=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,m=e.styleTags,T=e.title,E=e.titleAttributes;L(c.TAG_NAMES.BODY,r),L(c.TAG_NAMES.HTML,a),g(T,E);var d={baseTag:v(c.TAG_NAMES.BASE,n),linkTags:v(c.TAG_NAMES.LINK,i),metaTags:v(c.TAG_NAMES.META,o),noscriptTags:v(c.TAG_NAMES.NOSCRIPT,l),scriptTags:v(c.TAG_NAMES.SCRIPT,s),styleTags:v(c.TAG_NAMES.STYLE,m)},f={},p={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(f[e]=n),r.length&&(p[e]=d[e].oldTags)})),t&&t(),u(e,f,p)},M=function(e){return Array.isArray(e)?e.join(""):e},g=function(e,t){void 0!==e&&document.title!==e&&(document.title=M(e)),L(c.TAG_NAMES.TITLE,t)},L=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var m=i.indexOf(u);-1!==m&&i.splice(m,1)}for(var T=i.length-1;T>=0;T--)n.removeAttribute(i[T]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},v=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},C=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=R(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=_(n),i=M(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return R(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&N(b),e.defer?b=I((function(){h(e,(function(){b=null}))})):(h(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,m=e.title,T=void 0===m?"":m,E=e.titleAttributes;return{base:C(c.TAG_NAMES.BASE,t,r),bodyAttributes:C(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(c.ATTRIBUTE_NAMES.HTML,a,r),link:C(c.TAG_NAMES.LINK,i,r),meta:C(c.TAG_NAMES.META,o,r),noscript:C(c.TAG_NAMES.NOSCRIPT,l,r),script:C(c.TAG_NAMES.SCRIPT,u,r),style:C(c.TAG_NAMES.STYLE,s,r),title:C(c.TAG_NAMES.TITLE,{title:T,titleAttributes:E},r)}},t.reducePropsToState=function(e){return{baseTag:d([c.TAG_PROPERTIES.HREF],e),bodyAttributes:E(c.ATTRIBUTE_NAMES.BODY,e),defer:p(e,c.HELMET_PROPS.DEFER),encode:p(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:E(c.ATTRIBUTE_NAMES.HTML,e),linkTags:f(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:f(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:f(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:T(e),scriptTags:f(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:f(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:m(e),titleAttributes:E(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=I,t.warn=S}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=d889f544f34d0eebd23bfe910abb4e314da838d8-f1ac4cb2bb0053200040.js.map