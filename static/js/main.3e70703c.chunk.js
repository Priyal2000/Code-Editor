(this["webpackJsonpcode-editor"]=this["webpackJsonpcode-editor"]||[]).push([[0],{28:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(22),r=c.n(s),i=(c(28),c(3)),o=c.n(i),l=c(7),j=c(5),p=(c(30),c(31),c(32),c(33),c(34),c(23)),d=c(1);function b(e){var t=e.language,c=(e.displayName,e.value),n=e.onChange,s=Object(a.useState)(!0),r=Object(j.a)(s,2);r[0],r[1];return Object(d.jsx)("div",{className:"editor-container",children:Object(d.jsx)(p.Controlled,{onBeforeChange:function(e,t,c){n(c)},value:c,className:"code-mirror-wrapper",options:{lineWrapping:!0,lint:!0,mode:t,lineNumbers:!0}})})}var h=c(6),u=(c(39),c(66),c(46),c(8)),O=c.n(u);c(13);var x=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(j.a)(s,2),i=r[0],p=r[1],u=Object(a.useState)(""),x=Object(j.a)(u,2),m=x[0],v=x[1],f=Object(a.useState)(""),S=Object(j.a)(f,2),g=S[0],y=S[1],_=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()("https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php",{method:"POST",url:"https://cors-anywhere.herokuapp.com/https://pastebin.com/api/api_post.php",headers:{"Content-Type":"application/x-www-form-urlencoded",Referer:"http://pastebin.com"},body:JSON.stringify({api_dev_key:"Eb2QzoySh0PxS3sABUztvcutkOnsL1-q",api_option:"paste",api_paste_name:"Test.html",api_paste_code:"<h1>Hello<h1>",api_paste_format:"html5",api_paste_private:0,api_paste_expire_date:"N"})});case 2:return c=e.sent,e.next=5,c.text();case 5:a=e.sent,console.log(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=setTimeout((function(){y("\n        <html>\n          <body>".concat(c,"</body>\n          <style>").concat(i,"</style>\n          <script>").concat(m,"<\/script>\n        </html>\n      "))}),250);return function(){return clearTimeout(e)}}),[c,i,m]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{class:"navbar",children:[Object(d.jsx)("h1",{children:"CODE EDITOR"}),Object(d.jsx)("button",{onClick:_,children:"Save HTML"}),Object(d.jsx)("button",{children:"Save CSS"}),Object(d.jsx)("button",{children:"Save JS"})]}),Object(d.jsxs)("div",{className:"flex-container",children:[Object(d.jsx)("div",{className:"column",children:Object(d.jsxs)(h.d,{children:[Object(d.jsx)("div",{className:"tabs",children:Object(d.jsxs)(h.b,{children:[Object(d.jsx)(h.a,{children:"HTML"}),Object(d.jsx)(h.a,{children:"CSS"}),Object(d.jsx)(h.a,{children:"Javascript"})]})}),Object(d.jsxs)("div",{className:"top-pane",children:[Object(d.jsx)(h.c,{children:Object(d.jsx)(b,{language:"xml",displayName:"HTML",value:c,onChange:n})}),Object(d.jsx)(h.c,{children:Object(d.jsx)(b,{language:"css",displayName:"CSS",value:i,onChange:p})}),Object(d.jsx)(h.c,{children:Object(d.jsx)(b,{language:"javascript",displayName:"JS",value:m,onChange:v})})]})]})}),Object(d.jsx)("div",{className:"column",children:Object(d.jsxs)("div",{className:"btm-pane",children:[Object(d.jsx)("div",{class:"title",children:"Preview"}),Object(d.jsx)("div",{class:"content",children:Object(d.jsx)("iframe",{srcDoc:g,title:"output",sandbox:"allow-scripts",frameBorder:"0",width:"100%",height:"100%"})})]})})]})]})};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.3e70703c.chunk.js.map