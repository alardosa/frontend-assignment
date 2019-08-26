<template>
  <div id="app">
    <Navbar />
    <main class="Main">
      <div class="container">
        <div class="Pagegrid">
          <Navigation />
          <router-view class="Pageview" />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from 'Components/common/navbar'
import Navigation from 'Components/common/navigation'
import Footer from 'Components/common/footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Navigation,
    Footer
  }
}
</script>
