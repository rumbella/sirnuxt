<template>
  <div
    v-editable="blok"
    class="flex h-screen bg-red-100 inline-block justify-center lg:max-w-screen-2xl mx-auto rounded-lg bg-scroll bg-cover bg-center bg-no-repeat mt-12 bg-pan-bottom font-bold text-center" :style="{ backgroundImage: `url(${blok.immaginesfondo})` } ">
    <span class="mb-auto mt-auto   justify-center max-w-4xl">
       <h1 id="titolo" class="text-white text-center text-9xl sm:text-6xl lg:text-6xl leading-none font-extrabold "> 
          {{ blok.headline}}
                          </h1>

    </span>
    
  </div>
</template>

     
<script>
import Flickity from 'vue-flickity'
// import locomotiveScroll from "locomotive-scroll"
import { gsap } from "gsap"

// with webpack you can import css
require('wovue-off-canvas/dist/off-canvas.css')

import OffCanvas from 'wovue-off-canvas'
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

     name: 'MyComponent',
  components: { Flickity },

  
  
    mounted:function () {
// this.smoothSroller()
this.Scrollertextinview()
this.Scrollertext()  
this.startAnimations()  
this.testoAnimazone()  
this.startAnimationsIntro()  

var scroll = new SmoothScroll('a[href*="#"]');
    },
    data() {
    return {
      lmS: null,
      flickityOptions: {
        freeScroll: true,
contain: true,
// disable previous & next buttons and dots
prevNextButtons: false,
pageDots: false,
groupCells: true,
groupCells: 2
        
        // any options from Flickity can be used
      }
    }
  },
methods: {





  
     startAnimations: function(){
      var tl = new TimelineMax ({onUpdate:updatePercentage})
       
       tl.from(".bg", 0.5, {opacity: 1, duration:1.5, width:'600px'}, 2) 
       
      
      //tl.to(".bg", 1, {width:'50%', height: "50%", y:'-30'}, 0) 


const scene = this.$scrollmagic.scene({
triggerElement:'.wrapper',
triggerHook: 0,
duration: "110%"
})
.setPin('.wrapper')
.setTween(tl)

this.$scrollmagic.addScene(scene)

function updatePercentage (){
tl.progress()
} 

   },

    startAnimationsIntro: function(){
      gsap.to ("#titolo",{duration:1.5, color: "red", y:'-30'}) 
       


   },
//      smoothSroller: function(){


// var tl = new TimelineLite, 
//     mySplitText = new SplitText("#quote", {type:"lines,words,chars", linesClass:"myLines"}), 
//     chars = mySplitText.chars; //an array of all the divs that wrap each character



// TweenLite.set("#quote", {perspective:400});

// tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");


       


//    },

  Scrollertextinview: function(){

        var tl = new TimelineLite, 
    mySplitText = new SplitText("#quotescroll", {type:"lines,words,chars", linesClass:"myLines"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character



TweenLite.set("#quotescroll", {perspective:900});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0.5, y:80, rotationX:180, transformOrigin:"0% 70% -50",  ease:Back.easeOut}, 0.01, "+=0"); 
       //tl.to(".testo", 0.5, {opacity: 1, duration:0.5, scale: 2.5}, 1) 
       
      
      //tl.to(".bg", 1, {width:'50%', height: "50%", y:'-30'}, 0) 


const scene = this.$scrollmagic.scene({
triggerElement:'#puppa',
triggerHook: 0
})

.setTween(tl)

this.$scrollmagic.addScene(scene)

       



   },



  Scrollertext: function(){


       
var tl = new TimelineLite, 
    mySplitText = new SplitText("#quote", {type:"lines,words,chars", linesClass:"myLines"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character



TweenLite.set("#quote", {perspective:400});

tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");


   },

     testoAnimazone: function(){

         var tl = new TimelineMax ({})
         tl.staggerFrom('.reveal', 1.5,  {y:"100%", ease:Power4.easeOut}, 0.5) 
       //tl.to(".testo", 0.5, {opacity: 1, duration:0.5, scale: 2.5}, 1) 
       
      
      //tl.to(".bg", 1, {width:'50%', height: "50%", y:'-30'}, 0) 


const scene = this.$scrollmagic.scene({
triggerElement:'.puppa',
triggerHook: 0
})

.setTween(tl)

this.$scrollmagic.addScene(scene)


    
        


   },
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }


  
	


   
}

}
</script>   