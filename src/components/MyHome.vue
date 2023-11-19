<template>
  <div class="home-container">
    <h1>Home</h1>
    <h2>
      Cześć, nazywam się Ania i tralalalallalalalalal.
      Tralallalalalalla
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5em;
  line-height: 1.4;
}

/* Responsywność */
@media (max-width: 768px) {
  h1 {
    font-size: 1.5em; /* Przykładowa zmiana rozmiaru tekstu dla mniejszych ekranów */
  }

  h2 {
    font-size: 1.2em; /* Przykładowa zmiana rozmiaru tekstu dla mniejszych ekranów */
  }
}
</style>
