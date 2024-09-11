<template>
    <div class="poster-container">
      <div class="poster" @click="scrollDown">
        <!-- 可以插入图片或其他内容 -->
        <img src="./your-poster-image-url.jpg" alt="海报" class="poster-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Poster',
    methods: {
      scrollDown() {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  }
  </script>
  
  <style scoped>
  .poster-container {
    height: 92vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .poster {
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .poster:hover {
    transform: scale(1.05);
  }
  
  .poster-image {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
  </style>
  