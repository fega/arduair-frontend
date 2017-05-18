<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view :deviceList="deviceList" :deviceData="deviceData" :currentDevice="currentDevice " @update="query"></router-view>
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
<style>
/*COLORS*/
  .primary {
    background-color: #2980b9!important
  }
  .primary.lighten {
    background-color: #03a9f4!important
  }
  .primary.darken {
    background-color: #2c3e50!important
  }
  .primary-text {
    color: #2c3e50!important
  }
  .accent {
    background-color: #ff1744!important
  }
  .accent-text {
    color: #ff1744!important
  }
  .secondary-text{
    color: rgba(0, 0, 0, 0.54);
  }
/*INPUT STYLES*/
  input[type=date]:focus:not([readonly])+label,
  input[type=datetime-local]:focus:not([readonly])+label,
  input[type=email]:focus:not([readonly])+label,
  input[type=number]:focus:not([readonly])+label,
  input[type=password]:focus:not([readonly])+label,
  input[type=search]:focus:not([readonly])+label,
  input[type=tel]:focus:not([readonly])+label,
  input[type=text]:focus:not([readonly])+label,
  input[type=time]:focus:not([readonly])+label,
  input[type=url]:focus:not([readonly])+label,
  textarea.materialize-textarea:focus:not([readonly])+label {
      color: #2980b9
  }
  input:not([type]):focus:not([readonly]),
  input[type=date]:focus:not([readonly]),
  input[type=datetime-local]:focus:not([readonly]),
  input[type=email]:focus:not([readonly]),
  input[type=number]:focus:not([readonly]),
  input[type=password]:focus:not([readonly]),
  input[type=search]:focus:not([readonly]),
  input[type=tel]:focus:not([readonly]),
  input[type=text]:focus:not([readonly]),
  input[type=time]:focus:not([readonly]),
  input[type=url]:focus:not([readonly]),
  textarea.materialize-textarea:focus:not([readonly]),
  textarea:focus {
      border-bottom: 1px solid #2980b9;
      box-shadow: 0 1px 0 0 #2980b9
  }
</style>
