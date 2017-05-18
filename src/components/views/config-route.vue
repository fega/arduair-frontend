<template>
  <div id="configure" class="">
    <!-- <page-title>Configure
      <p slot="description">Please add a device name and password to configure it</p>
    </page-title> -->
  <section>
    <form action="/config" method="POST" id="config-search-form">
      <br>
      <div class="container">
        <mz-row>
          <input-text icon="settings_remote" name="name" label="Device Name" cols="s12 offset-m3 m6"></input-text>
          <input-text icon="remove_red_eye" name="password" label="Device Password" cols="s12 offset-m3 m6" type="password"></input-text>
        </mz-row>
      </div>
      <mz-row>
        <div class="col s12 center">
          <input id="config-search-btn" type="submit" value="Search device" class="waves-teal btn btn-flat primary" form="config-search-form">
        </div>
      </mz-row>
    </form>
  </section>
  <br>
  <mz-row>
    <div class="col s12 center">
      Or
      <br>
      <br>
      <a class="btn btn-flat">download configuration template</a>
    </div>
  </mz-row>
  <br>
  </div>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzContainerRow from '@/components/materialize/mz-container-row.vue'
import mzContainer from '@/components/materialize/mz-container.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
import inputText from '@/components/forms/input-text'
export default {
  components: { inputText, pageTitle,mzRow }
}
</script>
