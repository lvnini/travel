<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+ item.id" >
        <img :src="item.imgUrl" class="item-img">
        <div class="info">
          <p class="item-info">{{item.title}}</p>
          <p class="item-title">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script >
export default {
  name: "HomeRecommend",
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
  display: flex;
  height: 1.9rem;
  .item-img 
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  .info 
    flex: 1;
    min-width: 0;
    padding: 0.1rem;
    .item-info 
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    .item-title 
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    .item-button 
      margin-top: 0.2rem;
      background: #ff9400;
      padding: 0 0.1rem;
      border-radius: 0.06rem;
      color: #fff
</style>
