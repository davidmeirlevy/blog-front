<template>
<div class="app">
  <Header />
  <nuxt />
  <Footer />
  <div id="fb-root"></div>
</div>
</template>

<script>
import Footer from "./components/Footer";
import Header from "./components/Header";

  export default {
    components: {
      Header,
      Footer
    },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap' }
      ]
    }
  }
</script>

<style lang="scss">
@import "colors";

	html {
		font-family: 'Rubik', sans-serif;
		font-size: 16px;
	}

html[dir="rtl"] {
  text-align: right;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: $mainColor;
}

a:hover {
  text-decoration: underline;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@media all and (max-width: 500px) {
  .app {
    margin: 0.5rem;
  }
}

.row {
  display: flex;

  * {
    flex: 1;
  }
}
</style>
