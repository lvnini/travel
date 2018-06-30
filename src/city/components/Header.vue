<template>
  <div class="header">
      城市选择
      <div @click="$router.back(-1)" class="iconfont header-back">
          &#xe624;
      </div>
      <!-- <router-link tag="div" to="/" class="iconfont header-back">
          &#xe624;
      </router-link> -->
  </div>
</template>

<script >
export default {
  name: "CityHeader"
};
</script>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.header
  text-align center
  line-height .86rem
  background $bgColor
  color $dyColor
  font-size .32rem
  .header-back
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
</style>
