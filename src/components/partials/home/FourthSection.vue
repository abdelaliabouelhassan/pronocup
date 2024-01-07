<template>
    <section class=" w-full max-w-[1280px] mx-auto py-28 px-4 xl:px-0">
        <div class=" w-full pt-16 md:pt-28 bg-[#F2F4F7] px-4 rounded-[2rem] dark:bg-[#242726] flex flex-col items-center space-y-4">
            <div class=" flex flex-col items-center space-y-4">
                <h1 class=" text-primary dark:text-white text-center leading-[116.865%] text-[1.75rem] md:text-[4rem] font-helvetica font-medium">Découvrez notre app mobile</h1>
                <span class=" text-[#98A2B3] font-helvetica text-xl md:text-2xl font-normal text-center">
                    Téléchargez notre app mobile et jouez où vous voulez, quand vous voulez !
                </span>

                <div class=" flex max-w-[686px] w-full sm:flex-row flex-col items-center space-y-4 sm:space-x-8 pt-4">
                      <button class=" w-full max-w-[19.72rem] rounded-[2.58631rem] dark:bg-[#1E2120] bg-white space-x-2 hover:scale-110 duration-200 h-[3.70rem] flex items-center justify-center dark:border-2 border-[#98A2B3] ">
                        <img src="/images/apple.png" class=" dark:hidden" alt="">
                        <img src="/images/home/applewhite.png" class=" dark:block hidden" alt="">
                        <span class=" dark:text-white text-primary font-bold font-helvetica text-[0.91281rem] md:text-[1.21706rem]">Télécharger sur l’app store</span>
                    </button>
                     <button class=" w-full max-w-[19.72rem]  rounded-[2.58631rem] dark:bg-[#1E2120] bg-white space-x-2 hover:scale-110 duration-200 h-[3.70rem] flex items-center justify-center dark:border-2 border-[#98A2B3]">
                        <img src="/images/googleplay.png" alt="">
                        <span class=" dark:text-white text-primary font-bold font-helvetica text-[0.91281rem] md:text-[1.21706rem]">Télécharger sur google play</span>
                    </button>
                </div>
            </div>

            <div class=" ">
                <img src="/images/home/apps.png" class=" hidden sm:block" alt="">
                 <img src="/images/home/appsmobile.png" class=" sm:hidden" alt="">
            </div>
        </div>
    </section>
</template>