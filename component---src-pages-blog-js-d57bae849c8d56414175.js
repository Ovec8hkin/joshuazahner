(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/Gdm":function(e,t,a){e.exports=a.p+"static/background-header-d83ab1ef0f941a8e4d4734b7b729c309.jpg"},"7l0s":function(e,t,a){"use strict";a("tUrg");var n=a("q1tI"),r=a.n(n),i=a("Wbzz");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"item item-image"},r.a.createElement("img",{className:"img-head",src:this.props.image}),r.a.createElement("div",{className:"container-padded"},r.a.createElement("h3",null,this.props.projectTitle),r.a.createElement("hr",null),r.a.createElement("ul",{className:"nav nav-pills nav-fill"},this.props.tags.map((function(e,t){return r.a.createElement("li",{className:"nav-item",key:t},r.a.createElement("p",{className:"nav-link active"},e))}))),r.a.createElement("p",null,this.props.projectBlurb),r.a.createElement(i.Link,{to:this.props.link,className:"btn btn-primary btn-sm"},this.props.moretext||"Learn More")))},n}(r.a.Component);t.a=o},BTi0:function(e,t,a){},Bl7J:function(e,t,a){"use strict";var n=a("IRj2"),r=a("q1tI"),i=a.n(r),o=(a("tUrg"),a("Wbzz")),l=(a("BTi0"),a("Z/k0"));var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return i.a.createElement("li",{className:"nav-item"},i.a.createElement(o.Link,{className:"nav-link "+(this.props.active===this.props.title?"bold":""),to:this.props.link},this.props.title))},n}(i.a.Component),c=function(e){var t=e.active;return i.a.createElement("nav",{className:"navbar navbar-expand-lg"},i.a.createElement(o.Link,{className:"navbar-brand",to:"#"},i.a.createElement("h3",null,i.a.createElement(l.a,null))),i.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},i.a.createElement("span",{className:"navbar-toggler-icon"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement(s,{title:"Home",active:t,link:"/"}),i.a.createElement(s,{title:"About",active:t,link:"/about"}),i.a.createElement(s,{title:"Research",active:t,link:"/research"}),i.a.createElement(s,{title:"Software",active:t,link:"/software"}),i.a.createElement(s,{title:"Photography",active:t,link:"/photography"}),i.a.createElement(s,{title:"Blog",active:t,link:"/blog"}))))};c.defaultProps={siteTitle:""};var p=c,m=(a("Vpue"),a("q4sD"),a("vrFN")),u=a("W/9C");t.a=function(e){var t=e.children,a=e.pageTitle,r=e.active,o=n.data;return console.log(r),i.a.createElement("div",{id:"root"},i.a.createElement(m.a,{title:a}),i.a.createElement(p,{siteTitle:o.site.siteMetadata.title,active:r}),i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"display-5 bold"},a),i.a.createElement("main",null,t)),i.a.createElement(u.a,null))}},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Joshua Zahner"}}}}')},OF02:function(e,t,a){},Vpue:function(e,t,a){},vx99:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),o=a("Wbzz"),l=(a("q4sD"),a("OF02"),a("/Gdm")),s=a.n(l),c=a("7l0s");function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m=function(e){function t(){return e.apply(this,arguments)||this}return p(t,e),t.prototype.render=function(){return r.a.createElement("article",{className:"featured"},r.a.createElement("img",{className:"feature-image",src:s.a}),r.a.createElement("div",{className:"image-content"},r.a.createElement("h3",{className:"title"},this.props.post_data.title),r.a.createElement("h5",{className:"date"},this.props.post_data.date),r.a.createElement("p",null,r.a.createElement("i",null,this.props.post_data.blurb)),r.a.createElement(o.Link,{to:this.props.post_data.path,className:"btn btn-primary btn-sm"},"Continue Reading")))},t}(r.a.Component),u=function(e){function t(){var t;return(t=e.call(this)||this).state={showFeatured:!0},t}p(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("resize",this.checkDimensions.bind(this))},a.checkDimensions=function(){this.setState({showFeatured:window.innerWidth>576})},a.render=function(){var e=this,t=this.props.data.allMarkdownRemark.edges[0].node.frontmatter;return r.a.createElement(i.a,{pageTitle:"From Docker to Dolphins",active:"Blog"},this.state.showFeatured?r.a.createElement(m,{post_data:t}):null,r.a.createElement("div",{className:"container-fluid container-hz separate item-box"},this.props.data.allMarkdownRemark.edges.map((function(t,a){var n=t.node.frontmatter;if(0!==a||!e.state.showFeatured)return r.a.createElement(c.a,{projectTitle:n.title,projectBlurb:n.blurb,image:n.image.childImageSharp.sizes.src,tags:n.tags,link:n.path,moretext:"Continue Reading"})}))))},t}(r.a.Component);t.default=u;var d="2184427730"}}]);
//# sourceMappingURL=component---src-pages-blog-js-d57bae849c8d56414175.js.map