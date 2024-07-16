<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Repo {
  id?: number
  name: string
}

const repos = ref<Repo[]>([])

const fetchData = async () => {
  try {
    const response = await fetch('https://api.github.com/users/coding-bootcamps-eu/repos')
    if (!response.ok) {
      throw new Error('Failed to load GitHub repositories')
    }
    const data = await response.json()
    repos.value = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name
    }))
  } catch (error) {
    console.error('Loading failed', error)
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="right-container">
    <ul>
      <li v-for="repo in repos" :key="repo.name">
        <RouterLink :to="{ name: 'repo-details', params: { name: repo.name } }">
          <h3 class="repo-title">{{ repo.name }}</h3>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.right-container {
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100vh;
  width: auto;
  background-color: var(--bg-color);
}

ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 1.5rem 2rem 1rem 1.5rem;
}

.repo-title {
  font-weight: bold;
}

@media (min-width: 1024px) {
  ul {
    padding: 0;
  }
}
</style>
