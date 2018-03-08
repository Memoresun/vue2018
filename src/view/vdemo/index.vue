<template>
<div id="app-root">
  <div class="demo">{{ message }}</div>
  <div class="demo">
    <span v-bind:title="msg">鼠标悬停几秒钟查看此处动态绑定的提示信息！</span>
  </div>
  <h3>条件与循环</h3>
  <div class="demo">
      <p v-if="seen">现在你看到我了</p>
  </div>
  <div class="demo">
    <ol>
      <li v-for="todo in todos">
          {{ todo.text }}
       </li>
    </ol>
  </div>
  <div class="demo">
      <p>{{ dmessage }}</p>
      <button v-on:click="reverseMessage">逆转信息</button>
  </div>
  <div class="demo">
      <p>{{ message6 }}</p>
      <input v-model="message6">
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      message: '开始',
      msg: '页面加载于' + new Date().toLocaleString(),
      seen: true,
      todos: [
          { text: '学习Javascript' },
          { text: '学习Vue' },
          { text: '整个牛项目' }
      ],
      dmessage: 'Hello Vue.js!',
      message6: 'hello'
    }
  },
  methods: {
      reverseMessage: function(){
          this.dmessage = this.dmessage.split('').reverse().join('')
      }
  }
}
</script>
