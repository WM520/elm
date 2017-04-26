<template>
      <div class="tabbar border-1px">
      <div class="tabbar-item">
          <a><router-link :to="'/good'">商品</router-link></a>
      </div>
       <div class="tabbar-item">
          <a><router-link :to="'/ratings'">评价</router-link></a>
      </div>
       <div class="tabbar-item">
          <a><router-link :to="'/seller'">商家</router-link></a>
      </div>
    </div>
</template>
<script type="text/javascript">
  export default {}
</script>
<style scoped>
/*@import "../../common/stylus/mixin.styl"*/
.tabbar {
  display: flex;
  line-height: 40px;
  width: 100%;
  height: 40px;
  /*border-bottom: 1px solid rgba(7,17,27,0.1);*/
  /*border-1px(rgba(7,17,27,0.1));*/
}

.tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-item.a {
  display: block;
}
.active {
  color: red;
}
</style>
