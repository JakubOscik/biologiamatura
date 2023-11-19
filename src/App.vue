<template>
  <div id="app">
    <MyNavbar />
    <div id="home" class="section">
      <MyHome />
    </div>
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
import MyHome from './components/MyHome.vue';
import MyAbout from './components/MyAbout.vue';
import MyContact from './components/MyContact.vue';
import MyCourse from './components/MyCourse.vue';


export default {
  components: {
    MyNavbar,
    MyHome,
    MyAbout,
    MyContact,
    MyCourse,
  },
};
</script>

<style>
.section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
}
</style>
