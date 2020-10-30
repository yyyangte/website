<template>
  <div>
    <ul class="policy-ul">
      <li
        v-for="(item, index) in this.list[this.page]"
        :key="item.name"
        @click="cbClick(index)"
        :style="item.path ? 'cursor: pointer;' : ''"
      >
        <b></b>
        <span>{{ item.name }}</span>
        <span>{{ item.data }}</span>
      </li>
    </ul>
    <div class="video-page">
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="page + 1"
        @current-change="changePage"
        :page-count="2"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 0,
      list: [
        [
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（一）保密工作方针、原则和体制",
            path: "/admin/policy/policy1",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（二）国家秘密",
            path: "/admin/policy/policy2",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（三）定密工作",
            path: "/admin/policy/policy3",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（四）涉密人员",
            path: "/admin/policy/policy4",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（五）涉密载体",
            path: "/admin/policy/policy5",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（六）计算机及移动存储介质",
            path: "/admin/policy/policy6",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（七）网络",
            path: "/admin/policy/policy7",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（八）涉密场所声光电磁防护",
            path: "/admin/policy/policy8",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（九）通信和办公自动化设备",
            path: "/admin/policy/policy9",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（十）保密要害部门、部位",
            path: "/admin/policy/policy10",
            data: "2020-10-29",
          },
        ],
        [
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（十一）涉密会议、活动",
            path: "/admin/policy/policy11",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（十二）政府信息公开保密审查",
            path: "/admin/policy/policy12",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（十三）专项保密工作",
            path: "/admin/policy/policy13",
            data: "2020-10-29",
          },
          {
            name: "【党政干部和涉密人员保密常识必知必读】（十四）涉外活动",
            path: "/admin/policy/policy14",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（十五）保密工作责任制",
            path: "/admin/policy/policy15",
            data: "2020-10-29",
          },
          {
            name:
              "【党政干部和涉密人员保密常识必知必读】（十六）保密违法违纪责任",
            path: "/admin/policy/policy16",
            data: "2020-10-29",
          },
          {
            name: "国家秘密定密管理暂行规定",
            path: "/admin/policy/policy17",
            data: "2020-10-29",
          },
          {
            name: "修订《保密法》新增和修改条款的解读",
            path: "/admin/policy/policy18",
            data: "2020-10-29",
          },
          {
            name: "中华人民共和国保守国家秘密法",
            path: "/admin/policy/policy19",
            data: "2020-10-29",
          },
          {
            name: "中华人民共和国保守国家秘密法实施条例",
            path: "/admin/policy/policy20",
            data: "2020-10-29",
          },
        ],
      ],
    };
  },
  methods: {
    cbClick(index) {
      let list = this.list[this.page];
      this.$router.push(list[index].path);
    },
    changePage(val) {
      this.page = val - 1;
      console.log(val);
    },
  },
};
</script>
<style lang="less">
.policy-ul {
  width: 100%;
  min-height: 300px;
  li {
    height: 46px;
    line-height: 46px;
    b {
      display: inline-block;
      height: 4px;
      width: 4px;
      background: #939393;
      margin: 0px 13px 4px 14px;
    }
    span:nth-of-type(1) {
      display: inline-block;
      width: 85%;
      color: #333333;
    }
    span:nth-of-type(2) {
      color: #6b6b6b;
      font-size: 13px;
    }
  }
}
.video-page {
  clear: both;
  padding: 20px 500px;
  
}
</style>