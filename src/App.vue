<template>
  <div id="app">
    <MyNavbar />
    <div id="about" class="section">
      <MyAbout />
    </div>
    <div id="course" class="section">
      <MyCourse />
    </div>
    <div id="contact" class="section">
      <MyContact />
    </div>
  </div>
</template>

<script>
import MyNavbar from './components/MyNavbar.vue';
import MyAbout from './components/MyAbout.vue';
import MyContact from './components/MyContact.vue';
import MyCourse from './components/MyCourse.vue';


export default {
  components: {
    MyNavbar,
    MyAbout,
    MyContact,
    MyCourse,
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
#app {
  background: #811b6862;
}

.section {
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}

/* Responsywność */

</style>
