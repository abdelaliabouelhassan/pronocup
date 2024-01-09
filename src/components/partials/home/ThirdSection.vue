<template>
    <section id="faq" class=" w-full duration-200 flex flex-col items-center space-y-10 max-w-[1280px] mx-auto py-10 px-4 xl:px-0">
        <h1 class=" text-primary dark:text-white font-helvetica text-[4rem] font-medium">FAQ</h1>
       <div class=" w-full flex flex-col items-start space-y-10">
        <SpanCard v-animate  v-for=" n in 3" :key="n"
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed di ?" 
                  description="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan. Lorem ipsum dolor sit amet. Qorem ipsum dolor sit amet. Etiam eu turpis molestie, dictum est a."
         />
       </div>
    </section>
</template>


<script setup>
 import SpanCard from '@/components/UI/SpanCard.vue'
</script>