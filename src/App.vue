<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
    
</style>

<style lang="less">
    @import '~vux/src/styles/1px.less';
    #app {
        text-align: center;
        font-size:26px;
        touch-action: none;
    }
    input,button{
        outline: none;
    }
    li{
        list-style: none;
        text-align: left;
    }

</style>
