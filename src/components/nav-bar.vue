<template>
  <nav class="white" role="navigation">
	<div class="nav-wrapper circle">
		<router-link id="logo-container" to="/" class="brand-logo primary-text"><object  type="image/svg+xml" data="http://arduair.herokuapp.com//img/arduair-logo.svg" height="50"><img height=59 src="/img/arduair-logo.png" alt="GPS tracker Logo" ></object></router-link>
		<ul class="right hide-on-med-and-down">
			<li><router-link class="primary-text waves-effect waves-pink" to="/">About</router-link></li>
			<li><router-link class="accent-text waves-effect waves-pink" to="/data">Data</router-link></li>
			<li><router-link class="primary-text waves-effect waves-pink" to="/documentation">Documentation</router-link></li>
			<li><router-link class="primary-text waves-effect waves-pink" to="/configure">Configure</router-link></li>
			<li><router-link class="primary-text waves-effect waves-pink" to="/add">Add</router-link></li>
      <li><router-link class="primary-text waves-effect waves-pink" to="/add">Source Code</router-link></li>
		</ul>
		<a href="#" data-activates="nav-mobile" class="button-collapse primary-text  "><i class="material-icons waves-effect waves-pink circle">menu</i></a>
	</div>
  <ul id="nav-mobile" class="side-nav">
  	<li class="waves-effect waves-pink"><router-link class="primary-text" to="/">About</router-link></li>
  	<li class="waves-effect waves-pink"><router-link class="primary-text" to="/data">Data</router-link></li>
  	<li class="waves-effect waves-pink"><router-link class="primary-text" to="/documentation">Documentation</router-link></li>
  	<li class="waves-effect waves-pink"><router-link class="primary-text" to="/configure">Configure</router-link></li>
  	<li class="waves-effect waves-pink"><router-link class="primary-text" to="/add">Add</router-link></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>
