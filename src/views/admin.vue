<template>
  <div class="admin">
    <div class="header">
      <img src="../assets/banner.png" />
    </div>
    <div class="mybody">
      <div class="nav">
        <ul class="nav-ul1">
          <li
            v-for="(item,index) in list"
            :class="title == item.name ? 'check'+index : 'nocheck'+index"
            :key="item.name"
            @click="cbClick(item.path)"
          >
            <!-- <div v-show="path == item.path"></div> -->
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <div class="crumb"><span></span>当前位置 : {{ title }}</div>

        <!-- <p class="nav-title">
          <span></span>
          <span>{{ title }}</span>
        </p>
        <ul class="nav-ul2">
          <li v-for="item in titleList" :key="item.name" @click="cbClickNav(item)">
            <b></b>
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <ul class="nav-ul1">
          <li
            v-for="item in navList"
            :class="path == item.path ? 'check' : ''"
            :key="item.name"
            @click="cbClick(item.path)"
          >
            <b></b>
            <span>{{ item.name }}</span>
          </li>
        </ul>-->
      </div>
      <div class="content">
        <!-- <p class="nav-title">
          <span></span>
          <span>{{ title }}</span>
        </p> -->
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <p>版权所有:中国电信集团公司</p>
      <p>地址:北京市西城区金融大街31号 邮编：100033 客服电话：10000</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "视频教程",
          path: "/admin/video",
          titleList: [
            {
              name: "细说“红色收藏”中的保密问题",
              path: require("../assets/video/5分钟看懂保密法--宣传教育.mp4"),
            },
            {
              name: "郭凌安离职记",
              path: require("../assets/video/保密警示案例系列之三：兼职背后的陷阱.mp4"),
            },
            {
              name: "谨防涉密文件资料“失位”危险",
              path: require("../assets/video/保密警示案例系列之四：变味的科研合作.mp4"),
            },
          ],
          navList: [],    
        },
        {
          name: "文本资料",
          titleList: [],
          navList: [
            { name: "政策法规", path: "/admin/policy" },
            { name: "保密常识", path: "/admin/generalKnowledge" },
            { name: "警示案例", path: "/admin/warnCases" },
          ],
          path: "/admin/material",
        },
        // { name: "快速自测", path: "/admin/test", navList: [] },
      ],
      path: "",
    };
  },
  methods: {
    cbClick(path) {
      // 更换路由
      this.path = path;
      this.$router.push(path);
      // console.log(path);
    },
    cbClickNav(item) {
      this.$children[0].cbFather(item);
    },
  },
  computed: {
    title() {
      console.log(this.$route);
      return this.$route.meta.title;
    
    },
    titleList() {
      let obj = this.list.find((item) => item.path == this.path);
      return obj && obj.titleList;
    },
    // navList() {
    //   let res = this.list[1].navList.some((item) => {
    //     return item.path == this.path;
    //   });
    //   if (res) {
    //     return this.list[1].navList;
    //   } else {
    //     let obj = this.list.find((item) => item.path == this.path);
    //     return obj && obj.navList;
    //   }
    // },
  },
  created() {
    this.path = this.$route.path;
  },
};
</script>
<style lang="less" scoped >
.admin {
  width: 100%;
  height: 100%;

  .header {
    height: 252px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mybody {
    width: 1206px;
    margin: 0 auto;
    min-height: 500px;
    .crumb {
      clear: both;
      font-size: 17px;
      padding: 18px 0 10px 0px;
      border-bottom: 1.5px solid #c4c4c4;
      span {
        margin-right: 20px;
        margin-top: 3px;
        width: 4px;
        height: 16px;
        float: left;
        background: #bf242a;
      }
    }
    .nav-title {
      height: 30px;
      padding: 10px 20px 0 15px;
      border-bottom: 1px solid #b2b2b2;
      span:nth-of-type(1) {
        margin-right: 20px;
        margin-top: 2px;
        width: 4px;
        height: 16px;
        float: left;
        background: #bf242a;
      }
      span:nth-of-type(2) {
        float: left;
        line-height: 20px;
        font-size: 16px;
      }
    }
    .nav {
      width: 100%;
      .nav-ul1 {
        height: 50px;
        padding-top: 13px;
        border-bottom: 1.5px solid #bf242a;
        li {
          float: left;
          position: relative;
          // height: 44px;
          text-align: center;
          font-size: 16px;
          // line-height: 44px;
          // width: 200px;
          cursor: pointer;
          div {
            width: 0;
            height: 0;
            border-top: 8px solid transparent;
            border-left: 8px solid #fff;
            border-bottom: 8px solid transparent;
            position: absolute;
            left: 20px;
            top: 16px;
          }
        }
        .check0 {
          height: 50px;
          width: 292px;
          line-height: 50px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/1-选中.png");
          color: #fff;
        }
         .nocheck0 {
          height: 50px;
          width: 292px;
          line-height: 50px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/1-未选中.png");
          // background-size: 90%;
          // color: #fff;
        }
        .check1 {
          height: 44px;
          width: 246px;
          line-height: 44px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/2-选中.png");
          color: #fff;
          margin-left: -33px;
          margin-top:6px;
        }
         .nocheck1 {
          height: 44px;
          width: 246px;
          line-height: 44px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/2-未选中.png");
          margin-left: -33px;
          margin-top:6px;
          // color: #fff;
        }
        .check2 {
          height: 44px;
          width: 246px;
          line-height: 44px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/2-选中.png");
          color: #fff;
          margin-left: -33px;
          margin-top:6px;
        }
         .nocheck2 {
          height: 44px;
          width: 246px;
          line-height: 44px;
          // background: #bf242a;
          background-image: url("../assets/新建文件夹/2-未选中.png");
          margin-left: -33px;
          margin-top:6px;
          // color: #fff;
        }
      }

      .nav-ul2 {
        li {
          height: 46px;
          line-height: 46px;
          cursor: pointer;
          b {
            display: inline-block;
            height: 4px;
            width: 4px;
            background: #939393;
            margin: 0px 13px 6px 14px;
          }
        }
      }
    }

    .content {
      width: 100%;
    }
  }
  .footer {
    margin-top: 50px;
    clear: both;
    width: 100%;
    text-align: center;
    border-top: 1.5px solid #bababa;
    font-size: 13px;
    color: #545454;
    p {
      margin: 20px 0 10px;
    }
  }
}
</style>
 
