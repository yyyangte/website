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
        :page-count="4"
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
            path: require("../assets/video/中华人员共和国保守秘密法.mp4"),
          },
          {
            name: "互联网计算机安全保密须知",
            path: require("../assets/video/互联网计算机安全保密须知.mp4"),
          },
          {
            name: "保密法规宣传系列之一：当心手机泄密：当心手机泄密",
            path: require("../assets/video/保密法规宣传系列之一：当心手机泄密.mp4"),
          },
          {
            name: "保密法规宣传系列之二：谨防12种保密违法违规行为",
            path: require("../assets/video/保密法规宣传系列之二：谨防12种保密违法违规行为.mp4"),
          },
          {
            name: "保密要害部门部位保密管理须知",
            path: require("../assets/video/保密要害部门部位保密管理须知.mp4"),
          },
          {
            name: "保密要害部门部位保密管理须知2",
            path: require("../assets/video/保密要害部门部位保密管理须知2.mp4"),
          },
          {
            name: "保密警示案例系列之一：机关门户网站的隐忧",
            path: require("../assets/video/保密警示案例系列之一：机关门户网站的隐忧.mp4"),
          },
          {
            name: "保密警示案例系列之二：网盘上的密件",
            path: require("../assets/video/保密警示案例系列之二：网盘上的密件.mp4"),
          },
        ],
        [
          {
            name: "保密警示案例系列之三：兼职背后的陷阱",
            path: require("../assets/video/保密警示案例系列之三：兼职背后的陷阱.mp4"),
          },
          {
            name: "保密警示案例系列之四：变味的科研合作",
            path: require("../assets/video/保密警示案例系列之四：变味的科研合作.mp4"),
          },
          {
            name: "国家秘密载体管理必知",
            path: require("../assets/video/国家秘密载体管理必知.mp4"),
          },
          {
            name: "图说保密法",
            path: require("../assets/video/图说保密法.mp4"),
          },
          {
            name: "手机使用安全保密须知",
            path: require("../assets/video/手机使用安全保密须知.mp4"),
          },
          {
            name: "泄密就在身边-最新失泄密案例",
            path: require("../assets/video/泄密就在身边-最新失泄密案例.mp4"),
          },
          {
            name: "泄密就在身边",
            path: require("../assets/video/泄密就在身边.mp4"),
          },
          {
            name: "涉密人员上网保密须知",
            path: require("../assets/video/涉密人员上网保密须知.mp4"),
          },
          {
            name: "涉密人员使用手机十二不得",
            path: require("../assets/video/涉密人员使用手机十二不得.mp4"),
          },
        ],
        [
          {
            name: "涉密会议、活动保密管理须知",
            path: require("../assets/video/涉密会议、活动保密管理须知.mp4"),
          },
          {
            name: "涉密移动介质使用指南",
            path: require("../assets/video/涉密移动介质使用指南.mp4"),
          },
          {
            name: "涉密网络管理保密须知",
            path: require("../assets/video/涉密网络管理保密须知.mp4"),
          },
          {
            name: "涉密载体篇",
            path: require("../assets/video/涉密载体篇.mp4"),
          },
          {
            name: "涉密载体篇2",
            path: require("../assets/video/涉密载体篇2.mp4"),
          },
          {
            name: "领导干部、涉密人员使用互联网计算机安全保密提示",
            path: require("../assets/video/领导干部、涉密人员使用互联网计算机安全保密提示.mp4"),
          },
          {
            name: "保密法规定的十二种严重违规行为",
            path: require("../assets/video/保密法规定的十二种严重违规行为.mp4"),
          },
          {
            name: "出国出境保密须知",
            path: require("../assets/video/出国出境保密须知.mp4"),
          },
          {
            name: "哪些部门部位是保密要害部门部位",
            path: require("../assets/video/哪些部门部位是保密要害部门部位.mp4"),
          },
        ],
        [
          {
            name: "私人生活和个人交往保密须知",
            path: require("../assets/video/私人生活和个人交往保密须知.mp4"),
          },
          {
            name: "警钟长鸣-最新窃密泄密案例",
            path: require("../assets/video/警钟长鸣-最新窃密泄密案例.mp4"),
          },
          {
            name: "通讯办公自动化设备管理",
            path: require("../assets/video/通讯办公自动化设备管理.mp4"),
          },
          {
            name: "通讯和办公自动化涉密管理",
            path: require("../assets/video/通讯和办公自动化涉密管理.mp4"),
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
      this.$refs.video.pause();
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
    padding: 20px 470px;
  }
}
.videoStyle {
  width: 350px;
  height: 224px;
}
</style>