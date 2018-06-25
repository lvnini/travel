<template>
  <div class="header">
      <div class="header-left">
          <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe632;</span>
          <span class="header-text">输入城市/景点/游玩主题</span>
      </div>
      <div class="header-right">
        城市
        <span class="iconfont header-ico">&#xe64a;</span>
      </div>
  </div>
</template>

<script lang="less">
  export default{
    name: 'Header',
  };
</script>
<style lang='stylus' scped>
    // @import 
    @import '~style/varibles.styl'
    .header
        display :flex
        line-height :.86rem
        background : $bgColor
        color :$dyColor
        .header-left
            width : .64rem
            float : left
            text-align: center
        .header-input
            flex:1
            background :$dyColor
            margin : .12rem
            border-radius :.1rem
            line-height: .6rem;
            padding: 0 .2rem;
            color :#ccc
            .header-text
                margin-left :.1rem
        .header-right
            width :1.24rem
            float:right
            .header-ico
                font-size:0.20rem
</style>
