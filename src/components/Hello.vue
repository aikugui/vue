<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
       <li><router-link to="sendmessage">点击跳转到第二个页面</router-link></li>
       <li><router-link to="data">点击跳转到第三个页面</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '哈哈哈哈哈'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
