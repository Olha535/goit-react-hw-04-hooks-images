(this["webpackJsonprepository-react-create"]=this["webpackJsonprepository-react-create"]||[]).push([[0],{10:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2KbyK",searchForm:"Searchbar_searchForm__i6L9o",searchFormButton:"Searchbar_searchFormButton__32V6e",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__2H8yr",searchFormInput:"Searchbar_searchFormInput__TeyY_"}},16:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3F97E",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2CNDi"}},17:function(e,t,a){e.exports={overlay:"Modal_overlay__pNXjL",modal:"Modal_modal__370FL"}},28:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__MPtLW"}},29:function(e,t,a){e.exports={button:"Button_button__1nkAe"}},35:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(4),c=a.n(o),s=(a(35),a(36),a(9)),l=a.n(s),i=a(18),u=a(13),h=a(5),m=a(6),p=a(8),d=a(7),g=a(14),b=(a(38),a(27)),j=a.n(b),f="22909225-4bd408e854a1416d853656515",y="https://pixabay.com/api";function v(){return(v=Object(u.a)(l.a.mark((function e(t,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(y,"/?q=").concat(t,"&page=").concat(a,"&key=").concat(f,"&image_type=photo&orientation=horizontal&per_page=12"),e.abrupt("return",j.a.get(r).then((function(e){return e.data.hits})).then((function(e){return e.map((function(e){var t=e.id,a=e.largeImageURL;return{id:t,webformatURL:e.webformatURL,largeImageURL:a}}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=function(e,t){return v.apply(this,arguments)},x=a(10),_=a.n(x),I=a(1),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleNameChange=function(t){e.setState({searchQuery:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.onSubmit(e.state.searchQuery),e.setState({searchQuery:""}))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(I.jsx)("header",{className:_.a.searchbar,children:Object(I.jsxs)("form",{onSubmit:this.handleSubmit,className:_.a.searchForm,children:[Object(I.jsx)("button",{type:"submit",className:_.a.searchFormButton,children:Object(I.jsx)("span",{className:_.a.searchFormButtonLabel,children:"Search"})}),Object(I.jsx)("input",{className:_.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchQuery",value:this.state.searchQuery,onChange:this.handleNameChange})]})})}}]),a}(r.Component),C=a(80),w=a(28),S=a.n(w),F=a(16),M=a.n(F);function L(e){var t=e.image,a=e.tags,r=e.onImageClick;return Object(I.jsx)("li",{className:M.a.ImageGalleryItem,children:Object(I.jsx)("img",{src:t,alt:a,onClick:r,className:M.a.ImageGalleryItemImage})})}function N(e){var t=e.images,a=e.onImageClick;return Object(I.jsx)("ul",{className:S.a.imageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.tags,o=e.largeImageURL;return Object(I.jsx)(L,{image:r,tags:n,onImageClick:function(){return a(o,n)}},"".concat(t,"-").concat(Object(C.a)()))}))})}var B=a(29),Q=a.n(B);function G(e){var t=e.onClick;return Object(I.jsx)("button",{className:Q.a.button,type:"button",onClick:t,children:"Load more"})}var U=a(17),A=a.n(U),E=document.querySelector("#modal-root"),R=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).onCloseModal=function(t){"Escape"===t.code&&e.props.onClose()},e.onCloseBackdrop=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onCloseModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onCloseModal)}},{key:"render",value:function(){var e=this.props,t=e.showModal,a=e.tags,r=this.onCloseBackdrop;return Object(o.createPortal)(Object(I.jsx)("div",{className:A.a.overlay,onClick:r,children:Object(I.jsx)("div",{className:A.a.modal,children:Object(I.jsx)("img",{src:t,alt:a})})}),E)}}]),a}(r.Component),T=a(30),D=a.n(T);function H(){return Object(I.jsx)("div",{children:Object(I.jsx)(D.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3,style:{textAlign:"center"}})})}var P=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(h.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:"",page:1,images:[],showModal:null,loading:!1,alt:null,error:null},e.handleFormSubmit=function(t){e.state.searchQuery!==t&&(e.resetState(),e.setState({searchQuery:t}))},e.loadMoBtn=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleImageClick=function(t,a){e.setState({showModal:t,alt:a})},e.toggleModal=function(){e.setState({showModal:null})},e.resetState=function(){e.setState({searchQuery:"",page:1,images:[],showModal:null,loading:!1,alt:null,error:null})},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,n,o,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a.searchQuery,n=this.state.searchQuery,o=a.page,c=this.state.page,r===n&&o===c){e.next=22;break}return e.prev=5,this.setState({loading:!0}),e.next=9,O(n,c);case 9:(s=e.sent).length||g.b.info("Check the correctness of the input",{theme:"colored"}),this.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(s))}})),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),this.setState({error:e.t0}),g.b.error(this.state.error.message,{theme:"colored"});case 18:return e.prev=18,a.images.length>11&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),this.setState({loading:!1}),e.finish(18);case 22:case"end":return e.stop()}}),e,this,[[5,14,18,22]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.images,a=e.alt,r=e.showModal,n=e.loading,o=this.handleFormSubmit,c=this.handleImageClick,s=this.toggleModal,l=this.loadMoBtn;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(k,{onSubmit:o}),Object(I.jsx)(H,{}),t.length>1&&Object(I.jsx)(N,{images:t,onImageClick:c}),r&&Object(I.jsx)(R,{showModal:r,tags:a,onClose:s}),t.length>0&&Object(I.jsx)(G,{onClick:l}),n&&Object(I.jsx)(H,{})]}),Object(I.jsx)(g.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),a}(r.Component);c.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(P,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e2b53f48.chunk.js.map