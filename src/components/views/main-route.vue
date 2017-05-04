<template>
  <section class="page-header">
	<h1 class="project-name">ArduAIR</h1>
	<h2 class="project-tagline">Arduair is an opensource air quality monitor built in an Arduino. It saves the data in an SD, but can send this data to our Node.js server or deploy your own copy.</h2>
	<mz-row>
		<mz-col>
			<a href="https://github.com/fega/arduAIR/tarball/master" class="btn waves-effect waves-pink">Build your own</a>
		</mz-col>
	</mz-row>
	<br>
	<br>
  <mz-row>
		<mz-col>
			<a href="https://github.com/fega/arduAIR/tarball/master" class="btn waves-effect waves-pink">see the  data</a>
    </mz-col>
	</mz-row>
	<br>
	<br>
  <mz-row>
		<mz-col>
			<a href="https://github.com/fega/arduAIR" class="btn waves-effect waves-pink">View on GitHub</a>
			<a href="https://github.com/fega/arduAIR/zipball/master" class="btn waves-effect waves-pink">Download .zip</a>
			<a href="https://github.com/fega/arduAIR/tarball/master" class="btn waves-effect waves-pink">Download .tar.gz</a>
    </mz-col>
	</mz-row>
</section>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import pageTitle from '@/components/page-title.vue'
export default {
  components: {pageTitle, mzRow, mzCol}
}
</script>
