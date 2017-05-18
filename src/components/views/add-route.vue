<template>
  <div id="add" class="">
    <!-- <page-title>Add new device
      <p slot="description">Please fill the following information</p>
    </page-title> -->

    <section>
      <br>
      <div class="container">
        <form action="/device" method="POST" id="addform" v-ajax>
          <mz-row>
            <input-text cols="s12 m6" icon="settings_remote" name="device" required label="Device name"></input-text>
            <input-text cols="s12 m6" icon="remove_red_eye" name="password" required label="Device password" type="password"></input-text>
            <input-text cols="s12 m6" icon="account_circle" name="owner" required label="device Owner"></input-text>
            <input-text cols="s12 m6" icon="contact_mail" name="email" required label="Owner email"></input-text>
            <input-text cols="s12" icon="account_balance" name="institution" label="Institution"></input-text>
            <input-text cols="s12" icon="text_fields" name="description" label="Device description"></input-text>
          </mz-row>
            <mz-row>
              <div class="col s12 m12	l12 center">
                <input type="submit" value="Add device" class="waves-teal btn btn-flat primary">
              </div>
            </mz-row>
          </form>
        </div>
        <br>
        <div class="divider">
        </div>
        <div class="container">
          <mz-row>
            <div class="col s12 m6 center">
              <p>If you need a configuration file to put in your SD root, download it here:</p>
            </div>
            <div class="col s12 m6">
              <br>
              <a href="/download/config-template" class="waves-effect waves-teal btn btn-flat darken">download configuration template</a>
            </div>
          </mz-row>
        </div>
      </section>
    </div>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzContainerRow from '@/components/materialize/mz-container-row.vue'
import mzContainer from '@/components/materialize/mz-container.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
import inputText from '@/components/forms/input-text'
import vAjax from '@/components/directives/ajax.js'
export default {
  name: 'docs-route',
  components: { inputText, pageTitle,mzRow, vAjax }
}
</script>

<style scoped>
  p{
    margin-top: 25px;
  }
</style>
