<template lang="html">
    <div class="col" :class="cols">
      <slot></slot>
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
