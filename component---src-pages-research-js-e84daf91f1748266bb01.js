(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"7l0s":function(e,t,a){"use strict";a("tUrg");var n=a("q1tI"),r=a.n(n),l=a("Wbzz");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"item item-image"},r.a.createElement("img",{className:"img-head",src:this.props.image}),r.a.createElement("div",{className:"container-padded"},r.a.createElement("h3",null,this.props.projectTitle),r.a.createElement("hr",null),r.a.createElement("ul",{className:"nav nav-pills nav-fill"},this.props.tags.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("p",{className:"nav-link active"},e))}))),r.a.createElement("p",null,this.props.projectBlurb),r.a.createElement(l.Link,{to:this.props.link,className:"btn btn-primary btn-sm"},this.props.moretext||"Learn More")))},n}(r.a.Component);t.a=i},BTi0:function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),l=a.n(r),i=(a("tUrg"),a("Wbzz")),s=(a("BTi0"),a("Z/k0"));var c=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.Link,{className:"nav-link "+(this.props.active===this.props.title?"bold":""),to:this.props.link},this.props.title))},n}(l.a.Component),o=function(e){var t=e.active;return l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement(i.Link,{className:"navbar-brand",to:"#"},l.a.createElement("h3",null,l.a.createElement(s.a,null))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement(c,{title:"Home",active:t,link:"/"}),l.a.createElement(c,{title:"About",active:t,link:"/about"}),l.a.createElement(c,{title:"Research",active:t,link:"/research"}),l.a.createElement(c,{title:"Software",active:t,link:"/software"}),l.a.createElement(c,{title:"Photography",active:t,link:"/photography"}),l.a.createElement(c,{title:"Blog",active:t,link:"/blog"}))))};o.defaultProps={siteTitle:""};var m=o,p=(a("Vpue"),a("q4sD"),a("vrFN")),u=a("W/9C");t.a=function(e){var t=e.children,a=e.pageTitle,r=e.active,i=n.data;return console.log(r),l.a.createElement("div",{id:"root"},l.a.createElement(p.a,{title:a}),l.a.createElement(m,{siteTitle:i.site.siteMetadata.title,active:r}),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-5 bold"},a),l.a.createElement("main",null,t)),l.a.createElement(u.a,null))}},ENlo:function(e,t,a){},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Joshua Zahner"}}}}')},LTVh:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("Bl7J"),i=(a("q4sD"),a("ENlo"),a("gsuc"),a("7l0s"));t.default=function(e){var t=e.data;return r.a.createElement(l.a,{pageTitle:"Research",active:"Research"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu pharetra sem. Integer imperdiet nisi dapibus turpis volutpat sagittis. Nunc eleifend nisl nunc, quis vestibulum ante convallis eu. Sed in est in dolor luctus scelerisque. Phasellus lorem lorem, commodo in efficitur eu, vehicula non augue. Nam elementum nisi sed orci blandit, sed placerat est lacinia. Etiam fringilla euismod pellentesque."),r.a.createElement("div",{className:"container-fluid container-hz separate item-box"},t.allMarkdownRemark.edges.map((function(e){return t=e.node.frontmatter,r.a.createElement(i.a,{projectTitle:t.title,projectBlurb:t.blurb,image:t.image.childImageSharp.sizes.src,tags:t.tags,link:t.path})}))))};var s="2469343951"},Vpue:function(e,t,a){},gsuc:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-research-js-e84daf91f1748266bb01.js.map