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
  data() {
    return {
      swiperOption: {
        loop: false
      },
      iconList: [
        {
          id: "01",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "02",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "03",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "04",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "05",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "06",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "07",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "08",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: "09",
          desc: "热门推荐",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      // console.log(pages);
      return pages;
    }
  }
};
</script>
<style lang='stylus' scped>
  @import '~style/varibles.styl'
  @import '~style/mixins.styl'
  .icons .swiper-container
    overflow hidden
    height 0
    padding-bottom 50%

  .icon
    position relative
    overflow hidden
    float left
    width  25%
    padding-top .1rem
    height 0
    padding-bottom 25%
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
