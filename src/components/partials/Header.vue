<template>
    <div class=" w-full py-4 px-4 lg:px-2 xl:px-0">
        <div class=" w-full max-w-[1269px] mx-auto flex items-center justify-between">
            <a href="/">
                <img src="/images/logo_black.png" class=" w-full dark:hidden  " alt="">
                 <img src="/images/logo_white.png" class=" w-full hidden dark:block " alt="">
            </a>

            <div class=" flex items-center space-x-5 lg:space-x-5 xl:space-x-10">
                <a href="" class=" text-primary dark:text-white font-helvetica font-bold text-base hidden lg:block">Le concept</a>
                <a href="" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">La prochaine compétition</a>
                <a href="" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">Nos clients</a>
                <a href="" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">FAQ</a>
                <a href="" class=" text-primary dark:text-white  font-helvetica font-bold text-base hidden lg:block">Contact</a>
                <div>
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
                <button class=" flex items-center space-x-2 lg:hidden">
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
            </div>
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from "vue";

    onMounted(() => {
            document.body.classList.add('dark');
    })
</script>