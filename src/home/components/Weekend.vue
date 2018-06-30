<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="info">
          <p class="item-info">{{item.title}}</p>
          <p class="item-title">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>
<style lang='stylus' scoped>
@import '~style/varibles.styl';
@import '~style/mixins.styl';

.title
  margin-top: 0.2rem;
  line-height: 0.7rem;
  background: #eeeeee;
  text-indent: 0.2rem;
.item 
  overflow: hidden;
  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 38%
    background #eee
    .item-img 
      width: 100%;
  .info 
    padding: 0.1rem;
    .item-info 
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    .item-title 
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
</style>
