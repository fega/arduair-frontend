<template>
  <div class="" style="width:100%; height:100%; position:fixed">
    <transition name="slide-fade" mode="out-in" enter-active-class="s-6" appear>
      <iframe src="https://fega.gitbooks.io/arduair-user-manual/content/" frameborder="0" style="position:relative; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;"></iframe>
    </transition>
  </div>
</template>

<script>
import pageTitle from '@/components/page-title.vue'
export default {
  name: 'docs-route',
  components: {pageTitle}
}
</script>
<style scoped>
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(10px);
    opacity: 0;
  }

  .s-6 {

    transition: all .3s ease;
    transition-delay: 1.5s;
  }
</style>
