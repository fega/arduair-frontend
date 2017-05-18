<template lang="html">
  <section>
    <explorer-toolbar class="hide-on-small-only"></explorer-toolbar>
    <br>
    <mz-container class="white z-depth-1" id="graph-container">
      <img class="responsive-img" src="/static/descarga.png" alt="">
    </mz-container>
    <br>
    <div class="fixed-action-btn hide-on-med-and-up">
  <a class="btn-floating btn-large accent">
    <i class="large material-icons">mode_edit</i>
  </a>
  <ul>
    <li><a class="btn-floating primary"><i class="material-icons">add</i></a></li>
    <li><a class="btn-floating primary darken-1"><i class="material-icons">edit</i></a></li>
    <li><a class="btn-floating primary"><i class="material-icons">get_app</i></a></li>
    <li><a class="btn-floating primary"><i class="material-icons">settings</i></a></li>
  </ul>
</div>
	</section>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzContainerRow from '@/components/materialize/mz-container-row.vue'
import mzContainerRowCol from '@/components/materialize/mz-container-row-col.vue'
import mzContainer from '@/components/materialize/mz-container.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
import deviceList from '@/components/device-list.vue'
import inputText from '@/components/forms/input-text.vue'
import explorerToolbar from '@/components/explorer-toolbar.vue'
export default {
  components: {pageTitle, deviceList,mzRow,  mzContainerRow,  mzCol, mzContainer, inputText, mzContainerRowCol,explorerToolbar}
}
</script>

<style scoped lang="css">
@media screen and (max-width:600px){
  #graph-container{
    width: auto;
  }
}
</style>
