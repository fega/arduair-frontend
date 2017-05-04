
<template lang="html">
  <div id="config-device-found">
    <page-title>Configure device</page-title>
    <section>
      <mz-container>
        <form action="/api/demotest1/demodemo/config" method="post" id="config-device-founded-form">
          <mz-row>
            <mz-col cols="s12 m6">
              <h4 class="right hide-on-small-only">Configuring: Device demo</h4>
              <h4 class="center hide-on-med-and-up">Configuring: Device demo</h4>
            </mz-col>
            <mz-col cols="s12 m6">
              <br>
              <a class="btn btn-flat primary">Change device</a>
            </mz-col>
          </mz-row>
          <mz-row>
            <h5>Network</h5>
              <input-text icon="wifi" name="network" label="Network name" cols="s12 m8 l6 offset-m2 offset-l3"></input-text>
              <input-text icon="wifi_lock" name="password" label="Network password" cols="s12 m8 l6 offset-m2 offset-l3"></input-text>
              <input-text icon="dns" name="server" label="Server" cols="s12 m8 l6 offset-m2 offset-l3"></input-text>
              <div class="input-field col s12 m8 l6 offset-m2 offset-l3" style="margin-top: 0px;padding-left: 0px;">
                  <input name="wifi" type="checkbox" id="config-wifi" value="Enable wifi">
                  <label for="config-wifi">Enable Wi-Fi</label>
              </div>
          </mz-row>
          <h5>Calibration</h5>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>CO<sub>2</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>O<sub>3</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>SO<sub>2</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>NO<sub>2</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>PM<sub>10</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l1 offset-l2">
              <br>PM<sub>2.5</sub>
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
            <input-text name="co_b" label="b" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l2 offset-l2">
              <br>Humidity
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l2 offset-l2">
              <br>Temperature
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l2 offset-l2">
              <br>Pressure
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
          </mz-row>
          <mz-row>
            <div class="col s12 m12 l2 offset-l2">
              <br>Lux
            </div>
            <input-text name="co_x2" label="x<sup>2</sup>" cols="s4 m3 l2 offset-m1"></input-text>
            <input-text name="co_x1" label="x<sup>1</sup>" cols="s4 m3 l2"></input-text>
          </mz-row>
            <mz-row>
              <div class="col s12 center">
                <input id="config-search-btn" type="submit" value="Send configuration" class="btn-flat primary center">
              </div>
            </mz-row>
            <br>
        </form>
      </mz-container>
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
export default {
  components: { inputText, pageTitle,mzRow,  mzCol, mzContainer }
}

</script>


<style scoped>
  h4.hide-on-small-only{
    margin-top: 21px;
  }
</style>
