<script setup lang="ts">
import wsxJsTool from 'wsx-js-tool-hi';
import wsxTsTool from 'wsx-ts-tool-hi';
import { ref } from 'vue'

defineProps<{ msg: string }>()
const count = ref(0)
const x = wsxJsTool.getToday();
const t = wsxTsTool.getToday();
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      <code>wsxJsTool.getToday()</code> {{ x }} <br>
      <code>wsxTsTool.getToday()</code> {{ t }}
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
