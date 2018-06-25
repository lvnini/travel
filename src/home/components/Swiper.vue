<template>
   <div class="swiper-list">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="tiem of swiperList " :key="tiem.id" >
          <img class="swiper-img" :src="tiem.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
   </div>
</template>

<script >
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      },
      swiperList: [
        {
          id: "01",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        },
        {
          id: "02",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        },
        {
          id: "03",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg"
        }
      ]
    };
  }
};
</script>
<style lang='stylus' scped>
    // @import '~style/varibles.styl'
  .swiper-list .swiper-pagination-bullet-active 
    background: #fff

  .swiper-list
    overflow :hidden
    background : #eeeeee
    width :100%
    height :0
    padding-bottom :26.0%
  .swiper-img
    width :100%
        
</style>
