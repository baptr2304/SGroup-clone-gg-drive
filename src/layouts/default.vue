<script setup lang="ts">
</script>

<template>
  <div :class="$style.layout">
    <Header />
    <Sidebar />
    <UtilitySidebar />
    <RouterView />

  </div>

</template>

<style lang="scss" module>
.layout {
  display: grid;
  grid-template-areas:
    "head head head head head"
    "newBtn main main main tab"
    "sideB  main main main tab"
    "sideB   main main main tab";
  height: 100vh;
  padding: 0.5rem 0.5rem 0 0.5rem;
  grid-template-columns: 16rem 1fr 1fr 1fr auto;
  grid-template-rows: auto auto auto 1fr;
  box-sizing: border-box;
  background-color: var(--color-background);
}
</style>