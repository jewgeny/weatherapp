(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(57)},32:function(e,t,a){},33:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),l=(a(32),a(23)),o=a(6),s=a(7),m=a(9),u=a(8),p=a(10),d=(a(33),a(60)),h=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{activeStyle:{textDecoration:"underline"},className:"nav-link text-primary",exact:!0,to:"/"},"Search")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(d.a,{activeStyle:{textDecoration:"underline"},className:"text-primary nav-link",to:"/showweather"},"Show Weather")))}}]),t}(r.a.Component),b=a(59),y=a(24),f=a(61),v=a(58),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"my-3"},this.props.doubleText&&r.a.createElement("div",{className:"alert alert-danger"},"This City exist already!")))}}]),t}(r.a.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"my-5",onSubmit:this.props.getCity},r.a.createElement("div",{className:"d-flex input-group"},r.a.createElement("input",{placeholder:"Type a city here",type:"text",onChange:this.props.updateValue,className:"form-control"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Search"))),r.a.createElement(E,{doubleText:this.props.doubleText})))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",marginTop:"3vw",flexDirection:"row",flexWrap:"wrap"}},this.props.cities.map(function(t,a){return r.a.createElement("div",{key:a,className:"test card mr-3 my-1 col-xs-12 col-sm-3 col-lg-3 border border-secondary py-2"},r.a.createElement("h3",{index:a,className:"cityTitle"},t.city),r.a.createElement("img",{style:{width:"60%",height:"60%"},className:"weatherApp",src:t.img}),r.a.createElement("span",{className:"display-4"},t.temp+"\xb0"),r.a.createElement("span",{ident:a,onClick:e.props.deleteCity,className:"deleteButton"},"\xd7"))})))}}]),t}(r.a.Component),j=a(22),x=a.n(j),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={cityName:"",cities:[],formsubmitted:!1,doubleText:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"getCity",value:function(e){var t=this;e.preventDefault();x.a.post("https://api.openweathermap.org/data/2.5/weather?q=".concat(this.state.cityName,"&APPID=").concat("16d4785f9c10724266053adb3c29dcfd")).then(function(e){console.log(e),console.log(e.data);var a={city:e.data.name.toUpperCase(),img:"http://openweathermap.org/img/w/".concat(e.data.weather[0].icon,".png"),temp:Math.round(e.data.main.temp-273)},n=[].concat(Object(l.a)(t.state.cities),[a]);t.state.cities.find(function(e){return e.city===t.state.cityName})?t.setState({doubleText:!0}):t.setState({cities:n,cityName:"",formsubmitted:!0,doubleText:!1}),setTimeout(function(){return t.setState({formsubmitted:!1})},0)})}},{key:"updateValue",value:function(e){this.setState({cityName:e.target.value.toUpperCase()})}},{key:"deleteCity",value:function(e){var t=e.target.getAttribute("ident");console.log(t);var a=Object.assign([],this.state.cities);a.splice(t,1),this.setState({cities:a,doubleText:!1})}},{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"logo display-3 text-center my-5"},"Weather App"),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement(h,null),r.a.createElement(y.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{getCity:e.getCity.bind(e),doubleText:e.state.doubleText,updateValue:e.updateValue.bind(e)})}}),r.a.createElement(f.a,null,r.a.createElement(y.a,{path:"/showweather",render:function(){return r.a.createElement(w,{index:e.props.cities,deleteCity:e.deleteCity.bind(e),doubleText:e.state.doubleText,cities:e.state.cities})}}),this.state.formsubmitted&&r.a.createElement(v.a,{to:"/showweather"}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.b1eb8adc.chunk.js.map