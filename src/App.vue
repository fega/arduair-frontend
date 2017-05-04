<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view :deviceList="deviceList" :deviceData="deviceData" :currentDevice="currentDevice " ></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import navBar from '@/components/nav-bar.vue'
import footerArduair from '@/components/footer-arduair.vue'
export default {
  name: 'app',
  components: {
    navBar,
    footerArduair
  },
  data () {
    return {
      deviceList: [],
      deviceData: [],
      currentDevice: {}
    }
  },
  methods: {
    query(){
      let vm = this
      axios.get('/api/devices')
        .then((res) => {
          vm.deviceList=res.data.data.devices
          if(res.data.data.devices.lenght===0){
            Materialize.toast('There is no devices in the database', 4000)
          } else{
            Materialize.toast('Downloaded device list', 4000)
          }
        })
        .catch(err =>   Materialize.toast(err.message, 4000))
    },
    detail(device){
      let vm = this
      axios.get('/api/devices')
        .then((res) => {vm.deviceList=res.data.data.devices})
        .catch(err =>   Materialize.toast(err.message, 4000))
    }
  },
  mounted(){
    this.query()
  }
}
</script>
<style scoped>

</style>
