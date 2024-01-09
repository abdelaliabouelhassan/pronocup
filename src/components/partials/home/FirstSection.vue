<template>
    <section id="concept" class=" w-full flex flex-col items-center space-y-10 max-w-[1235px] py-10 px-4 xl:px-0 mx-auto">
        <h1 class=" text-primary dark:text-white font-helvetica text-[2rem] text-center md:text-[4rem] font-medium">Le concept de Pronocup</h1>
        <div  class=" w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div v-animate  class=" bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-start justify-between space-y-8">
               <div class=" w-full  flex flex-col items-start space-y-8">
                 <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" class=" m-auto">
                        <path d="M18.9998 34.493C27.5209 34.493 34.4928 27.5212 34.4928 19C34.4928 10.4789 27.5209 3.50708 18.9998 3.50708C10.4787 3.50708 3.50684 10.4789 3.50684 19C3.50684 27.5212 10.4787 34.493 18.9998 34.493Z" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12.8027 19H25.1971" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19 25.1971V12.8027" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Entrez le score des matchs et cumulez des points</h2>
                <p class=" text-[#98A2B3]  text-xl sm:text-2xl font-helvetica font-normal">
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </p>
               </div>

                <div class=" w-full max-w-[17rem] sm:max-w-[33.625rem]">
                    <img src="/images/home/final.png" class=" object-cover w-full" alt="">
                </div>
            </div>
            <div v-animate  class=" bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-start justify-between space-y-8">
               <div class=" w-full  flex flex-col items-start space-y-8">
                 <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                   <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" class=" m-auto">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2528 6.60567H26.7458V15.9014C26.7458 20.1797 23.2775 23.6479 18.9993 23.6479C14.721 23.6479 11.2528 20.1797 11.2528 15.9014V6.60567ZM8.15421 6.60567C8.15421 4.89437 9.5415 3.50708 11.2528 3.50708H26.7458C28.4571 3.50708 29.8444 4.89437 29.8444 6.60567H32.9429C34.6543 6.60567 36.0415 7.99296 36.0415 9.70426V12.8029C36.0415 16.2255 33.267 19 29.8444 19H29.3952C28.2048 23.0002 24.7685 26.0331 20.5486 26.6367V31.3944H25.1965C26.0521 31.3944 26.7458 32.088 26.7458 32.9437C26.7458 33.7994 26.0521 34.493 25.1965 34.493H12.8021C11.9464 34.493 11.2528 33.7994 11.2528 32.9437C11.2528 32.088 11.9464 31.3944 12.8021 31.3944H17.45V26.6367C13.2301 26.0331 9.79382 23.0002 8.60332 19H8.15421C4.7316 19 1.95703 16.2255 1.95703 12.8029V9.70426C1.95703 7.99296 3.34432 6.60567 5.05562 6.60567L8.15421 6.60567ZM8.15421 9.70426H5.05562V12.8029C5.05562 14.5142 6.44291 15.9014 8.15421 15.9014V9.70426ZM29.8444 9.70426V15.9014C31.5557 15.9014 32.9429 14.5142 32.9429 12.8029V9.70426H29.8444Z" fill="#171717"/>
                   </svg>
                </div>
                 <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Mesurez-vous aux autres et gagnez le gros lot !</h2>
                <p class=" text-[#98A2B3]  text-xl sm:text-2xl  font-helvetica font-normal">
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </p>
               </div>

                <div class=" w-full max-w-[17rem] sm:max-w-[33.625rem]">
                    <img src="/images/home/classement.png" class=" object-cover w-full dark:hidden" alt="">
                     <img src="/images/home/classementlight.png" class=" object-cover hidden dark:block w-full" alt="">
                </div>
            </div>
            <div v-animate  class=" md:col-span-2  bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full   flex  lg:items-center items-end lg:flex-row flex-col justify-between space-y-8">
               <div class=" w-full  flex flex-col items-start space-y-8 lg:max-w-[33.5rem] sm:py-[2.8125rem] py-[2.5rem]  pl-[1.25rem] pr-[1.25rem] lg:pr-0  sm:pl-[2.8125rem] ">
                 <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" class=" m-auto">
                        <path d="M31.1663 38.5V34.8333C31.1663 32.8884 30.3937 31.0232 29.0185 29.6479C27.6432 28.2726 25.7779 27.5 23.833 27.5H9.16634C7.22142 27.5 5.35616 28.2726 3.98089 29.6479C2.60562 31.0232 1.83301 32.8884 1.83301 34.8333V38.5" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.5003 20.1667C20.5504 20.1667 23.8337 16.8834 23.8337 12.8333C23.8337 8.78325 20.5504 5.5 16.5003 5.5C12.4502 5.5 9.16699 8.78325 9.16699 12.8333C9.16699 16.8834 12.4502 20.1667 16.5003 20.1667Z" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42.167 38.4999V34.8333C42.1658 33.2084 41.625 31.63 40.6295 30.3459C39.634 29.0617 38.2402 28.1445 36.667 27.7383" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M29.333 5.73828C30.9104 6.14217 32.3086 7.05957 33.307 8.34585C34.3054 9.63213 34.8474 11.2141 34.8474 12.8424C34.8474 14.4708 34.3054 16.0528 33.307 17.339C32.3086 18.6253 30.9104 19.5427 29.333 19.9466" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                 <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">
                    Défiez-vous entre collègues, et renforcez les liens de l’équipe !
                 </h2>
                <p class=" text-[#98A2B3]  text-xl sm:text-2xl font-helvetica font-normal">
                    Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.
                </p>
               </div>

                <div class=" w-full max-w-[27rem] sm:max-w-[32.8125rem] lg:max-w-[39.625rem] lg:pr-[2.8125rem]  lg:pb-5">
                    <img src="/images/home/work.png" class=" object-cover w-full" alt="">
                </div>
            </div>
            <div v-animate  class=" bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-start justify-between space-y-8">
               <div class=" w-full  flex flex-col items-start space-y-8">
                 <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                   <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" class=" m-auto">
                        <path d="M22.0986 7.38037H32.9437" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22.0986 15.127H32.9437" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.05566 22.8735H32.943" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.05566 30.6201H32.943" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.1268 13.4693V9.03835C15.1268 7.30314 14.4296 6.60596 12.6789 6.60596H8.26345C6.52824 6.60596 5.83105 7.30314 5.83105 9.03835V13.4538C5.83105 15.2045 6.52824 15.9017 8.26345 15.9017H12.6789C14.4296 15.9017 15.1268 15.2045 15.1268 13.4693Z" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Suivez votre actu personnalisée!</h2>
                <p class=" text-[#98A2B3]  text-xl sm:text-2xl font-helvetica font-normal">
                    Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan. Lorem ipsum dolor sit amet. Qorem ipsum dolor sit amet. Etiam eu turpis molestie, dictum est a.
                </p>
               </div>

                <div class=" w-full max-w-[17rem] sm:max-w-[33.625rem]">
                    <img src="/images/home/news.png" class=" object-cover w-full" alt="">
                </div>
            </div>
             <div v-animate  class=" bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-start justify-between space-y-8">
               <div class=" w-full  flex flex-col items-start space-y-8">
                 <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none" class=" m-auto">
                    <path d="M18.9998 34.4932C27.5563 34.4932 34.4928 27.5568 34.4928 19.0003C34.4928 10.4438 27.5563 3.50732 18.9998 3.50732C10.4433 3.50732 3.50684 10.4438 3.50684 19.0003C3.50684 27.5568 10.4433 34.4932 18.9998 34.4932Z" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M14.4912 14.3526C14.8555 13.3172 15.5744 12.444 16.5207 11.8879C17.467 11.3317 18.5796 11.1284 19.6615 11.314C20.7433 11.4995 21.7246 12.062 22.4315 12.9017C23.1384 13.7414 23.5252 14.8043 23.5236 15.9019C23.5236 19.0005 18.8757 20.5498 18.8757 20.5498" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19 26.7466H19.0155" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                </div>
                <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Créez vos questions bonus</h2>
                <p class=" text-[#98A2B3]  text-xl sm:text-2xl font-helvetica font-normal">
                    En tant que CSE vous pourrez proposer vos propres questions sur la compétition et le nombre de points associés à vos collaborateurs, pour pimenter la compétition !
                </p>
               </div>

                <div class=" w-full max-w-[17rem] sm:max-w-[33.625rem]">
                    <img src="/images/home/stats.png" class=" object-cover w-full dark:hidden" alt="">
                     <img src="/images/home/statslight.png" class=" object-cover w-full hidden dark:block" alt="">
                </div>
            </div>
            <div class=" md:col-span-2 w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div v-animate  class=" bg-[#F9FAFB]  dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-end -space-y-4 md:flex-row md:items-start lg:items-end lg:flex-col justify-between lg:-space-y-4">
                        <div class=" w-full  flex flex-col items-start space-y-8">
                            <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36" fill="none" class=" m-auto">
                                    <path d="M26.3942 10.2533V25.7463C26.3942 31.9435 24.8449 33.4928 18.6477 33.4928H9.35195C3.15476 33.4928 1.60547 31.9435 1.60547 25.7463V10.2533C1.60547 4.05613 3.15476 2.50684 9.35195 2.50684H18.6477C24.8449 2.50684 26.3942 4.05613 26.3942 10.2533Z" stroke="#171717" stroke-width="3.09859" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.0986 7.9292H10.9014" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14 28.9996C15.3263 28.9996 16.4015 27.9244 16.4015 26.5982C16.4015 25.2719 15.3263 24.1968 14 24.1968C12.6738 24.1968 11.5986 25.2719 11.5986 26.5982C11.5986 27.9244 12.6738 28.9996 14 28.9996Z" stroke="#171717" stroke-width="2.32394" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Application mobile et web</h2>
                        
                        </div>
                        <div class=" w-full max-w-[18.0625rem] lg:max-w-full">
                                <img src="/images/home/mobile.png" class=" object-cover w-full" alt="">
                        </div>
                </div>
                  <div v-animate  class=" bg-[#F9FAFB] dark:bg-[#1E2120] rounded-[2rem] w-full px-[1.25rem] sm:px-[2.8125rem] pt-[2.5rem] sm:pt-[2.8125rem] flex flex-col items-end justify-between space-y-4">
                        <div class=" w-full  flex flex-col items-start space-y-8">
                            <div class=" bg-[#28D9BB] w-[4.5rem] h-[4.5rem] rounded-full flex">
                               <svg xmlns="http://www.w3.org/2000/svg" width="43" height="44" viewBox="0 0 43 44" fill="none" class=" m-auto">
                                    <path d="M33.042 35.75H26.042" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M29.542 39.4168V32.0835" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.9466 19.9282C21.7716 19.9098 21.5616 19.9098 21.3691 19.9282C17.2041 19.7815 13.8966 16.2065 13.8966 11.8065C13.8791 7.31484 17.3615 3.6665 21.649 3.6665C25.9366 3.6665 29.4191 7.31484 29.4191 11.8065C29.4191 16.2065 26.094 19.7815 21.9466 19.9282Z" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21.6498 39.9852C18.4648 39.9852 15.2973 39.1419 12.8823 37.4552C8.6473 34.4852 8.6473 29.6452 12.8823 26.6936C17.6948 23.3202 25.5873 23.3202 30.3998 26.6936" stroke="#171717" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <h2 class=" text-primary dark:text-white font-medium font-helvetica text-[1.75rem] sm:text-[2.25rem] leading-[103.286%]">Inscrivez-vous via votre CE</h2>
                        
                        </div>
                        <div class=" w-full max-w-[20.0625rem] lg:max-w-full mx-auto">
                                <img src="/images/home/email.png" class=" object-cover w-full" alt="">
                        </div>
                </div>
                <div v-animate  class=" w-full rounded-[2rem] relative overflow-hidden" >
                    <div class=" w-full flex flex-col items-start space-y-5 relative pt-[5rem] lg:pt-[10rem] pb-10 lg:pb-4 pl-4 pr-4 lg:pr-0 lg:pl-10 z-10">
                        <h2 class=" text-white dark:text-primary font-helvetica font-medium text-[2.25rem] leading-[103.286%]">Inscrivez-vous dès maintenant sur notre app web</h2>
                        <button class=" rounded-[2rem] w-full sm:w-fit bg-[#28D9BB] flex items-center justify-center h-[3.86rem] px-5 hover:scale-110 duration-200 space-x-3">
                        <span class=" text-primary font-helvetica text-base font-bold">Aller vers l’app web</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M7 17.5L17 7.5" stroke="#171717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7 7.5H17V17.5" stroke="#171717" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    </div>
                   <div class=" w-full h-full absolute top-0 left-0">
                     <img src="/images/home/cardblack.png" class=" w-full h-full object-cover dark:hidden" alt="" v-if="!isDark">
                     <img src="/images/home/cardlight.png" class=" w-full h-full object-cover  hidden dark:block" alt="" v-else>
                   </div>
                </div>
            </div>
        </div>

        <div v-animate  class=" w-full pt-20" id="prochaine">
            <StepCard />
        </div>
    </section>
</template>



<script setup>
    import StepCard from '@/components/UI/StepCard.vue'
    import { useDark } from "@vueuse/core";
    const isDark = useDark();
</script>

