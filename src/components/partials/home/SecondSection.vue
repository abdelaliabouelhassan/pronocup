<template>
    <section id="clients" class=" w-full flex flex-col  items-center max-w-[1280px] mx-auto space-y-6 py-28">
            <div class=" flex flex-col items-center space-y-4 px-4 xl:px-0">
                    <h1 class=" text-primary dark:text-white text-[2.375rem] text-center md:text-[4rem] font-helvetica font-medium">XXX+ clients satisfaits</h1>
                    <span class=" text-2xl font-normal font-helvetica text-[#98A2B3] dark:text-[#9E9E9E]">Pourquoi pas vous ?</span>
            </div>

        

           <div v-animateright class=" w-full   overflow-x-auto flex items-start space-x-10 xl:space-x-0 hidden   xl:grid xl:grid-cols-4 xl:gap-10">
                <div v-for="(item,index,key) in Items" :key="key" :id="'card-' + index" @click="SelectLogo(index)" class="flex-shrink-0 w-[18.625rem]   xl:w-full h-[8.875rem] flex rounded-3xl cursor-pointer duration-200 dark:hover:bg-[#2A3A35] hover:bg-[#ECF7F2]" :class="{'dark:bg-[#2A3A35] bg-[#ECF7F2]':ItemIndex == index,'bg-[#F2F4F7] dark:bg-[#242726]':ItemIndex != index}">
                    <img :src="item.logo" class=" m-auto object-cover" alt="">
                </div>
            </div>

            <div v-animateright  class=" w-full xl:hidden">
                <Splide  @splide:moved="getIndex" ref="splideRef" :options="options">
                    <SplideSlide  v-for="(item,index,key) in Items" :key="key" class="w-[18.625rem] px-4">
                    <div :id="'card-' + index" @click="SelectLogo(index)" class=" w-full h-[8.875rem] flex rounded-3xl cursor-pointer duration-200 dark:hover:bg-[#2A3A35] hover:bg-[#ECF7F2]" :class="{'dark:bg-[#2A3A35] bg-[#ECF7F2]':ItemIndex == index,'bg-[#F2F4F7] dark:bg-[#242726]':ItemIndex != index}">
                                    <img :src="item.logo" class=" m-auto object-cover" alt="">
                    </div>
                    </SplideSlide>
                </Splide>
            </div>

          <div class=" w-full px-4 xl:px-0">
              <div v-animateleft  id="bigcard" class=" w-full bg-[#F2F4F7] dark:bg-[#242726] rounded-[2rem] px-[3rem]  py-[3rem] lg:py-[5rem] lg:px-[7rem]">
                <div class=" w-full flex md:flex-row flex-col items-start md:items-center justify-between space-y-5 md:space-y-0 md:space-x-10">
                    <div class=" max-w-[17.3125rem] w-full max-h-[4.23675rem]">
                        <img class=" w-full h-full object-cover" :src="Items[ItemIndex].logo" alt="">
                    </div>
                    <div class=" flex flex-col items-start space-y-4 max-w-[44.1875rem] w-full">
                        <h2 class=" text-primary dark:text-white font-helvetica text-4xl font-medium">{{Items[ItemIndex].title}}</h2>
                        <p class=" text-[#98A2B3] dark:text-[#98A2B3] font-normal font-helvetica text-2xl">
                            {{Items[ItemIndex].description}}
                        </p>
                    </div>
                </div>
            </div>
          </div>

            <div id="controle" class=" w-full flex justify-end px-4 xl:px-0" v-if="ItemLength > 1">
            <div class=" flex items-center space-x-4">
                <button @click="Prev" :class="{'border-2 dark:text-white':ItemIndex == 0,'bg-[#28D9BB]': ItemIndex > 0}" class=" duration-200 border-[#F2F4F7] dark:border-[#292D32]  rounded-full w-[53px] h-[53px] flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  m-auto">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                 <button @click="Next" :class="{'border-2 dark:text-white':ItemIndex == ItemLength - 1,'bg-[#28D9BB]': ItemIndex < ItemLength - 1}" class="duration-200  border-[#F2F4F7] dark:border-[#292D32] rounded-full w-[53px] h-[53px] flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto rotate-180">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                  </div>
        </div>
    </section>
</template>


<script setup>
    import { onMounted, ref } from "vue";
    import { Splide, SplideSlide } from '@splidejs/vue-splide';
    import '@splidejs/vue-splide/css';
    import '@splidejs/vue-splide/css/skyblue';
    import '@splidejs/vue-splide/css/sea-green';
    import '@splidejs/vue-splide/css/core';
    
    const splideRef = ref(null)
    const  options = {
                rewind:true,
                arrows:false,
                autoWidth:true,
                pagination:false,
                gap:2
              
            }
    
    const Items = ref([
        {
            logo:'/images/home/pinterest.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/zoom.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/discord.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/dropbox.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/monday.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/slack.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/stripe.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
        {
            logo:'/images/home/airtable.svg',
            title:'Leurs avis',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu'
        },
    ]);

    const ItemIndex = ref(0);
    const ItemLength = ref(Items.value.length)

    const SelectLogo = (index) => {
        ItemIndex.value = index;
         splideRef.value.go(index);
    }

    const getIndex = (e) => {
        ItemIndex.value = e.index
    }

      const Prev = () => {
       splideRef.value.go('-1')
    }

    const Next = () => {
        splideRef.value.go('+1')
    }

    const scrollToCard = (id) => {
            var elementToScrollTo = document.getElementById(id);
            // Check if the element exists
            if (elementToScrollTo) {
                // Scroll the element into view
                elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
            }
    }


    
</script>


<style scoped>
/* ::-webkit-scrollbar {
  width: 0px; 
} */

.splide {
 padding: 0 !important;
}

</style>