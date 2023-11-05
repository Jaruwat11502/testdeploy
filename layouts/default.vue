<script setup lang="ts">
const btnContainer = ref("");



</script>

<template>

  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Index</nuxt-link></li>
        <li><nuxt-link to="/counter">Counter</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/admin">Admin</nuxt-link></li>
        <li><nuxt-link to="/users">Users</nuxt-link></li>
      </ul>
    </nav>

    <div id="myDIV" class="ClassmyDIV" ref="btnContainer">
      <button class="btn active">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <button class="btn">4</button>
      <button class="btn">5</button>
    </div>

    <header style="background-color: beige;">
      <slot name="header"></slot>
    </header>

    <main style="background-color: chocolate;">
      <slot></slot>
    </main>

    <footer style="background-color: aqua;">Copyright 2023</footer>
  </div>
</template>

<style scoped>
  .btn {
  border: none;
  outline: none;
  padding: 10px 16px;
  background-color: #f1f1f1;
  cursor: pointer;
}

/* Style the active class (and buttons on mouse-over) */
.active, .btn:hover {
  background-color: #666;
  color: white;
}
</style>
