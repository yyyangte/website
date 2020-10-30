import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    redirect: '/admin/video',
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: '/admin/video',
    component: () => import("../views/admin.vue"),
    children: [
      // {
      //   path: '/admin/home',
      //   name: 'home',
      //   meta: {
      //     title: "首页",
      //   },
      //   component: () => import("../views/home.vue"),
      // },
      {
        path: '/admin/video',
        name: 'video',
        meta: {
          title: "视频教程",
        },
        component: () => import("../views/video.vue"),
      },
      {
        path: '/admin/material',
        name: 'material',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/material.vue"),
      },
      {
        path: '/admin/test',
        name: 'test',
        meta: {
          title: "快速自测",
        },
        component: () => import("../views/fastTest.vue"),
      },
      {
        path: '/admin/policy',
        name: 'policy',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policy.vue"),
      },
      {
        path: '/admin/generalKnowledge',
        name: 'generalKnowledge',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/generalKnowledge.vue"),
      },
      {
        path: '/admin/warnCases',
        name: 'warnCases',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/warnCases.vue"),
      },
      // 系统设置
      // {
      //   path: '/system',
      //   name: "system",
      //   meta: { title: '系统设置', },
      //   component: () => import("@/pages/page.vue"),
      //   children: [
      //     {
      //       path: '/admin/encodeSet',
      //       name: 'encodeSet',
      //       meta: {
      //         title: "编码设置"
      //       },
      //       component: () => import("@/pages/SystemSetup/EncodeSet.vue"),
      //     },

      //   ]
      // }
      {
        path: '/admin/policy/policy1',
        name: 'policy1',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（一）保密工作方针、原则和体制.vue"),
      }, {
        path: '/admin/policy/policy2',
        name: 'policy2',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（二）国家秘密.vue"),
      }, {
        path: '/admin/policy/policy3',
        name: 'policy3',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（三）定密工作.vue"),
      }, {
        path: '/admin/policy/policy4',
        name: 'policy4',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（四）涉密人员.vue"),
      }, {
        path: '/admin/policy/policy5',
        name: 'policy5',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（五）涉密载体.vue"),
      }, {
        path: '/admin/policy/policy6',
        name: 'policy6',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（六）计算机及移动存储介质.vue"),
      }, {
        path: '/admin/policy/policy7',
        name: 'policy7',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（七）网络.vue"),
      }, {
        path: '/admin/policy/policy8',
        name: 'policy8',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（八）涉密场所声光电磁防护.vue"),
      }, {
        path: '/admin/policy/policy9',
        name: 'policy9',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（九）通信和办公自动化设备.vue"),
      }, {
        path: '/admin/policy/policy10',
        name: 'policy10',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十）保密要害部门、部位.vue"),
      }, {
        path: '/admin/policy/policy11',
        name: 'policy11',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十一）涉密会议、活动.vue"),
      }, {
        path: '/admin/policy/policy12',
        name: 'policy12',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十二）政府信息公开保密审查.vue"),
      }, {
        path: '/admin/policy/policy13',
        name: 'policy13',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十三）专项保密工作.vue"),
      }, {
        path: '/admin/policy/policy14',
        name: 'policy14',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十四）涉外活动.vue"),
      }, {
        path: '/admin/policy/policy15',
        name: 'policy15',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十五）保密工作责任制.vue"),
      }, {
        path: '/admin/policy/policy16',
        name: 'policy16',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/【党政干部和涉密人员保密常识必知必读】（十六）保密违法违纪责任.vue"),
      }, {
        path: '/admin/policy/policy17',
        name: 'policy17',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/国家秘密定密管理暂行规定.vue"),
      },
      {
        path: '/admin/policy/policy18',
        name: 'policy18',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/修订《保密法》新增和修改条款的解读.vue"),
      }, {
        path: '/admin/policy/policy19',
        name: 'policy19',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/中华人民共和国保守国家秘密法.vue"),
      }, {
        path: '/admin/policy/policy20',
        name: 'policy20',
        meta: {
          title: "文本资料",
        },
        component: () => import("../views/policies/中华人民共和国保守国家秘密法实施条例.vue"),
      },
    ]
  },
]


const router = new VueRouter({
  routes
})
export default router