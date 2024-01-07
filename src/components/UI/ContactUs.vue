<template>
   <div class=" w-full  py-20  bg-[#F2F4F7] px-4 rounded-[2rem] dark:bg-[#242726] flex flex-col items-center space-y-8">
    <div class=" flex flex-col items-center space-y-2">
        <h1 class=" text-primary dark:text-white font-helvetica text-[4rem] font-medium">Contact</h1>
        <p class=" text-[#98A2B3] font-helvetica text-2xl">Un devis ? Contactez-nous :</p>
    </div>

    <form action="/" class=" w-full flex flex-col items-start space-y-6 max-w-[842px] mx-auto">
        <input type="text" class=" w-full bg-white dark:bg-[#ffffff1a] rounded-lg px-4 h-[60px] font-helvetica font-normal dark:text-white outline-none placeholder-[#98A2B3]" placeholder="Nom">
         <input type="text" class=" w-full bg-white dark:bg-[#ffffff1a] rounded-lg px-4 h-[60px] font-helvetica font-normal dark:text-white outline-none placeholder-[#98A2B3]" placeholder="E-mail">
         <textarea name="" id="" cols="30" rows="10" class=" w-full bg-white dark:bg-[#ffffff1a] rounded-lg px-4  font-helvetica font-normal dark:text-white outline-none placeholder-[#98A2B3] py-4 h-[7.5rem]" placeholder="Message"></textarea>
        <div class=" w-full flex justify-end">
            <button class=" text-primary font-helvetica font-bold text-base rounded-full bg-[#28D9BB] h-[3rem] max-w-[12.1875rem] w-full hover:scale-110 duration-200">
                Envoyer ma demande
            </button>
        </div>
    </form>
   </div>
</template>

