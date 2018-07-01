<template>
  <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="categoryList"></detail-list>
      </div>
  </div>
</template>

<script >
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";

import axios from "axios";
export default {
  name: "Detail",
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data() {
    return {
      categoryList: [],
      lastId: "",
      sightName: "",
      bannerImg: "",
      gallaryImgs: []
    };
  },
  methods: {
    getHomeInfo() {
      axios
        .get("/api/detail.json", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.categoryList = data.categoryList;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
      }
    }
  },
  mounted() {
    this.lastId = this.$route.params.id;
    this.getHomeInfo();
  }
  // , 其他方法
  // activated() {
  //   if (this.lastId !== this.$route.params.id) {
  //     this.lastId = this.$route.params.id;
  //     this.getHomeInfo();
  //   }
  // }
};
</script>

<style lang='stylus' scoped>
.content
  height 50rem
</style>
