(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"FirebaseConfig",function(){return n});var n={apiKey:"AIzaSyCQdY2tV8NOy70iTmvpy2AG1aE6Hbzs9rs",authDomain:"react-redux-firebase-1fd83.firebaseapp.com",databaseURL:"https://react-redux-firebase-1fd83.firebaseio.com"}},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(68),o=a.n(i),c=a(6),s=a(12),l=a(70),u=(a(95),{app:[{id:0,name:"Diary",description:"Diary is an App for writing and displaying Diary posts. App was composed entirely from react (no redux) and using css Grids.",github:"https://github.com/Kclaster/personal-journal-app.git",url:"https://kclaster.github.io/personal-journal-app/",language:"react"},{id:1,name:"BackGround Weddings",description:"BackGround Weddings is an up and coming wedding planning business located in NW Arkansas.",github:"https://github.com/Kclaster/background_wedding",url:"https://kclaster.github.io/weddingPlannerSite/",language:"react"},{id:2,name:"Trivimania",description:"Trivimania is a trivia game focusing on the most important thing a man can ponder over, Lord of the Rings.",github:"https://github.com/Kclaster/background_wedding",url:"https://intense-scrubland-29810.herokuapp.com/",language:"react"},{id:3,name:"Giftastic",description:"Giftastic is a giffy API app.",github:"https://github.com/Kclaster/background_wedding",url:"https://intense-scrubland-29810.herokuapp.com/",language:"react"}]}),p={app:[{id:0,name:"Fight Club",description:"A rooster fighting a pikachu? Why not!",github:"https://github.com/Kclaster/background_wedding",url:"https://intense-scrubland-29810.herokuapp.com/",language:"javascript"},{id:1,name:"Word Guess",description:"Word Guess is a new rendition on the game HangMan.",github:"https://github.com/Kclaster/background_wedding",url:"https://intense-scrubland-29810.herokuapp.com/",language:"javascript"},{id:2,name:"Cinimania",description:"Using JQuery, this small app posts top trailers and reviews from youtube for your searched movie.",github:"https://github.com/Kclaster/teamAwsome",url:"https://kclaster.github.io/teamAwsome/",language:"javascript"}]},d={app:[{id:0,name:"Liri",description:"Liri is a small node app that get's specific data from 3 api's upon command.",github:"https://github.com/Kclaster/liri-node-app",language:"node"}]},m=a(3),h=a(4),f=a(7),g=a(5),b=a(8),v=a(71),E=a.n(v),w=a(72),y=a.n(w),k=a(73),N=a.n(k),O=a(74),j=a.n(O),S=a(75),A=a.n(S),C=a(76),P=a.n(C),T=a(77),R=a.n(T),_=a(78),I=a.n(_),x=(a(56),function(e){var t,a=e.app,n=a.id,i=a.description,o=a.name,c=a.github,s=a.url,l=a.language,u=[j.a,E.a,N.a,y.a],p=[A.a,P.a,R.a],d=[I.a];return t="javascript"===l?p[n]:"react"===l?u[n]:d[n],r.a.createElement("div",{id:"card-".concat(n),className:"card"},r.a.createElement("div",{className:"snippet-container"},r.a.createElement("img",{className:"snippet-image",src:t,alt:o}),r.a.createElement("h3",{className:"snippet-header"},o),r.a.createElement("p",{className:"snippet-description"},i)),r.a.createElement("div",{className:"hover"},r.a.createElement("a",{className:"snippet-button 1",href:c},"Visit GitHub"),r.a.createElement("a",{className:"snippet-button 2",href:s},"Visit App")))}),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).nextProperty=function(){var e;e=a.state.app.id===a.state.apps.length-1?0:a.state.app.id+1,a.setState({app:a.props.list.app[e]})},a.prevProperty=function(){var e;e=0===a.state.app.id?a.state.apps.length-1:a.state.app.id-1,a.setState({app:a.props.list.app[e]})},a.state={apps:e.list.app,app:e.list.app[e.start]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.apps,n=t.app;return r.a.createElement("div",{className:"miniscroller"},r.a.createElement("div",{className:"title-div"},r.a.createElement("div",{onClick:function(){return e.prevProperty()},className:"arrow-container left"},r.a.createElement("div",{className:"arrow-left",onClick:function(){return e.prevProperty()}})),r.a.createElement("h1",null,this.props.title),r.a.createElement("div",{onClick:function(){return e.nextProperty()},className:"arrow-container right"},r.a.createElement("div",{className:"arrow-right",onClick:function(){return e.nextProperty()}}))),r.a.createElement("div",{className:"cards-slider active-slide-".concat(n.id)},r.a.createElement("div",{className:"cards-slider-wrapper",style:{transform:"translateX(-".concat(n.id*(100/a.length),"%")}},a.map(function(e){return r.a.createElement(x,{key:e.id,app:e})}))))}}]),t}(r.a.Component),G=(a(96),function(){return r.a.createElement("div",{id:"portfolio",className:"portfolio"},r.a.createElement("div",{id:"2",className:"portfolio-inner-container"},r.a.createElement(D,{start:"1",title:"ReactJS Apps",list:u}),r.a.createElement(D,{start:"1",title:"JavaScript Apps",list:p}),r.a.createElement(D,{start:"0",title:"NodeJS Apps",list:d})))}),M=a(34),W=a(9),H=a(51),K=a.n(H),L=a(79),B=a(52),J=a(80);B.initializeApp(J.FirebaseConfig);var U=B.database().ref(),V=U.child("Potential Clients"),z=(U.child("admin"),a(155),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={fullname:"",message:"",email:"",showMessage:!1},a.handleChange=a.handleChange.bind(Object(W.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(W.a)(a)),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(M.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({fullname:"",message:"",email:"",showMessage:!0}),this.props.addContact(this.state)}},{key:"render",value:function(){return r.a.createElement("div",{id:"contact",className:"akuna"},r.a.createElement("div",{id:"1",className:"contact"},r.a.createElement("div",{className:"title-container"}),r.a.createElement("div",{className:"overal-container"},r.a.createElement("div",{className:"form"},r.a.createElement("form",{id:"reset",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"contact-title-container"},r.a.createElement("h1",{id:"contact-title"},"Contact Me!"),r.a.createElement("h2",{className:this.state.showMessage?"block white":"hide white"},"Thank you for reaching out! I'll be in touch within 24 hours.")),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Name:"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{name:"fullname",type:"text",value:this.state.fullname,onChange:this.handleChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",{className:"label"},"Email:"),r.a.createElement("div",{className:"control"},r.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange}))),r.a.createElement("div",{id:"text-area",className:"field"},r.a.createElement("label",{className:"label"},"Message:"),r.a.createElement("div",{className:"control"},r.a.createElement("textarea",{className:"textarea",name:"message",value:this.state.message,onChange:this.handleChange}))),r.a.createElement("button",{id:"contact-button",className:"submit-btn",type:"submit",value:"Submit"},"Submit"))))))}}]),t}(r.a.Component)),F=Object(c.b)(function(e){return{contact:e.contact}},{addContact:function(e){return function(){var t=Object(L.a)(K.a.mark(function t(a){return K.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:V.push().set(e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}})(z),X=(a(156),a(81)),Q=a.n(X),q=a(82),Y=a.n(q),$=(a(157),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).timer=function(){a.props.iterator<=a.props.string.length&&(a.props.addToParagraph(a.props.string[a.props.iterator]),a.props.addToIterator())},a.underscore=function(){"_"===a.state.underscore?a.setState({underscore:""}):a.setState({underscore:"_"})},a.state={underscore:"",header:!0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.myTimer=setInterval(this.timer,22),this.underTimer=setInterval(this.underscore,250)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myTimer)}},{key:"render",value:function(){var e=this.props.paragraph.join(""),t=this.state.header?"h2":"p";return r.a.createElement("div",null,r.a.createElement(t,{className:"typed about white"},e,this.state.underscore))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t.header!==e.header?{header:e.header}:null}}]),t}(r.a.Component)),Z=Object(c.b)(function(e){return{paragraph:e.addToParagraph,iterator:e.iterator}},{addToParagraph:function(e){return{type:"ADD_TO_PARAGRAPH",payload:e}},addToIterator:function(){return{type:"ITERATOR"}}})($),ee=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).displaymobile=function(){window.innerWidth<=950?a.setState({showMobile:!0}):a.setState({showMobile:!1})},a.showParagraph=function(){setTimeout(function(){this.props.resetParagraph(),this.props.resetIterator(),this.setState({showParagraph:!0})}.bind(Object(W.a)(a)),3e3)},a.transition=function(e){e.preventDefault();var t=e.currentTarget.getAttribute("scroll");document.getElementById(t).scrollIntoView({behavior:"smooth"})},a.state={showParagraph:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.displaymobile(),window.addEventListener("resize",this.displaymobile),this.showParagraph()}},{key:"render",value:function(){var e=this,t=this.state.showMobile;return r.a.createElement("div",{id:"about",className:"overall-container"},r.a.createElement("header",null,r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Kyle Laster"),r.a.createElement("h2",null,"JavaScript Developer")),r.a.createElement("nav",null,r.a.createElement("span",{scroll:"2",onClick:function(t){return e.transition(t)},href:"#portfolio"},"Portfolio"),r.a.createElement("h3",{className:"white"},"/"),r.a.createElement("span",{scroll:"1",onClick:function(t){return e.transition(t)},href:"#contact"},"Contact"))),r.a.createElement("img",{id:"full-pic",src:t?Y.a:Q.a,alt:"coder outdoors"}),r.a.createElement("div",{className:"about-section",style:{width:"".concat(t?"70vw":"55vw")}},r.a.createElement("div",{className:"about-container"},this.state.showParagraph?r.a.createElement(Z,{header:!1,string:"I am a\tfront-end web developer\twith a focus in ReactJS. And I love turning static pages into interactive works of art. If you are looking to build up your developer team or just wanting to design your own website, I am waiting to hear from you below! "}):r.a.createElement(Z,{header:!0,string:"Hi! My Name is Kyle Laster."}),r.a.createElement("button",{scroll:"1",onClick:function(t){return e.transition(t)},href:"#contact",className:"btn",id:"employer"},"Send Me An Email"),r.a.createElement("button",{onClick:function(t){return e.transition(t)},scroll:"2",href:"#portfolio",className:"btn",id:"employer"},"See My Work"))))}}]),t}(r.a.Component),te=Object(c.b)(null,{resetIterator:function(){return{type:"RESET_ITERATOR"}},resetParagraph:function(){return{type:"RESET_PARAGRAPH"}}})(ee),ae=(a(158),a(83)),ne=a.n(ae),re=a(84),ie=a.n(re),oe=(a(159),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.hideSidebar()},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){console.log(this.props.displaySidebar.showSidebar);var e=this.props.displaySidebar.showSidebar?"-95%":"0";return r.a.createElement("div",{style:{transform:"translateX(".concat(e,")")},className:"sidebar-container ".concat((this.props.displaySidebar.showSidebar,null))},r.a.createElement("div",{onClick:this.handleClick,className:"new-arrow"}),r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"profile-pic",src:ne.a,alt:"my profile"}),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:ie.a},r.a.createElement("h3",null,"My Resume")),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/kyle-laster/"},r.a.createElement("h3",null,"LinkedIn")),r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/Kclaster"},r.a.createElement("h3",null,"GitHub")),r.a.createElement("div",{className:"email"},r.a.createElement("h3",null,"Email: kyle.laster@"),r.a.createElement("h3",null,"gmail.com")),r.a.createElement("h3",null,"Phone: (479)220-1856")))}}]),t}(r.a.Component)),ce=Object(c.b)(function(e){return{displaySidebar:e.showSidebar}},{hideSidebar:function(){return{type:"HIDE_SIDEBAR"}}})(oe),se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).renderSideBar=function(){a.props.showSidebar()},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"prof-arrow-container"},r.a.createElement("div",{onClick:this.renderSideBar,className:"arrow"}),r.a.createElement(ce,null))}}]),t}(r.a.Component),le=Object(c.b)(null,{showSidebar:function(){return{type:"SHOW_SIDEBAR"}}})(se),ue=function(){return r.a.createElement("div",null,r.a.createElement(le,null),r.a.createElement(te,null),r.a.createElement(G,null),r.a.createElement(F,null))},pe=a(53),de=a(85),me=Object(s.c)({showSidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"SHOW_SIDEBAR":return Object(pe.a)({},e,{showSidebar:!0});case"HIDE_SIDEBAR":return Object(pe.a)({},e,{showSidebar:!1});default:return e}},addToParagraph:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_PARAGRAPH":return[].concat(Object(de.a)(e),[t.payload]);case"RESET_PARAGRAPH":return e.filter(function(e){return null===e});default:return e}},iterator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"ITERATOR":return e+1;case"RESET_ITERATOR":return 0;default:return e}}}),he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,be=Object(s.e)(me,ge(Object(s.a)(l.a)));o.a.render(r.a.createElement(c.a,{store:be},r.a.createElement(ue,null)),document.querySelector("#root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/portfolio","/service-worker.js");he?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):fe(e)})}}()},56:function(e,t,a){},71:function(e,t,a){e.exports=a.p+"static/media/background.6a804d28.png"},72:function(e,t,a){e.exports=a.p+"static/media/gif.54d6ebba.png"},73:function(e,t,a){e.exports=a.p+"static/media/trivia.39d06317.png"},74:function(e,t,a){e.exports=a.p+"static/media/Diary.03d43748.PNG"},75:function(e,t,a){e.exports=a.p+"static/media/fight.7166aac2.png"},76:function(e,t,a){e.exports=a.p+"static/media/word.f5248384.png"},77:function(e,t,a){e.exports=a.p+"static/media/cinimania.97cbe4d4.png"},78:function(e,t,a){e.exports=a.p+"static/media/liri.f7fc959c.PNG"},80:function(e,t,a){e.exports=a(154)},81:function(e,t,a){e.exports=a.p+"static/media/desk.c4014088.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/vertical2.a71142b7.jpg"},83:function(e,t,a){e.exports=a.p+"static/media/myface.0c7f7e09.jpg"},84:function(e,t,a){e.exports=a.p+"static/media/my-resume.2904c0dc.pdf"},86:function(e,t,a){e.exports=a(160)},95:function(e,t,a){},96:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.dc63f842.chunk.js.map