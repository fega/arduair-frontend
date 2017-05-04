<template lang="html">
  <section class="page-header">
    <h1 class="project-name"><slot></slot></h1>
    <slot name="description"></slot>
  </section>
</template>

<script>
export default {
  name: "page-header"
}
</script>

<style lang="css">
</style>
