(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{521:function(t,e,o){var content=o(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(39).default)("1b7833da",content,!0,{sourceMap:!1})},526:function(t,e,o){"use strict";o(521)},527:function(t,e,o){(e=o(38)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}.page-enter-active{-webkit-animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1) both;animation:fade-in-top .6s cubic-bezier(.39,.575,.565,1) both}.page-enter-leave{-webkit-animation:fade-out-top .7s cubic-bezier(.25,.46,.45,.94) both;animation:fade-out-top .7s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes fade-in-top{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes fade-in-top{0%{transform:translateY(-50px);opacity:0}to{transform:translateY(0);opacity:1}}@-webkit-keyframes fade-out-top{0%{transform:translateY(0);opacity:1}to{transform:translateY(-50px);opacity:0}}@keyframes fade-out-top{0%{transform:translateY(0);opacity:1}to{transform:translateY(-50px);opacity:0}}@-webkit-keyframes scale-in-ver-bottom{0%{transform:scaleY(0);transform-origin:0 100%;opacity:1}to{transform:scaleY(1);transform-origin:0 100%;opacity:1}}@keyframes scale-in-ver-bottom{0%{transform:scaleY(0);transform-origin:0 100%;opacity:1}to{transform:scaleY(1);transform-origin:0 100%;opacity:1}}',""]),t.exports=e},530:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on("input",(function(e){e.story.id===t.story.id&&(t.story.content=e.story.content)})),this.$storybridge.on(["published","change"],(function(e){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/home",{version:"draft"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.response.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content form api"}))}))}},r=(o(526),o(8)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[this.story.content.component?e(this.story.content.component,{key:this.story.content._uid,tag:"component",attrs:{blok:this.story.content}}):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);