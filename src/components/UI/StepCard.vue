<template>
    <div class=" w-full flex flex-col items-center md:items-end space-y-10 lg:space-y-6" v-if="ItemLength > 0">
        <h1 class=" text-primary font-helvetica text-center text-[2.375rem] md:text-[4rem] font-medium dark:text-white">La prochaine compétition</h1>
        <div class=" w-full space-y-10 lg:space-y-0  flex-col items-center lg:items-end bg-[#F2F4F7] dark:bg-[#242726] relative rounded-[2rem] flex justify-end py-14 px-6">
            <div class=" lg:absolute -mt-24 lg:mt-auto left-0 top-0 h-lg:-left-16 h-lg:-top-28 max-w-[21.375rem] max-h-[16.625rem] h-lg:max-w-[36.125rem] h-lg:max-h-[28.0625rem]">
                <img :src="Items[ItemIndex].image" class=" w-full max-h-[16rem] lg:max-h-max h-full object-cover" alt="">
            </div>
            <div   class=" w-full  max-w-[35.5625rem]">
                <Splide  @splide:moved="getIndex" ref="splideRef" :options="options">
                    <SplideSlide  v-for="(item,index,key) in Items" :key="key" class="w-[18.625rem]">
                        <div class=" w-full max-w-[35.5625rem] flex flex-col items-start space-y-4">
                            <h2 class=" text-primary dark:text-white text-[1.75rem] sm:text-[2.25rem] font-helvetica font-medium">
                                {{item.title}}
                            </h2>
                            <p class=" text-[#98A2B3] text-xl sm:text-2xl font-helvetica font-normal leading-[140.346%]">
                                {{item.description}}
                            </p>
                        </div>
                    </SplideSlide>
                </Splide>
            </div>
         
        </div>
        <div class=" w-full flex justify-end" v-if="ItemLength > 1">
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
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const  options = {
                rewind:true,
                arrows:false,
                autoWidth:false,
                pagination:false,
                gap:0,
                drag:false,
              
            }
    const Items = ref([
        {
            image:'/images/home/players.png',
            title:'Coupe du monde de rugby 2023',
            description:'Rejoignez-nous et pariez sur les résultats des matchs de la coupe du mon de rugby 2023.Affrontez vos collègues et gagnez le gros lot !'
        },
         {
            image:'/images/home/player1.png',
            title:'Lorem ipsum, dolor sit amet conse',
            description:'dolor sit amet consectetur adipisicing elit. Dolorem laborum tempore est incidunt Dolorem laborum tempore est incidu dfsdfsdf'
        }
    ])

    const ItemIndex = ref(0)
    const ItemLength = ref(0)
    const splideRef = ref(null)

    const Prev = () => {
      
        if(ItemIndex.value > 0){
            ItemIndex.value--
            splideRef.value.go('-1')
        }
    }

    const Next = () => {
        if(ItemIndex.value < ItemLength.value - 1){
            ItemIndex.value++
            splideRef.value.go('+1')
        }
    }


    onMounted(() => {
        ItemLength.value = Items.value.length;
    })

</script>
