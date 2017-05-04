<template lang="html">
  <div :class="cols" class="input-field col">
    <i class="material-icons prefix" v-if="icon">{{icon}}</i>
    <input :name="name" :id="id" :type="type" class="validate">
    <label :for="id" v-html="label"></label>
  </div>
</template>

<script>
export default {
  name: 'input-text',
  props: {
  'name':null,
  'id':{default: v=> Math.random().toString(36).substring(2,10)},
  'type': {default:'text'},
  'label':null,
  '_class':null,
  'cols': {default:'s12 m6'},
  'icon': null,
  'bund': null
  },
  mounted()  { return Materialize.updateTextFields()},
}
</script>

<style lang="css">
</style>
