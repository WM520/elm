<template>
  <div>
    <v-header :seller="seller"></v-header>
    <tabbar></tabbar>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
const ERR_OK = 0
import Header from '@/components/header/header.vue'
import Tabbar from '@/components/tabbar/tabbar.vue'
export default {
  data () {
	return {
		seller: {}
	}
  },
  created() {
  	this.$http.get('/api/seller').then((response) => {
  		response = response.body
  		if (response.errno === ERR_OK) {
  			this.seller = response.data
  		}
  	})
  },
  components: {
    'v-header': Header,
    'tabbar': Tabbar
  }
}
</script>

<style>


</style>
