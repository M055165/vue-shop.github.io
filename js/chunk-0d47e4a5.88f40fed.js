(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d47e4a5"],{"2b10":function(t,s,a){},"519a":function(t,s,a){"use strict";var i=a("b1bc"),e=a.n(i);e.a},6148:function(t,s,a){"use strict";var i=a("2b10"),e=a.n(i);e.a},"933d":function(t,s,a){"use strict";var i=a("b2af"),e=a.n(i);e.a},b1bc:function(t,s,a){},b2af:function(t,s,a){},fe2e:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"bg-cover oldbg"}),a("Slide"),t._m(0),a("Customer")],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container mt-1"},[a("p",{staticClass:"h1 "},[t._v("產品理念")]),a("div",{staticClass:"row mb-5 mt-5"},[a("div",{staticClass:"col-md-6 col-12"},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1554042861-0ad2fc2a8dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}})]),a("div",{staticClass:"col-md-6 text-center mt-4 col-12"},[a("p",{staticClass:"h3"},[t._v("餐具用的好 健康跟著跑")]),a("br"),a("p",{staticClass:"text-center"},[t._v("台灣在2018年高齡人口（65歲以上人口）比例已超過14%，正式邁入高齡（aged）社會，且高齡化的問題日益嚴重!然而相對於年輕人，老年人的手腳較不靈活，因此有一個專門為他們設計的餐具可以說是老年人的一大福音!")])])]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-6 text-center mt-5 col-12 order-2 order-md-1"},[a("p",{staticClass:"h3"},[t._v("輪椅挑的巧 行動沒煩惱")]),a("br"),a("p",{staticClass:"text-center"},[t._v("輪椅，對於不良於行的人而言不只是單純的移動方法，更是促進生活自立的重要工具。另外，也是人們從事喜歡的活動或旅遊時擴大活動範圍的良伴。")])]),a("div",{staticClass:"col-md-6 col-12 order-1 order-md-2"},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",alt:""}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 col-12"},[a("img",{attrs:{src:"https://images.unsplash.com/photo-1523246224990-496e9a19113a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",alt:""}})]),a("div",{staticClass:"col-md-6 text-center mt-3 col-12"},[a("p",{staticClass:"h3"},[t._v("食品吃得好 醫生掰掰了")]),a("br"),a("p",{staticClass:"text-center"},[t._v("要讓細胞機能活化健康，必須適時補充身體所不足的營養素（Nutrients），人體需要四十多種均衡營養素，來維持身體機能的正常運作。因此除了調整飲食及生活習慣外，視個人需求補充保健食品，可以讓身體更健康，更有活力！")])])])])}],c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"slide"},[a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"slideshow col-md-12 col-12 no-gutters"},[a("ul",t._l(t.imgArray,(function(s,i){return a("li",{directives:[{name:"show",rawName:"v-show",value:i===t.markIndex,expression:"index===markIndex"}],key:i},[a("img",{attrs:{src:s,alt:""}}),a("div",{staticClass:"shoptitle col-md-12 col-12"},[0==i?a("p",[t._v("全部商品")]):t._e(),1==i?a("p",[t._v("老人專用餐具")]):t._e(),2==i?a("p",[t._v("輪椅")]):t._e(),3==i?a("p",[t._v("健康保健食品")]):t._e()])])})),0)])]),a("div",{staticClass:"bar"},t._l(t.imgArray,(function(s,i){return a("span",{key:i,class:{active:i===t.markIndex,"col-md-12":!0,"col-12":!0},on:{click:function(s){return t.point(i)}}})})),0)])},r=[],o={data:function(){return{markIndex:0,imgArray:["https://images.unsplash.com/photo-1535397318751-32521c97e1c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80","https://images.unsplash.com/photo-1532431993925-00ed69b363bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1565615833231-e8c91a38a012?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1527844817887-9b937993518b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"]}},methods:{point:function(t){this.markIndex=t},play:function(){var t=this;setInterval((function(){t.markIndex++,t.markIndex>=t.imgArray.length&&(t.markIndex=0)}),5e3)}},created:function(){this.play()}},n=o,l=(a("933d"),a("2877")),d=Object(l["a"])(n,c,r,!1,null,"70fa5442",null),m=d.exports,u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h2",{staticClass:"text-center mb-5 font-weight-bold mt-5"},[t._v("顧客回饋")]),a("div",{staticClass:"row no-gutters px-5 mb-5"},t._l(t.user,(function(s,i){return a("div",{key:i,staticClass:"col-md-2 col-6 boxrow",on:{click:t.imgClick}},[a("img",{staticClass:"w-100 imgBox",attrs:{src:s.picture.large,alt:""}}),a("p",[t._v(t._s(t.msg[i]))])])})),0)])},p=[],f=a("1157"),h=a.n(f),v={data:function(){return{user:[],msg:["像極了愛情","出貨迅速","東西很美","極力推薦","優質賣家","謝謝你唷","交貨快","貨品已收到","超讚ㄉ賣家","服務親切","超滿意","價錢公道"],imgFlag:!1}},methods:{imgClick:function(){this.imgFlag=!this.imgFlag}},created:function(){var t=this;h.a.ajax({url:"https://randomuser.me/api/?results=12",dataType:"json",success:function(s){t.user=s.results}})}},b=v,x=(a("519a"),Object(l["a"])(b,u,p,!1,null,"103515e1",null)),g=x.exports,C={components:{Slide:m,Customer:g}},_=C,w=(a("6148"),Object(l["a"])(_,i,e,!1,null,"4efee39a",null));s["default"]=w.exports}}]);
//# sourceMappingURL=chunk-0d47e4a5.88f40fed.js.map