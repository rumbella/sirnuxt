(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{520:function(t,e,l){var content=l(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(39).default)("054a0e9a",content,!0,{sourceMap:!1})},524:function(t,e,l){"use strict";l(520)},525:function(t,e,l){(e=l(38)(!1)).push([t.i,'html{scroll-behavior:smooth}h1.rev{color:#000;position:relative;overflow:hidden;font-size:100px;height:130px;margin:0}.reveal{position:absolute;z-index:10;left:30%}.spacer.s2{min-height:210px}body{overflow-x:hidden}.carousel{background:#eee}.carousel-cell{width:25%;height:500px;margin-right:10px;border-radius:5px;counter-increment:carousel-cell}@media screen and (max-width:39.9375em){.carousel-cell{width:100%;height:500px;margin-right:40px;border-radius:5px;counter-increment:carousel-cell}}@media screen and (min-width:40em) and (max-width:63.9375em){.carousel-cell{width:33%;height:500px;margin-right:10px;border-radius:5px;counter-increment:carousel-cell}}.title{font-family:"Oswald","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}',""]),t.exports=e},529:function(t,e,l){"use strict";l.r(e);var o=l(58),r=l(269),n=l(270);l(281);l(280);var c={name:"MyComponent",components:{Flickity:r.a},mounted:function(){this.Scrollertextinview(),this.Scrollertext(),this.startAnimations(),this.testoAnimazone(),this.startAnimationsIntro();new SmoothScroll('a[href*="#"]')},data:function(){return{lmS:null,flickityOptions:Object(o.a)({freeScroll:!0,contain:!0,prevNextButtons:!1,pageDots:!1,groupCells:!0},"groupCells",2)}},methods:{startAnimations:function(){var t=new TimelineMax({onUpdate:function(){t.progress()}});t.from(".bg",.5,{opacity:1,duration:1.5,width:"600px"},2);var e=this.$scrollmagic.scene({triggerElement:".wrapper",triggerHook:0,duration:"110%"}).setPin(".wrapper").setTween(t);this.$scrollmagic.addScene(e)},startAnimationsIntro:function(){n.a.to("#titolo",{duration:1.5,color:"red",y:"-30"})},Scrollertextinview:function(){var t=new TimelineLite,e=new SplitText("#quotescroll",{type:"lines,words,chars",linesClass:"myLines"}).chars;TweenLite.set("#quotescroll",{perspective:900}),t.staggerFrom(e,.8,{opacity:0,scale:.5,y:80,rotationX:180,transformOrigin:"0% 70% -50",ease:Back.easeOut},.01,"+=0");var l=this.$scrollmagic.scene({triggerElement:"#puppa",triggerHook:0}).setTween(t);this.$scrollmagic.addScene(l)},Scrollertext:function(){var t=new TimelineLite,e=new SplitText("#quote",{type:"lines,words,chars",linesClass:"myLines"}).chars;TweenLite.set("#quote",{perspective:400}),t.staggerFrom(e,.8,{opacity:0,scale:0,y:80,rotationX:180,transformOrigin:"0% 50% -50",ease:Back.easeOut},.01,"+=0")},testoAnimazone:function(){var t=new TimelineMax({});t.staggerFrom(".reveal",1.5,{y:"100%",ease:Power4.easeOut},.5);var e=this.$scrollmagic.scene({triggerElement:".puppa",triggerHook:0}).setTween(t);this.$scrollmagic.addScene(e)},next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()}}},d=(l(524),l(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("aside",{staticClass:"transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",class:t.isOpen?"translate-x-0":"-translate-x-full"},[t._v("\n...\n")]),t._v(" "),l("div",{attrs:{"data-scroll-container":""}},[l("div",{staticClass:"max-w-7xl flex flex-wrap content-center "}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),l("div",{staticClass:"lg:w-11/12 mx-auto py-6 sm:px-6 lg:px-8 "},[l("flickity",{ref:"flickity",attrs:{options:t.flickityOptions}},[l("div",{staticClass:"carousel-cell"},[l("div",{staticClass:"lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden my-10"},[l("div",{staticClass:"px-4 py-2"},[l("h1",{staticClass:"text-gray-900 font-bold text-3xl uppercase"},[t._v("NIKE AIR")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus")])]),t._v(" "),l("img",{staticClass:"h-56 w-full object-cover mt-2",attrs:{src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"NIKE AIR"}}),t._v(" "),l("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-900"},[l("h1",{staticClass:"text-gray-200 font-bold text-xl"},[t._v("$129")]),t._v(" "),l("button",{staticClass:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"},[t._v("Add to card")])])])]),t._v(" "),l("div",{staticClass:"carousel-cell"},[l("div",{staticClass:"lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden my-10"},[l("div",{staticClass:"px-4 py-2"},[l("h1",{staticClass:"text-gray-900 font-bold text-3xl uppercase"},[t._v("NIKE AIR")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus")])]),t._v(" "),l("img",{staticClass:"h-56 w-full object-cover mt-2",attrs:{src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"NIKE AIR"}}),t._v(" "),l("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-900"},[l("h1",{staticClass:"text-gray-200 font-bold text-xl"},[t._v("$129")]),t._v(" "),l("button",{staticClass:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"},[t._v("Add to card")])])])]),t._v(" "),l("div",{staticClass:"carousel-cell"},[l("div",{staticClass:"lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden my-10"},[l("div",{staticClass:"px-4 py-2"},[l("h1",{staticClass:"text-gray-900 font-bold text-3xl uppercase"},[t._v("NIKE AIR")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus")])]),t._v(" "),l("img",{staticClass:"h-56 w-full object-cover mt-2",attrs:{src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"NIKE AIR"}}),t._v(" "),l("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-900"},[l("h1",{staticClass:"text-gray-200 font-bold text-xl"},[t._v("$129")]),t._v(" "),l("button",{staticClass:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"},[t._v("Add to card")])])])]),t._v(" "),l("div",{staticClass:"carousel-cell"},[l("div",{staticClass:" lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden my-10"},[l("div",{staticClass:"px-4 py-2"},[l("h1",{staticClass:"text-gray-900 font-bold text-3xl uppercase"},[t._v("NIKE AIR")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus")])]),t._v(" "),l("img",{staticClass:"h-56 w-full object-cover mt-2",attrs:{src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"NIKE AIR"}}),t._v(" "),l("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-900"},[l("h1",{staticClass:"text-gray-200 font-bold text-xl"},[t._v("$129")]),t._v(" "),l("button",{staticClass:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"},[t._v("Add to card")])])])]),t._v(" "),l("div",{staticClass:"carousel-cell"},[l("div",{staticClass:" lg:max-w-full bg-white shadow-lg rounded-lg overflow-hidden my-10"},[l("div",{staticClass:"px-4 py-2"},[l("h1",{staticClass:"text-gray-900 font-bold text-3xl uppercase"},[t._v("NIKE AIR")]),t._v(" "),l("p",{staticClass:"text-gray-600 text-sm mt-1"},[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus")])]),t._v(" "),l("img",{staticClass:"h-56 w-full object-cover mt-2",attrs:{src:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"NIKE AIR"}}),t._v(" "),l("div",{staticClass:"flex items-center justify-between px-4 py-2 bg-gray-900"},[l("h1",{staticClass:"text-gray-200 font-bold text-xl"},[t._v("$129")]),t._v(" "),l("button",{staticClass:"px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"},[t._v("Add to card")])])])])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex h-screen bg-red-100 inline-block justify-center lg:max-w-screen-2xl mx-auto rounded-lg bg-scroll bg-cover bg-center bg-no-repeat mt-12 bg-pan-bottom",staticStyle:{"background-image":"url( 'https://res.cloudinary.com/thinkdigital/image/upload/v1568998621/6eed8ea3d4574849_jfmiwv.jpg')"}},[e("span",{staticClass:"mb-auto mt-auto   justify-center max-w-4xl"},[e("h1",{staticClass:"text-white text-center text-9xl sm:text-6xl lg:text-6xl leading-none font-extrabold ",attrs:{id:"titolo"}},[this._v("  Rapidly build modern websites without ever.\n                          ")]),this._v(" "),e("div",{staticClass:"text-white text-center text-9xl sm:text-6xl lg:text-9xl leading-none font-bold ",attrs:{id:"quote"}},[e("span",{staticClass:"text-transparent bg-gradient-to-r bg-clip-text from-green-500 to-blue-500"},[this._v("\n                            Rapidly build modern websites without ever.\n                            ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ",attrs:{id:"puppa"}},[e("div",{staticClass:"flex h-screen bg-red-100 inline-block justify-center lg:max-w-screen-2xl mx-auto rounded-lg bg-scroll bg-cover bg-center bg-no-repeat mt-12 bg-pan-bottom",staticStyle:{"background-image":"url( 'https://res.cloudinary.com/thinkdigital/image/upload/v1568998621/6eed8ea3d4574849_jfmiwv.jpg')"}},[e("span",{staticClass:"mb-auto mt-auto   justify-center max-w-4xl"},[e("h1",{staticClass:"content-inner text-white text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold ",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"bottom-bottom"}},[this._v("Rapidly build modern websites without ever.\n                          ")]),this._v(" "),e("div",{staticClass:"content-inner text-white text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold ",attrs:{id:"quotescroll"}},[this._v("\n                              Rapidly build modern websites without ever.\n                            ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"puppa bg-red-100 "},[e("div",{staticClass:"spacer s2"}),this._v(" "),e("div",{staticClass:" max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 text-center"},[e("div",{staticClass:"spacer s2"}),this._v(" "),e("h1",{staticClass:"rev "},[e("span",{staticClass:"reveal  font-extrabold"},[this._v("\n      Hello  BUM!\n    ")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:" wrapper max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ",attrs:{id:"banner"}},[e("div",{staticClass:"bg flex h-screen bg-red-100 inline-block justify-center lg:max-w-screen-2xl mx-auto rounded-lg bg-scroll bg-cover bg-center bg-no-repeat mt-12 bg-pan-bottom",staticStyle:{"background-image":"url( 'https://res.cloudinary.com/thinkdigital/image/upload/v1568998621/6eed8ea3d4574849_jfmiwv.jpg')"}},[e("div",{staticClass:"mb-auto mt-auto   justify-center max-w-4xl"})])])}],!1,null,null,null);e.default=component.exports}}]);