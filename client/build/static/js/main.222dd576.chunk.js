(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},150:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"login",function(){return xe}),a.d(n,"loginById",function(){return Ie}),a.d(n,"logout",function(){return Me}),a.d(n,"fetchGames",function(){return Te});var s=a(0),r=a.n(s),o=a(49),i=a.n(o),c=a(14),l=a(33),u=a(66),m=(a(78),a(67)),d=a.n(m),h=a(6),p=a(7),f=a(9),g=a(8),y=a(10),v=a(159),b=a(160),w=a(2),E=a(16),k=a(5),j=a.n(k),O=a(15),S=a(22),C=a.n(S),N=a(26),x=a.n(N),I=a(27),M=a.n(I),T=a(23),P=a.n(T),A=a(20),B=a.n(A),D=a(21),G=a.n(D),L=a(28),z=a.n(L),F=a(29),H=a.n(F),R=a(35),q=a.n(R),Q=a(30),Y=a.n(Q),W=a(34),_=a.n(W),U=a(36),J=a.n(U),K=a(37),V=a.n(K),X=a(38),Z=a.n(X),$=a(42),ee=a.n($),te=a(52),ae=a.n(te),ne=a(43),se=a.n(ne),re=a(53),oe=a.n(re),ie=a(54),ce=a.n(ie),le=a(55),ue=a.n(le),me=a(44),de=a.n(me),he=[{name:"C",sound:C.a},{name:"D",sound:x.a},{name:"E",sound:M.a},{name:"F",sound:P.a},{name:"G",sound:B.a},{name:"A",sound:G.a},{name:"B",sound:z.a},{name:"C",sound:H.a},{name:"D",sound:q.a},{name:"E",sound:Y.a},{name:"F",sound:_.a},{name:"G",sound:J.a},{name:"A",sound:V.a},{name:"B",sound:Z.a},{name:"C",sound:ee.a},{name:"D",sound:ae.a},{name:"E",sound:se.a},{name:"F",sound:oe.a},{name:"G",sound:ce.a},{name:"A",sound:ue.a},{name:"B",sound:de.a}],pe=[{name:"C",sound:C.a},{name:"D",sound:x.a},{name:"E",sound:M.a},{name:"F",sound:P.a},{name:"G",sound:B.a},{name:"A",sound:G.a},{name:"B",sound:z.a},{name:"C",sound:H.a},{name:"D",sound:q.a},{name:"E",sound:Y.a},{name:"F",sound:_.a},{name:"G",sound:J.a},{name:"A",sound:V.a},{name:"B",sound:Z.a}],fe={c3:[{name:"C",sound:C.a},{name:"D",sound:x.a},{name:"E",sound:M.a},{name:"F",sound:P.a},{name:"G",sound:B.a},{name:"A",sound:G.a},{name:"B",sound:z.a}],c4:[{name:"C",sound:H.a},{name:"D",sound:q.a},{name:"E",sound:Y.a},{name:"F",sound:_.a},{name:"G",sound:J.a},{name:"A",sound:V.a},{name:"B",sound:Z.a}],c5:[{name:"C",sound:ee.a},{name:"D",sound:ae.a},{name:"E",sound:se.a},{name:"F",sound:oe.a},{name:"G",sound:ce.a},{name:"A",sound:ue.a},{name:"B",sound:de.a}]},ge=[[C.a,x.a],[x.a,M.a],[P.a,B.a],[B.a,G.a],[G.a,z.a]],ye=[[C.a,M.a],[P.a,G.a],[B.a,z.a],[H.a,Y.a],[_.a,V.a],[J.a,Z.a]],ve=[[C.a,B.a],[x.a,G.a],[M.a,z.a],[P.a,H.a],[B.a,q.a],[G.a,Y.a]],be=[[C.a,z.a],[P.a,Y.a],[H.a,Z.a],[_.a,se.a],[ee.a,de.a]],we=[[C.a,H.a],[x.a,q.a],[M.a,Y.a],[P.a,_.a],[B.a,J.a],[G.a,V.a]],Ee={easy:[{answer:"octave",sounds:we},{answer:"third",sounds:ye},{answer:"fifth",sounds:ve}],medium:[{answer:"octave",sounds:we},{answer:"third",sounds:ye},{answer:"fifth",sounds:ve},{answer:"second",sounds:ge}],hard:[{answer:"octave",sounds:we},{answer:"third",sounds:ye},{answer:"fifth",sounds:ve},{answer:"second",sounds:ge},{answer:"seventh",sounds:be}]},ke=(a(82),a(11)),je=a.n(ke),Oe=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={newSound:!0,difficulty:1,rerender:!1,progress:"",tries:"",correct:"",C:"blue",D:"blue",E:"blue",F:"blue",G:"blue",A:"blue",B:"blue"},a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=2==this.state.difficulty?pe:3==this.state.difficulty?he:fe.c3,a=2==this.state.difficulty?"Medium":3==this.state.difficulty?"Hard":"Easy",n=localStorage.getItem("guessTheNote");(function(){var t=Object(O.a)(j.a.mark(function t(){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je.a.post("/api/progress",{level:a,id:localStorage.getItem("token"),game:"guessTheNote"});case 2:(n=t.sent).data.tries!==e.state.tries&&e.setState({progress:n.data.progress,tries:n.data.tries,correct:n.data.correct});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}})()(),null!=n&&!0!==this.state.newSound||(localStorage.setItem("guessTheNote",Math.floor(Math.random()*t.length)),this.setState({newSound:!1}));var s=function(t,n){n||(je.a.post("/api/updateProgress",{game:"guessTheNote",correct:!1,id:localStorage.getItem("token"),level:a}),e.setState(Object(E.a)({},t,"red"))),n&&(je.a.post("/api/updateProgress",{game:"guessTheNote",correct:!0,id:localStorage.getItem("token"),level:a}),e.setState(Object(E.a)({},t,"green")))},o=function(){e.setState({C:"blue",D:"blue",E:"blue",F:"blue",G:"blue",A:"blue",B:"blue"})},i=function(a,r){new Audio(a).play(),r===t[n].name&&(localStorage.setItem("guessTheNote",Math.floor(Math.random()*t.length)),s(r,!0),setTimeout(function(){o(),c(t[localStorage.getItem("guessTheNote")].sound)},1e3)),r!==t[n].name&&(s(r,!1),setTimeout(function(){!function t(){e.setState({rerender:!t})}()},500))},c=function(e){new Audio(e).play()},l=fe.c3.map(function(t){return r.a.createElement("button",{onClick:function(){return i(t.sound,t.name)},className:"btn  sound  waves-light "+e.state[t.name]},t.name)}),u=function(t){o(),e.setState({difficulty:t.target.id,newSound:!0})},m=this.state.progress+"%";return r.a.createElement("div",{className:"guessTheNote container"},r.a.createElement("div",{className:"question"},r.a.createElement("button",{onClick:function(){return c(t[n].sound)},className:"btn green sound"},"Play"),r.a.createElement("p",{style:{fontSize:"1.5em"}},'Click "Play" to hear the note'),r.a.createElement("button",{onClick:function(){return c(t[0].sound)},className:"btn teal sound"},"C"),r.a.createElement("p",{style:{color:"teal"}},"reference note"),r.a.createElement("p",{style:{fontSize:"1.5em"}},"Progress: (",this.state.correct,"/",this.state.tries,")"," ",Math.floor(this.state.progress),"%"),r.a.createElement("div",{class:"progress"},r.a.createElement("div",{class:"determinate",style:{width:m}}))),r.a.createElement("div",{className:"answers"},l),r.a.createElement("p",{style:{fontSize:"1.5em"}},"Click the note that fits to the sound you just heard."),r.a.createElement("p",{style:{color:"teal",fontSize:"1.5em"}},"Level: ",a),r.a.createElement("div",{className:"difficulties"},r.a.createElement("button",{className:"btn  waves-light",id:"1",onClick:u},"Easy"),r.a.createElement("button",{className:"btn  waves-light",id:"2",onClick:u},"Medium"),r.a.createElement("button",{className:"btn  waves-light",id:"3",onClick:u},"Hard")))}}]),t}(s.Component),Se=a(157),Ce=(a(103),a(4)),Ne=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={redirect:"",rerender:!1},a.start=a.start.bind(Object(w.a)(Object(w.a)(a))),a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"start",value:function(){var e=this;this.setState(function(t){return{redirect:r.a.createElement(Se.a,{to:e.props.game.route})}})}},{key:"render",value:function(){var e=this,t=function(){var t=Object(O.a)(j.a.mark(function t(){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0===e.props.game){t.next=5;break}return a=e.props.game.resetTitle,t.next=4,je.a.post("/api/reset",{id:localStorage.getItem("token"),name:a});case 4:e.props.game.rerender();case 5:e.setState({rerender:!e.state.rerender});case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image-title"},r.a.createElement("h1",{className:"card-title marginLeft"},void 0!==this.props.game?this.props.game.title:"")),r.a.createElement("div",{className:"card-content marginLeft"},r.a.createElement("p",null,void 0!==this.props.game?this.props.game.description:"")),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"play marginLeft btn left green",onClick:this.start},"Play"),r.a.createElement("p",{className:""},"Easy:"," ",void 0===this.props.game||isNaN(this.props.game.progress.easy)?"0":Math.floor(this.props.game.progress.easy),"%"),r.a.createElement("p",{className:""},"Medium:"," ",void 0===this.props.game||isNaN(this.props.game.progress.medium)?"0":Math.floor(this.props.game.progress.medium),"%"),r.a.createElement("p",{className:""},"Hard:"," ",void 0===this.props.game||isNaN(this.props.game.progress.hard)?"0":Math.floor(this.props.game.progress.hard),"%"),r.a.createElement(Ce.Modal,{header:"Warning",trigger:r.a.createElement(Ce.Button,{className:"reset btn right red"},"Reset"),actions:[r.a.createElement(Ce.Button,{modal:"close"},"No"),r.a.createElement(Ce.Button,{modal:"close",onClick:t,style:{marginRight:"20px"}},"Yes")]},r.a.createElement("p",null,"Are you sure you want to reset the progress?"))),this.state.redirect)}}]),t}(s.Component),xe=function(){return function(){var e=Object(O.a)(j.a.mark(function e(t,a){var n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.a.post("/api/login",{user:a});case 2:n=e.sent,t({type:"login",payload:n.data.user});case 4:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},Ie=function(e){return function(){var t=Object(O.a)(j.a.mark(function t(a){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return localStorage.setItem("token",e),t.next=3,je.a.post("/api/login/id",{id:e});case 3:n=t.sent,a({type:"login",payload:n.data.user});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},Me=function(){return function(){var e=Object(O.a)(j.a.mark(function e(t){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"logout",payload:{logged:!1,user:{}}});case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},Te=function(e){return function(){var t=Object(O.a)(j.a.mark(function t(a){var n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je.a.post("/api/games",{id:e.id});case 2:n=t.sent,a({type:"fetch_games",payload:n.data.games});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},Pe=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={rerender:!1},a.handleRender=a.handleRender.bind(Object(w.a)(Object(w.a)(a))),a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("token");this.props.fetchGames({id:e})}},{key:"handleRender",value:function(){var e=localStorage.getItem("token");this.props.fetchGames({id:e}),this.setState({rerender:!this.state.rerender})}},{key:"render",value:function(){var e=this,t={};return"undefined"!==typeof this.props.games.guessTheNote&&(t={guessTheNote:{rerender:e.handleRender,resetTitle:"guessTheNote",route:"/guessthenote",title:"Guess The Note",description:"You'll hear sound of a random note and guess which note it was.",progress:{easy:100*e.props.games.guessTheNote.easy.correct/e.props.games.guessTheNote.easy.tries,medium:100*e.props.games.guessTheNote.medium.correct/e.props.games.guessTheNote.medium.tries,hard:100*e.props.games.guessTheNote.hard.correct/e.props.games.guessTheNote.hard.tries}},intervals:{rerender:e.handleRender,resetTitle:"intervals",route:"/intervals",title:"Intervals",description:"You'll hear a sequence of 2 notes and decide whether the interval between those 2 notes is major 3rd, perfect 5th or an octave.",progress:{easy:100*e.props.games.intervals.easy.correct/e.props.games.intervals.easy.tries,medium:100*e.props.games.intervals.medium.correct/e.props.games.intervals.medium.tries,hard:100*e.props.games.intervals.hard.correct/e.props.games.intervals.hard.tries}},melody:{rerender:e.handleRender,resetTitle:"melody",route:"/melody",title:"Melody chain",description:"You'll hear a sequence of 2-3-4 notes from a given scale and try to repeat the notes.",progress:{easy:100*e.props.games.melody.easy.correct/e.props.games.melody.easy.tries,medium:100*e.props.games.melody.medium.correct/e.props.games.melody.medium.tries,hard:100*e.props.games.melody.hard.correct/e.props.games.melody.hard.tries}},chords:{resetTitle:"chords",rerender:e.handleRender,route:"/chords",title:"Chords",description:"You'll hear a chord and try to guess how many notes the chord contains.",progress:{easy:100*e.props.games.chords.easy.correct/e.props.games.chords.easy.tries,medium:100*e.props.games.chords.medium.correct/e.props.games.chords.medium.tries,hard:100*e.props.games.chords.hard.correct/e.props.games.chords.hard.tries}}}),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("h1",null,"Ear Training Practice"),r.a.createElement("blockquote",{style:{fontSize:"1.5em"}},"These exercises will improve your musical ability by developing a more intuitive understanding of what you hear."),r.a.createElement(Ne,{game:t.guessTheNote}),r.a.createElement(Ne,{game:t.intervals}),r.a.createElement(Ne,{game:t.melody}))}}]),t}(s.Component);var Ae=Object(c.b)(function(e){return{games:e.games}},n)(Pe),Be=a(158),De=(a(144),a(24)),Ge=a.n(De),Le=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.auth.logged?"":r.a.createElement(Ge.a,{className:"typist"},r.a.createElement(Ge.a.Delay,{ms:2500}),"Hey there!",r.a.createElement(Ge.a.Delay,{ms:1e3}),r.a.createElement("br",null),"This site is going to help you improve your musical hearing.",r.a.createElement(Ge.a.Delay,{ms:1e3}),r.a.createElement("br",null),"Sign up for free and become the next Mozart",r.a.createElement(Ge.a.Backspace,{count:6,delay:1e3}),"Bach",r.a.createElement(Ge.a.Backspace,{count:4,delay:600}),"Beethoven",r.a.createElement(Ge.a.Backspace,{count:26,delay:1500})," lets just begin...",r.a.createElement(Ge.a.Delay,{ms:500}),r.a.createElement(Be.a,{to:"/signup"},"Click me :)"));return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"5em",marginTop:"50px"}},"Welcom to Musicly"),e)}}]),t}(s.Component);var ze=Object(c.b)(function(e){return{auth:e.auth}})(Le),Fe=(a(146),function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.auth.logged||null!=localStorage.getItem("token")?r.a.createElement("ul",{class:"right headerButtons"},r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/games"},"Exercises")),r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/howto"},"How to practice")),r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(Be.a,{onClick:function(){localStorage.removeItem("token"),e.props.logout()},to:"/",className:"logout"},"Logout"))):r.a.createElement("ul",{id:"nav",class:"right headerButtons"},r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/howto"},"How to practice")),r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/signup"},"Sign up")),r.a.createElement("li",null,r.a.createElement(Be.a,{to:"/login",className:"login"},"Login")));return r.a.createElement("nav",null,r.a.createElement("div",{class:"nav-wrapper blue"},r.a.createElement(Be.a,{to:"/",className:"brand-logo"},"Musicly"),t))}}]),t}(s.Component));var He=Object(c.b)(function(e){return{auth:e.auth}},n)(Fe),Re=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={error:"",username:"",password:""},a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(O.a)(j.a.mark(function t(){var a;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,je.a.post("/api/login",{username:e.state.username.toLowerCase().trim(),password:e.state.password});case 2:(a=t.sent).data.exist||(e.setState({error:r.a.createElement("h3",{style:{color:"red"}},"wrong username or password, please try again.")}),localStorage.removeItem("token")),a.data.exist&&(n=a.data.user._id,"undefined"!==typeof Storage?localStorage.setItem("token",n):console.log("Sorry! No Web Storage support.."),e.props.login(a.data.user),e.setState({error:r.a.createElement(Se.a,{to:"/games"})}));case 5:case"end":return t.stop()}var n},t,this)}));return function(){return t.apply(this,arguments)}}(),a=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"login container"},r.a.createElement("h1",{style:{textAlign:"center"}},"Login now!"),r.a.createElement(Ce.Row,null,r.a.createElement(Ce.Input,{s:12,label:"Username",onChange:a,name:"username",value:this.state.username},r.a.createElement(Ce.Icon,null,"account_circle")),r.a.createElement(Ce.Input,{type:"password",label:"password",s:12,onChange:a,name:"password",value:this.state.password},r.a.createElement(Ce.Icon,null,"dialpad"))),r.a.createElement("button",{onClick:t,className:"btn blue"},"Log in"),this.state.error))))}}]),t}(s.Component),qe=Object(c.b)(null,n)(Re),Qe=a(155),Ye=a(68),We=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={exist:"",username:"",password:"",email:""},a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=function(){var t=Object(O.a)(j.a.mark(function t(){var a,n,s;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==e.state.password&&""!==e.state.username&&""!==e.state.email||e.setState({exist:r.a.createElement("p",{style:{color:"red"}},"Please enter your details.")}),a="",""!==e.state.email&&(a=Ye.validate(e.state.email)),!1===a&&e.setState({exist:r.a.createElement("p",{style:{color:"red"}},"Invalid email.")}),!a||""===a||""===e.state.password||""===e.state.username){t.next=18;break}return t.next=7,je.a.post("/api/signup/checkexist",{email:e.state.email.toLowerCase().trim(),username:e.state.username.toLowerCase().trim()});case 7:if(n=t.sent,console.log("mail: "+n.data.email),console.log("username: "+n.data.username),n.data.email&&e.setState({exist:r.a.createElement("p",{style:{color:"red"}},"Email already exists in our database, try to log in.")}),n.data.username&&e.setState({exist:r.a.createElement("p",{style:{color:"red"}},"Username already exists, try another one.")}),!1!==n.data.email||!1!==n.data.username||""===e.state.password||""===e.state.username){t.next=18;break}return t.next=15,je.a.post("/api/signup/new",{email:e.state.email.toLowerCase().trim(),password:e.state.password,username:e.state.username.toLowerCase().trim()});case 15:s=t.sent,e.props.loginById(s.data.id),e.setState({exist:r.a.createElement(Qe.a,{to:"/games"})});case 18:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),a=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},n=this.state.flag?r.a.createElement(Qe.a,{to:"/login"}):"";return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"signup container"},n,r.a.createElement("h1",{style:{textAlign:"center"}},"Sign up for free!"),r.a.createElement(Ce.Row,null,r.a.createElement(Ce.Input,{type:"text",s:12,label:"Username",onChange:a,name:"username",value:this.state.username},r.a.createElement(Ce.Icon,null,"account_circle")),r.a.createElement(Ce.Input,{type:"password",label:"password",s:12,onChange:a,name:"password",value:this.state.password},r.a.createElement(Ce.Icon,null,"dialpad")),r.a.createElement(Ce.Input,{type:"email",label:"Email",s:12,onChange:a,name:"email",value:this.state.email},r.a.createElement(Ce.Icon,null,"email"))),r.a.createElement("button",{onClick:t,className:"btn blue"},"Submit"),this.state.exist))))}}]),t}(s.Component),_e=Object(c.b)(null,{loginById:Ie})(We),Ue=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"chords"},"This is the Chords game!")}}]),t}(s.Component),Je=(a(148),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={rerender:!1,progress:0,correct:0,tries:0,interval:{},newSound:!0,difficulty:"1",second:"blue",third:"blue",fifth:"blue",seventh:"blue",octave:"blue"},a.difficulty=a.difficulty.bind(Object(w.a)(Object(w.a)(a))),a.change=a.change.bind(Object(w.a)(Object(w.a)(a))),a.newInterval=a.newInterval.bind(Object(w.a)(Object(w.a)(a))),a.playQuestion=a.playQuestion.bind(Object(w.a)(Object(w.a)(a))),a.getProgress=a.getProgress.bind(Object(w.a)(Object(w.a)(a))),a.checkAnswer=a.checkAnswer.bind(Object(w.a)(Object(w.a)(a))),a.clearColors=a.clearColors.bind(Object(w.a)(Object(w.a)(a))),a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"change",value:function(e,t){var a=this,n=2==this.state.difficulty?"Medium":3==this.state.difficulty?"Hard":"Easy";t||(je.a.post("/api/updateProgress",{game:"intervals",correct:!1,id:localStorage.getItem("token"),level:n}),setTimeout(function(){a.setState({rerender:!a.state.rernder})},500),this.setState(Object(E.a)({},e,"red"))),t&&(je.a.post("/api/updateProgress",{game:"intervals",correct:!0,id:localStorage.getItem("token"),level:n}),this.newInterval(n),this.setState(Object(E.a)({},e,"green")))}},{key:"clearColors",value:function(){this.setState({second:"blue",third:"blue",fifth:"blue",seventh:"blue",octave:"blue"})}},{key:"checkAnswer",value:function(e){var t=this;e===this.state.interval.answer&&(this.change(e,!0),setTimeout(function(){t.clearColors(),t.playQuestion()},1e3)),e!==this.state.interval.answer&&this.change(e,!1)}},{key:"newInterval",value:function(e){var t=e.toLowerCase(),a=Math.floor(Math.random()*Ee[t].length),n=Ee[t][a].answer,s=Math.floor(Math.random()*Ee[t][a].sounds.length);localStorage.setItem("intervalAnswer",n),localStorage.setItem("firstOfPair",Ee[t][a].sounds[s][0]),localStorage.setItem("secondOfPair",Ee[t][a].sounds[s][1]);var r=[localStorage.getItem("firstOfPair"),localStorage.getItem("secondOfPair")],o={answer:localStorage.getItem("intervalAnswer"),pair:r};this.setState({interval:o})}},{key:"difficulty",value:function(e){this.clearColors(),this.setState({difficulty:e.target.id,newSound:!0})}},{key:"playQuestion",value:function(){var e=new Audio(this.state.interval.pair[0]),t=new Audio(this.state.interval.pair[1]);e.play(),setTimeout(function(){t.play()},1e3)}},{key:"getProgress",value:function(){var e=Object(O.a)(j.a.mark(function e(t){var a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.a.post("/api/progress",{level:t,id:localStorage.getItem("token"),game:"intervals"});case 2:(a=e.sent).data.tries!==this.state.tries&&this.setState({progress:a.data.progress,tries:a.data.tries,correct:a.data.correct});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=2==this.state.difficulty?"Medium":3==this.state.difficulty?"Hard":"Easy";this.getProgress(t),null!=localStorage.getItem("intervalAnswer")&&!0!==this.state.newSound||(this.newInterval(t),this.setState({newSound:!1}));var a=(3==this.state.difficulty?[{answer:"second",title:"Major 2nd"},{answer:"third",title:"Major 3nd"},{answer:"fifth",title:"Perfect 5th"},{answer:"seventh",title:"Major 7th"},{answer:"octave",title:"Octave"}]:2==this.state.difficulty?[{answer:"second",title:"Major 2nd"},{answer:"third",title:"Major 3nd"},{answer:"fifth",title:"Perfect 5th"},{answer:"octave",title:"Octave"}]:[{answer:"third",title:"Major 3nd"},{answer:"fifth",title:"Perfect 5th"},{answer:"octave",title:"Octave"}]).map(function(t){return r.a.createElement("button",{onClick:function(){return e.checkAnswer(t.answer)},className:"btn interval  waves-light "+e.state[t.answer]},t.title)}),n=this.state.progress+"%";return r.a.createElement("div",{className:"intervals container"},r.a.createElement("div",{className:"question"},r.a.createElement("button",{onClick:this.playQuestion,className:"btn green sound  waves-light"},"Play"),r.a.createElement("p",{style:{fontSize:"1.5em"}},'Click "Play" to hear the interval'),r.a.createElement("p",{style:{fontSize:"1.5em"}},"Progress: (",this.state.correct,"/",this.state.tries,")"," ",Math.floor(this.state.progress),"%"),r.a.createElement("div",{class:"progress"},r.a.createElement("div",{class:"determinate",style:{width:n}}))),r.a.createElement("div",{className:"answers"},a),r.a.createElement("p",{style:{fontSize:"1.5em"}},"Click the correct interval."),r.a.createElement("p",{style:{color:"teal",fontSize:"1.5em"}},"Level: ",t),r.a.createElement("div",{className:"difficulties"},r.a.createElement("button",{className:"btn  waves-light",id:"1",onClick:this.difficulty},"Easy"),r.a.createElement("button",{className:"btn  waves-light",id:"2",onClick:this.difficulty},"Medium"),r.a.createElement("button",{className:"btn  waves-light",id:"3",onClick:this.difficulty},"Hard")))}}]),t}(s.Component)),Ke=(a(150),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).state={feedback:r.a.createElement("div",{style:{fontSize:"1.5em",marginTop:"20px",opacity:"0"}},"empty"),progress:0,correct:0,tries:0,melody:[],solution:"",answer:"",difficulty:"1",C:"blue",D:"blue",E:"blue",F:"blue",G:"blue",A:"blue",B:"blue"},a.getProgress=a.getProgress.bind(Object(w.a)(Object(w.a)(a))),a.playSound=a.playSound.bind(Object(w.a)(Object(w.a)(a))),a.difficulty=a.difficulty.bind(Object(w.a)(Object(w.a)(a))),a.clearColors=a.clearColors.bind(Object(w.a)(Object(w.a)(a))),a.playQuestion=a.playQuestion.bind(Object(w.a)(Object(w.a)(a))),a.setMelody=a.setMelody.bind(Object(w.a)(Object(w.a)(a))),a.reset=a.reset.bind(Object(w.a)(Object(w.a)(a))),a.checkCorrect=a.checkCorrect.bind(Object(w.a)(Object(w.a)(a))),a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){null===localStorage.getItem("token")||"melody"in this.props.games||this.props.fetchGames({id:localStorage.getItem("token")}),this.setMelody(this.state.difficulty)}},{key:"getProgress",value:function(e){var t=e.toLowerCase();"melody"in this.props.games&&this.props.games.melody[t].tries!==this.state.tries&&this.setState({progress:100*this.props.games.melody[t].correct/this.props.games.melody[t].tries,tries:this.props.games.melody[t].tries,correct:this.props.games.melody[t].correct})}},{key:"clearColors",value:function(){this.setState({C:"blue",D:"blue",E:"blue",F:"blue",G:"blue",A:"blue",B:"blue"})}},{key:"difficulty",value:function(e){this.clearColors(),this.setState({difficulty:e.target.id}),this.setMelody(e.target.id)}},{key:"setMelody",value:function(e){var t=function(){for(var e=fe.c3[Math.floor(Math.random()*fe.c3.length)],t=fe.c3[Math.floor(Math.random()*fe.c3.length)],a=fe.c3[Math.floor(Math.random()*fe.c3.length)],n=fe.c3[Math.floor(Math.random()*fe.c3.length)];e==t;)e=fe.c3[Math.floor(Math.random()*fe.c3.length)];var s={easy:[e,t],medium:[e,t,a],hard:[e,t,a,n]};return console.log(s),s}(),a=2==e?t.medium:3==e?t.hard:t.easy,n=a.reduce(function(e,t){return e+=t.name},"");this.setState({solution:n,melody:a})}},{key:"playQuestion",value:function(){var e=0;this.state.melody.forEach(function(t){var a=new Audio(t.sound);setTimeout(function(){a.play()},e),e+=1e3})}},{key:"playSound",value:function(e){var t;new Audio(e.sound).play(),this.setState((t={answer:this.state.answer+e.name},Object(E.a)(t,e.name,"blue lighten-3"),Object(E.a)(t,"feedback",r.a.createElement("div",{style:{fontSize:"1.5em",marginTop:"20px",opacity:"0"}},"empty")),t))}},{key:"checkCorrect",value:function(e){var t=this;this.state.answer.length==this.state.solution.length&&this.state.answer!=this.state.solution&&(setTimeout(function(){t.props.fetchGames({id:localStorage.getItem("token")})},500),je.a.post("/api/updateProgress",{game:"melody",correct:!1,id:localStorage.getItem("token"),level:e}),this.reset(),this.setState({feedback:r.a.createElement("div",{className:"feedback",style:{color:"red",fontSize:"1.5em"}},"Try again...")})),this.state.answer==this.state.solution&&""!==this.state.answer&&(setTimeout(function(){t.props.fetchGames({id:localStorage.getItem("token")})},500),je.a.post("/api/updateProgress",{game:"melody",correct:!0,id:localStorage.getItem("token"),level:e}),this.setMelody(this.state.difficulty),this.reset(),setTimeout(function(){t.playQuestion()},1e3),this.setState({feedback:r.a.createElement("div",{className:"feedback",style:{color:"green",fontSize:"1.5em"}},"Well done!")}))}},{key:"reset",value:function(){this.setState({answer:""}),this.clearColors()}},{key:"render",value:function(){var e=this,t=isNaN(this.state.progress)?"0%":this.state.progress+"%",a=2==this.state.difficulty?"Medium":3==this.state.difficulty?"Hard":"Easy",n=fe.c3.map(function(t){return r.a.createElement("button",{className:"btn sound "+e.state[t.name],onClick:function(){return e.playSound(t)}},t.name)});return this.getProgress(a),this.checkCorrect(a),r.a.createElement("div",{className:"melody container"},r.a.createElement("div",{className:"question"},r.a.createElement("button",{onClick:this.playQuestion,className:"btn green sound"},"Play"),r.a.createElement("p",{style:{fontSize:"1.5em"}},'Click "Play" to hear the note'),r.a.createElement("p",{style:{fontSize:"1.5em"}},"Progress: (",this.state.correct,"/",this.state.tries,")"," ",Math.floor(this.state.progress),"%"),r.a.createElement("div",{class:"progress"},r.a.createElement("div",{class:"determinate",style:{width:t}}))),r.a.createElement("button",{className:"btn red resetAnswer",onClick:this.reset},"Reset your answer"),this.state.feedback,r.a.createElement("div",{className:"answers"},n),r.a.createElement("p",{style:{color:"teal",fontSize:"1.5em"}},"Level: ",a),r.a.createElement("div",{className:"difficulties"},r.a.createElement("button",{className:"btn  waves-light",id:"1",onClick:this.difficulty},"Easy"),r.a.createElement("button",{className:"btn  waves-light",id:"2",onClick:this.difficulty},"Medium"),r.a.createElement("button",{className:"btn  waves-light",id:"3",onClick:this.difficulty},"Hard")))}}]),t}(s.Component));var Ve=Object(c.b)(function(e){return{auth:e.auth,games:e.games}},n)(Ke),Xe=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"How to practice ear training"),r.a.createElement(Ce.Collapsible,{accordion:!0,defaultActiveKey:0},r.a.createElement(Ce.CollapsibleItem,{header:"Increase practice frequency, not duration.",icon:"info"},"Who would improve faster: Stu, who practices once a week for 4 hours straight, or Merle, who practices every day for 20 minutes? I'd bet on Merle, even though Stu spends almost twice as much time practicing. This is because, after you've spent time practicing something, your brain continues to work on it and make new neural connections in the background, even while sleeping (especially while sleeping!). For this reason, I recommend bookmarking your favorite exercises and doing them every day for a set amount of time."),r.a.createElement(Ce.CollapsibleItem,{header:"Start simple and gradually increase difficulty.",icon:"info"},"Who would improve faster: Stu, who jumps straight to the hardest difficulty on the chord progressions exercise, or Merle, who starts with just easy intervals, then adds one more interval (first the simple intervals, then the more complex) whenever his accuracy is above 90% for three days in a row? Again, my money's on Merle. Practice should be challenging, but not so challenging that you're overwhelmed."),r.a.createElement(Ce.CollapsibleItem,{header:"Track you progress",icon:"info"},"You can track your progress by the precentage of your success in each game(and difficulty). This lets you know for sure whether you're improving. If you can see your improvement, this will encourage you to keep going. It can also help you notice when you're plateauing so that you can look for the cause. Are you not practicing often enough? Did you increase difficulty too quickly?"),r.a.createElement(Ce.CollapsibleItem,{header:"Sing scales and intervals.",icon:"info"},"The exercises on this site all involve identifying notes rather than generating them, but that doesn't mean you shouldn't sing along with them. Try singing up from the root note to any given scale degree."),r.a.createElement(Ce.CollapsibleItem,{header:"Transcribe music with your instrument.",icon:"info"},"Pick your favorite songs and figure them out on your instrument. You can start with the melody and then try to figure out the chords, or you can start with the chords and then try to figure out the melody. Practice both ways.")))},Ze=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("blockquote",null,"Please send feedback to erikfcb@gmail.com. You will usually hear back from me within 24 hours."," "))},$e=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement("div",{className:""},r.a.createElement(He,null),r.a.createElement(b.a,{exact:!0,path:"/",component:ze}),r.a.createElement(b.a,{path:"/login",component:qe}),r.a.createElement(b.a,{path:"/signup",component:_e}),r.a.createElement(b.a,{path:"/games",component:Ae}),r.a.createElement(b.a,{path:"/chords",component:Ue}),r.a.createElement(b.a,{path:"/guessthenote",component:Oe}),r.a.createElement(b.a,{path:"/intervals",component:Je}),r.a.createElement(b.a,{path:"/melody",component:Ve}),r.a.createElement(b.a,{path:"/howto",component:Xe}),r.a.createElement(b.a,{path:"/contact",component:Ze})))}}]),t}(s.Component),et=Object(c.b)(null,n)($e),tt=(a(152),Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return{logged:!0,user:t.user};case"logout":return t.payload;default:return e}},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_games":return t.payload;default:return e}}}));document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".modal");d.a.Modal.init(e,{})});var at=Object(l.d)(tt,{},Object(l.a)(u.a));i.a.render(r.a.createElement(c.a,{store:at},r.a.createElement(et,null)),document.querySelector("#root"))},20:function(e,t,a){e.exports=a.p+"static/media/g.9fde6192.wav"},21:function(e,t,a){e.exports=a.p+"static/media/a.44fe4bae.wav"},22:function(e,t,a){e.exports=a.p+"static/media/c.b831e8da.wav"},23:function(e,t,a){e.exports=a.p+"static/media/f.fd08916e.wav"},26:function(e,t,a){e.exports=a.p+"static/media/d.32da8625.wav"},27:function(e,t,a){e.exports=a.p+"static/media/e.75a1c497.wav"},28:function(e,t,a){e.exports=a.p+"static/media/b.406da41b.wav"},29:function(e,t,a){e.exports=a.p+"static/media/c.8ce44706.wav"},30:function(e,t,a){e.exports=a.p+"static/media/e.71bf79bf.wav"},34:function(e,t,a){e.exports=a.p+"static/media/f.72b1591c.wav"},35:function(e,t,a){e.exports=a.p+"static/media/d.c4d20890.wav"},36:function(e,t,a){e.exports=a.p+"static/media/g.0cc322a3.wav"},37:function(e,t,a){e.exports=a.p+"static/media/a.877d1623.wav"},38:function(e,t,a){e.exports=a.p+"static/media/b.97cdae7c.wav"},42:function(e,t,a){e.exports=a.p+"static/media/c.b6e00e48.wav"},43:function(e,t,a){e.exports=a.p+"static/media/e.7f24cf79.wav"},44:function(e,t,a){e.exports=a.p+"static/media/b.b598f80f.wav"},52:function(e,t,a){e.exports=a.p+"static/media/d.596c4017.wav"},53:function(e,t,a){e.exports=a.p+"static/media/f.0abfe689.wav"},54:function(e,t,a){e.exports=a.p+"static/media/g.1613f40b.wav"},55:function(e,t,a){e.exports=a.p+"static/media/a.50da716c.wav"},69:function(e,t,a){e.exports=a(154)},82:function(e,t,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.222dd576.chunk.js.map