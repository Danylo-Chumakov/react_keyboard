(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),r=n.n(s),a=n(4),c=n(5),o=n(7),i=n(6),u=n(1),d=n.n(u),l=n(0),p=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pressKey:null},e.handleKeyPress=function(t){e.setState({pressKey:t.key.toString()})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyPress)}},{key:"render",value:function(){var e=this.state.pressKey;return Object(l.jsx)("div",{children:e?Object(l.jsxs)("p",{children:["The last pressed key is [",e,"]"]}):Object(l.jsx)("p",{children:"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);r.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.db865415.chunk.js.map