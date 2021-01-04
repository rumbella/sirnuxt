<template>
 

                        <div 
                         v-editable="blok"
                        class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 " id="puppa" >
           <div class="flex h-screen bg-red-100 inline-block justify-center lg:max-w-screen-2xl mx-auto rounded-lg bg-scroll bg-cover bg-center bg-no-repeat mt-12 bg-pan-bottom" :style="{ backgroundImage: `url(${blok.immagine})` } ">
<span class="mb-auto mt-auto   justify-center max-w-4xl">
   
                      <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" class="content-inner text-white text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold ">{{ blok.testoaos}}
                          </h1>
                            <div id="quotescroll" class="content-inner text-white text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold ">
                              {{ blok.testo}}
                            </div>
               
                        
                  

  </span>
</div>
            
           
            </div>
   
 

  
</template>

     
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>   