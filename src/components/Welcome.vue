<template>
  <div class="welcome">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
.welcome {
  margin-top: 48px;
  margin-left: 260px;
  width: calc(100% - 260px);
  padding: 25px;
  text-align: center;
  vertical-align: middle;
  background: #282828;
  display: block;
}
</style>
