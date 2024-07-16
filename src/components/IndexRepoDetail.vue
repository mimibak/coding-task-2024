<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

interface Commit {
  author: {
    date: string
  }
  message: string
}

interface Details {
  node_id: string
  commit: Commit
}

const details = ref<Details[]>([])
const route = useRoute()
const repoDetail = ref(route.params.name as string)
const error = ref<string | null>(null)

const fetchLatestCommit = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/repos/coding-bootcamps-eu/${repoDetail.value}/commits?per_page=20`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const loadedCommits = await response.json()
    details.value = loadedCommits
    console.log(loadedCommits)
  } catch (err) {
    console.error('Error fetching commits:', err)
    error.value = 'Failed to fetch commits. Please try again later.'
  }
}

onMounted(() => {
  if (repoDetail.value) {
    fetchLatestCommit()
  } else {
    error.value = 'Repository name is undefined'
  }
})
</script>

<template>
  <article class="general-box">
    <div class="box">
      <p class="title">Repository:</p>
      <h2>{{ repoDetail }}</h2>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
    <ul v-else-if="details.length">
      <li v-for="detail in details" :key="detail.node_id">
        <p class="title">Date: {{ new Date(detail.commit.author.date).toLocaleString() }}</p>
        <p>Message: {{ detail.commit.message }}</p>
      </li>
    </ul>
    <p v-else>No commits found.</p>
  </article>
</template>

<style scoped>
.general-box {
  padding: 1.5rem;
}

.box {
  margin-bottom: 1rem;
}

h2 {
  color: var(--divider-light-1);
  font-size: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 1.5rem;
}

.title {
  color: var(--divider-light-2);
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
