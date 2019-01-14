(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[35],{121:function(e,n,t){"use strict";var r=t(24),a=t(5),o=t(6),i=t(8),s=t(2),l=t(7),c=t(3),u=t(0),m=t.n(u),d=t(158),p=t(40),g=t(17),h=function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}};n.a=function(e){return function(n){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={active:"",headings:[]},n.setHeading=n.setHeading.bind(Object(c.a)(Object(c.a)(n))),n.handleScroll=n.handleScroll.bind(Object(c.a)(Object(c.a)(n))),n}return Object(l.a)(t,n),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(r.a)(this.state.headings),Object(r.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop,n=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==n.length){var t=n[0].id;n.forEach(function(n){var r=document.querySelector("#".concat(n.id));r&&r.offsetTop<=e&&(t=n.id)}),this.$willUnmount||this.setState({active:t})}}},{key:"renderNav",value:function(){var e=this,n=this.state,t=n.active,r=n.headings;return m.a.createElement(d.a,{className:Object(g.f)("sticky"),top:50},m.a.createElement("div",{className:Object(g.f)("nav")},r.map(function(n,r){var a=n.children.filter(function(e){return"string"==typeof e});return m.a.createElement("a",{key:r,className:Object(g.f)("level-".concat(n.level),t===n.id&&"active"),onClick:h.bind(e,n.id)},a)})))}},{key:"render",value:function(){return m.a.createElement("div",{className:Object(g.f)("_")},m.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}(m.a.Component)}},125:function(e,n,t){"use strict";function r(e){return e&&e[0].toUpperCase()+e.slice(1)}function a(e,n){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,t){return"\\"===e.charAt(0)?e.slice(1):null===n[t]||void 0===n[t]?"":n[t]});if("function"==typeof e){var t=e(n);return t===n&&"object"==typeof t&&(t=Object.assign({},n)),t}return""}t.d(n,"a",function(){return r}),t.d(n,"b",function(){return a})},127:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(21),i=t(24),s=t(5),l=t(6),c=t(8),u=t(2),m=t(7),d=t(3),p=t(160),g=t.n(p),h=t(36),f=t(17),b=t(25),v=t(161),y=t.n(v),x=(t(162),t(163),function(e){function n(){var e,t;Object(s.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(a)))).bindElement=function(e){t.element=e},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;y.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return a.a.createElement("pre",{className:this.props.language||"lang-jsx"},a.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),n}(r.PureComponent));x.defaultProps={language:"lang-jsx"};var j=t(147),E=t(32),O=t(27),k=t(134),w=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(k.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(k.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,r=n.placeholder;return e?t:a.a.createElement("span",{ref:this.placeholderRef},r)}}]),n}(O.b),R=t(47),q=t(40),T=a.a.createElement("div",{className:Object(f.a)("placeholder")},a.a.createElement(E.a,null)),C=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height="".concat(e*(n-1),"px"),n>1&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var r=n.codeHeight%15;r>0&&n.collapse(r,1,e),n.collapse((n.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return a.a.createElement("a",{href:"javascript:;",className:Object(f.a)("toggle"),onClick:this.toggleCode.bind(this,e)},a.a.createElement(R.a,{name:n?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,n=e.component,t=e.id,o=e.name,i=e.rawText,s=this.state.showcode,l=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),c=q.a.location.search;if(0===c.indexOf("?example=")&&(c=c.replace("?example=",""),o.indexOf(c)<0))return null;var u=this.props.title.split("\n"),m=Object(j.a)(u),d=m[0],p=m.slice(1);return d&&(d=d.trim()),a.a.createElement(r.Fragment,null,d&&a.a.createElement("h3",{key:"0",id:t},d),a.a.createElement(w,{placeholder:T},a.a.createElement("div",{className:Object(f.a)("_",s&&"showcode")},a.a.createElement("div",{className:Object(f.a)("body")},Object(r.createElement)(n)),this.props.title.length>0&&a.a.createElement("div",{className:Object(f.a)("desc")},p.map(function(e,n){return a.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),a.a.createElement("div",{ref:this.bindCodeBlock,className:Object(f.a)("code")},a.a.createElement(x,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),n}(r.Component);C.defaultProps={rawText:""};var H=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children,n=this.state.expanded,t=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),r=n?"pre":"div";return a.a.createElement("div",{onClick:this.toggle,className:Object(f.e)("console")},a.a.createElement(r,null,t))}}]),n}(r.PureComponent);H.defaultProps={children:[]};var P=H,S=/^<code name="([\w|-]+)" /,D=/^<example name="([\w|-]+)"/,N=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).renderHeading=function(e){var n=e.level,r=e.children,o="".concat(n,"-").concat(r[0]),i="h".concat(n);if("object"==typeof r[0])return a.a.createElement(i,null,r);if(!t.cache[o]){var s="heading-".concat(Object(h.b)());2!==n&&3!==n||t.appendHeading({id:s,level:n,children:r}),t.cache[o]=a.a.createElement(i,{id:s},r)}return t.cache[o]},t.headings=[],t.appendHeading=t.appendHeading.bind(Object(d.a)(Object(d.a)(t))),t.cache={},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?[a.a.createElement(x,{key:"cb",value:n.text})].concat(Object(i.a)(n.log.map(function(e,n){return a.a.createElement(P,{key:n},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var e=this;if(this.cache.examples)return this.cache.examples;var n=this.props.examples;if(!n)return a.a.createElement("div",null);var t=Object(b.a)("示例","Example"),r="heading-".concat(Object(h.b)());return this.appendHeading({id:r,level:2,children:[t]}),this.cache.examples=[a.a.createElement("h2",{key:"h",id:r},t)].concat(Object(i.a)(n.map(function(n,t){if(/\d+-/.test(n.name)){var r="heading-".concat(n.name),i=n.title.split("\n"),s=Object(o.a)(i,1)[0];return e.appendHeading({id:r,level:3,children:[s]}),a.a.createElement(C,Object.assign({key:t,id:r},n,{lazy:t>2}))}}))),this.cache.examples}},{key:"renderExample",value:function(e){var n="example-".concat(e);if(!this.cache[n]){var t=(this.props.examples||[]).find(function(n){return n.name===e});this.cache[n]=t?a.a.createElement(C,t):null}return this.cache[n]}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],a.a.createElement(g.a,{className:Object(f.e)("_"),source:n,renderers:{code:x,heading:this.renderHeading,html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var r=t.match(D);if(r)return e.renderExample(r[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return a.a.createElement("br",null);var o=t.match(S);return o?e.renderCode(o[1]):null},link:function(e){var n=e.href,t=e.children,r=n.indexOf(!1)?"_blank":void 0;return a.a.createElement("a",{href:n,target:r},t)}}})}}]),n}(r.PureComponent);N.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var L=t(46),I=t(121);t.d(n,"a",function(){return U});var B,F=((B=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(u.a)(n).call(this,e))).state={source:t.props.source},t}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?a.a.createElement(N,Object.assign({},this.props,{source:e})):a.a.createElement(L.a,{style:{minHeight:200}})}}]),n}(r.PureComponent)).defaultProps={loader:void 0,source:void 0},B);n.b=F;function U(e){return Object(I.a)(function(n){return a.a.createElement(F,Object.assign({},n,{loader:e}))})}},134:function(e,n,t){"use strict";t.d(n,"a",function(){return c}),t.d(n,"b",function(){return u});var r=t(145),a=t(36),o={},i=null,s=!1,l=window.innerHeight||document.documentElement.clientHeight;function c(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>l){var t=Object(a.b)();return o[t]=e,t}return e.render(),null}function u(e){e&&delete o[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){s||(s=!0,Object.keys(o).forEach(function(e){var n=o[e],t=n.element,r=n.render,a=t.getBoundingClientRect();a.bottom<0||a.top>l||(delete o[e],r())}),s=!1),i=null},80)},r.a)},159:function(e,n,t){"use strict";var r=t(31),a=t(4),o=t(125),i=t(98),s={skipUndefined:!0},l=function(e){var n="array"===e.type?"array":"string";return Object(o.b)(Object(i.a)("rules.required.".concat(n)),e)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.message,t=e.tip;return function(e){return Object(r.b)({required:!0,message:l},Object(r.b)({message:n,tip:t},{message:e},s),s)}},u=t(28),m=function(e){return function(n){var t="";switch(n.type){case"integer":case"number":t="number";break;case"array":t="array";break;default:t="string"}return Object(o.b)(Object(i.a)("rules.length.".concat(e,".").concat(t)),n)}},d={skipUndefined:!0},p={max:m("max"),min:m("min")},g=function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).message;return function(t,a){return"number"!=typeof t?(console.error(new Error('Rule "'.concat(e,'" param expect a number, get ').concat(typeof t))),null):Object(r.b)({message:p[e]},Object(r.b)(Object(u.a)({message:n},e,t),{message:a},d),d)}},h=function(e){var n=e.title?"rules.type":"rules.reg";return Object(o.b)(Object(i.a)(n),e)},f={skipUndefined:!0},b=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.message,a=n.tip;return function(n){return Object(r.b)({type:e,message:h},Object(r.b)({message:t,tip:a},{message:n},f),f)}},v={skipUndefined:!0},y=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).message;return function(n,t){return"string"==typeof n||n instanceof RegExp?Object(r.b)({message:Object(i.a)("rules.reg")},Object(r.b)({message:e,regExp:n},{message:t},v),v):(console.error(new Error('Rule "reg" param expect a RegExp object or a string, get '.concat(typeof n))),null)}};t.d(n,"a",function(){return x});var x="RULE_OBJECT",j=["email","integer","number","url","json","hex","rgb","ipv4"],E=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!Object(a.h)(n))return console.error(new Error("rules expect an object, got ".concat(typeof options))),{};for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];if(0===o.length)return n;var s=o.shift();return Object.keys(s).forEach(function(e){"function"==typeof s[e]&&(s[e]={func:s[e]})}),e.apply(void 0,[Object(r.b)(n,s)].concat(o))};n.b=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=E.apply(void 0,[{}].concat(n)),i={required:c(o.required),max:g("max",o.max),min:g("min",o.min),regExp:y(o.regExp),type:function(e){return b(e,o.type)},length:function(e,n,t){return[i.min(e,t),i.max(n,t)]},range:function(e,n,t){return[i.min(e,t),i.max(n,t)]}};j.forEach(function(e){i[e]=b(e,o[e]||o.type)});var s=Object.keys(i);return Object.keys(o).forEach(function(e){s.includes(e)||(Object(a.h)(o[e])?i[e]=function(n){return Object.assign({},o[e],{args:n})}:console.error(new Error("Rule ".concat(e," is invalid, expect a function or an object."))))}),Object(r.f)(i).forEach(function(e){e.isInnerValidator=!0}),i.$$type=x,i}},200:function(e,n,t){"use strict";var r=t(5),a=t(6),o=window.console,i=function(){function e(){Object(r.a)(this,e),this.logs={default:[]},this.current=this.logs.default}return Object(a.a)(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.map(function(e){return"".concat(function(e){return JSON.stringify(e,function(e,n){return"function"==typeof n?"fn#fn".concat(n.toString(),"fn#fn"):n},2)}(e))});this.current.push(r)}}]),e}();n.a={start:function(){window.console=new i},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=o,e}}},818:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(121),i=t(127),s=t(200),l=t(25),c=t(819),u=t.n(c),m=t(820),d=t.n(m),p=Object(l.a)(u.a,d.a),g=[{name:"locale",title:Object(l.a)("",""),component:t(821).default,rawText:t(822)}];s.a.start(),s.a.setType("custom"),t(823),s.a.setType("max"),t(824),s.a.setType("min"),t(825),s.a.setType("range"),t(826),s.a.setType("regExp"),t(827),s.a.setType("required"),t(828),s.a.setType("type"),t(829);var h=s.a.end(),f={custom:{text:t(830),log:h.custom},max:{text:t(831),log:h.max},min:{text:t(832),log:h.min},range:{text:t(833),log:h.range},regExp:{text:t(834),log:h.regExp},required:{text:t(835),log:h.required},type:{text:t(836),log:h.type}};n.default=Object(o.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:f,source:p,examples:g}))})},819:function(e,n){e.exports="# Rule 表单校验规则\n\n<br />\n\n<br />\n\nShineout Form 内部定义了一套数据校验机制，在 Form 内的组件上通过 rules 属性进行配置。\n\n```\n<Input rules={[...rule]}>\n```\n\nrules 是一个数组，每一条包含一个以下格式的配置。\n\n## 规则\n\nrule 共有 5 种格式，按优先级分别为：\n\n- 函数：完全由调用者控制，理论上可以做所有校验。\n  ```\n  /**\n   value - 当前组件值\n   formdata - 表单内所有组件值 \n   callback - 结果回调\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // 或者返回 Promise，不需要处理 callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n- 必填：根据 required 属性是否为 true 判断，非必填时不需填 false。\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- 长度：根据 min 或者 max 属性判断。\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- 正则表达式：根据 regExp 来判断，可以是 RegExp 对象或 字符串。\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- 类型：内置了一些常用的正则判断，不满足需求时，可以自定义正则表达式或使用 函数校验。\n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n| 属性 | 类型 | 说明 |\n| --- | --- | --- | --- |\n| required | bool | 是否必填 |\n| min | number | 最小值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| max | number | 最大值，type 为 'number' 时，判断数值大小，其他类型判断 length |\n| regExp | string \\| RegExp | 正则表达式 |\n| type | string | 类型校验，可选值为 \\[ 'email', 'json', 'url', 'hex', 'number' ]，不支持的可以自定义 regExp 校验 |\n| message | string | 错误消息。可以使用 '{key}' 符号进行格式化。key 为当前rule的属性。如 {min: 20, message: '最小值为 {min}'}，会格式化为 '最小值为 20'。 |\n\n## Rule\n\n规则的编写比较繁琐，为了简化用户使用，定义了一个Rule函数，生成一个辅助对象，并内置了一些校验规则，供快速开发。\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 初始化\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### 参数\n\nargs 为自定义规则，可为空。\n每个参数为一个对象，key 为返回的 函数名称。每个 value 有两个参数，func 和 message。\n\n#### - func *function(value, formData, callback, props)*\n校验函数\n```\nvalue: 当前 Field 值。\nformData: 当前表单全部数据。\ncallback: 回调函数，func 返回 Promise 时可不调用，否则必须执行。\nprops: 当前 Field 的 props，用来格式化 message。\n```\n\n例：\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\n内置的规则会生成默认校验失败提示文案，如果需要覆盖默认文案，可以在初始化参数中覆盖。\n```\nmessage 为 string 时，返回 message。\nmessage 为 函数时，返回 message(props)，props 为当前 Field props。\n```\n\n例：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\n如果传入多个 args 时，会合并处理\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\n相当于\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n通过这种方式可以把自定义的校验规则和语言包分别引入。\n\n### 返回值\n返回对象包含一组函数生成校验规则。每个函数会根据参数生成一条新的规则。\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// 如果函数没有参数，可以只写函数名称\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## 自定义校验\n<code name=\"custom\" />\n\n\n## 内置校验\n\n### required *function(message)*\n必填校验\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\n最小值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\n最大值校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### len|integer: 必填，最大值\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\n数值范围校验，会根据 Field 的 type 自动判断校验类型为字符串、数字或选项\n#### max|integer: 必填，最大值\n#### min|integer: 必填，最小值\n#### message|string: 可选\n#### 返回值：array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\n#### message|string: 可选\n#### 返回值：object\n内置了常用的类型校验，type可选值为 \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\n正则表达式校验\n#### reg|RegExp|string: 必填\n#### message|string: 可选\n#### 返回值：object\n\n<code name=\"regExp\" />\n\n## 内置文案\n\n当前语言内置校验文案如下，可以通过 setLocale 函数替换\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},820:function(e,n){e.exports="# Rule\n\n<br />\n\n<br />\n\nThe Form implements a set of data validation. That is configured through the rules property on the input component like 'Input, Select, Checkbox, ...'\n\n\n```\n<Input rules={[...rule]}>\n```\n\nrules is an array, each containing a rule with the following format.\n\n- Function:Completely controlled by the caller. you can theoretically do all the checking.\n  ```\n  /**\n   value - Current component value\n   formdata - All values in the form \n   callback - The result of verification\n   */ \n  (value, formdata, callback) => {\n    if (/\\d+/.test(value)) callback(true)\n    else callback(new Error('Password at least has one numeral.'))\n  }\n  // return a Promise，do not call callback\n  (value) => new Promise((resolve, reject) => {\n    if (/\\d+/.test(value)) resolve(true)\n    else reject(new Error('Password at least has one numeral.'))\n  }\n  ```\n\n- Required:Determine whether the required attribute is true or not. false is not required when it is not required.\n  ```\n  { required: true, message: 'Please enter password.' }\n  ```\n\n- Length:Judge by the min or max property.\n  ```\n  { min: 7, message: 'Password must be at least 7 characters.' }\n  ```\n\n- RegExp: Judge by the RegExp. It can be a RegExp object or a string.\n  ```\n  { regExp: /[a-z]+/i, message: 'Password at least has one letter.' }\n  ```\n\n- Type: Some common type validation are built in. \n  ```\n  { type: 'email', message: 'Please enter a valid email.' }\n  ```\n\n\n| Property | Type | Description |\n| --- | --- | --- | --- |\n| required | bool | whether to be required |\n| min | number | The minimum value. When type is 'number', validate the value. Otherwise, validate the value.length.  |\n| max | number | The maximum value. When type is 'number', validate the value. Otherwise, validate the value.length. |\n| regExp | string \\| RegExp | regular expression |\n| type | string | options: \\[ 'email', 'json', 'url', 'hex', 'number' ]. You can customize the regExp validation if it does not support it. |\n| message | string | The error message. You can use the '{key}' symbol to format. Key is a property of the current rule, such as {min: 20, message: 'minimum value is {min}'}, which is formatted as 'minimum value is 20'. |\n\n\n## Rule\n\nRule is a function return an object contains a set of validate function.\n\n```\nimport { Rule } from 'shineout'\n\nconst rule = Rule()\n\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Constructor\n\n```\nconst args = { key: { func, message }, ... }\nconst rule = Rule(args)\n```\n\n### Arguments\n\nThe args is optional.\nEach argument is an object, key is the validate function name. Each value has 2 properties, 'func' and 'message'.\n\n#### - func *function(value, formData, callback, props)*\nvalidate function\n```\nvalue: current field's value.\nformData: all form data.\ncallback: the callback function.\nprops: the props of current field.\n```\n\nexample:\n\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n})\n```\n\n#### - message *string || function(props)*\nBuilt-in rules use default error text, if you want change the default text, set message to overwrite.\n```\nif message type is string, return message.\nif message type is function，retrun message(props)，props is field's props.\n```\n\nexample：\n\n```\nconst rule = Rule({\n  required: {\n    message: (props) => `The field ${props.title} is required.`\n  },\n  email: {\n    message: 'Email is invalid.'\n  }\n})\n```\n\nMultiple arguments will be merged\n```\nconst funcs = {\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    }\n  }\n}\nconst messages = {\n  customRequired: {\n    message: 'The field is required.'\n  }\n}\nconst rule = Rule(funcs, messages)\n```\nequivalent of\n```\nconst rule = Rule({\n  customRequired: {\n    func: (value, formData, callback, props) => {\n      callback(!!value ? true : new Error(props.title + ' is required.'))\n    },\n    message: 'The field is required.'\n  }\n})\n```\n\n### Return\n\n```\nconst rule = Rule()\n\n<Input rules={[rule.required(), rule.min(1)]}>\n// if the function has no argument, you can use it with out parentheses.\n<Input rules={[rule.required, rule.min(1)]}>\n```\n\n## Custom Validator\n<code name=\"custom\" />\n\n\n## Built-in Validator\n\n### required *function(message)*\n#### message|string: optional\n#### return: object\n\n<code name=\"required\" />\n\n### min *function(len, message)*\nMinimum check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### retrun: object\n\n<code name=\"min\" />\n\n### max *function(len, message)*\nMax check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### len|integer: required\n#### message|string: optional\n#### return: object\n\n<code name=\"max\" />\n\n### range *function(min, max, message)*\nRange check, automatically determines whether the check type is a string, number, or option base on the field type.\n#### min|integer: required\n#### max|integer: required\n#### message|string: optional\n#### return: array\n\n<code name=\"range\" />\n\n### type *\\[type](message)*\nType check, one of \\['email', 'integer', 'number', 'url', 'json', 'hex', 'rgb', 'ipv4']\n#### message|string: optional\n#### return: object\n\n<code name=\"type\" />\n\n### regExp *regExp(reg, message)*\nRegular expression check\n#### reg|RegExp|string: required\n#### message|string: optional\n#### return: object\n\n<code name=\"regExp\" />\n\n## Built-in Text\n\nThe current built-in validation text as follows, which can be replaced by the setLocale function\n\n```\nimport { setLocale } from 'shineout'\nsetLocale({\n  rules: {\n    required: ...\n    type: ...\n  }\n})\n```\n\n<example name=\"locale\" />"},821:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(98);n.default=function(){return a.a.createElement("pre",null,JSON.stringify(Object(o.a)("rules"),null,2))}},822:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function () {\n  return <pre>{JSON.stringify(getLocale('rules'), null, 2)}</pre>\n}\n"},823:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)({isExisted:{func:function(e,n,t,r){n.list.includes(e)?t(new Error(r.message.replace("{title}",r.title))):t(!0)},message:"{title} is existed."}});console.log(a.isExisted())},824:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.max(100)),console.log(a.max(100,"Nubmer must less than 100."))},825:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.min(1)),console.log(a.min(1,"At least select one option."))},826:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.range(1,100)),console.log(a.range(1,100,"Nubmer must between 1 - 100."))},827:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.regExp("^[\\d\\s ().-]+$")),console.log(a.regExp("^[\\d\\s ().-]+$","Please enter a valid tel."))},828:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.required("something wrong."));var o=Object(r.b)({required:{message:"init message."}});console.log(o.required())},829:function(e,n,t){"use strict";t.r(n);var r=t(159),a=Object(r.b)();console.log(a.email()),console.log(a.email("Email is invalid.")),console.log(a.integer("Please enter a valid age.")),console.log(a.number("Please enter a valid price.")),console.log(a.url("The url is not valid.")),console.log(a.hex("The color is not valid."))},830:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule({\n  isExisted: {\n    func: (value, formData, callback, props) => {\n      if (formData.list.includes(value)) {\n        callback(new Error(props.message.replace('{title}', props.title)))\n      } else {\n        callback(true)\n      }\n    },\n    message: '{title} is existed.',\n  },\n})\nconsole.log(rule.isExisted())\n"},831:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.max(100))\nconsole.log(rule.max(100, 'Nubmer must less than 100.'))\n"},832:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.min(1))\nconsole.log(rule.min(1, 'At least select one option.'))\n"},833:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.range(1, 100))\nconsole.log(rule.range(1, 100, 'Nubmer must between 1 - 100.'))\n"},834:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$'))\nconsole.log(rule.regExp('^[\\\\d\\\\s ().-]+$', 'Please enter a valid tel.'))\n"},835:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.required('something wrong.'))\n\nconst rule2 = Rule({\n  required: {\n    message: 'init message.',\n  },\n})\nconsole.log(rule2.required())\n"},836:function(e,n){e.exports="import { Rule } from 'shineout'\n\nconst rule = Rule()\nconsole.log(rule.email())\nconsole.log(rule.email('Email is invalid.'))\nconsole.log(rule.integer('Please enter a valid age.'))\nconsole.log(rule.number('Please enter a valid price.'))\nconsole.log(rule.url('The url is not valid.'))\nconsole.log(rule.hex('The color is not valid.'))\n"}}]);