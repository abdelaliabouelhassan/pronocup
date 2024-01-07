<template>
  <DefaultLayout>
    <HeroSection />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from '@/layouts/default.vue'
  import HeroSection from '@/components/partials/home/HeroSection.vue'
  import FirstSection from '@/components/partials/home/FirstSection.vue'
  import SecondSection from '@/components/partials/home/SecondSection.vue'
  import ThirdSection from '@/components/partials/home/ThirdSection.vue'
  import FourthSection from '@/components/partials/home/FourthSection.vue'
</script>
