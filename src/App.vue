<template>
  <DefaultLayout>
    <HeroSection />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from '@/layouts/default.vue'
  import HeroSection from '@/components/partials/home/HeroSection.vue'
  import FirstSection from '@/components/partials/home/FirstSection.vue'
  import SecondSection from '@/components/partials/home/SecondSection.vue'
  import ThirdSection from '@/components/partials/home/ThirdSection.vue'
</script>
