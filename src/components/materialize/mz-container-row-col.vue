<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col" :class="cols">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {'cols':{
    default:'s12'
  }}
}
</script>

<style lang="css">
</style>
