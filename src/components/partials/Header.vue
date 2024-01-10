<template>
    <header class=" w-full py-4 px-4 lg:px-2 xl:px-0 h-[120px] flex border-[#F2F3F6] dark:border-gray-500 lg:border-b-0" :class="{'border-b-2':show}">
        <div class=" w-full max-w-[1269px] mx-auto flex m-auto items-center justify-between">
            <a href="/">
                <img src="/images/logo_black.png" class="  dark:hidden  " alt="">
                 <img src="/images/logo_white.png" class="  hidden dark:block " alt="">
            </a>

            <div class=" flex items-center space-x-5 lg:space-x-5 xl:space-x-10 whitespace-nowrap">
                <a @click.prevent="scrollToSection('concept')" href="javascript:void(0)" class=" text-primary dark:text-white font-helvetica font-bold text-base hidden lg:block">Le concept</a>
                <a @click.prevent="scrollToSection('prochaine')" href="javascript:void(0)" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">La prochaine compétition</a>
                <a @click.prevent="scrollToSection('clients')" href="javascript:void(0)" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">Nos clients</a>
                <a @click.prevent="scrollToSection('faq')" href="javascript:void(0)" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">FAQ</a>
                <a @click.prevent="scrollToSection('contact')" href="javascript:void(0)" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">Contact</a>
                <div class=" hidden sm:block">
                    <button class=" flex items-center space-x-3 bg-primary dark:bg-white rounded-[2rem] border-2 border-[#242726] text-white dark:text-primary text-base font-bold h-[3rem] px-4 hover:scale-110 duration-200 font-helvetica ">
                        <span>Aller vers l’app web</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class=" dark:hidden" >
                            <path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class=" hidden dark:block">
                            <path d="M7 17L17 7" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 7H17V17" stroke="#25282B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <button class=" flex items-center space-x-2 lg:hidden" @click="toggleMenu">
                    <span class=" text-primary dark:text-white text-[0.86044rem] font-bold font-helvetica">
                        Menu
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" class=" dark:hidden">
                        <path d="M2.72095 10.4998H18.2093" stroke="#171717" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.72095 5.33691H18.2093" stroke="#171717" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.72095 15.6626H18.2093" stroke="#171717" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" class=" hidden dark:block">
                        <path d="M2.72095 10.4998H18.2093" stroke="white" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.72095 5.33691H18.2093" stroke="white" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M2.72095 15.6626H18.2093" stroke="white" stroke-width="1.72093" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>

                <button  @click="toggleDarkMode"  class=" dark:text-white text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:block hidden">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:hidden">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                    </svg>
                </button>
            </div>
        </div>
    </header>

     <aside id="default-sidebar" :class="{'translate-x-0  sideBar':show,'translate-x-full ':!show}" class="  fixed py-4  bg-white dark:bg-primary  lg:hidden top-[7.5rem] h-[89.8%] right-0 z-40 w-full sm:max-w-[75%]  transition-transform  " aria-label="Sidebar">
            <div class="h-full  overflow-y-auto flex flex-col items-center justify-between pb-16 sm:pb-10  ">
                <div class=" w-full flex">
                     <ul class="space-y-8 text-center font-medium py-8 m-auto">
                    <li>
                     <a href="javascript:void(0)" @click="scrollToSection('concept')"  class=" text-primary dark:text-white font-helvetica font-bold text-base ">
                            Le concept
                     </a>
                    </li>
                    <li>
                    <a @click="scrollToSection('prochaine')" href="javascript:void(0)"  class=" text-primary dark:text-white font-helvetica font-bold text-base ">
                           La prochaine compétition
                     </a>

                    </li>
                    <li>
                    <a @click="scrollToSection('clients')" href="javascript:void(0)"  class=" text-primary dark:text-white font-helvetica font-bold text-base ">
                            Nos clients
                     </a>

                    </li>
                     <li>
                    <a @click="scrollToSection('faq')" href="javascript:void(0)"  class=" text-primary dark:text-white font-helvetica font-bold text-base ">
                            FAQ
                     </a>

                    </li>
                     <li>
                    <nuxt-link @click="scrollToSection('contact')" href="javascript:void(0)"  class=" text-primary dark:text-white font-helvetica font-bold text-base ">
                            Contact
                     </nuxt-link>

                    </li>
                </ul>
                </div>

                <div class=" w-full   max-w-[20rem] flex flex-col items-start space-y-4">
                    <button class=" w-full rounded-[2.58631rem] bg-white space-x-2 hover:scale-110 duration-200 h-[3.70rem] flex items-center justify-center border-[#EFEFEF] border-[2.5px]">
                        <img src="/images/apple.png" alt="">
                        <span class=" text-primary font-bold font-helvetica text-[1.21706rem]">Télécharger sur l’app store</span>
                    </button>
                     <button class=" w-full rounded-[2.58631rem] bg-white space-x-2 hover:scale-110 duration-200 h-[3.70rem] flex items-center justify-center border-[#EFEFEF] border-[2.5px]">
                        <img src="/images/googleplay.png" alt="">
                        <span class=" text-primary font-bold font-helvetica text-[1.21706rem]">Télécharger sur google play</span>
                    </button>
                </div>  
            </div>
     </aside>
</template>

<script setup>
    import { onMounted, ref } from "vue";
    import { useDark,useToggle } from "@vueuse/core";
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const show = ref(false)

    const toggleMenu = () => {
         show.value = !show.value
         document.body.classList.toggle('overflow-hidden');
    }

    const toggleDarkMode = () => {
        toggleDark();
        document.body.classList.toggle('dark');
    }

    const scrollToSection = (id) => {
        var elementToScrollTo = document.getElementById(id);
        show.value = false
        document.body.classList.remove('overflow-hidden');
        // Check if the element exists
        if (elementToScrollTo) {
            // Scroll the element into view
            elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
             
        }
    }

    onMounted(() => {
        if(isDark.value){
             document.body.classList.add('dark');
        }else{
             document.body.classList.remove('dark');
        }
            
    })
</script>


<style scoped>
 .sideBar {
    box-shadow: -12px 34px 35px 0px rgba(0, 0, 0, 0.25);
 }
</style>