<template>
  <div>
    <div class="navbar-fixed">
      <nav class="white" role="navigation">
      	<div class="nav-wrapper circle">
          <!-- TITLE -->
          <router-link id="logo-container" to="/" class="brand-logo primary-text">
            <transition name="slide-up">
              <span class="accent-text" key="1" v-if="$route.path === '/configure' ">Configure device</span>
              <span class="accent-text" key="2" v-else-if="$route.path === '/add' ">Add device</span>
              <span class="accent-text" key="3" v-else-if="$route.path === '/data' ">Data</span>
              <object v-else type="image/svg+xml" data="/static/arduair-logo.svg" height="40" style="margin-top:4px"><img height="40" src="/static/arduair-logo.png" alt="Arduair Project" ></object>
            </transition>
          </router-link>
          <!-- LINKS -->
      		<ul class="right hide-on-med-and-down">
      			<li><router-link class="primary-text waves-effect waves-pink" to="/">About</router-link></li>
      			<li><router-link class="accent-text waves-effect waves-pink" to="/data">Data</router-link></li>
      			<li><router-link class="primary-text waves-effect waves-pink" to="/documentation">Manual</router-link></li>
      			<li><router-link class="primary-text waves-effect waves-pink" to="/configure">Configure</router-link></li>
      			<li><router-link class="primary-text waves-effect waves-pink" to="/add">Add</router-link></li>
            <li><router-link class="primary-text waves-effect waves-pink" to="/add">Source Code</router-link></li>
      		</ul>
          <!-- SIDENAV ICON -->
      		<a href="#" data-activates="nav-mobile" class="button-collapse primary-text  "><i class="material-icons waves-effect waves-pink circle">menu</i></a>
      	</div>

        </nav>

      </div>
      <!-- SIDENAV -->
      <ul id="nav-mobile" class="side-nav">
        <li @click="closeNav()" class="waves-effect waves-pink"><router-link class="primary-text" to="/">About</router-link></li>
        <li @click="closeNav()" class="waves-effect waves-pink"><router-link class="primary-text" to="/data">Data</router-link></li>
        <li @click="closeNav()" class="waves-effect waves-pink"><router-link class="primary-text" to="/documentation">Manual</router-link></li>
        <li @click="closeNav()" class="waves-effect waves-pink"><router-link class="primary-text" to="/configure">Configure</router-link></li>
        <li @click="closeNav()" class="waves-effect waves-pink"><router-link class="primary-text" to="/add">Add</router-link></li>
      </ul>
  </div>

</template>

<script>
export default {
  name: 'nav-bar',
  methods:{
    closeNav(){
      console.log(this.$route)
      $().sideNav('hide');
    }
  }
}
</script>
<style scoped>
  nav{
    position: fixed;
  }
  span,object{
    position: absolute;
  }
  #logo-container{
    height:40px;
    margin-top:4px
  }
  @media screen and (max-width:600px){
  #logo-container{
    margin-top:7px
    }
  }
  .slide-up-enter-active {
    transition: all .5s ease;
  }
  .slide-up-leave-active {
    transform: translateX(-10px);
    opacity: 0;
    transition: all .5s ease;
  }
  .slide-up-enter, .slide-fade-leave-to{
    transform: translateX(-10px);
    opacity: 0;
  }
</style>
