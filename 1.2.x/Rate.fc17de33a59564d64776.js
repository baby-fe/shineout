(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[34],{121:function(e,t,n){"use strict";var a=n(24),r=n(5),o=n(6),c=n(8),i=n(2),l=n(7),s=n(3),u=n(0),d=n.n(u),m=n(158),h=n(40),f=n(17),p=function(e){if(0===h.a.location.search.indexOf("?example="))h.a.push("".concat(h.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var t=document.getElementById(e);t&&t.scrollIntoView()}};t.a=function(e){return function(t){function n(e){var t;return Object(r.a)(this,n),(t=Object(c.a)(this,Object(i.a)(n).call(this,e))).state={active:"",headings:[]},t.setHeading=t.setHeading.bind(Object(s.a)(Object(s.a)(t))),t.handleScroll=t.handleScroll.bind(Object(s.a)(Object(s.a)(t))),t}return Object(l.a)(n,t),Object(o.a)(n,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop,t=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==t.length){var n=t[0].id;t.forEach(function(t){var a=document.querySelector("#".concat(t.id));a&&a.offsetTop<=e&&(n=t.id)}),this.$willUnmount||this.setState({active:n})}}},{key:"renderNav",value:function(){var e=this,t=this.state,n=t.active,a=t.headings;return d.a.createElement(m.a,{className:Object(f.f)("sticky"),top:50},d.a.createElement("div",{className:Object(f.f)("nav")},a.map(function(t,a){var r=t.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:a,className:Object(f.f)("level-".concat(t.level),n===t.id&&"active"),onClick:p.bind(e,t.id)},r)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(f.f)("_")},d.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}(d.a.Component)}},1266:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(13),c=n(5),i=n(6),l=n(8),s=n(2),u=n(7),d=n(11),m=n.n(d),h=n(27),f=n(42),p=n(15),v=n(9),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).state={hover:0,highlight:-1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"getValue",value:function(){var e=this.state.hover;return 0===e?this.props.value:e}},{key:"getStyle",value:function(){var e=this.props.size;if(e)return{width:e,fontSize:e}}},{key:"getIcon",value:function(e,t,n){var a,o=this.props.repeat,c=this.getValue(),i=c-t;if(Array.isArray(e)?(a=e[o?c-1:t])||(a=e[e.length-1]):a=e,i<=0||i>=1||n)return a;var l={width:"".concat(100*i,"%"),display:"block",overflow:"hidden"};return r.a.createElement("span",{style:l},a)}},{key:"handleClick",value:function(e){var t=this;this.props.onChange(e),this.setState({highlight:e}),this.highlightTimer&&clearTimeout(this.highlightTimer),this.highlightTimer=setTimeout(function(){t.setState({highlight:-1})},300)}},{key:"handleHover",value:function(e){this.setState({hover:e})}},{key:"renderBackground",value:function(){var e=this,t=this.props,n=t.background,a=t.max,o=t.disabled,c=this.getStyle(),i=this.getValue();return r.a.createElement("div",{className:Object(v.v)("background")},Object(f.a)(a).map(function(t){return r.a.createElement("span",{key:t,style:Object.assign({visibility:!o&&i>t?"hidden":"visible"},c)},e.getIcon(n,t,!0))}))}},{key:"renderRate",value:function(){var e=this,t=this.props,n=t.front,a=t.max,o=t.text,c=this.state.highlight,i=this.getValue(),l=this.getStyle();return r.a.createElement("div",{className:Object(v.v)("front")},Object(f.a)(a).map(function(t){return r.a.createElement("span",{key:t,onClick:e.handleClick.bind(e,t+1),onMouseEnter:e.handleHover.bind(e,t+1),onMouseLeave:e.handleHover.bind(e,0),style:l},i>t?e.getIcon(n,t):r.a.createElement("span",null," "),c===t+1&&r.a.createElement("i",{className:Object(v.v)("highlight")},e.getIcon(n,t)))}),r.a.createElement("span",{className:Object(v.v)("text")},o[Math.ceil(i)-1]))}},{key:"renderStatic",value:function(){var e=this,t=this.props,n=t.front,a=t.value,o=t.max,c=t.text,i=this.getStyle();return r.a.createElement("div",{className:Object(v.v)("static")},Object(f.a)(o).map(function(t){return r.a.createElement("span",{key:t,style:i},a>t&&e.getIcon(n,t))}),r.a.createElement("span",{className:Object(v.v)("text")},c[Math.ceil(a)-1]))}},{key:"render",value:function(){var e=m()(Object(v.v)("_"),this.props.className);return r.a.createElement("div",{className:e},this.renderBackground(),this.props.disabled?this.renderStatic():this.renderRate())}}]),t}(h.b);b.defaultProps=Object(o.a)({},p.a,{repeat:!0,max:5,size:20,text:[],value:0});var g=b,y=n(126);t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=Object(y.a)(function(a){return r.a.createElement(g,Object.assign({},n,a,{background:e,front:t||e}))});return a.displayName="ShineoutRate",a}},127:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),c=n(24),i=n(5),l=n(6),s=n(8),u=n(2),d=n(7),m=n(3),h=n(160),f=n.n(h),p=n(36),v=n(17),b=n(25),g=n(161),y=n.n(g),j=(n(162),n(163),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).bindElement=function(e){n.element=e},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;y.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return r.a.createElement("pre",{className:this.props.language||"lang-jsx"},r.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),t}(a.PureComponent));j.defaultProps={language:"lang-jsx"};var O=n(147),x=n(32),E=n(27),k=n(134),R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ready:!1},n.placeholderRef=function(e){n.placeholder=e},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(k.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(k.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,t=this.props,n=t.children,a=t.placeholder;return e?n:r.a.createElement("span",{ref:this.placeholderRef},a)}}]),t}(E.b),w=n(47),S=n(40),C=r.a.createElement("div",{className:Object(v.a)("placeholder")},r.a.createElement(x.a,null)),H=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).setCodeBlockHeight=function(e){n.codeHeight=e},n.bindCodeBlock=function(e){n.codeblock=e},n.state={showcode:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"collapse",value:function(e,t,n){var a=this;this.codeblock.style.height="".concat(e*(t-1),"px"),t>1&&setTimeout(function(){a.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var t=this,n=!this.state.showcode;this.setState({showcode:n},function(){if(n)t.codeblock.style.height="".concat(t.codeHeight,"px");else{var a=t.codeHeight%15;a>0&&t.collapse(a,1,e),t.collapse((t.codeHeight-a)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return r.a.createElement("a",{href:"javascript:;",className:Object(v.a)("toggle"),onClick:this.toggleCode.bind(this,e)},r.a.createElement(w.a,{name:t?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,t=e.component,n=e.id,o=e.name,c=e.rawText,i=this.state.showcode,l=c.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=S.a.location.search;if(0===s.indexOf("?example=")&&(s=s.replace("?example=",""),o.indexOf(s)<0))return null;var u=this.props.title.split("\n"),d=Object(O.a)(u),m=d[0],h=d.slice(1);return m&&(m=m.trim()),r.a.createElement(a.Fragment,null,m&&r.a.createElement("h3",{key:"0",id:n},m),r.a.createElement(R,{placeholder:C},r.a.createElement("div",{className:Object(v.a)("_",i&&"showcode")},r.a.createElement("div",{className:Object(v.a)("body")},Object(a.createElement)(t)),this.props.title.length>0&&r.a.createElement("div",{className:Object(v.a)("desc")},h.map(function(e,t){return r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),r.a.createElement("div",{ref:this.bindCodeBlock,className:Object(v.a)("code")},r.a.createElement(j,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),t}(a.Component);H.defaultProps={rawText:""};var T=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).toggle=function(){n.setState({expanded:!n.state.expanded})},n.state={expanded:!1},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.expanded,n=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=t?"pre":"div";return r.a.createElement("div",{onClick:this.toggle,className:Object(v.e)("console")},r.a.createElement(a,null,n))}}]),t}(a.PureComponent);T.defaultProps={children:[]};var I=T,A=/^<code name="([\w|-]+)" /,F=/^<example name="([\w|-]+)"/,z=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).renderHeading=function(e){var t=e.level,a=e.children,o="".concat(t,"-").concat(a[0]),c="h".concat(t);if("object"==typeof a[0])return r.a.createElement(c,null,a);if(!n.cache[o]){var i="heading-".concat(Object(p.b)());2!==t&&3!==t||n.appendHeading({id:i,level:t,children:a}),n.cache[o]=r.a.createElement(c,{id:i},a)}return n.cache[o]},n.headings=[],n.appendHeading=n.appendHeading.bind(Object(m.a)(Object(m.a)(n))),n.cache={},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?[r.a.createElement(j,{key:"cb",value:t.text})].concat(Object(c.a)(t.log.map(function(e,t){return r.a.createElement(I,{key:t},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var e=this;if(this.cache.examples)return this.cache.examples;var t=this.props.examples;if(!t)return r.a.createElement("div",null);var n=Object(b.a)("示例","Example"),a="heading-".concat(Object(p.b)());return this.appendHeading({id:a,level:2,children:[n]}),this.cache.examples=[r.a.createElement("h2",{key:"h",id:a},n)].concat(Object(c.a)(t.map(function(t,n){if(/\d+-/.test(t.name)){var a="heading-".concat(t.name),c=t.title.split("\n"),i=Object(o.a)(c,1)[0];return e.appendHeading({id:a,level:3,children:[i]}),r.a.createElement(H,Object.assign({key:n,id:a},t,{lazy:n>2}))}}))),this.cache.examples}},{key:"renderExample",value:function(e){var t="example-".concat(e);if(!this.cache[t]){var n=(this.props.examples||[]).find(function(t){return t.name===e});this.cache[t]=n?r.a.createElement(H,n):null}return this.cache[t]}},{key:"render",value:function(){var e=this,t=this.props.source;return this.headings=[],r.a.createElement(f.a,{className:Object(v.e)("_"),source:t,renderers:{code:j,heading:this.renderHeading,html:function(t){var n=t.value;if("<example />"===n)return e.renderExamples();var a=n.match(F);if(a)return e.renderExample(a[1],n.indexOf("noExpand")>=0);if("<br>"===n||"<br />"===n)return r.a.createElement("br",null);var o=n.match(A);return o?e.renderCode(o[1]):null},link:function(e){var t=e.href,n=e.children,a=t.indexOf(!1)?"_blank":void 0;return r.a.createElement("a",{href:t,target:a},n)}}})}}]),t}(a.PureComponent);z.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var N=n(46),B=n(121);n.d(t,"a",function(){return P});var D,V=((D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={source:n.props.source},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(t){e.setState({source:t})})}},{key:"render",value:function(){var e=this.state.source;return e?r.a.createElement(z,Object.assign({},this.props,{source:e})):r.a.createElement(N.a,{style:{minHeight:200}})}}]),t}(a.PureComponent)).defaultProps={loader:void 0,source:void 0},D);t.b=V;function P(e){return Object(B.a)(function(t){return r.a.createElement(V,Object.assign({},t,{loader:e}))})}},130:function(e,t,n){"use strict";var a=n(117);t.a=Object(a.a)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},134:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(145),r=n(36),o={},c=null,i=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var t=e.element.getBoundingClientRect();if(t.bottom<0||t.top>l){var n=Object(r.b)();return o[n]=e,n}return e.render(),null}function u(e){e&&delete o[e]}document.addEventListener("scroll",function(){c&&clearTimeout(c),c=setTimeout(function(){i||(i=!0,Object.keys(o).forEach(function(e){var t=o[e],n=t.element,a=t.render,r=n.getBoundingClientRect();r.bottom<0||r.top>l||(delete o[e],a())}),i=!1),c=null},80)},a.a)},799:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(121),c=n(127),i=n(25),l=n(800),s=n.n(l),u=n(801),d=n.n(u),m=Object(i.a)(s.a,d.a),h=[{name:"01-base",title:Object(i.a)("基本用法 \n Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。","Base \n Rate is a function that creates a new custom Rate component that specifies an icon or text."),component:n(802).default,rawText:n(803)},{name:"02-color",title:Object(i.a)("颜色 \n 在创建组件时设置颜色","Icon color \n Set the color when the component is created."),component:n(804).default,rawText:n(805)},{name:"04-max",title:Object(i.a)("最大值 \n 通过 max 属性设置选项最大值，默认为 5","Max \n Set the maximum value of the option through the max attribute. The default value is 5."),component:n(806).default,rawText:n(807)},{name:"05-size",title:Object(i.a)("大小 \n 通过 size 属性可以设置大小","Size \n Set the size through the size property."),component:n(808).default,rawText:n(809)},{name:"06-text",title:Object(i.a)("附加文字 \n text 属性可以为每个选项附加文字","Text \n Set text property to append text to each item."),component:n(810).default,rawText:n(811)},{name:"07-disabled",title:Object(i.a)("只读 \n 设置 disabled 标示为只读，只读状态下，value可以传入小数","Disabled \n Set disabled to true make it be read-only. When disabled, value can be passed in decimals."),component:n(812).default,rawText:n(813)},{name:"08-face",title:Object(i.a)("分级显示 \n 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value","Array \n You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported."),component:n(814).default,rawText:n(815)},{name:"09-array",title:Object(i.a)("不重复选项 \n 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。","No Repeat \n By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value."),component:n(816).default,rawText:n(817)}];t.default=Object(o.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:m,examples:h}))})},800:function(e,t){e.exports="# Rate *评分*\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | 必填 | 待选项 |\n| front | ReactElement \\| string \\| array | background | 选中项，不填和待选项相同 |\n\n### Rate\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number | | 默认值 |\n| disabled | bool | false | 是否只读 |\n| max | number | 5 | 选项最大值，整数 |\n| onChange | function(d) | | 值改变回调函数 |\n| repeat | bool | true | 为 true 时，显示的选项为当前分值对应选项的复制 |\n| size | number \\| string | 20 | 图标大小 |\n| value | number | 0 | 作为可输入组件时，为整数。只读展示时，可以带小数 |"},801:function(e,t){e.exports="# Rate\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | required | Background item for rate |\n| front | ReactElement \\| string \\| array | background | Front item. If it is not set, use background item |\n\n### Rate\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| defaultValue | number | | Default value |\n| disabled | bool | false | read-only |\n| max | number | 5 | The maximum value of the option, integer |\n| onChange | function(d) | | The callback function when the value is changing |\n| repeat | bool | true | When repeat is true, display item is a copy of the item corresponding to the current value |\n| size | number \\| string | 20 | the size of the icon |\n| value | number | 0 | |"},802:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,null)}},803:function(e,t){e.exports="/**\n * cn - 基本用法\n *    -- Rate 为一个函数，创建一个指定图标或文字的 Rate 组件，供多处复用。\n * en - Base\n *    -- Rate is a function that creates a new custom Rate component that specifies an icon or text.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate />\n  )\n}\n"},804:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"heart-o"}),l=r.a.createElement(c.a,{name:"heart",style:{color:"#ff4d4f"}}),s=Object(o.a)(i,l);t.default=function(){return r.a.createElement(s,{defaultValue:2})}},805:function(e,t){e.exports="/**\n * cn - 颜色\n *    -- 在创建组件时设置颜色\n * en - Icon color\n *    -- Set the color when the component is created.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst heartBg = <FontAwesome name=\"heart-o\" />\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\nconst HeartRate = Rate(heartBg, heart)\n\nexport default function () {\n  return (\n    <HeartRate defaultValue={2} />\n  )\n}\n"},806:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{max:10,defaultValue:3})}},807:function(e,t){e.exports="/**\n * cn - 最大值\n *    -- 通过 max 属性设置选项最大值，默认为 5\n * en - Max\n *    -- Set the maximum value of the option through the max attribute. The default value is 5.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate max={10} defaultValue={3} />\n  )\n}\n"},808:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement("div",null,r.a.createElement(l,{size:14}),r.a.createElement(l,{size:20}),r.a.createElement(l,{size:40}))}},809:function(e,t){e.exports="/**\n * cn - 大小\n *    -- 通过 size 属性可以设置大小\n * en - Size\n *    -- Set the size through the size property.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <div>\n      <StarRate size={14} />\n      <StarRate size={20} />\n      <StarRate size={40} />\n    </div>\n  )\n}\n"},810:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{defaultValue:4,text:["poor","fair","good","very good","excellent"]})}},811:function(e,t){e.exports="/**\n * cn - 附加文字\n *    -- text 属性可以为每个选项附加文字\n * en - Text\n *    -- Set text property to append text to each item.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate defaultValue={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\n  )\n}\n"},812:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=n(130),i=r.a.createElement(c.a,{name:"star"}),l=Object(o.a)(i,i);t.default=function(){return r.a.createElement(l,{value:3.6,disabled:!0})}},813:function(e,t){e.exports="/**\n * cn - 只读\n *    -- 设置 disabled 标示为只读，只读状态下，value可以传入小数\n * en - Disabled\n *    -- Set disabled to true make it be read-only. When disabled, value can be passed in decimals.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate value={3.6} disabled />\n  )\n}\n"},814:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(117),c=n(1266),i=Object(o.a)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),l=r.a.createElement(i,{name:"question"}),s=[r.a.createElement(i,{name:"cry",style:{color:"#003a8c"}}),r.a.createElement(i,{name:"sad",style:{color:"#222222"}}),r.a.createElement(i,{name:"sleeping",style:{color:"#ffa940"}}),r.a.createElement(i,{name:"happy",style:{color:"#fa541c"}}),r.a.createElement(i,{name:"lol",style:{color:"#fa541c"}})],u=Object(c.a)(l,s);t.default=function(){return r.a.createElement(u,{equal:!1,size:40,defaultValue:3})}},815:function(e,t){e.exports="/**\n * cn - 分级显示\n *    -- 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value\n * en - Array\n *    -- You can use arrays to display items with different scores when creating components. In this case, values with decimals are not supported.\n */\nimport React from 'react'\nimport { Rate, Icon } from 'shineout'\n\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\nconst background = <FaceIcon name=\"question\" />\nconst front = [\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\n]\nconst TextRate = Rate(background, front)\n\nexport default function () {\n  return (\n    <TextRate equal={false} size={40} defaultValue={3} />\n  )\n}\n"},816:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(1266),c=["A","B","C","D","E"],i=c.map(function(e){return r.a.createElement("span",{style:{color:"red"}},e)}),l=Object(o.a)(c,i);t.default=function(){return r.a.createElement(l,{repeat:!1,defaultValue:2})}},817:function(e,t){e.exports="/**\n * cn - 不重复选项\n *    -- 默认情况下，会重复显示当前分值对应的选项，设置 repeat 属性为 false 可以按分值显示不同选项。\n * en - No Repeat\n *    -- By default, the item corresponding to the current value is displayed repeatedly. Set repeat property to false to display different item by value.\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\n\nconst text = ['A', 'B', 'C', 'D', 'E']\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\nconst TextRate = Rate(text, front)\n\nexport default function () {\n  return (\n    <TextRate repeat={false} defaultValue={2} />\n  )\n}\n"}}]);