(this.webpackJsonpfoodstore=this.webpackJsonpfoodstore||[]).push([[0],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(22),c=t.n(l),u=(t(76),t(9)),i=t(12),s=(t(77),t(13)),o=t(27),m=t(59),d="features/Auth/USER_LOGIN",p="features/Auth/USER_LOGOUT",f=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{user:null,token:null};var g=t(10),E=t(7),b="features/Products/SET_PAGE",v="features/Products/SET_KEYWORD",h="features/Products/SET_CATEGORY",k="features/Products/SET_TAGS",y="features/Products/NEXT_PAGE",x="features/Products/PREV_PAGE",O="features/Products/TOGGLE_TAG",j="process",w="success",S="error",_={data:[],currentPage:1,totalItems:-1,perPage:6,keyword:"",category:"",tags:[],status:"idle"};var P="features/Cart/ADD_ITEM",N="features/Cart/REMOVE_ITEM",C="features/Cart/CLEAR_ITEMS",I="features/Cart/SET_ITEMS",T=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];var A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,q=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return{user:a.user,token:a.token};case p:return{user:null,token:null};default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"features/Products/START_FETCHING_PRODUCT":return Object(E.a)(Object(E.a)({},e),{},{status:j});case"features/Products/ERROR_FETCHING_PRODUCT":return Object(E.a)(Object(E.a)({},e),{},{status:S});case"features/Products/SUCCESS_FETCHING_PRODUCT":return Object(E.a)(Object(E.a)({},e),{},{status:w,data:a.data,totalItems:a.count});case b:return Object(E.a)(Object(E.a)({},e),{},{currentPage:a.currentPage});case v:return Object(E.a)(Object(E.a)({},e),{},{keyword:a.keyword,category:"",tags:[]});case h:return Object(E.a)(Object(E.a)({},e),{},{currentPage:1,tags:[],category:a.category,keyword:""});case k:return Object(E.a)(Object(E.a)({},e),{},{tags:a.tags});case O:return e.tags.includes(a.tag)?Object(E.a)(Object(E.a)({},e),{},{currentPage:1,tags:e.tags.filter((function(e){return e!==a.tag}))}):Object(E.a)(Object(E.a)({},e),{},{currentPage:1,tags:[].concat(Object(g.a)(e.tags),[a.tag])});case y:return Object(E.a)(Object(E.a)({},e),{},{currentPage:e.currentPage+1});case x:return Object(E.a)(Object(E.a)({},e),{},{currentPage:e.currentPage-1});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case P:return e.find((function(e){return e._id===a.item._id}))?e.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{qty:e._id===a.item._id?e.qty+1:e.qty})})):[].concat(Object(g.a)(e),[Object(E.a)(Object(E.a)({},a.item),{},{qty:1})]);case N:return e.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{qty:e._id===a.item._id?e.qty-1:e.qty})})).filter((function(e){return e.qty>0}));case C:return[];case I:return a.items;default:return e}}}),D=Object(o.e)(q,A(Object(o.a)(m.a))),R=t(1),M=t(31),H=t.n(M),L=t(62),z=t.n(L),B=t(61);t.n(B).a.config();var G="http://localhost:3000",K="Food Store",U="20000",J="Amal Mulia",F="amalmuli95@gmail.com",V={account_no:"xxxxx-xxxxxx-333-34",bank_name:"xxxxx-xxxxxx-333-34"},W=function(){return r.a.createElement("div",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("div",{className:"text-red-600 font-bold text-4xl"},K)))};function X(){var e,a=Object(s.c)((function(e){return e.auth}));return n.createElement(R.n,{desktop:2,justify:"between",items:"center"},n.createElement("div",null,n.createElement(W,null)),n.createElement("div",{className:"mr-5 text-right",style:{textAlign:"right"}},n.createElement(u.b,{to:a.user?"/account":"/login"},n.createElement("div",{className:"mr-2 inline-block text-red-600 font-bold"},null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e.full_name),n.createElement(R.c,{icon:n.createElement(z.a,null)}))))}var Y=t(26),$=t.n(Y),Q=t(39),Z=t.n(Q);function ee(e){return e.reduce((function(e,a){return e+a.price*a.qty}),0)}function ae(e){return isNaN(parseInt(e))?"":new Intl.NumberFormat("id-ID",{maximumSignificantDigits:2,style:"currency",currency:"IDR"}).format(e)}var te=function(e){var a=e.items,t=e.onItemInc,n=e.onItemDec,l=e.onCheckout,c=ee(a);return r.a.createElement("div",null,a.length?null:r.a.createElement("div",{className:"text-center text-sm text-red-900"}," belum ada items di keranjang "),r.a.createElement("div",{className:"px-2 border-b mt-5 pb-5"},r.a.createElement("div",{className:"text-3xl flex items-center text-red-700"},r.a.createElement(Z.a,null),r.a.createElement("div",{className:"ml-2"},"Keranjang")),r.a.createElement(R.s,{as:"h5"},"Total: ",ae(c)),r.a.createElement(R.b,{text:"Checkout",fitContainer:!0,iconAfter:r.a.createElement($.a,null),disabled:!a.length,onClick:l})),r.a.createElement("div",{className:"p-2"},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"mb-2"},r.a.createElement(R.e,{imgUrl:"".concat(G,"/upload/").concat(e.image_url),name:e.name,qty:e.qty,color:"orange",onInc:function(a){return t(e)},onDec:function(a){return n(e)}}))}))))},ne=[{icon:"/images/menus/semua.png",label:"semua",id:""},{icon:"/images/menus/utama.png",label:"utama",id:"utama"},{icon:"/images/menus/minuman.png",label:"minuman",id:"minuman"},{icon:"/images/menus/snack.png",label:"snack",id:"snack"},{icon:"/images/menus/pastry.png",label:"pastry",id:"pastry"}],re=t(2),le=t.n(re),ce=t(4),ue=t(63),ie=t.n(ue),se=t(14),oe=t.n(se);function me(){return(me=Object(ce.a)(le.a.mark((function e(a){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("".concat(G,"/api/products"),{params:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var de=ie()((function(e){return me.apply(this,arguments)}),1e3),pe=function(){return{type:"features/Products/START_FETCHING_PRODUCT"}},fe=function(){return{type:"features/Products/ERROR_FETCHING_PRODUCT"}},ge=function(e){return{type:"features/Products/SUCCESS_FETCHING_PRODUCT",data:e.data,count:e.count}};function Ee(e){return{type:P,item:e}}function be(){return{type:C}}function ve(e){return{type:I,items:e}}var he,ke,ye={"":["burger","pizza","bread","cheese","strawberry","muffin","fried","bread","coffee","tea","hot","cold"],utama:["burger","pizza","bread"],pastry:["cheese","strawberry","muffin"],snack:["fried","bread","cheese","coffee"],minuman:["coffee","tea","hot","cold"]},xe=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.products})),t=Object(s.c)((function(e){return e.cart})),n=Object(i.g)();return r.a.useEffect((function(){e(function(){var e=Object(ce.a)(le.a.mark((function e(a,t){var n,r,l,c,u,i,s,o,m,d;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(pe()),n=t().products.perPage||9,r=t().products.currentPage||1,l=t().products.tags||[],c=t().products.keyword||"",u=t().products.category||"",i={limit:n,skip:r*n-n,q:c,tags:l,category:u},e.prev=7,e.next=10,de(i);case 10:s=e.sent,o=s.data,m=o.data,d=o.count,a(ge({data:m,count:d})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),a(fe());case 20:case"end":return e.stop()}}),e,null,[[7,17]])})));return function(a,t){return e.apply(this,arguments)}}())}),[e,a.currentPage,a.keyword,a.category,a.tags]),r.a.createElement("div",null,r.a.createElement(R.k,{sidebar:r.a.createElement(R.p,{items:ne,verticalAlign:"top",active:a.category,onChange:function(a){return e(function(e){return{type:h,category:e}}(a))}}),content:r.a.createElement("div",{className:"md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen"},r.a.createElement("div",{className:"w-full md:w-3/4 pl-5 pb-10"},r.a.createElement(X,null),r.a.createElement("div",{className:"w-full text-center mb-10 mt-5"},r.a.createElement(R.i,{fullRound:!0,value:a.keyword,placeholder:"cari makanan favoritmu...",fitContainer:!0,onChange:function(a){var t;e((t=a.target.value,{type:v,keyword:t}))}})),r.a.createElement("div",{className:"mb-5 pl-2 flex w-3/3 overflow-auto pb-5"},ye[a.category].map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement(R.m,{text:t,icon:t.slice(0,1).toUpperCase(),isActive:a.tags.includes(t),onClick:function(a){return e(function(e){return{type:O,tag:e}}(t))}}))}))),"process"!==a.status||a.data.length?null:r.a.createElement("div",{className:"flex justify-center"},r.a.createElement(H.a,{color:"red"})),r.a.createElement(R.n,{desktop:3,items:"stretch"},a.data.map((function(a,t){return r.a.createElement("div",{key:t,className:"p-2"},r.a.createElement(R.f,{title:a.name,imgUrl:"".concat(G,"/upload/").concat(a.image_url),price:a.price,onAddToCart:function(t){return e(Ee(a))}}))}))),r.a.createElement("div",{className:"text-center my-10"},r.a.createElement(R.l,{totalItems:a.totalItems,page:a.currentPage,perPage:a.perPage,onChange:function(a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:b,currentPage:e}}(a))},onNext:function(a){return e({type:y})},onPrev:function(a){return e({type:x})}}))),r.a.createElement("div",{className:"w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-100"},r.a.createElement(te,{items:t,onItemInc:function(a){return e(Ee(a))},onItemDec:function(a){return e(function(e){return{type:N,item:e}}(a))},onCheckout:function(e){n.push("/checkout")}}))),sidebarSize:80}))};function Oe(e,a){return je.apply(this,arguments)}function je(){return(je=Object(ce.a)(le.a.mark((function e(a,t){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.put("".concat(G,"/api/carts"),{items:t},{headers:{authorization:"Bearer ".concat(a)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(){return(we=Object(ce.a)(le.a.mark((function e(){var a,t,n,r;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},t=a.token){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,oe.a.get("".concat(G,"/api/carts"),{headers:{authorization:"Bearer ".concat(t)}});case 5:n=e.sent,(r=n.data).error||D.dispatch(ve(r));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(){var e=he,a=ke;he=D.getState().auth,ke=D.getState().cart;var t=he.token;he!==e&&(localStorage.setItem("auth",JSON.stringify(he)),Oe(t,ke)),ke!==a&&(localStorage.setItem("cart",JSON.stringify(ke)),Oe(t,ke))}var _e=t(5),Pe=t(32),Ne={required:{value:!0,message:"Nama lengkap harus diisi."},maxLength:{value:500,message:"Panjang nama lengkap maksimal 500 karakter."}},Ce={required:{value:!0,message:"Email harus diisi."},maxLength:{value:255,message:"Panjang email maksimal 255 karakter."},pattern:{value:/^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,message:"Email tidak valid"}},Ie={required:{value:!0,message:"Password harus diisi."},maxLength:{value:255,message:"Panjang password maksimal 255 karakter."}},Te={required:{value:!0,message:"Konfirmasi password harus diisi."}};function Ae(e){return qe.apply(this,arguments)}function qe(){return(qe=Object(ce.a)(le.a.mark((function e(a){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.post("".concat(G,"/auth/register"),a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e,a){return Re.apply(this,arguments)}function Re(){return(Re=Object(ce.a)(le.a.mark((function e(a,t){return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.post("".concat(G,"/auth/login"),{email:a,password:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Me(){return(Me=Object(ce.a)(le.a.mark((function e(){var a,t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},t=a.token,e.next=3,oe.a.post("".concat(G,"/auth/logout"),null,{headers:{authorization:"Bearer ".concat(t)}}).then((function(e){return localStorage.removeItem("auth"),e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var He="idle",Le="process",ze="success",Be="error",Ge=function(){var e,a,t,n,l=Object(Pe.a)(),c=l.register,s=l.handleSubmit,o=l.errors,m=l.setError,d=r.a.useState(He),p=Object(_e.a)(d,2),f=p[0],g=p[1],E=Object(i.g)(),b=function(){var e=Object(ce.a)(le.a.mark((function e(a){var t,n,r,l;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.password,n=a.password_confirmation,t===n){e.next=3;break}return e.abrupt("return",m("password_confirmation",{type:"equality",message:"Konfirmasi password harus sama dengan password"}));case 3:return g(Le),e.next=6,Ae(a);case 6:r=e.sent,(l=r.data).error&&(Object.keys(l.fields).forEach((function(e){var a,t;m(e,{type:"server",message:null===(a=l.fields[e])||void 0===a||null===(t=a.properties)||void 0===t?void 0:t.message})})),g(Be)),g(ze),E.push("/register/berhasil");case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(R.j,{size:"small"},r.a.createElement(R.d,{color:"white"},r.a.createElement("div",{className:"text-center mb-5"},r.a.createElement(W,null)),r.a.createElement("form",{onSubmit:s(b)},r.a.createElement(R.g,{errorMessage:null===(e=o.full_name)||void 0===e?void 0:e.message},r.a.createElement(R.i,{name:"full_name",placeholder:"Nama Lengkap",ref:c(Ne),fitContainer:!0})),r.a.createElement(R.g,{errorMessage:null===(a=o.email)||void 0===a?void 0:a.message},r.a.createElement(R.i,{name:"email",placeholder:"Email",ref:c(Ce),fitContainer:!0})),r.a.createElement(R.g,{errorMessage:null===(t=o.password)||void 0===t?void 0:t.message},r.a.createElement(R.h,{name:"password",placeholder:"Password",ref:c(Ie),fitContainer:!0})),r.a.createElement(R.g,{errorMessage:null===(n=o.password_confirmation)||void 0===n?void 0:n.message},r.a.createElement(R.h,{name:"password_confirmation",placeholder:"Konfirmasi Password",ref:c(Te),fitContainer:!0})),r.a.createElement(R.b,{size:"large",fitContainer:!0,disabled:f===Le}," ",f===Le?"Sedang memproses":"Mendaftar"," ")),r.a.createElement("div",{className:"text-center mt-2"},"Sudah punya akun? ",r.a.createElement(u.b,{to:"/login"}," ",r.a.createElement("b",null," Masuk Sekarang. ")," ")))))},Ke=function(){return r.a.createElement(R.j,{size:"small"},r.a.createElement(R.d,{color:"white"},r.a.createElement("div",{className:"text-center"},r.a.createElement(R.s,{as:"h3"},"Pendaftaran Berhasil"),r.a.createElement(R.s,null,"Silahkan masuk ke aplikasi"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/login"},r.a.createElement(R.b,{fitContainer:!0},"Masuk")))))};function Ue(e,a){return{type:d,user:e,token:a}}var Je={required:{value:!0,message:"Email tidak boleh kosong."},maxLength:{value:255,message:"Panjang email maksimal 255 arakter"}},Fe={required:{value:!0,message:"Password tidak boleh kosong."},maxLength:{value:255,message:"Panjang password maksimal 255 karakter."}},Ve="idle",We="process",Xe="success",Ye="error",$e=function(){var e,a,t=Object(Pe.a)(),r=t.register,l=t.handleSubmit,c=t.errors,o=t.setError,m=n.useState(Ve),d=Object(_e.a)(m,2),p=d[0],f=d[1],g=Object(s.b)(),E=Object(i.g)(),b=function(){var e=Object(ce.a)(le.a.mark((function e(a){var t,n,r,l,c,u;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.email,n=a.password,f(We),e.next=4,De(t,n);case 4:r=e.sent,(l=r.data).error?(o("password",{type:"invalidCredential",message:l.message}),f(Ye)):(c=l.user,u=l.token,g(Ue(c,u)),E.push("/")),f(Xe);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.createElement(R.j,{size:"small"},n.createElement("br",null),n.createElement(R.d,{color:"white"},n.createElement("div",{className:"text-center mb-5"},n.createElement(W,null)),n.createElement("form",{onSubmit:l(b)},n.createElement(R.g,{errorMessage:null===(e=c.email)||void 0===e?void 0:e.message},n.createElement(R.i,{placeholder:"email",fitContainer:!0,name:"email",ref:r(Je)})),n.createElement(R.g,{errorMessage:null===(a=c.password)||void 0===a?void 0:a.message},n.createElement(R.h,{placeholder:"password",name:"password",fitContainer:!0,ref:r(Fe)})),n.createElement(R.b,{fitContainer:!0,size:"large",disabled:"process"===p},"Login")),n.createElement("div",{className:"text-center mt-2"},"Belum punya akun? ",n.createElement(u.b,{to:"/register"},n.createElement("b",null,"Daftar sekarang.")))))};function Qe(e){var a=e.tingkat,t=e.kodeInduk,r=e.onChange,l=e.value,c=n.useState([]),u=Object(_e.a)(c,2),i=u[0],s=u[1],o=n.useState(!1),m=Object(_e.a)(o,2),d=m[0],p=m[1];return n.useEffect((function(){p(!0),oe.a.get("".concat(G,"/api/wilayah/").concat(a,"?kode_induk=").concat(t)).then((function(e){var a=e.data;a.error||s(a)})).finally((function(e){return p(!1)}))}),[t,a]),n.createElement(R.o,{options:i.map((function(e){return{label:e.nama,value:e.kode}})),onChange:r,value:l,isLoading:d,isDisabled:d||!i.length})}function Ze(e){return ea.apply(this,arguments)}function ea(){return(ea=Object(ce.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},n=t.token,e.next=3,oe.a.get("".concat(G,"/api/delivery-addresses"),{params:{limit:a.limit,skip:a.page*a.limit-a.limit},headers:{authorization:"Bearer ".concat(n)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function aa(e){return ta.apply(this,arguments)}function ta(){return(ta=Object(ce.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},n=t.token,e.next=3,oe.a.post(G+"/api/delivery-addresses",a,{headers:{authorization:"Bearer ".concat(n)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Qe.defaultProps={tingkat:"provinsi"};var na={required:{value:!0,message:"Nama alamat tidak boleh kosong."},maxLength:{value:500,message:"Panjang nama alamat maksimal 500 karakter"},minLength:{value:5,message:"Panjang nama alamat minimal 5 karakter"}},ra={required:{value:!0,message:"Provinsi harus dipilih."}},la={required:{value:!0,message:"Kabupaten harus dipilih."}},ca={required:{value:!0,message:"Kecamatan harus dipilih."}},ua={required:{value:!0,message:"Kelurahan harus dipilih."}},ia={required:{value:!0,message:"Detail alamat harus diisi"},maxLength:{value:1e3,message:"Panjang detail alamat maksimal 1000 karakter"}};function sa(){var e,a,t,r,l,c,u,s,o,m=Object(i.g)(),d=Object(Pe.a)(),p=d.handleSubmit,f=d.register,g=d.errors,E=d.setValue,b=d.watch,v=d.getValues,h=b();n.useEffect((function(){f({name:"provinsi"},ra),f({name:"kabupaten"},la),f({name:"kecamatan"},ca),f({name:"kelurahan"},ua)}),[f]),n.useEffect((function(){E("kabupaten",null),E("kecamatan",null),E("kelurahan",null)}),[h.provinsi,E]),n.useEffect((function(){E("kecamatan",null),E("kelurahan",null)}),[h.kabupaten,E]),n.useEffect((function(){E("kelurahan",null)}),[h.kecamatan,E]);var k=function(e,a){return E(e,a,{shouldValidate:!0,shouldDirty:!0})},y=function(){var e=Object(ce.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={nama:a.nama_alamat,detail:a.detail_alamat,provinsi:a.provinsi.label,kabupaten:a.kabupaten.label,kecamatan:a.kecamatan.label,kelurahan:a.kelurahan.label},e.next=3,aa(t);case 3:if(n=e.sent,!n.data.error){e.next=7;break}return e.abrupt("return");case 7:m.push("/alamat-pengiriman");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return n.createElement(R.j,null,n.createElement(X,null),n.createElement("br",null),n.createElement("div",null,n.createElement("form",{onSubmit:p(y)},n.createElement(R.g,{label:"Nama alamat",errorMessage:null===(e=g.nama_alamat)||void 0===e?void 0:e.message,color:"black"},n.createElement(R.i,{placeholder:"Nama alamat",fitContainer:!0,name:"nama_alamat",ref:f(na)})),n.createElement(R.g,{label:"Provinsi",errorMessage:null===(a=g.provinsi)||void 0===a?void 0:a.message,color:"black"},n.createElement(Qe,{onChange:function(e){return k("provinsi",e)},name:"provinsi",value:v().provinsi})),n.createElement(R.g,{label:"Kabupaten/kota",errorMessage:null===(t=g.kabupaten)||void 0===t?void 0:t.message,color:"black"},n.createElement(Qe,{tingkat:"kabupaten",kodeInduk:null===(r=v().provinsi)||void 0===r?void 0:r.value,onChange:function(e){return k("kabupaten",e)},value:v().kabupaten})),n.createElement(R.g,{label:"Kecamatan",errorMessage:null===(l=g.kecamatan)||void 0===l?void 0:l.message,color:"black"},n.createElement(Qe,{tingkat:"kecamatan",kodeInduk:null===(c=v().kabupaten)||void 0===c?void 0:c.value,onChange:function(e){return k("kecamatan",e)},value:v().kecamatan})),n.createElement(R.g,{label:"Kelurahan",errorMessage:null===(u=g.kelurahan)||void 0===u?void 0:u.message,color:"black"},n.createElement(Qe,{tingkat:"desa",kodeInduk:null===(s=v().kecamatan)||void 0===s?void 0:s.value,onChange:function(e){return k("kelurahan",e)},value:v().kelurahan})),n.createElement(R.g,{label:"Detail alamat",errorMessage:null===(o=g.detail_alamat)||void 0===o?void 0:o.message,color:"black"},n.createElement(R.t,{placeholder:"Detail alamat",fitContainer:!0,name:"detail_alamat",ref:f(ia)})),n.createElement(R.b,{fitContainer:!0},"Simpan"))))}var oa="idle",ma="process",da="success",pa="error";function fa(){var e=n.useState([]),a=Object(_e.a)(e,2),t=a[0],r=a[1],l=n.useState(0),c=Object(_e.a)(l,2),u=c[0],i=c[1],s=n.useState(oa),o=Object(_e.a)(s,2),m=o[0],d=o[1],p=n.useState(1),f=Object(_e.a)(p,2),g=f[0],E=f[1],b=n.useState(10),v=Object(_e.a)(b,2),h=v[0],k=v[1],y=n.useCallback(Object(ce.a)(le.a.mark((function e(){var a,t,n,l;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(ma),e.next=3,Ze({page:g,limit:h});case 3:if(a=e.sent,t=a.data,n=t.data,l=t.count,!t.error){e.next=11;break}return d(pa),e.abrupt("return");case 11:d(da),r(n),i(l);case 14:case"end":return e.stop()}}),e)}))),[g,h]);return n.useEffect((function(){y()}),[y]),{data:t,count:u,status:m,page:g,limit:h,setPage:E,setLimit:k}}var ga=[{Header:"Nama",accessor:"nama"},{Header:"Detail",accessor:function(e){return r.a.createElement("div",null,e.provinsi,", ",e.kabupaten,", ",e.kecamatan,",",e.kelurahan," ",r.a.createElement("br",null),e.detail)}}],Ea=function(){var e=fa(),a=e.data,t=e.limit,n=e.page,l=e.status,c=e.count,i=e.setPage;return r.a.createElement(R.j,{size:"large"},r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(R.s,{as:"h3"}," Alamat pengiriman "),r.a.createElement("br",null),r.a.createElement(u.b,{to:"alamat-pengiriman/tambah"},r.a.createElement(R.b,null,"Tambah baru")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R.r,{items:a,columns:ga,totalItems:c,page:n,isLoading:"process"===l,perPage:t,onPageChange:function(e){return i(e)}})),"success"!==l||a.length?null:r.a.createElement("div",{className:"text-center p-10"},"Kamu belum menambahkan alamat pengiriman. ",r.a.createElement("br",null),r.a.createElement(u.b,{to:"/alamat-pengiriman/tambah"},r.a.createElement(R.b,null," Tambah Baru "))))},ba=t(64),va=t.n(ba),ha=t(65),ka=t.n(ha),ya=t(48),xa=t.n(ya),Oa=t(66),ja=t.n(Oa);function wa(e){return Sa.apply(this,arguments)}function Sa(){return(Sa=Object(ce.a)(le.a.mark((function e(a){var t,n,r,l,c;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},n=t.token,r=a.limit,l=a.page,c=l*r-r,e.next=5,se.get("".concat(G,"/api/orders"),{params:{skip:c,limit:r},headers:{authorization:"Bearer ".concat(n)}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _a(e){return Pa.apply(this,arguments)}function Pa(){return(Pa=Object(ce.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},n=t.token,e.next=3,se.post("".concat(G,"/api/orders"),a,{headers:{authorization:"Bearer ".concat(n)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Na=function(e){var a=e.children;return r.a.createElement("div",{className:"text-3xl flex justify-center"},a)},Ca=[{label:"Item",icon:r.a.createElement(Na,null,r.a.createElement(Z.a,null))},{label:"Alamat",icon:r.a.createElement(Na,null,r.a.createElement(va.a,null))},{label:"Konfirmasi",icon:r.a.createElement(Na,null,r.a.createElement(ka.a,null))}],Ia=[{Header:"Nama produk",accessor:function(e){return r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{src:"".concat(G,"/upload/").concat(e.image_url),width:48,alt:e.name}),e.name)}},{Header:"Jumlah",accessor:"qty"},{Header:"Harga satuan",id:"price",accessor:function(e){return r.a.createElement("span",null," @ ",ae(e.price)," ")}},{Header:"Harga total",id:"subtotal",accessor:function(e){return r.a.createElement("div",null,ae(e.price*e.qty))}}],Ta=[{Header:"Nama alamat",accessor:function(e){return r.a.createElement("div",null,e.nama," ",r.a.createElement("br",null),r.a.createElement("small",null,e.provinsi,", ",e.kabupaten,", ",e.kecamatan,",",e.kelurahan," ",r.a.createElement("br",null),e.detail))}}],Aa=function(){var e=r.a.useState(0),a=Object(_e.a)(e,2),t=a[0],n=a[1],l=Object(s.c)((function(e){return e.cart})),c=fa(),o=c.data,m=c.status,d=c.limit,p=c.page,f=c.count,g=c.setPage,E=r.a.useState(null),b=Object(_e.a)(E,2),v=b[0],h=b[1],k=Object(i.g)(),y=Object(s.b)();function x(){return(x=Object(ce.a)(le.a.mark((function e(){var a,t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={delivery_fee:U,delivery_address:v._id},e.next=3,_a(a);case 3:if(t=e.sent,!(null===(n=t.data)||void 0===n?void 0:n.error)){e.next=7;break}return e.abrupt("return");case 7:k.push("/invoice/".concat(n._id)),y(be());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.length?r.a.createElement(R.j,null,r.a.createElement(X,null),r.a.createElement(R.s,{as:"h3"},"Checkout"),r.a.createElement(R.q,{steps:Ca,active:t}),r.a.createElement("br",null),r.a.createElement("br",null),0===t?r.a.createElement("div",null,r.a.createElement(R.r,{items:l,columns:Ia,perPage:l.length,showPagination:!1}),r.a.createElement("div",{className:"text-right",style:{textAlign:"right"}},r.a.createElement(R.s,{as:"h4"},"Subtotal: ",ae(ee(l))),r.a.createElement("div",{className:"text-right",style:{textAlign:"right"}},r.a.createElement(R.b,{onClick:function(e){return n(t+1)},color:"red",iconAfter:r.a.createElement($.a,null)},"Selanjutnya")))):null,1===t?r.a.createElement("div",null,r.a.createElement(R.r,{items:o,columns:Ta,perPage:d,page:p,onPageChange:function(e){return g(e)},totalItems:f,isLoading:"process"===m,selectable:!0,primaryKey:"_id",selectedRow:v,onSelectRow:function(e){return h(e)}}),o.length||"success"!==m?null:r.a.createElement("div",{className:"text-center my-10"},r.a.createElement(u.b,{to:"/alamat-pengiriman/tambah"},"Kamu belum memiliki alamat pengiriman ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(R.b,null," Tambah alamat "))),r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(R.n,{desktop:2,tablet:2,mobile:2},r.a.createElement("div",null,r.a.createElement(R.b,{onClick:function(e){return n(t-1)},color:"gray",iconBefore:r.a.createElement(xa.a,null)},"Sebelumnya")),r.a.createElement("div",{className:"text-right",style:{textAlign:"right"}},r.a.createElement(R.b,{onClick:function(e){return n(t+1)},disabled:!v,color:"red",iconAfter:r.a.createElement($.a,null)},"Selanjutnya")))):null,2===t?r.a.createElement("div",null,r.a.createElement(R.r,{columns:[{Header:"",accessor:"label"},{Header:"",accessor:"value"}],items:[{label:"Alamat",value:r.a.createElement("div",null,v.nama," ",r.a.createElement("br",null),v.provinsi,", ",v.kabupaten,",",v.kecamatan,", ",v.kelurahan," ",r.a.createElement("br",null),v.detail)},{label:"Subtotal",value:ae(ee(l))},{label:"Ongkir",value:ae(U)},{label:"Total",value:r.a.createElement("b",null,ae(ee(l)+parseInt(U)))}],showPagination:!1}),r.a.createElement("br",null),r.a.createElement(R.n,{desktop:2,tablet:2,mobile:2},r.a.createElement("div",null,r.a.createElement(R.b,{onClick:function(e){return n(t-1)},color:"gray",iconBefore:r.a.createElement(xa.a,null)},"Sebelumnya")),r.a.createElement("div",{className:"text-right",style:{textAlign:"right"}},r.a.createElement(R.b,{onClick:function(){return x.apply(this,arguments)},color:"red",size:"large",iconBefore:r.a.createElement(ja.a,null)},"Bayar")))):null):r.a.createElement(i.a,{to:"/"})};function qa(){return(qa=Object(ce.a)(le.a.mark((function e(a){var t,n;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("auth")?JSON.parse(localStorage.getItem("auth")):{},n=t.token,e.next=3,oe.a.get("".concat(G,"/api/invoices/").concat(a),{headers:{authorization:"Bearer ".concat(n)}});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Da(e){switch(e.status){case"waiting_payment":return n.createElement(R.a,{color:"orange"},"Menunggu pembayaran");case"paid":return n.createElement(R.a,{color:"green"},"Sudah dibayar");case"processing":return n.createElement(R.a,{color:"yellow"},"Sedang diproses");case"in_delivery":return n.createElement(R.a,{color:"blue"},"Dalam pengiriman");case"delivered":return n.createElement(R.a,{color:"green"},"Pesanan diterima");default:return n.createElement("div",null)}}function Ra(){var e,a,t,r,l,c,u,s,o=n.useState(null),m=Object(_e.a)(o,2),d=m[0],p=m[1],f=n.useState(""),g=Object(_e.a)(f,2),E=g[0],b=g[1],v=n.useState("process"),h=Object(_e.a)(v,2),k=h[0],y=h[1],x=Object(i.h)().params;return n.useEffect((function(){(function(e){return qa.apply(this,arguments)})(null===x||void 0===x?void 0:x.order_id).then((function(e){var a=e.data;(null===a||void 0===a?void 0:a.error)&&b(a.message||"Terjadi keslahan yang tidak diketahui"),p(a)})).finally((function(){return y("idle")}))}),[x]),E.length?n.createElement(R.j,null,n.createElement(X,null),n.createElement(R.s,{as:"h3"}," Terjadi Kesalahan "),E):"process"===k?n.createElement(R.j,null,n.createElement("div",{className:"text-center py-10"},n.createElement("div",{className:"inline-block"},n.createElement(H.a,{color:"red"})))):n.createElement(R.j,null,n.createElement(X,null),n.createElement(R.s,{as:"h3"}," Invoice "),n.createElement("br",null),n.createElement(R.r,{showPagination:!1,items:[{label:"Status",value:n.createElement(Da,{status:null===d||void 0===d?void 0:d.payment_status})},{label:"Order ID",value:"#"+(null===d||void 0===d||null===(e=d.order)||void 0===e?void 0:e.order_number)},{label:"Total amount",value:ae(null===d||void 0===d?void 0:d.total)},{label:"Billed to",value:n.createElement("div",null,n.createElement("b",null,null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.full_name," ")," ",n.createElement("br",null),null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.email," ",n.createElement("br",null)," ",n.createElement("br",null),null===d||void 0===d||null===(r=d.delivery_address)||void 0===r?void 0:r.detail," ",n.createElement("br",null),null===d||void 0===d||null===(l=d.delivery_address)||void 0===l?void 0:l.kelurahan,",",null===d||void 0===d||null===(c=d.delivery_address)||void 0===c?void 0:c.kecamatan," ",n.createElement("br",null),null===d||void 0===d||null===(u=d.delivery_address)||void 0===u?void 0:u.kabupaten," ",n.createElement("br",null),null===d||void 0===d||null===(s=d.delivery_address)||void 0===s?void 0:s.provinsi)},{label:"Payment to",value:n.createElement("div",null,J," ",n.createElement("br",null),F," ",n.createElement("br",null),V.account_no," ",n.createElement("br",null),V.bank_name)}],columns:[{Header:"Invoice",accessor:"label"},{Header:"",accessor:"value"}]}))}Da.defaultProps={};var Ma=t(67),Ha=t.n(Ma),La=t(68),za=t.n(La),Ba=t(69),Ga=t.n(Ba),Ka=function(e){var a=e.children;return r.a.createElement("div",{className:"text-white text-5xl flex justify-center mb-5"},a)},Ua=[{label:"Beranda",icon:r.a.createElement(Ka,null,r.a.createElement(Ha.a,null)),url:"/"},{label:"Alamat",icon:r.a.createElement(Ka,null,r.a.createElement(za.a,null)),url:"/alamat-pengiriman"},{label:"Pesanan",icon:r.a.createElement(Ka,null,r.a.createElement(Ga.a,null)),url:"/pesanan"},{label:"Logout",icon:r.a.createElement(Ka,null,r.a.createElement($.a,null)),url:"/logout"}],Ja=function(){return r.a.createElement(R.j,null,r.a.createElement(X,null),r.a.createElement(R.s,{as:"h3"}," Akun Anda "),r.a.createElement("br",null),r.a.createElement(R.n,{desktop:4,tablet:4,mobile:2},Ua.map((function(e,a){return r.a.createElement("div",{key:a,className:"px-2 pb-2"},r.a.createElement(u.b,{to:e.url},r.a.createElement(R.d,{header:e.icon,body:r.a.createElement("div",{className:"text-center\r font-bold text-white"},e.label)})))}))))},Fa=t(70),Va=t.n(Fa),Wa=[{Header:"",id:"Status",accessor:function(e){return r.a.createElement("div",null,"#",e.order_number," ",r.a.createElement("br",null),r.a.createElement(Da,{status:e.status}))}},{Header:"Items",accessor:function(e){return r.a.createElement("div",null,e.order_items.map((function(e){return r.a.createElement("div",{key:e._id},e.name," ",e.qty)})))}},{Header:"Total",accessor:function(e){return r.a.createElement("div",null,ae(ee(e.order_items)+e.delivery_fee))}},{Header:"Invoice",accessor:function(e){return r.a.createElement("div",null,r.a.createElement(u.b,{to:"/invoice/".concat(e._id)},r.a.createElement(R.b,{color:"gray",iconBefore:r.a.createElement(Va.a,null)},"Invoice")))}}],Xa=function(){var e=r.a.useState([]),a=Object(_e.a)(e,2),t=a[0],n=a[1],l=r.a.useState(0),c=Object(_e.a)(l,2),u=c[0],i=c[1],s=r.a.useState("idle"),o=Object(_e.a)(s,2),m=o[0],d=o[1],p=r.a.useState(1),f=Object(_e.a)(p,2),g=f[0],E=f[1],b=r.a.useState(10),v=Object(_e.a)(b,2),h=v[0],k=(v[1],r.a.useCallback(Object(ce.a)(le.a.mark((function e(){var a,t;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d("process"),e.next=3,wa({limit:h,page:g});case 3:if(a=e.sent,!(t=a.data).error){e.next=8;break}return d("error"),e.abrupt("return");case 8:d("success"),n(t.data),i(t.count);case 11:case"end":return e.stop()}}),e)}))),[g,h]));return r.a.useEffect((function(){k()}),[k]),r.a.createElement(R.j,null,r.a.createElement(X,null),r.a.createElement(R.s,{as:"h3"}," Pesanan Anda "),r.a.createElement("br",null),r.a.createElement(R.r,{items:t,totalItems:u,columns:Wa,onPageChange:function(e){return E(e)},page:g,isLoading:"process"===m}))},Ya=function(){var e=Object(i.g)(),a=Object(s.b)();return n.useEffect((function(){(function(){return Me.apply(this,arguments)})().then((function(){return a({type:p})})).then((function(){return e.push("/")}))}),[a,e]),n.createElement(R.j,{size:"small"},n.createElement("div",{className:"text-center flex flex-col justify-center itemscenter"},n.createElement(H.a,{color:"red"}),n.createElement("br",null),"Logging out ..."))},$a=t(41),Qa=function(e){var a=e.children,t=Object($a.a)(e,["children"]),r=Object(s.c)((function(e){return e.auth})).user;return n.createElement(i.b,t,r?a:n.createElement(i.a,{to:"/login"}))};function Za(e){var a=e.children,t=Object($a.a)(e,["children"]),r=Object(s.c)((function(e){return e.auth})).user;return n.createElement(i.b,t,r?n.createElement(i.a,{to:"/"}):a)}var et=function(){return r.a.useEffect((function(){D.subscribe(Se),function(){we.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{store:D},r.a.createElement(u.a,null,r.a.createElement(i.d,null,r.a.createElement(Qa,{path:"/logout"},r.a.createElement(Ya,null)),r.a.createElement(Qa,{path:"/pesanan"},r.a.createElement(Xa,null)),r.a.createElement(Qa,{path:"/account"},r.a.createElement(Ja,null)),r.a.createElement(Qa,{path:"/invoice/:order_id"},r.a.createElement(Ra,null)),r.a.createElement(Qa,{path:"/checkout"},r.a.createElement(Aa,null)),r.a.createElement(Qa,{path:"/alamat-pengiriman/tambah"},r.a.createElement(sa,null)),r.a.createElement(Qa,{path:"/alamat-pengiriman"},r.a.createElement(Ea,null)),r.a.createElement(Za,{path:"/register"},r.a.createElement(Ge,null)),r.a.createElement(Za,{path:"/register/berhasil"},r.a.createElement(Ke,null)),r.a.createElement(Za,{path:"/login"},r.a.createElement($e,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(xe,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,a,t){e.exports=t(110)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.eb7a3f9a.chunk.js.map