(this["webpackJsonpmap-api"]=this["webpackJsonpmap-api"]||[]).push([[0],{20:function(t,e,n){t.exports=n(45)},25:function(t,e,n){},26:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),c=(n(25),n(3)),l=n(4),s=n(6),u=n(5),d=n(7),p=(n(26),n(2)),m=n(18),b=n(19),f=n.n(b);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}var v=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={points:null},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"findRestaurant",value:function(t){return"Restaurant"===t}},{key:"componentDidMount",value:function(){var t=this;f.a.get("./data/Kazan.json").then((function(t){return console.log(t.data),t.data})).catch((function(t){return console.log(t)})).then((function(e){t.setState(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach((function(e){Object(m.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.state,{points:e}))}))}},{key:"render",value:function(){var t=this;return null!==this.state.points?this.state.points.map((function(e,n){return console.log(e.lat),e.categories.some(t.findRestaurant)?o.a.createElement(p.c,{key:n,geometry:[e.lat,e.lng],properties:{iconContent:n+1,hintContent:e.wikipedia_title,balloonContentHeader:e.title,balloonContent:['<img class="placeMark__image" alt="'.concat(e.title,'" src=').concat(e.image,">                \n             <div>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ").concat(e.categories,"</div>\n             <div>\u0420\u0435\u0439\u0442\u0438\u043d\u0433 facebook ").concat(e.facebook_rating,"</div> \n             <div>\u0420\u0435\u0439\u0442\u0438\u043d\u0433 tripAdvisor ").concat(e.tripAdvisor_rating,"</div>")]},options:{iconColor:"red"},modules:["geoObject.addon.balloon","geoObject.addon.hint"]}):o.a.createElement(p.c,{key:n,geometry:[e.lat,e.lng],properties:{iconContent:n+1,hintContent:e.wikipedia_title,balloonContentHeader:e.title,balloonContent:['<img class="placeMark__image" alt="'.concat(e.title,'" src=').concat(e.image,">\n               <div>\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f: ").concat(e.categories,"</div>\n               <div>\u0420\u0435\u0439\u0442\u0438\u043d\u0433 facebook ").concat(e.facebook_rating,"</div> \n               <div>\u0420\u0435\u0439\u0442\u0438\u043d\u0433 tripAdvisor ").concat(e.tripAdvisor_rating,"</div>")]},modules:["geoObject.addon.balloon","geoObject.addon.hint"]})})):null}}]),e}(o.a.Component),h=function(){return o.a.createElement(p.a,{options:{gridSize:50,minClusterSize:2,margin:5}},o.a.createElement(v,null))},O=function(){return o.a.createElement("div",null,o.a.createElement(p.b,{defaultState:{center:[55.785,49.115],zoom:13},width:800,height:500},o.a.createElement(p.e,null),o.a.createElement(h,null)))},y=function(){return o.a.createElement("div",null,o.a.createElement(p.d,{id:"yaMap"},o.a.createElement(O,null)))},j=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={men:"\u041c\u0430\u0440\u0448\u0440\u0443\u0442"},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"body"},o.a.createElement("h1",null," ",this.state.men),o.a.createElement(y,null))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.eefaccca.chunk.js.map