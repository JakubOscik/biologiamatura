<template>
    <div>
      <div id="about" class="about-container">
          <h1>O mnie</h1>
          <img src="@/assets/ania.png" alt="My Image" />
      </div>
      <p>
        Witaj na mojej stronie! Jestem pasjonatem biologii i chciałbym podzielić się
        swoją wiedzą z Tobą. <br> Zapraszam do zapoznania się z moimi kursami z biologii.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    // Komponent MyAbout.vue
  };
  </script>
  
  <style scoped>
  #about {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .about-container {
    max-width: 600px; /* Opcjonalnie: Ustawienie maksymalnej szerokości dla responsywności */
    margin: 0 auto;   /* Opcjonalnie: Ustawienie automatycznego marginesu dla responsywności */
  }
  
  img {
    max-width: 100%;   /* Opcjonalnie: Ustawienie maksymalnej szerokości obrazu */
    height: auto;
    margin-bottom: 20px;
  }
  </style>
  