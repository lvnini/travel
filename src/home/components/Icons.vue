<template>
  <div class="icons">
    <swiper :options="swiperOption" >
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="tiem of page" :key="tiem.id">
            <div class="icon-img">
                <img :src="tiem.imgUrl" :alt="tiem.desc">
            </div>
            <div class="icon-desc">
                {{tiem.desc}}
            </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        loop: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang='stylus' scoped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .icons .swiper-container
    overflow hidden
    height 0
    padding-bottom 4rem

  .icon
    position relative
    overflow hidden
    float left
    width  25%
    padding-top .1rem
    height 0
    padding-bottom 2rem
    .icon-img
      width 1.1rem
      height 1.1rem
      margin auto
      img
          width 100%
    .icon-desc
      margin-top .1rem
      text-align center
      ellipsis()


</style>
