<template lang="html">
  <div >
    <ul class="collection" v-if="devices.length !==0">
      <li class="collection-item avatar" v-for="device in devices" v-if="includes(device.device,device.owner,device.institution,format(device.createdAt ))">
          <a href="data/demotest2">
            <span class="primary-text title">{{device.device}}</span>
            <p class="primary-text">{{device.updatedAt}}</p>
            <p>Owner: {{device.owner}} - {{device.institution}}</p>
            <p>Created: {{format(device.createdAt)}}</p>
            <div class="hide-on-small-only">
              <!-- <div class="chip" v-for="component in device">{{component}}</div> -->
            </div>
          </a>
        </li>
    </ul>
    <ul v-else>
      <li >
        No se encontraron dispositivos registrados
      </li>
    </ul>
  </div>


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

<style lang="css">

</style>
