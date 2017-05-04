<template>
  <div>
    <page-title>Data Collection</page-title>
    <mz-container>
      <mz-row>
        <!-- <input-text icon="search" name="search" label="Search" cols="s12 m6"></input-text> -->
        <div class="input-field col s12 m6" >
          <i class="material-icons prefix">search</i>
          <input name="name" id="asasd1231" type="text" v-model="search">
          <label for="asasd1231">Search</label>
        </div>
        <mz-col cols="s6 m3">
          <br>
          <a class="btn btn-flat primary">Buscar</a>
        </mz-col>
        <mz-col cols="s6 m3 left">
          <br>
          <a class="btn btn-flat right">Update List</a>
        </mz-col>
      </mz-row>
      <device-list :devices="deviceList" :filter="search"></device-list>
    </mz-container>
  </div>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzContainerRow from '@/components/materialize/mz-container-row.vue'
import mzContainer from '@/components/materialize/mz-container.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
import deviceList from '@/components/device-list'
import inputText from '@/components/forms/input-text'
function updated(){
  let vm = this
  axios.get('/api/devices')
    .then((res) => {vm.deviceList=res.data.data.devices})
    .catch(err =>   Materialize.toast(err.message, 4000))
}

export default {
  name: 'data-route',
  props: ['deviceList', 'deviceData', 'currentDevice'],
  data(){
    return {search:''}
  },
  components: {pageTitle, deviceList,mzRow,  mzContainerRow,  mzCol, mzContainer, inputText}
}
</script>

<style >
  .btn-flat{
    color: #2c3e50;
    background-color: #e0e0e0
  }
  .btn-flat.primary{

    color: white;

  }
  .btn-flat:hover{
    background-color: #cfd8dc
  }
</style>
