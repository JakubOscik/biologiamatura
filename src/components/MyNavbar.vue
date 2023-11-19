<!-- src/components/Navbar.vue -->

<template>
  <nav :class="{ 'sticky': isSticky }">
    <ul>
      <li @click="scrollToSection('home')">Home</li>
      <li @click="scrollToSection('about')">About</li>
      <li @click="scrollToSection('course')">Course</li>
      <li @click="scrollToSection('contact')">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.isSticky = scrollPosition > 0;
    },
    scrollToSection(section) {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  background-color: #d10683;
  padding: 10px 15px 10px 15px;
  position: fixed;
  z-index: 1000;
  width: 99%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-right: 20px;
  cursor: pointer;
  color: #fff;
}
</style>
