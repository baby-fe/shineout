(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[24],{121:function(e,n,t){"use strict";var a=t(24),o=t(5),c=t(6),i=t(8),r=t(2),l=t(7),s=t(3),u=t(0),d=t.n(u),m=t(158),f=t(40),h=t(17),p=function(e){if(0===f.a.location.search.indexOf("?example="))f.a.push("".concat(f.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}};n.a=function(e){return function(n){function t(e){var n;return Object(o.a)(this,t),(n=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={active:"",headings:[]},n.setHeading=n.setHeading.bind(Object(s.a)(Object(s.a)(n))),n.handleScroll=n.handleScroll.bind(Object(s.a)(Object(s.a)(n))),n}return Object(l.a)(t,n),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop,n=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==n.length){var t=n[0].id;n.forEach(function(n){var a=document.querySelector("#".concat(n.id));a&&a.offsetTop<=e&&(t=n.id)}),this.$willUnmount||this.setState({active:t})}}},{key:"renderNav",value:function(){var e=this,n=this.state,t=n.active,a=n.headings;return d.a.createElement(m.a,{className:Object(h.f)("sticky"),top:50},d.a.createElement("div",{className:Object(h.f)("nav")},a.map(function(n,a){var o=n.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:a,className:Object(h.f)("level-".concat(n.level),t===n.id&&"active"),onClick:p.bind(e,n.id)},o)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(h.f)("_")},d.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}(d.a.Component)}},127:function(e,n,t){"use strict";var a=t(0),o=t.n(a),c=t(21),i=t(24),r=t(5),l=t(6),s=t(8),u=t(2),d=t(7),m=t(3),f=t(160),h=t.n(f),p=t(36),g=t(17),y=t(25),v=t(161),b=t.n(v),j=(t(162),t(163),function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(o)))).bindElement=function(e){t.element=e},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;b.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return o.a.createElement("pre",{className:this.props.language||"lang-jsx"},o.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),n}(a.PureComponent));j.defaultProps={language:"lang-jsx"};var O=t(147),E=t(32),w=t(27),x=t(134),k=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(x.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(x.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,a=n.placeholder;return e?t:o.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(w.b),S=t(47),C=t(40),H=o.a.createElement("div",{className:Object(g.a)("placeholder")},o.a.createElement(E.a,null)),I=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"collapse",value:function(e,n,t){var a=this;this.codeblock.style.height="".concat(e*(n-1),"px"),n>1&&setTimeout(function(){a.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var a=n.codeHeight%15;a>0&&n.collapse(a,1,e),n.collapse((n.codeHeight-a)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:Object(g.a)("toggle"),onClick:this.toggleCode.bind(this,e)},o.a.createElement(S.a,{name:n?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,n=e.component,t=e.id,c=e.name,i=e.rawText,r=this.state.showcode,l=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=C.a.location.search;if(0===s.indexOf("?example=")&&(s=s.replace("?example=",""),c.indexOf(s)<0))return null;var u=this.props.title.split("\n"),d=Object(O.a)(u),m=d[0],f=d.slice(1);return m&&(m=m.trim()),o.a.createElement(a.Fragment,null,m&&o.a.createElement("h3",{key:"0",id:t},m),o.a.createElement(k,{placeholder:H},o.a.createElement("div",{className:Object(g.a)("_",r&&"showcode")},o.a.createElement("div",{className:Object(g.a)("body")},Object(a.createElement)(n)),this.props.title.length>0&&o.a.createElement("div",{className:Object(g.a)("desc")},f.map(function(e,n){return o.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:Object(g.a)("code")},o.a.createElement(j,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),n}(a.Component);I.defaultProps={rawText:""};var z=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children,n=this.state.expanded,t=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=n?"pre":"div";return o.a.createElement("div",{onClick:this.toggle,className:Object(g.e)("console")},o.a.createElement(a,null,t))}}]),n}(a.PureComponent);z.defaultProps={children:[]};var F=z,T=/^<code name="([\w|-]+)" /,A=/^<example name="([\w|-]+)"/,R=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).renderHeading=function(e){var n=e.level,a=e.children,c="".concat(n,"-").concat(a[0]),i="h".concat(n);if("object"==typeof a[0])return o.a.createElement(i,null,a);if(!t.cache[c]){var r="heading-".concat(Object(p.b)());2!==n&&3!==n||t.appendHeading({id:r,level:n,children:a}),t.cache[c]=o.a.createElement(i,{id:r},a)}return t.cache[c]},t.headings=[],t.appendHeading=t.appendHeading.bind(Object(m.a)(Object(m.a)(t))),t.cache={},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?[o.a.createElement(j,{key:"cb",value:n.text})].concat(Object(i.a)(n.log.map(function(e,n){return o.a.createElement(F,{key:n},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var e=this;if(this.cache.examples)return this.cache.examples;var n=this.props.examples;if(!n)return o.a.createElement("div",null);var t=Object(y.a)("示例","Example"),a="heading-".concat(Object(p.b)());return this.appendHeading({id:a,level:2,children:[t]}),this.cache.examples=[o.a.createElement("h2",{key:"h",id:a},t)].concat(Object(i.a)(n.map(function(n,t){if(/\d+-/.test(n.name)){var a="heading-".concat(n.name),i=n.title.split("\n"),r=Object(c.a)(i,1)[0];return e.appendHeading({id:a,level:3,children:[r]}),o.a.createElement(I,Object.assign({key:t,id:a},n,{lazy:t>2}))}}))),this.cache.examples}},{key:"renderExample",value:function(e){var n="example-".concat(e);if(!this.cache[n]){var t=(this.props.examples||[]).find(function(n){return n.name===e});this.cache[n]=t?o.a.createElement(I,t):null}return this.cache[n]}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],o.a.createElement(h.a,{className:Object(g.e)("_"),source:n,renderers:{code:j,heading:this.renderHeading,html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var a=t.match(A);if(a)return e.renderExample(a[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return o.a.createElement("br",null);var c=t.match(T);return c?e.renderCode(c[1]):null},link:function(e){var n=e.href,t=e.children,a=n.indexOf(!1)?"_blank":void 0;return o.a.createElement("a",{href:n,target:a},t)}}})}}]),n}(a.PureComponent);R.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var N=t(46),_=t(121);t.d(n,"a",function(){return B});var P,D=((P=function(e){function n(e){var t;return Object(r.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={source:t.props.source},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(R,Object.assign({},this.props,{source:e})):o.a.createElement(N.a,{style:{minHeight:200}})}}]),n}(a.PureComponent)).defaultProps={loader:void 0,source:void 0},P);n.b=D;function B(e){return Object(_.a)(function(n){return o.a.createElement(D,Object.assign({},n,{loader:e}))})}},130:function(e,n,t){"use strict";var a=t(117);n.a=Object(a.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},134:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return u});var a=t(145),o=t(36),c={},i=null,r=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>l){var t=Object(o.b)();return c[t]=e,t}return e.render(),null}function u(e){e&&delete c[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){r||(r=!0,Object.keys(c).forEach(function(e){var n=c[e],t=n.element,a=n.render,o=t.getBoundingClientRect();o.bottom<0||o.top>l||(delete c[e],a())}),r=!1),i=null},80)},a.a)},430:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(121),i=t(127),r=t(25),l=t(431),s=t.n(l),u=t(432),d=t.n(u),m=Object(r.a)(s.a,d.a),f=[{name:"1-awesome",title:Object(r.a)("基本用法 \n 引入一个在线地址（本示例为 font-awesome）创建一个新的 Icon 组件，在需要使用的地方引入。","Base \n Create a new compoennt with url, then use it anywhere."),component:t(433).default,rawText:t(434)},{name:"2-iconfont",title:Object(r.a)("使用 Iconfont \n 可以在 iconfont.cn 定制一个图标，在项目中引入",'Customize Font \n You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>'),component:t(435).default,rawText:t(436)},{name:"3-size",title:Object(r.a)("样式 \n 通过 fontSize 和 type 属性可以便捷的设置大小和颜色，更多样式可以通过 style 属性设置。","Style \n Set fontSize and type to change icon size and color."),component:t(437).default,rawText:t(438)}];n.default=Object(c.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:m,examples:f}))})},431:function(e,n){e.exports="# Icon *图标*\n组件库没有内置图标集，而是提供了一个函数生成一个新的图标组件。<br />\n一个项目内可以创建多个不同名称的图标组件。\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\n函数，返回一个新的组件，一个项目内可以创建多个，但是 fontFamily 不能相同\n\n| 参数 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| url | string |  | 图标css文件地址，使用在线地址，不需要引入到项目中。如果在 link 中已经引用过，可以为空(null) |\n| fontFamily | string | 'iconfont' | font-family 需要和引入的css文件内的font-family一致 |\n| prefix | string | 'icon' | 类名前缀 |\n\n### MyIcon *Icon函数创建的图标组件*\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | string | 无 | 图标 unicode 编码，和 name 二选一 |\n| name | string | '' | 图标类名（去除前缀的部分），值参照具体使用的图标库 |\n| fontSize | string | 无 | 图标大小，和 style.fontSize 相同 |\n| style | object | 无 | 扩展样式，可以用来设定特定的大小和颜色等 |\n| type | string | 'default' | 内置颜色，可选值为 \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},432:function(e,n){e.exports="# Icon\nIcon is  a function to generate a new ReactClass with css path.\n<br />\nMultiple icon components with different names can be created in a project.\n\n<example />\n\n## API\n\n### Icon *function(url, fontFamily, prefix):ReactClass*\nFunction, returns a new component. A project can create more than one, but fontFamily must be the unique.\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| url | string |  | The address of css file of the icon. If it has been introduced in the link tag, it can be empty. |\n| fontFamily | string | 'iconfont' | The font-family needs to be the same as the font-family in the introduced CSS file. |\n| prefix | string | 'icon' | The prefix of the class |\n\n### MyIcon *Component created by the Icon function*\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| children | string | - | The unicode code of the icon. |\n| name | string | '' | The name of the icon class (without prefix). |\n| fontSize | string | - | The size of the icon, same as the style.fontSize. |\n| style | object | - | Extend style. |\n| type | string | 'default' | Built-in color, options: \\['default', 'primary', 'secondary', 'success', 'info', 'warning', 'danger'] |"},433:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(117),i=Object(c.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa"),r={marginRight:20};n.default=function(){return o.a.createElement("div",null,o.a.createElement(i,{style:r,name:"home"}),o.a.createElement(i,{style:r,name:"info",type:"info"}),o.a.createElement(i,{style:r,name:"check",type:"success"}),o.a.createElement(i,{style:r,name:"close",type:"danger"}))}},434:function(e,n){e.exports='/**\n * cn - 基本用法\n *    -- 引入一个在线地址（本示例为 font-awesome）创建一个新的 Icon 组件，在需要使用的地方引入。\n * en - Base\n *    -- Create a new compoennt with url, then use it anywhere.\n */\nimport React from \'react\'\nimport { Icon } from \'shineout\'\n\nconst url = \'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\'\nconst FontAwesome = Icon(url, \'FontAwesome\', \'fa\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <div>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="info" type="info" />\n      <FontAwesome style={margin} name="check" type="success" />\n      <FontAwesome style={margin} name="close" type="danger" />\n    </div>\n  )\n}\n'},435:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(117),i=Object(c.a)("//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css"),r={marginRight:20};n.default=function(){return o.a.createElement("div",null,o.a.createElement(i,{style:r},""),o.a.createElement(i,{style:r,name:"info",type:"info"}),o.a.createElement(i,{style:r,name:"right",type:"success"}),o.a.createElement(i,{style:r,name:"error",type:"danger"}))}},436:function(e,n){e.exports='/**\n * cn - 使用 Iconfont\n *    -- 可以在 iconfont.cn 定制一个图标，在项目中引入\n * en - Customize Font\n *    -- You can customize an icon in <a target="_blank" href="http://iconfont.cn">iconfont.cn</a> or <a target="_blank" href="http://fontastic.me/">fontastic.me</a>\n */\nimport React from \'react\'\nimport { Icon } from \'shineout\'\n\nconst Iconfont = Icon(\'//at.alicdn.com/t/font_550076_uyvw3e8ul8w4gqfr.css\')\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <div>\n      <Iconfont style={margin}>&#xe64e;</Iconfont>\n      <Iconfont style={margin} name="info" type="info" />\n      <Iconfont style={margin} name="right" type="success" />\n      <Iconfont style={margin} name="error" type="danger" />\n    </div>\n  )\n}\n'},437:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(130),i={marginRight:20};n.default=function(){return o.a.createElement("div",null,o.a.createElement(c.a,{style:i,name:"home"}),o.a.createElement(c.a,{style:i,name:"home",type:"info",fontSize:18}),o.a.createElement(c.a,{style:i,name:"home",type:"success",fontSize:"24px"}),o.a.createElement(c.a,{style:{fontSize:30,color:"#f5222d"},name:"home"}))}},438:function(e,n){e.exports='/**\n * cn - 样式\n *    -- 通过 fontSize 和 type 属性可以便捷的设置大小和颜色，更多样式可以通过 style 属性设置。\n * en - Style\n *    -- Set fontSize and type to change icon size and color.\n */\nimport React from \'react\'\nimport FontAwesome from \'./FontAwesome\'\n\nconst margin = { marginRight: 20 }\n\nexport default function () {\n  return (\n    <div>\n      <FontAwesome style={margin} name="home" />\n      <FontAwesome style={margin} name="home" type="info" fontSize={18} />\n      <FontAwesome style={margin} name="home" type="success" fontSize="24px" />\n      <FontAwesome style={{ fontSize: 30, color: \'#f5222d\' }} name="home" />\n    </div>\n  )\n}\n'}}]);