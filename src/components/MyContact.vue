<template>
    <div id="contact">
        <h1>Contact</h1>
            Jeśli masz jakieś pytania śmiało pisz!<br>
            <br>
            Instagram: <a href="https://instagram.com/matura_biologia?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">Mój instagram</a><br>
        <form @submit.prevent="sendEmail">
        <label for="email">Twój email:</label>
        <input type="email" id="email" v-model="userEmail" required />

        <label for="message">Message:</label>
        <textarea id="message" v-model="userMessage" required></textarea>

        <button type="submit">Send Email</button>
        </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userEmail: '',
        userMessage: '',
      };
    },
    methods: {
      sendEmail() {
        console.log('Email sent from: ' + this.userEmail + ' message: ' + this.userMessage);
      },
    },
  };
  </script>
  
  <style scoped>
#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #333; /* Kolor etykiety */
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc; /* Dodanie obramowania */
  border-radius: 4px; /* Zaokrąglenie rogów */
  box-sizing: border-box; /* Zapewnienie, że padding nie wpływa na szerokość */
}

#message {
    height: 100px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049; /* Kolor przy najechaniu kursorem */
}
</style>
  
<script setup>
</script>
