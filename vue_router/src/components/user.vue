<template>
  <div>
    user
    <div class="userList">
      <router-link 
        :to="'/user/'+ item.tip +'/' + item.id"
        v-for="(item,i) in userList"
        :key="i"
      >
      {{item.userName}}
      </router-link>
    </div>
    <div class="user-info" style="font-size: 20px;">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </div>
  </div>
</template>
<script>
let data = [{
        id: 1,
        userName: "leo1",
        sex: '男',
        hobby: '写代码',
        tip: 'vip'
    },
    {
        id: 2,
        userName: "leo2",
        sex: '男',
        hobby: '唱歌',
        tip: 'vip'
    },
    {
        id: 3,
        userName: "leo3",
        sex: '男',
        hobby: '读书',
        tip: 'common'
    }
]
export default {
  data () {
    return {
      userList: data,
      userInfo: {}
    }
  },
  watch: {
    $route () { // 路由信息对象改变时，监控$route的改变
      this.getUserInfo()
    }
  },
  created () { 
    //console.log(this.$route) // 路由信息对象 
    //console.log(this.$route.params.userId)
    /* 
      params对象: 动态路由参数
    */
    /* created函数每次刷新时创建新的生命周期钩子函数，用来复用组件，组件
    生成之后不会再重新生成组件，created函数只触发一次，所以点击时不再
    执行created里面的代码，无法再次获取id改变数据 */

    // 通过id渲染数据
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      let id = this.$route.params.userId
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          return item.id == id
        })[0]
      } else {
        this.userInfo = {}
      }
    }
  }
}
</script>
