<template>
  <div>
    <!-- PAGE HEADER -->
    <section class="page-header">
      <transition name="slide-fade" mode="out-in" :duration="5000" appear>
        <div >
          <h1 class="project-name">ArduAir, a low-cost air pollution sampler</h1>
      	  <h2 class="project-tagline">An Arduino powered, opensource air quality monitor.</h2>
         </div>
      </transition>

  	<!-- <mz-row>
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
  	</mz-row> -->
  </section>

  <!-- PAGE CARDS -->
  <section class="container">
    <mz-row>
      <!-- CARD -->
  		<mz-col cols="s12 m6 l4">
        <router-link to="/data">
          <transition name="slide-fade" mode="out-in" enter-active-class="s-1" appear>
              <mz-card image="http://marketingland.com/wp-content/ml-loads/2015/01/analytics-marketing-data-technology-ss-1920.jpg" title="Explore the data" link="Explore" linkUrl="#" class="small">
                <p>Search and explore the stored data</p>
              </mz-card>
          </transition>
        </router-link>
  		</mz-col>
      <!-- CARD2 -->
      <mz-col cols="s12 m6 l4">
        <router-link to="/documentation">
          <transition name="slide-fade" mode="out-in" enter-active-class="s-2" appear>
            <mz-card image="https://cdn-az.allevents.in/banners/aa5309dbd303169235ad1b64feddef76" title="Read the documentation" link="Read" linkUrl="#" class="small">
              <p>Learn how to use the Arduair device</p>
            </mz-card>
          </transition>
        </router-link>
  		</mz-col>
      <!-- CARD3 -->
      <mz-col cols="s12 m6 l4">
        <a href="https://github.com/fega/arduair">
          <transition name="slide-fade" mode="out-in" enter-active-class="s-3" appear>
            <mz-card image="https://lh3.googleusercontent.com/zp6oZozh_eYoCXApAy70NDYIv1-PMxqcALpXmFrctdPMPEXtl4GBF7aMSOEczK6mnyQudR-6EpHGcWi1-SQk8wJ7L2rOhUm9--D_GincvlYJ6WcJWlo_ez2DWBF7Xf2GQTXtwUcprDDHezA692cr7S2QcuFdA-7jeGo5UjcxzTvoyhgQPR0tPjQQ15lI8T7F7S0E_LULmTQNh_gKmYByZHlB1tjAulL8jJPLkWtokjOCFSsovVOhENx7OaLyqeBIhzDIUS-SLWVNIHhJgaN0h-S-vSgleoun8kJnc5f3G7fWvMUdKvp6ZqFFR2VMd2STdFVRlqJMdvFOf4Es9A11ghSrbLMVpEQS423CGu88Dvjut-DG4b8vukLDTOhQtFFJsX8N2Q-nW5fHVRU-aXhm_nbxnJC0pvyL0QP87noJ6EXyYu9AsnylKa99_eAI9tbd7QuFkwXsQJrPDPCvv2LKeKqtAT81OxapTyhqfRkuxrs_39WS9NaLU-GNIl1rnHCPoLTy7XqSWNScKG1ESCcso_jJEAy2HDhr-PCxjHQa2uRqc6tImrmIekQ_PGc1PrDREWh40pVBvnKVOcijfx4namYseFeuci0Wm7ErvOoxHlgobaoG0jt06vLn0HmNY40YnLRfQTmIXI-z9UciqjCEE0xpKok_YQE-P-7ot-gwvUU=w1267-h950-no" title="Build an ArduAir device" link="Build" linkUrl="#" class="small">
              <p>Learn how to build your own Arduair</p>
            </mz-card>
          </transition>
        </a>
  		</mz-col>
      <!-- CARD4 -->
      <mz-col cols="s12 m6 l4">
        <a href="https://github.com/fega/arduair/blob/master/docs/build-an-Arduair-device.md">
          <transition name="slide-fade" mode="out-in" enter-active-class="s-4" appear>
            <mz-card image="https://lh3.googleusercontent.com/zp6oZozh_eYoCXApAy70NDYIv1-PMxqcALpXmFrctdPMPEXtl4GBF7aMSOEczK6mnyQudR-6EpHGcWi1-SQk8wJ7L2rOhUm9--D_GincvlYJ6WcJWlo_ez2DWBF7Xf2GQTXtwUcprDDHezA692cr7S2QcuFdA-7jeGo5UjcxzTvoyhgQPR0tPjQQ15lI8T7F7S0E_LULmTQNh_gKmYByZHlB1tjAulL8jJPLkWtokjOCFSsovVOhENx7OaLyqeBIhzDIUS-SLWVNIHhJgaN0h-S-vSgleoun8kJnc5f3G7fWvMUdKvp6ZqFFR2VMd2STdFVRlqJMdvFOf4Es9A11ghSrbLMVpEQS423CGu88Dvjut-DG4b8vukLDTOhQtFFJsX8N2Q-nW5fHVRU-aXhm_nbxnJC0pvyL0QP87noJ6EXyYu9AsnylKa99_eAI9tbd7QuFkwXsQJrPDPCvv2LKeKqtAT81OxapTyhqfRkuxrs_39WS9NaLU-GNIl1rnHCPoLTy7XqSWNScKG1ESCcso_jJEAy2HDhr-PCxjHQa2uRqc6tImrmIekQ_PGc1PrDREWh40pVBvnKVOcijfx4namYseFeuci0Wm7ErvOoxHlgobaoG0jt06vLn0HmNY40YnLRfQTmIXI-z9UciqjCEE0xpKok_YQE-P-7ot-gwvUU=w1267-h950-no" title="About the project" link="Read" linkUrl="#" class="small">
              <p>Read about the project</p>
            </mz-card>
          </transition>
        </a>
  		</mz-col>
      <!-- CARD5 -->
      <mz-col cols="s12 m6 l4">
        <a href="https://github.com/fega/arduair">
        <transition name="slide-fade" mode="out-in" enter-active-class="s-5" appear>
          <mz-card image="https://img.gawkerassets.com/img/18efmtxt7i5nvjpg/original.jpg" title="GitHub" link="Go to github" linkUrl="#" class="small">
            <p>See the GitHub repository</p>
          </mz-card>
        </transition>
        </a>
  		</mz-col>
      <!-- CARD6 -->
      <mz-col cols="s12 m6 l4">
        <a href="https://www.upb.edu.co/es/la-universidad">
        <transition name="slide-fade" mode="out-in" enter-active-class="s-6" appear>
          <mz-card image="http://images.paginasamarillas.com/283728/262725/animation/1.jpg" title="About UPB" link="Read  " linkUrl="#" class="small">
            <p>Read about the "Universidad pontificia bolivariana"</p>
          </mz-card>
        </transition>
        </a>
  		</mz-col>
  	</mz-row>
  </section>
  </div>
</template>

<script>
import mzRow from '@/components/materialize/mz-row.vue'
import mzCol from '@/components/materialize/mz-col.vue'
import mzCard from '@/components/materialize/mz-card.vue'
import pageTitle from '@/components/page-title.vue'

export default {
  components: {pageTitle, mzRow, mzCol,mzCard}
}
</script>
<style scoped>
  .page-header{
    background: url(http://ciani.bucaramanga.upb.edu.co/wp-content/gallery/inicio-ciani/FachadaedificioJ.JPG) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding: 6em 1em;
    text-shadow: 0px 1px 4px rgba(0, 0, 0, 1), 0px 1px 4px rgba(0, 0, 0, 1) ;

  }
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(10px);
    opacity: 0;
  }
  .s-1 {
    transition: all .3s ease;
    transition-delay: .05s;
  }
  .s-2 {
    transition: all .3s ease;
    transition-delay: .1s;
  }
  .s-3 {
    transition: all .3s ease;
    transition-delay: .15s;
  }
  .s-4 {
    transition: all .3s ease;
    transition-delay: .2s;
  }
  .s-5 {
    transition: all .3s ease;
    transition-delay: .25s;
  }
  .s-6 {

    transition: all .3s ease;
    transition-delay: .3s;
  }
</style>
