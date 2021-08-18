(this["webpackJsonpbest-books"]=this["webpackJsonpbest-books"]||[]).push([[0],{29:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(21),o=n.n(i),s=(n(29),n(20)),a=n(23),b=n(7),j=n(8),u=n(10),h=n(9),l=n(11),p=n(2),d=n(0),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsx)("article",{children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{src:this.props.book_image,alt:this.props.title}),Object(d.jsx)("br",{}),Object(d.jsx)("h3",{children:this.props.title}),Object(d.jsxs)("p",{children:["Author: ",this.props.author]}),Object(d.jsx)("p",{children:this.props.description}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Publisher: ",this.props.publisher]}),Object(d.jsxs)("li",{children:["ISBN: ",this.props.primary_isbn10]})]})]})},this.props.rank)}}]),n}(c.a.Component),v="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=".concat("UoRKKA7wnvKbrtHgW1XpAW2FbHHQhFb7"),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={books:[]},r}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(v).then((function(e){return e.json()})).then((function(t){return e.setState({books:t.results.books})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{id:"header",children:"The Best-Seller Books"}),Object(d.jsx)("section",{id:"section",children:this.state.books.map((function(e){var t=e.author,n=e.book_image,r=e.description,c=e.rank,i=e.title,o=e.primary_isbn10,s=e.publisher;return Object(d.jsx)(O,{id:"BookContainer",author:t,book_image:n,title:i,description:r,rank:c,primary_isbn10:o,publisher:s})}))})]})}}]),n}(c.a.Component),f={width:"100px",padding:"12px",margin:"0 6px 6px",background:"green",textDecoration:"none",color:"white"},k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(l.c,{to:"/",exact:!0,style:f,activeStyle:{background:"darkgreen"},children:"Home"}),Object(d.jsx)(l.c,{to:"/book_reviews",exact:!0,style:f,activeStyle:{background:"darkgreen"},children:"Book Reviews"})]})}}]),n}(c.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(d.jsx)("p",{id:"pTag",children:this.props.review.new_review})}}]),n}(c.a.Component),m=function(){return Object(d.jsxs)(l.b,{to:"/book_reviews/new",children:[Object(d.jsx)("br",{}),Object(d.jsx)("button",{id:"reviewBtn",children:"Write a Book Review"})]})};var g=function(){var e=this.props.book_reviews.map((function(e){return Object(d.jsx)(w,{review:e})}));return Object(d.jsxs)("div",{children:[e,Object(d.jsx)(m,{})]})},y=n(24),_=function(e){var t=Object(r.useState)(""),n=Object(y.a)(t,2),c=n[0],i=n[1],o=Object(p.f)();return Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("http://localhost:3000/book_reviews",{method:"POST",headers:{"Content-type":"application/json",Accept:"application/json"},body:JSON.stringify({new_review:c})}).then((function(e){return e.json()})).then((function(t){return e.addReview(t)})),t.target.reset(),o.push("/book_reviews")},children:[Object(d.jsx)("label",{children:"Review: "}),Object(d.jsx)("textarea",{type:"text",name:"new_review",onChange:function(e){i(e.target.value)}}),Object(d.jsx)("input",{type:"submit"})]})]})},S=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).addReview=function(t){e.setState({book_reviews:[].concat(Object(a.a)(e.state.book_reviews),[t])})},e.handleSubmit=function(t){t.preventDefault();var n=e.props.book.filter((function(e){return e.title.toLowerCase()===t.target.children[0].value.toLowerCase()}));e.setState(Object(s.a)(Object(s.a)({},e.state),{},{books:n})),console.log(e.state.searchTerm)},e.state={book_reviews:[],searchTerm:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state),fetch("http://localhost:3000/book_reviews/").then((function(e){return e.json()})).then((function(t){e.setState({book_reviews:t})}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(k,{}),Object(d.jsx)("br",{}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{className:"searchBar",type:"text",placeholder:"Search"}),Object(d.jsx)("button",{type:"submit",id:"seearchBtn",children:"Search Button"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/",component:x}),Object(d.jsx)(p.a,{exact:!0,path:"/book_reviews",render:function(){return Object(d.jsx)(g,{book_reviews:e.state.book_reviews})}}),Object(d.jsx)(p.a,{exact:!0,path:"/book_reviews/new",render:function(){return Object(d.jsx)(_,{addReview:e.addReview})}})]})]})})})}}]),n}(c.a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),C()}},[[39,1,2]]]);
//# sourceMappingURL=main.6decb6af.chunk.js.map