(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{8696:function(e,t,n){Promise.resolve().then(n.bind(n,3028))},3028:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r,o=n(7437),u=n(2265),c=n(7345),i=function(){let e=(0,c.useStripe)(),t=(0,c.useElements)(),n=async n=>{if(n.preventDefault(),!e||!t)return;let r=await e.confirmPayment({elements:t,confirmParams:{return_url:"http://localhost:3000/success"}});r.error?console.log(r.error.message):"succeeded"===r.paymentIntent.status&&console.log("Payment succeeded!")};return(0,o.jsx)("div",{className:"container bg-slate-100 mt-20",children:(0,o.jsxs)("div",{className:"flex flex-col md:flex-row items-center ",children:[(0,o.jsx)("div",{className:"md:w-1/2",children:(0,o.jsx)("img",{src:"\\logo fam.PNG",alt:"Imagen"})}),(0,o.jsx)("div",{className:"md:w-1/2 md:px-8",children:(0,o.jsxs)("form",{onSubmit:n,children:[(0,o.jsx)(c.PaymentElement,{}),(0,o.jsx)("button",{className:"mt-4 md:mt-0 relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded",disabled:!e,children:"Submit"})]})})]})})},s="https://js.stripe.com/v3",a=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,l=function(){for(var e=document.querySelectorAll('script[src^="'.concat(s,'"]')),t=0;t<e.length;t++){var n=e[t];if(a.test(n.src))return n}return null},p=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(s).concat(t);var r=document.head||document.body;if(!r)throw Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n},f=function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"3.3.0",startTime:t})},d=null,m=null,h=null,y=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return f(r,n),r},v=!1,C=function(){return r||(r=(null!==d?d:(d=new Promise(function(e,t){if("undefined"==typeof window||"undefined"==typeof document){e(null);return}if(window.Stripe,window.Stripe){e(window.Stripe);return}try{var n,r=l();r?r&&null!==h&&null!==m&&(r.removeEventListener("load",h),r.removeEventListener("error",m),null===(n=r.parentNode)||void 0===n||n.removeChild(r),r=p(null)):r=p(null),h=function(){window.Stripe?e(window.Stripe):t(Error("Stripe.js not available"))},m=function(){t(Error("Failed to load Stripe.js"))},r.addEventListener("load",h),r.addEventListener("error",m)}catch(e){t(e);return}})).catch(function(e){return d=null,Promise.reject(e)})).catch(function(e){return r=null,Promise.reject(e)}))};Promise.resolve().then(function(){return C()}).catch(function(e){v||console.warn(e)});let g=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];v=!0;var r=Date.now();return C().then(function(e){return y(e,t,r)})}("pk_test_51PHDLhAFEVP2PI5hLRF1Isl32D7G1WeTWxL4jsBMjEAq56aOR4lsr3fLaMODk4FRyw2yprQrgSKz1bpEUKSuIgAK00MSZjIH8x");var E=function(){let[e,t]=(0,u.useState)("");return(0,u.useEffect)(()=>{fetch("/api/create-payment-intent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:5e3,currency:"usd"})}).then(e=>e.json()).then(e=>t(e.clientSecret))},[]),(0,o.jsx)("div",{children:e&&(0,o.jsx)(c.Elements,{stripe:g,options:{clientSecret:e,appearance:{theme:"stripe"}},children:(0,o.jsx)(i,{})})})}},7345:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){u(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n,r,o=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=o){var u=[],c=!0,i=!1;try{for(o=o.call(e);!(c=(n=o.next()).done)&&(u.push(n.value),!t||u.length!==t);c=!0);}catch(e){i=!0,r=e}finally{try{c||null==o.return||o.return()}finally{if(i)throw r}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var s,a,l,p,f,d={exports:{}};d.exports=(function(){if(f)return p;f=1;var e=l?a:(l=1,a="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");function t(){}function n(){}return n.resetWarningCache=t,p=function(){function r(t,n,r,o,u,c){if(c!==e){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function o(){return r}r.isRequired=r;var u={array:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:t};return u.PropTypes=u,u}})()();var m=(s=d.exports)&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s,h=function(e,n,r){var o=!!r,u=t.useRef(r);t.useEffect(function(){u.current=r},[r]),t.useEffect(function(){if(!o||!e)return function(){};var t=function(){u.current&&u.current.apply(u,arguments)};return e.on(n,t),function(){e.off(n,t)}},[o,n,e,u])},y=function(e){var n=t.useRef(e);return t.useEffect(function(){n.current=e},[e]),n.current},v=function(e){return null!==e&&"object"===o(e)},C="[object Object]",g=function e(t,n){if(!v(t)||!v(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===C;if(o!==(Object.prototype.toString.call(n)===C))return!1;if(!o&&!r)return t===n;var u=Object.keys(t),c=Object.keys(n);if(u.length!==c.length)return!1;for(var i={},s=0;s<u.length;s+=1)i[u[s]]=!0;for(var a=0;a<c.length;a+=1)i[c[a]]=!0;var l=Object.keys(i);return l.length===u.length&&l.every(function(r){return e(t[r],n[r])})},E=function(e,t,n){return v(e)?Object.keys(e).reduce(function(o,c){var i=!v(t)||!g(e[c],t[c]);return n.includes(c)?(i&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):i?r(r({},o||{}),{},u({},c,e[c])):o},null):null},b="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(null===e||v(e)&&"function"==typeof e.elements&&"function"==typeof e.createToken&&"function"==typeof e.createPaymentMethod&&"function"==typeof e.confirmCardPayment)return e;throw Error(t)},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(v(e)&&"function"==typeof e.then)return{tag:"async",stripePromise:Promise.resolve(e).then(function(e){return k(e,t)})};var n=k(e,t);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},j=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.7.0"}),e.registerAppInfo({name:"react-stripe-js",version:"2.7.0",url:"https://stripe.com/docs/stripe-js/react"}))},P=t.createContext(null);P.displayName="ElementsContext";var w=function(e,t){if(!e)throw Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},O=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo(function(){return S(n)},[n]),i=c(t.useState(function(){return{stripe:"sync"===u.tag?u.stripe:null,elements:"sync"===u.tag?u.stripe.elements(r):null}}),2),s=i[0],a=i[1];t.useEffect(function(){var e=!0,t=function(e){a(function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}})};return"async"!==u.tag||s.stripe?"sync"!==u.tag||s.stripe||t(u.stripe):u.stripePromise.then(function(n){n&&e&&t(n)}),function(){e=!1}},[u,s,r]);var l=y(n);t.useEffect(function(){null!==l&&l!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")},[l,n]);var p=y(r);return t.useEffect(function(){if(s.elements){var e=E(r,p,["clientSecret","fonts"]);e&&s.elements.update(e)}},[r,p,s.elements]),t.useEffect(function(){j(s.stripe)},[s.stripe]),t.createElement(P.Provider,{value:s},o)};O.propTypes={stripe:m.any,options:m.object};var x=function(e){return w(t.useContext(P),e)},A=function(e){return(0,e.children)(x("mounts <ElementsConsumer>"))};A.propTypes={children:m.func.isRequired};var N=["on","session"],R=t.createContext(null);R.displayName="CustomCheckoutSdkContext";var _=function(e,t){if(!e)throw Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e},I=t.createContext(null);I.displayName="CustomCheckoutContext";var T=function(e,t){if(!e)return null;e.on,e.session;var n=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,N);return t?r(r({},n),t):r(r({},n),e.session())},L=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),i=c(t.useState(null),2),s=i[0],a=i[1],l=c(t.useState(function(){return{stripe:"sync"===u.tag?u.stripe:null,customCheckoutSdk:null}}),2),p=l[0],f=l[1],d=function(e,t){f(function(n){return n.stripe&&n.customCheckoutSdk?n:{stripe:e,customCheckoutSdk:t}})},m=t.useRef(!1);t.useEffect(function(){var e=!0;return"async"!==u.tag||p.stripe?"sync"===u.tag&&u.stripe&&!m.current&&(m.current=!0,u.stripe.initCustomCheckout(r).then(function(e){e&&(d(u.stripe,e),e.on("change",a))})):u.stripePromise.then(function(t){t&&e&&!m.current&&(m.current=!0,t.initCustomCheckout(r).then(function(e){e&&(d(t,e),e.on("change",a))}))}),function(){e=!1}},[u,p,r,a]);var h=y(n);t.useEffect(function(){null!==h&&h!==n&&console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[h,n]);var C=y(r);t.useEffect(function(){if(p.customCheckoutSdk){!r.clientSecret||v(C)||g(r.clientSecret,C.clientSecret)||console.warn("Unsupported prop change: options.client_secret is not a mutable property.");var e,t,n=null==C?void 0:null===(e=C.elementsOptions)||void 0===e?void 0:e.appearance,o=null==r?void 0:null===(t=r.elementsOptions)||void 0===t?void 0:t.appearance;o&&!g(o,n)&&p.customCheckoutSdk.changeAppearance(o)}},[r,C,p.customCheckoutSdk]),t.useEffect(function(){j(p.stripe)},[p.stripe]);var E=t.useMemo(function(){return T(p.customCheckoutSdk,s)},[p.customCheckoutSdk,s]);return p.customCheckoutSdk?t.createElement(R.Provider,{value:p},t.createElement(I.Provider,{value:E},o)):null};L.propTypes={stripe:m.any,options:m.shape({clientSecret:m.string.isRequired,elementsOptions:m.object}).isRequired};var M=function(e){var n=t.useContext(R),r=t.useContext(P);if(n&&r)throw Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?_(n,e):w(r,e)},B=function(e,n){var r="".concat(e.charAt(0).toUpperCase()+e.slice(1),"Element"),o=n?function(e){M("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,u=n.id,i=n.className,s=n.options,a=void 0===s?{}:s,l=n.onBlur,p=n.onFocus,f=n.onReady,d=n.onChange,m=n.onEscape,v=n.onClick,C=n.onLoadError,g=n.onLoaderStart,b=n.onNetworksChange,k=n.onConfirm,S=n.onCancel,j=n.onShippingAddressChange,P=n.onShippingRateChange,w=M("mounts <".concat(r,">")),O="elements"in w?w.elements:null,x="customCheckoutSdk"in w?w.customCheckoutSdk:null,A=c(t.useState(null),2),N=A[0],R=A[1],_=t.useRef(null),I=t.useRef(null);h(N,"blur",l),h(N,"focus",p),h(N,"escape",m),h(N,"click",v),h(N,"loaderror",C),h(N,"loaderstart",g),h(N,"networkschange",b),h(N,"confirm",k),h(N,"cancel",S),h(N,"shippingaddresschange",j),h(N,"shippingratechange",P),h(N,"change",d),f&&(o="expressCheckout"===e?f:function(){f(N)}),h(N,"ready",o),t.useLayoutEffect(function(){if(null===_.current&&null!==I.current&&(O||x)){var t=null;x?t=x.createElement(e,a):O&&(t=O.create(e,a)),_.current=t,R(t),t&&t.mount(I.current)}},[O,x,a]);var T=y(a);return t.useEffect(function(){if(_.current){var e=E(a,T,["paymentRequest"]);e&&_.current.update(e)}},[a,T]),t.useLayoutEffect(function(){return function(){if(_.current&&"function"==typeof _.current.destroy)try{_.current.destroy(),_.current=null}catch(e){}}},[]),t.createElement("div",{id:u,className:i,ref:I})};return o.propTypes={id:m.string,className:m.string,onChange:m.func,onBlur:m.func,onFocus:m.func,onReady:m.func,onEscape:m.func,onClick:m.func,onLoadError:m.func,onLoaderStart:m.func,onNetworksChange:m.func,onConfirm:m.func,onCancel:m.func,onShippingAddressChange:m.func,onShippingRateChange:m.func,options:m.object},o.displayName=r,o.__elementType=e,o},U="undefined"==typeof window,Y=t.createContext(null);Y.displayName="EmbeddedCheckoutProviderContext";var W=function(){var e=t.useContext(Y);if(!e)throw Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");return e},D=U?function(e){var n=e.id,r=e.className;return W(),t.createElement("div",{id:n,className:r})}:function(e){var n=e.id,r=e.className,o=W().embeddedCheckout,u=t.useRef(!1),c=t.useRef(null);return t.useLayoutEffect(function(){return!u.current&&o&&null!==c.current&&(o.mount(c.current),u.current=!0),function(){if(u.current&&o)try{o.unmount(),u.current=!1}catch(e){}}},[o]),t.createElement("div",{ref:c,id:n,className:r})},q=B("auBankAccount",U),F=B("card",U),H=B("cardNumber",U),K=B("cardExpiry",U),G=B("cardCvc",U),V=B("fpxBank",U),$=B("iban",U),z=B("idealBank",U),J=B("p24Bank",U),Q=B("epsBank",U),Z=B("payment",U),X=B("expressCheckout",U),ee=B("paymentRequestButton",U),et=B("linkAuthentication",U),en=B("address",U),er=B("shippingAddress",U),eo=B("paymentMethodMessaging",U),eu=B("affirmMessage",U),ec=B("afterpayClearpayMessage",U);e.AddressElement=en,e.AffirmMessageElement=eu,e.AfterpayClearpayMessageElement=ec,e.AuBankAccountElement=q,e.CardCvcElement=G,e.CardElement=F,e.CardExpiryElement=K,e.CardNumberElement=H,e.CustomCheckoutProvider=L,e.Elements=O,e.ElementsConsumer=A,e.EmbeddedCheckout=D,e.EmbeddedCheckoutProvider=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo(function(){return S(n,"Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},[n]),i=t.useRef(null),s=t.useRef(null),a=c(t.useState({embeddedCheckout:null}),2),l=a[0],p=a[1];t.useEffect(function(){if(!s.current&&!i.current){var e=function(e){s.current||i.current||(s.current=e,i.current=s.current.initEmbeddedCheckout(r).then(function(e){p({embeddedCheckout:e})}))};"async"===u.tag&&!s.current&&(r.clientSecret||r.fetchClientSecret)?u.stripePromise.then(function(t){t&&e(t)}):"sync"===u.tag&&!s.current&&(r.clientSecret||r.fetchClientSecret)&&e(u.stripe)}},[u,r,l,s]),t.useEffect(function(){return function(){l.embeddedCheckout?(i.current=null,l.embeddedCheckout.destroy()):i.current&&i.current.then(function(){i.current=null,l.embeddedCheckout&&l.embeddedCheckout.destroy()})}},[l.embeddedCheckout]),t.useEffect(function(){j(s)},[s]);var f=y(n);t.useEffect(function(){null!==f&&f!==n&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")},[f,n]);var d=y(r);return t.useEffect(function(){if(null!=d){if(null==r){console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.");return}void 0===r.clientSecret&&void 0===r.fetchClientSecret&&console.warn("Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`."),null!=d.clientSecret&&r.clientSecret!==d.clientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.fetchClientSecret&&r.fetchClientSecret!==d.fetchClientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.onComplete&&r.onComplete!==d.onComplete&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.")}},[d,r]),t.createElement(Y.Provider,{value:l},o)},e.EpsBankElement=Q,e.ExpressCheckoutElement=X,e.FpxBankElement=V,e.IbanElement=$,e.IdealBankElement=z,e.LinkAuthenticationElement=et,e.P24BankElement=J,e.PaymentElement=Z,e.PaymentMethodMessagingElement=eo,e.PaymentRequestButtonElement=ee,e.ShippingAddressElement=er,e.useCustomCheckout=function(){e="calls useCustomCheckout()",_(t.useContext(R),e);var e,n=t.useContext(I);if(!n)throw Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");return n},e.useElements=function(){return x("calls useElements()").elements},e.useStripe=function(){return M("calls useStripe()").stripe}}(t,n(2265))}},function(e){e.O(0,[971,23,744],function(){return e(e.s=8696)}),_N_E=e.O()}]);