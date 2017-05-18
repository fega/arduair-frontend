<template lang="html">
  <div class="card hoverable">
    <div class="card-image">
      <img :src="image">
      <span class="card-title">{{title}}</span>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div class="card-action primary-text">
      <a :href="linkUrl">{{link}}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image','title', 'link','linkUrl']
}
</script>

<style lang="css" scoped>
.card-content{
  color: #606c71;
}
.card-title{
   text-shadow: 0px 1px 4px rgba(0, 0, 0, 1), 0px 1px 4px rgba(0, 0, 0, 1) ;
 }
.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating){
   color: #1e6bb8!important;
 }
</style>
