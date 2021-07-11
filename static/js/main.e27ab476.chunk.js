(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(308)},307:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),c=a.n(s),l=a(25),m=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?r.a.createElement("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):r.a.createElement("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"}},t.text)},i=function(e){var t=e.lastMessage,a=e.message,n=!t||t.sender.username!==a.sender.username;return r.a.createElement("div",{className:"message-row"},n&&r.a.createElement("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?r.a.createElement("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):r.a.createElement("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"}},a.text))},o=a(8),u=a(310),d=a(311),p=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],c=a[1],m=e.chatId,i=e.creds,p=function(e){e.preventDefault();var t=s.trim();t.length>0&&Object(l.s)(i,m,{text:t}),c("")};return r.a.createElement("form",{className:"message-form",onSubmit:p},r.a.createElement("input",{className:"message-input",placeholder:"Send a message...",value:s,onChange:function(t){c(t.target.value),Object(l.o)(e,m)},onSubmit:p}),r.a.createElement("label",{htmlFor:"upload-button"},r.a.createElement("span",{className:"image-button"},r.a.createElement(u.a,{className:"picture-icon"}))),r.a.createElement("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.s)(i,m,{files:e.target.files,text:""})}.bind(void 0)}),r.a.createElement("button",{type:"submit",className:"send-button"},r.a.createElement(d.a,{className:"send-icon"})))},g=function(e){var t=e.chats,a=e.activeChat,n=e.userName,s=e.messages,c=t&&t[a];return c?r.a.createElement("div",{className:"chat-feed"},r.a.createElement("div",{className:"chat-title-container"},r.a.createElement("div",{className:"chat-title"},c.title),r.a.createElement("div",{className:"chat-subtitle"},c.people.map(function(e){return" ".concat(e.person.username)}))),function(){var e=Object.keys(s);return e.map(function(t,a){var l=s[t],o=0===a?null:e[a-1],u=n===l.sender.username;return r.a.createElement("div",{key:"msg_".concat(a),style:{width:"100%"}},r.a.createElement("div",{className:"message-block"},u?r.a.createElement(m,{message:l}):r.a.createElement(i,{message:l,lastMessage:s[o]})),r.a.createElement("div",{className:"read-receipts",style:{marginRight:u?"18px":"0px",marginLeft:u?"0px":"68px"}},function(e,t){return c.people.map(function(a,n){return a.last_read===e.id&&r.a.createElement("div",{key:"read_".concat(n),className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}})})}(l,u)))})}(),r.a.createElement("div",{style:{height:"100px"}}),r.a.createElement("div",{className:"message-form-container"},r.a.createElement(p,Object.assign({},e,{chatId:a})))):r.a.createElement("div",null)},f=a(14),h=a.n(f),v=a(20),E=a(4),b=a.n(E),N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),m=l[0],i=l[1],u=Object(n.useState)(""),d=Object(o.a)(u,2),p=d[0],g=d[1],f=function(){var e=Object(v.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={"Project-ID":"d322e742-01f2-4105-bb8f-1e070a57dfc2","User-Name":a,"User-Secret":m},e.prev=2,e.next=5,b.a.get("https://api.chatengine.io/chats",{headers:n});case 5:localStorage.setItem("username",a),localStorage.setItem("password",m),window.location.reload(),g(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),g("Oops, incorrect credentials.");case 14:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form"},r.a.createElement("h1",{className:"title"},"Chat Application"),r.a.createElement("form",{onSubmit:f},r.a.createElement("input",{type:"text",value:a,onChange:function(e){return s(e.target.value)},className:"input",placeholder:"Username",required:!0}),r.a.createElement("input",{type:"password",value:m,onChange:function(e){return i(e.target.value)},className:"input",placeholder:"Password",required:!0}),r.a.createElement("div",{align:"center"},r.a.createElement("button",{type:"submit",className:"button"},r.a.createElement("span",null,"Start chatting")))),r.a.createElement("h1",null,p)))},y=(a(307),function(){return localStorage.getItem("username")?r.a.createElement(l.d,{height:"100vh",projectID:"d322e742-01f2-4105-bb8f-1e070a57dfc2",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return r.a.createElement(g,e)},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):r.a.createElement(N,null)});c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.e27ab476.chunk.js.map