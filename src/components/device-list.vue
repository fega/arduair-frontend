<template lang="html">
  <div class="container">
    <div  v-if="devices.length !==0">
      <!-- DIVISIONES -->
      <transition-group name="list" tag="ul" class="collection">
      <li
        class="collection-item avatar"
        v-for="device in devices"
        v-if="includes(device.device,device.owner,device.institution,format(device.createdAt ))"
        :key="device.device"
      >
          <a href="data/demotest2">
            <div class="circle aqi black">500</div>
            <!-- TITULO -->
            <span class="primary-text title">{{device.device}}</span><span class="secondary-text"> - {{device.owner}}, {{device.institution}}</span>
            <!-- CREATED -->
            <p>Created: <span class="secondary-text">{{format(device.createdAt)}}</span></p>
            <!-- CHIP´S  -->
            <div class="hide-on-small-only">
              <div class="red lighten-5 chip">
                <span class="red-text text-darken-2">T:</span> 23 °C
              </div>
              <div class="blue lighten-5 chip">
                <span class="blue-text text-darken-2">H:</span> 75 %
              </div>
              <div class="green lighten-5 chip">
                <span class="green-text text-darken-2">CO:</span> 680 ppb
              </div>
              <div class="green lighten-5 chip">
                <span class="green-text text-darken-2">SO<sub>2</sub>:</span> 680 ppb
              </div>
              <div class="green lighten-5 chip">
                <span class="green-text text-darken-2">NO<sub>2</sub>:</span> 680 ppb
              </div>
              <div class="green lighten-5 chip">
                <span class="green-text text-darken-2">O<sub>3</sub>:</span> 680 ppb
              </div>
            </div>
          </a>
        </li>
        </transition-group>
    </div>
    <ul v-else class="collection">
      <li class="collection-item center">
        <br>
        <i class="material-icons large">error_outline</i><br>
        The device list wasn't found
        <br>
        <br>
      </li>
    </ul>
  </div >


</template>

<script>
import moment from 'moment'

/**
 * Format the date
 * @param  {Date} date date object
 * @return {Sring}     string formated
 */
let format = date => moment(date).format('MMMM Do YYYY')
/**
 * Filters the current device-list
 * @param  {string} args String to filter
 * @return {Boolean}      if pass the test...
 */
function includes(...args){
  let str = args.reduce((old,now)=>old.concat(' ',now)).toLowerCase()
  let ind = str.includes(this.filter.toLowerCase())
  return ind
}
export default {
  name:'device-list',
  props:{
    devices:null,
    filter: {default:''}
  },
  methods:{format, includes},
}
</script>

<style scoped>
li{
  display: list-item;
  width: 100%;
  transition: all .3s;
  will-change: transform;
  will-change: opacity;
}
.aqi{
  line-height: 44px;
  text-align: center;
  color: white;
}
.list-leave-active {
  /*position: absolute!important;*/
  height: 0px!important;
  min-height: 0px!important;
  padding:0px
}
.list-enter, .list-leave-to /* .list-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-move {

}
@media screen and (max-width:600px){
  .container{
    width: auto;
  }
}
</style>
