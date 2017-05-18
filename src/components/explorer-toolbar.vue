<template lang="html">
  <div class="navbar-fixed">
    <!-- DESKTOP -->
    <nav class="z-depth-1" id="toolbar">
      <mz-container>
        <button type="button" class="toolbar-button" name="button">
          <i class="material-icons">edit</i>
          <span class="hide-on-med-and-down">Edit graph</span>
        </button>
        <div class="toolbar-separator"></div>
        <button type="button" class="toolbar-button" name="button">
          <span>[C]</span>
        </button>
        <button type="button" class="toolbar-button" name="button">
          <span>AQI</span>
        </button>
        <div class="toolbar-separator"></div>
        <button type="button" class="toolbar-button" name="button">
          <i class="material-icons">get_app</i>
          <span class="hide-on-med-and-down">Download</span>
        </button>
        <div class="toolbar-separator"></div>
        <button type="button" class="toolbar-button hide-on-med-and-down" name="button" disabled><span>Devices:</span></button>
        <button type="button" class="toolbar-button blue lighten-4" name="button" disabled>
          <i class="material-icons right">close</i>
          <span>device1</span>
        </button>
        <button type="button" class="toolbar-button red lighten-4" name="button" disabled>
          <i class="material-icons right">close</i>
          <span>device2</span>
        </button>
        <button type="button" class="toolbar-button yellow lighten-4" name="button" disabled>
          <i class="material-icons right">close</i>
          <span>device3</span>
        </button>
        <button type="button" class="toolbar-button green lighten-4" name="button" disabled>
          <i class="material-icons right">close</i>
          <span>device4</span>
        </button>

        <button type="button" class="toolbar-button" name="button">
          <i class="material-icons">add</i>
          <span class="hide-on-med-and-down">Add device</span>
        </button>
      </mz-container>
    </nav>
    <!-- MOBILE -->

  </div>

</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzContainerRow from '@/components/materialize/mz-container-row.vue'
import mzContainerRowCol from '@/components/materialize/mz-container-row-col.vue'
import mzContainer from '@/components/materialize/mz-container.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
import deviceList from '@/components/device-list'
import inputText from '@/components/forms/input-text'

export default {
  components: {pageTitle, deviceList,mzRow,  mzContainerRow,  mzCol, mzContainer, inputText, mzContainerRowCol}
}
</script>

<style scoped lang="css">
#toolbar{
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  height: 35px;
  line-height: 30px;
  z-index: 100000;
  background-color: #f5f5f5;
  background: -webkit-linear-gradient(to bottom,#f5f5f5,#eee);
  background: linear-gradient(to bottom,#f5f5f5,#eee);

  /*padding: 0 44px 0 44px;*/
  /*padding-left: 58px;*/
  position: fixed;
}
.toolbar-button{
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  background: 0;
  border-color: transparent;
  border-style: solid;
  border-width: 1px;
  outline: none;
  padding: 0;
  height: 24px;
  color: #333;
  line-height: 24px;
  list-style: none;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  vertical-align: middle;
  cursor: default;
  padding: 0 5px;
}
.toolbar-button:disabled{
  color: #777;
  border-color: transparent;
}
.toolbar-button:disabled:hover{
  color: #777;
  border-color: transparent;
  box-shadow: none;
  background-color: none;
}
.toolbar-button:hover{
  -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);
  -moz-box-shadow: 0 1px 1px rgba(0,0,0,.1);
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
  background-color: #f8f8f8;
  background: linear-gradient(to bottom,#f8f8f8,#f1f1f1);
  border-color: #c6c6c6;
  color: #222;
  font-weight:bold;
  font-size:11px;
}
.toolbar-button:active{
  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    -moz-box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
    background-color: #eee;
    background: -webkit-linear-gradient(to bottom,#eee,#e0e0e0);
    background: -moz-linear-gradient(to bottom,#eee,#e0e0e0);
    background: -ms-linear-gradient(to bottom,#eee,#e0e0e0);
    background: -o-linear-gradient(to bottom,#eee,#e0e0e0);
    background: linear-gradient(to bottom,#eee,#e0e0e0);
    border-color: #ccc;
    color: #222;
}
.toolbar-separator{
  border-left: 1px solid #ccc;
  outline: none;
  overflow: hidden;
  text-decoration: none;
  width: 0;
  display: inline-block;
  height: 33px;
  margin: 0 4px 0 4px;
  padding: 0;
  vertical-align: top;
}
.toolbar-button .material-icons{
     display: inline;
     font-size: 18px;
     height: 21px;
     line-height: 22px;
     float: left;
}
.toolbar-button .material-icons.right{
     margin:0;
}
</style>
