<template>
    <div class=" w-full bg-white overflow-hidden dark:bg-primary">
        <Header />
        <div class=" w-full">
            <slot />
        </div>
        <Footer />
    </div>
</template>

<script setup>
    import Header from '@/components/partials/Header.vue'
    import Footer from '@/components/partials/Footer.vue'
</script>