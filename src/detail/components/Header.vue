<template>
  <div class="header">
    <div class="header-abs" v-show="showAbs" @click="$router.back(-1)">
      <span class="iconfont header-abs-back">&#xe624;</span>
    </div>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <span class="iconfont header-fixed-back"  @click="$router.back(-1)">&#xe624;</span>
      景点详情
    </div>
  </div>
</template>

<script >
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll() {
      // console.log('111');
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  height .8rem
  width .8rem
  line-height .8rem
  border-radius .4rem
  text-align center
  background rgba(0, 0, 0, 0.8)
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  background $bgColor
  font-size .32rem
  .header-fixed-back
    position absolute
    top 0
    left 0
    right 0
    width .64rem
    font-size .4rem
    text-align center
</style>
