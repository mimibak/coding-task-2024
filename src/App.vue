<script setup lang="ts">
import PageDescription from './components/PageDescription.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"> Home </RouterLink>
    </nav>
    <img
      alt="CBE logo"
      class="logo"
      src="/src/assets/cbe-logo-color.png"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <PageDescription msg="Coding Bootcamps Europe" />
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 2rem auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
