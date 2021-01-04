<template>

  

      <nav class="fixed bg-white h-12 w-full shadow-md p-6 flex justify-between items-center z-50 top-0">
	 <!--   right side -->
            <div class="lg:visible lg:visible ">
<NuxtLink to="/" class=" p-2 text-indigo-200 hover:text-indigo-100 mr-2">logo</NuxtLink>
                
			</div>
			 <!--   left side -->
            <div class="flex items-center invisible lg:visible">
 <NuxtLink to="/about" class="p-2 text-gray-900 hover:text-gray-300 mr-2 ">about</NuxtLink>
  <NuxtLink to="/intro" class="p-2 text-gray-900 hover:text-gray-300 mr-2" >intro</NuxtLink>
               
          
			</div>
			
			   <!--   right side -->
            <div class="flex items-center ">
  <!-- <button class="mr-2" >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button> -->
                <a href=" # " class=" py-2 px-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150 hidden md:block ">Sign Up</a>
                <a href="#" class="flex content-end float-right p-2 text-gray-900 hover:text-indigo-100 mr-2 font-mono font-extrabold md:hidden lg:hidden" aria-label="Open Menu" @click="drawer">MENU</a>
            </div>
			



    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="isOpen = false"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="isOpen = false"
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
        ></div>
      </div>
    </transition>
    <aside
      class="transform top-0 right-0  w-3/4 lg:w-1/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 text-center justify-items-center"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full' "
    >
     <!-- <button class="ml-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button> -->
      <span
        @click="isOpen = false"
        class="flex w-full items-right p-4 border-b text-center relative right-0"
      >
      <a class="ml-2 right-0 relative text-center " aria-label="Open Menu" @click="drawer"> chiudi</a>
        <!-- <img src="/logos/fox-hub.png" alt="Logo" class="h-auto w-32 mx-auto" /> -->
      </span>
     
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-center justify-items-center "
        >
        
            <NuxtLink to="/" class="p-2 text-gray-900 hover:text-gray-300 mr-2 text-center text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold justify-items-center">logo</NuxtLink>
        
        </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white "
        >
       
            <NuxtLink to="/about" class="p-2 text-gray-900 hover:text-gray-300 mr-2 text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold ">about</NuxtLink>
           </span>
      <span
        @click="isOpen = false"
        class="flex items-center p-4 hover:bg-indigo-500 hover:text-white text-center "
        >
       
            <NuxtLink to="/intro" class="p-2 text-gray-900 hover:text-gray-300 mr-2 text-center text-4xl sm:text-6xl lg:text-6xl leading-none font-extrabold  justify-items-center ">intro</NuxtLink>
            
            </span>
     
     
      <div class="fixed bottom-0 w-full ">
        <button
          class="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full"
        >
         
          <span>Share</span>
        </button>
    
      </div>
    </aside>
</nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", e => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
  }
};
</script>