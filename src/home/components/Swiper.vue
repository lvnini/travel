<template>
   <div class="swiper-list">
      <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="tiem of list" :key="tiem.id" >
          <img class="swiper-img" :src="tiem.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
   </div>
</template>

<script >
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  },
  computed: {
    showSwiper() {
      return this.list.length;
    }
  }
};
</script>
<style lang='stylus' scoped>
  .swiper-list .swiper-pagination-bullet-active 
    background: #fff

  .swiper-list
    overflow :hidden
    background : #eeeeee
    width :100%
    height :0
    padding-bottom :31%
  .swiper-img
    width :100%
        
</style>
