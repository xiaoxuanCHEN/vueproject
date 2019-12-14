<template>
  <div>
      <span>{{message}}</span>
      <span>{{refMsg}}</span>
      <input v-model="val"/>
      <tester :vTest="vTest" @toParent="getMsg" ref="child"></tester>
      <el-button @click="dyChild">父调用子组件方法</el-button>
  </div>
</template>

<script>
import tester from './components/tester'
export default {
  name: 'test',
  data () {
    return {
      message: '123',
      vTest: '<a href="#">你好!!!</a>',
      x: 100,
      refMsg: ''
    }
  },
  methods: {
    getMsg (msg) {
      this.message = msg
      this.refMsg = this.$refs.child.refMsg
    },
    dyChild () {
      this.$refs.child.do()
    }
  },
  computed: {
    val: function () {
      return this.x + 1
    }
  },
  components: {
    tester
  }
}
</script>

<style>

</style>
