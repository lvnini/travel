<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-bottom">当前城市</div>
          <div class="bottom-list">
            <div class="bottom-wrapper">
              <div class="bottom">
                {{this.city}}
              </div>
            </div>
          </div>
      </div>
      <div class="area">
          <div class="title border-bottom">热门城市</div>
          <div class="bottom-list">
            <div class="bottom-wrapper" v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">
              <div class="bottom">
                {{item.name}}
              </div>
            </div>
          </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
          <div class="title border-bottom">{{key}}</div>
          <ul class="item-list">
            <li class="item border-bottom" v-for="innerItem of item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">
              {{innerItem.name}}
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script >
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState(["city"])
  },
  methods: {
    handleCityClick(city) {
      // this.$store.dispatch("changeCity", city);
      this.changeCity(city);
      this.$router.back(-1);
    },
    ...mapMutations(["changeCity"])
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper);
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
  @import '~style/varibles.styl'
  .border-bottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left  0
  right 0
  bottom 0
  .title
    line-height .44rem
    background #eeeeee
    padding-left .2rem
    color #666
    font-size .26rem
  .bottom-list
    overflow hidden
    padding .1rem .6rem .1rem .1rem
    .bottom-wrapper
      float left
      width 33.33%
      .bottom 
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #cccccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem

</style>
