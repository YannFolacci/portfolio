<template>
  <header class="">
      <g-link to="/" class="logo">
        {{ $static.strapi.global.siteName }}
      </g-link>
      <nav class="menu">
        <g-link class="" to="/about/">About</g-link>
      </nav>
  </header>
</template>

<static-query>
query {
  strapi {
    global {
      siteName
    }
  }
}
</static-query>

<style>
  header{
    display: flex;
    justify-content: space-between;
    padding:20px;
    height:50px;
    align-items: center;
  }
</style>