<template>
  <div class="" style="width:100%; height:100%; position:fixed">
    <page-title>Documentation</page-title>
    <iframe src="https://fega.gitbooks.io/arduair-user-manual/content/" frameborder="0" style="position:relative; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:99;"></iframe>
  </div>
</template>

<script>
import pageTitle from '@/components/page-title.vue'
export default {
  name: 'docs-route',
  components: {pageTitle}
}
</script>
