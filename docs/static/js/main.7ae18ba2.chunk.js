(this.webpackJsonpbookstore=this.webpackJsonpbookstore||[]).push([[0],{25:function(t,e,n){t.exports={row:"SplitPane_row__3OA0S",col:"SplitPane_col__2lNWY"}},30:function(t,e,n){t.exports={books:"Books_books__3oLxV","book-rows":"Books_book-rows__1DLln"}},32:function(t,e,n){t.exports={header:"Header_header__JpLRi header"}},35:function(t,e,n){t.exports={pane:"BookDetails_pane__2MY2U book-details",first:"BookDetails_first__324_6",second:"BookDetails_second__2ufmq"}},36:function(t,e,n){t.exports={circle:"ProgressCircle_circle__dZSrD"}},37:function(t,e,n){t.exports={pane:"ProgressDetails_pane__3Dk9X progress-details",second:"ProgressDetails_second__PMXmk",first:"ProgressDetails_first__1AAH-"}},38:function(t,e,n){t.exports={"chapter-details":"ChapterDetails_chapter-details__2ol3g chapter-details"}},39:function(t,e,n){t.exports={"book-row":"BookRow_book-row__3Utw0"}},40:function(t,e,n){t.exports={"book-form":"BookForm_book-form__1ZjA1 book-form"}},60:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),o=n(16),a=n.n(o),s=n(12),i=n(21),u=n(3),j=n(33),l=n.n(j),b=n(1),h=function(t){var e=t.value;return Object(b.jsx)("h1",{children:e})},p=function(t){var e=t.paths;return Object(b.jsx)("nav",{children:e.map((function(t){return Object(b.jsx)(i.b,{to:"/".concat(t),children:t.toUpperCase()},t)}))})},d=n(32),f=n.n(d),O=function(){return Object(b.jsxs)("div",{className:f.a.header,children:[Object(b.jsx)(h,{value:"Bookstore CMS"}),Object(b.jsx)(p,{paths:["books","categories"]}),Object(b.jsx)(l.a,{})]})},x=n(43),v=n(6),m=n.n(v),k=n(24),_=n(13),y=n(17),g=n(34),w=function t(e,n,c,r){Object(y.a)(this,t),this.id=r||"".concat(n,"-").concat(c),this.category=e,this.title=n,this.author=c},S=new(function(){function t(){Object(y.a)(this,t),this.base="https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LDqE4jqcttj5TFLLJ2je/books"}return Object(g.a)(t,[{key:"get",value:function(){var t=Object(_.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.url=this.base,t.next=3,fetch(this.url);case 3:return e=t.sent,t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"post",value:function(){var t=Object(_.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.url=this.base,t.next=3,fetch(this.url,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(_.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.url="".concat(this.base,"/").concat(e),t.next=3,fetch(this.url,{method:"DELETE"});case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}()),N=[],D="bookStore/books/ADD_BOOK",E="bookStore/books/REMOVE_BOOK",C=function(t){return{type:D,payload:t}},B=function(t){return{type:E,payload:t}},A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case D:return[].concat(Object(x.a)(t),[e.payload]);case E:return t.filter((function(t){return t.id!==e.payload}));default:return t}},F=n(18),P=n(44),R=n(25),L=n.n(R),T=function(t){var e=t.layout,n=t.first,c=t.second;return Object(b.jsxs)("div",{className:"".concat(e.componentStyles.pane," ").concat(L.a[e.pane]),children:[Object(b.jsx)("div",{className:"".concat(e.componentStyles.first," ").concat(L.a[e.first]),children:n}),Object(b.jsx)("div",{className:"".concat(e.componentStyles.second," ").concat(L.a[e.second]),children:c})]})},J=function t(e,n,c,r){Object(y.a)(this,t),this.pane=e,this.first=n,this.second=c,this.componentStyles=r},U=function(t){var e=t.data,n=e.category,c=e.title,r=e.author;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("span",{children:n}),Object(b.jsx)("span",{children:c}),Object(b.jsx)("span",{children:r})]})},M=function(t){var e=t.onRemove;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{type:"button",children:"Comments"}),Object(b.jsx)("button",{type:"button",onClick:e,children:"Remove"}),Object(b.jsx)("button",{type:"button",children:"Edit"})]})},K=n(35),q=n.n(K),H=["id"],I=function(t){var e=t.data,n=e.id,c=Object(P.a)(e,H),r=Object(s.b)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(T,{layout:new J("col","col","row",q.a),first:Object(b.jsx)(U,{data:Object(F.a)({},c)}),second:Object(b.jsx)(M,{onRemove:function(){var t;r((t=n,function(){var e=Object(_.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete(t);case 2:n(B(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}})})})},V=n(36),W=n.n(V),X=function(t){var e=t.value;return Object(b.jsx)("div",{className:W.a.circle,style:{"--p":e}})},Y=n(37),Z=n.n(Y),G=function(t){var e=t.value;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(T,{layout:new J("row","col","col",Z.a),first:Object(b.jsx)(X,{value:e}),second:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("span",{className:"value",children:[e,"%"]}),Object(b.jsx)("span",{className:"text",children:"completed"})]})})})},z=n(38),Q=n.n(z),$=function(t){var e=t.value;return Object(b.jsxs)("div",{className:Q.a["chapter-details"],children:[Object(b.jsx)("span",{className:"current",children:"CURRENT CHAPTER"}),Object(b.jsx)("span",{children:e}),Object(b.jsx)("button",{type:"button",children:"UPDATE PROGRESS"})]})},tt=n(39),et=n.n(tt),nt=function(t){var e=t.book,n=t.progress,c=t.chapter;return Object(b.jsxs)("div",{className:et.a["book-row"],children:[Object(b.jsx)(I,{data:e}),Object(b.jsx)(G,{value:n}),Object(b.jsx)($,{value:c})]})},ct=n(23),rt=n(40),ot=n.n(rt),at={title:"",author:"",category:""},st=function(t){return t.trim().replace(/  +/g," ")},it=function(){var t=Object(c.useState)(at),e=Object(k.a)(t,2),n=e[0],r=e[1],o=Object(s.b)(),a=function(t){var e=t.target,n=e.name,c=e.value;r((function(t){return Object(F.a)(Object(F.a)({},t),{},Object(ct.a)({},n,c))}))},i=function(t){var e;t.preventDefault(),Object.values(n).every((function(t){return""!==t.trim()}))&&(o((e=new w(n.category,st(n.title),st(n.author)),function(){var t=Object(_.a)(m.a.mark((function t(n){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=JSON.parse(JSON.stringify(e)),t.next=3,S.post(Object.assign(c,{item_id:e.id}));case 3:n(C(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),r(Object(F.a)({},at)))};return Object(b.jsxs)("div",{className:ot.a["book-form"],children:[Object(b.jsx)("h2",{children:"ADD NEW BOOK"}),Object(b.jsxs)("form",{onSubmit:function(t){return i(t)},children:[Object(b.jsx)("input",{name:"title",type:"text",placeholder:"Book title",value:n.title,onChange:function(t){return a(t)}}),Object(b.jsx)("input",{name:"author",type:"text",placeholder:"Author",value:n.author,onChange:function(t){return a(t)}}),Object(b.jsxs)("select",{name:"category",value:n.category,onChange:function(t){return a(t)},children:[Object(b.jsx)("option",{value:"",disabled:!0,children:"Category"}),Object(b.jsx)("option",{value:"Action",children:"Action"}),Object(b.jsx)("option",{value:"Science Fiction",children:"Science Fiction"}),Object(b.jsx)("option",{value:"Economy",children:"Economy"})]}),Object(b.jsx)("button",{type:"submit",children:"ADD BOOK"})]})]})},ut=n(30),jt=n.n(ut),lt=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.books}));return Object(c.useEffect)((function(){t(function(){var t=Object(_.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get();case 2:n=t.sent,Object.entries(n).forEach((function(t){var n=Object(k.a)(t,2),c=n[0],r=n[1];e(C(new w(r[0].category,r[0].title,"N/A",c)))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(b.jsxs)("div",{className:jt.a.books,children:[Object(b.jsx)("div",{className:jt.a["book-rows"],children:e.map((function(t){return Object(b.jsx)(nt,{book:t,progress:0,chapter:"(Not started yet)"},t.id)}))}),Object(b.jsx)(it,{})]})},bt=function(){return Object(b.jsx)("div",{className:"categories",children:"Under construction"})};n(60);var ht=function(){return Object(b.jsxs)(i.a,{basename:"/bookstore",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",children:Object(b.jsx)(lt,{})}),Object(b.jsx)(u.a,{exact:!0,path:"/categories",children:Object(b.jsx)(bt,{})})]})]})},pt=n(26),dt=n(41),ft=n.n(dt),Ot=n(42),xt=Object(pt.b)({books:A}),vt=Object(pt.c)(xt,Object(pt.a)(ft.a,Ot.a)),mt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),o(t),a(t)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(s.a,{store:vt,children:Object(b.jsx)(ht,{})})}),document.getElementById("root")),mt()}},[[62,1,2]]]);
//# sourceMappingURL=main.7ae18ba2.chunk.js.map