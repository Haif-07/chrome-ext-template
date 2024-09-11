
<template>
    <header class="header">
      <button class="header-btn">主页</button>
      <button class="header-btn">设置</button>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8vh;
    background-color: #f5f5f5;
    padding: 0 16px;
  }
  
  .header-btn {
    background: none;
    border: none;
    font-size: 16px;
    color: #6200ea;
    cursor: pointer;
  }
  </style>
  