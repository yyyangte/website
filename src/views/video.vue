<template>
  <div class="video">
    <ul class="video-ul">
      <li v-for="(item, index) in list[page]" :key="item.name">
        <video
          :src="item.path"
          class="videoStyle"
          @click="cbClick(index)"
        ></video>
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <div class="video-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="page + 1"
        @current-change="changePage"
        :page-count="10"
      >
      </el-pagination>
    </div>
    <el-dialog
      :title="title"
      width="60%"
      :visible.sync="videoVisible"
      @close="close()"
    >
      <video
      ref="video"
        :src="path"
        controls="controls"
        autoplay="autoplay"
        style="width: 100%; height: 100%"
        @click="cbClick(index)"
      ></video>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 0,
      path: null,
      title: "",
      videoVisible: false,
      list: [
        [
          {
            name: "5分钟看懂保密法--宣传教育",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
          {
            name: "中华人员共和国保守秘密法",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
          {
            name: "保密法规宣传系列之一：当心手机泄密",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
          {
            name: "保密法规宣传(二):谨防12种保密违法违规行为",
            path: require("../assets/video/保密警示案例系列之三：兼职背后的陷阱.mp4"),
          },
          {
            name: "保密警示案例系列之三：兼职背后的陷阱",
            path: require("../assets/video/保密警示案例系列之三：兼职背后的陷阱.mp4"),
          },
          {
            name: "保密警示案例系列之四：变味的科研合作",
            path: require("../assets/video/保密警示案例系列之四：变味的科研合作.mp4"),
          },
          {
            name: "保保密警示案例系列之一：机关门户网站的隐忧",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为2",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为3",
            path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
          },
        ],
        [
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为4",
            path: require("../assets/video/保密警示案例系列之一：机关门户网站的隐忧.mp4"),
          },
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为5",
            path: require("../assets/video/保密警示案例系列之三：兼职背后的陷阱.mp4"),
          },
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为6",
            path: require("../assets/video/保密警示案例系列之四：变味的科研合作.mp4"),
          },
        ],
      ],
    };
  },
  methods: {
    cbClick(index) {
      let list = this.list[this.page];
      this.videoVisible = true;
      this.path = list[index].path;
      this.title = list[index].name;
      console.log(list, index);
    },
    cbFather(obj) {
      this.videoVisible = true;
      this.path = obj.path;
      this.title = obj.name;
    },
    changePage(val) {
      this.page = val - 1;
      console.log(val);
    },
    close() {
      this.$refs.video.pause()
      this.path = null;
    },
  },
};
</script>
<style scoped lang="less">
.video {
  .video-ul {
    width: 100%;
    min-height: 300px;
    li {
      float: left;
      width: 425px;
      &:nth-of-type(3n) {
        width: 350px;
      }
      p {
        width: 340px;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .video-page {
    clear: both;
    padding: 20px 400px;
  }
}
.videoStyle {
  width: 350px;
  height: 224px;
}
</style>