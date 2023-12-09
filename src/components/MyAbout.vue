<template>
  <div id="about" class="about-container">
    <h1>O mnie</h1>
    <img src="@/assets/ania.png" alt="My Image" height="50px" class="profile-image" />
    <div class="centered-container">
      <p class="justified-text">
        Cześć! Jestem Ania Łukawska i służę wsparciem w przygotowaniach do egzaminu maturalnego z biologii.<br><br>
        
        Moje serce zawsze skłaniało się ku biologii jako głównemu obszarowi zawodowemu.
        Ukończyłam studia z biologii molekularnej i pedagogiki na Uniwersytecie Jagiellońskim,
        a także biologii stosowanej na Uniwersytecie Rolniczym w Krakowie.
        <br><br>
        Obecnie pracuję jako nauczycielka biologii.
        <br><br>  
        Jestem przekonana, że w nauce biologii istotne są nawet najdrobniejsze detale.
        Dlatego na moich zajęciach staram się przekazywać precyzyjne informacje, korzystając przy tym z estetycznych materiałów.
        Doświadczenie nauczyło mnie, że nauka na bazie takich treści przynosi doskonałe rezultaty w przygotowaniach do matury.
        Wierzę, że nauka jest przyjemna i ciekawa, dlatego popularyzuję ją również w internecie.
        <br><br>
        Stworzyłam kurs maturalny online, który pomógł już setkom uczniów. Świetnie sprawdza się dla maturzystów,
        którzy chcą się solidnie przygotować do egzaminy, jak również dla uczniów młodszych klas, którzy chcą lepiej opanować i zapamiętać materiał.
        <br><br>
        A co robię poza pracą? Po godzinach uwielbiam podróżować, spędzać czas z moim kotem,
        pływać na SUPie i wracać pamięcią do harcerskich przygód – z dumą mogę się nazwać podharcmistrzem!
      </p>
    </div>
  </div>
</template>
  
<script>
export default {
  // Komponent MyAbout.vue
};
</script>
  
<style scoped>

#about {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.justified-text {
  text-align: justify; /* Wyjustuj tekst */
  font-size: 30px;
}

.centered-container {
  max-width: 60vw;
}

.profile-image {
  height: 400px;
}

/* Zmiana rozmiaru dla telefonów o szerokości ekranu do 767px */
@media screen and (max-width: 767px) {
  .profile-image {
    height: 200px;
  }

  h1 {
    font-size: 50px;
  }
  .justified-text {
    text-align: justify; /* Wyjustuj tekst */
    font-size: 16px;
  }
  .centered-container {
    max-width: 80vw;
  }
}
</style>
  