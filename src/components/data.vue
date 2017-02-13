<template>
  <div class="hello">
  <h1>
    <router-link to="/">返回首页</router-link>
  </h1>
  <h1 v-if="!LoadingOver">数据加载中。。。</h1>
  <div v-if="LoadingOver">
    <h1>豆瓣电影排行榜</h1>
     <ul >
        <li v-for="article in articles">
          {{article.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'js/jquery.1.10.1.min.js'
export default {
  name: 'data',
  data () {
    return {
      articles:[],
      LoadingOver:false,
    }
  },
  mounted() {
    this.$nextTick( ()=> {

      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
          headers: {

          },
          emulateJSON: true
      }).then(function(response) {
        // 这里是处理正确的回调

          this.articles = response.data.subjects
          // this.articles = response.data["subjects"] 也可以
          this.LoadingOver=true

      }, function(response) {
          // 这里是处理错误的回调
          console.log(response)
      });

    });
    
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
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
