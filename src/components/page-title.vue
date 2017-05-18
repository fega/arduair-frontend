<template lang="html">
  <section class="page-header">
    <transition name="slide-fade" mode="out-in" appear>
      <div>
        <h1 class="project-name"><slot></slot></h1>
        <slot name="description"></slot>
      </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: "page-header"
}
</script>

<style lang="css" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateY(10px);
  opacity: 0;
}
</style>
