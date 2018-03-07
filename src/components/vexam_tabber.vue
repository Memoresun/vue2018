<template> 
  <div class="nav">
  <router-link :to="'/graduate'">
    <div class="nav-item">
      <i></i>
      <p>考研题库</p>
    </div>
  </router-link>
    <div>
      <i></i>
      <p>大学题库</p>
    </div>
    <div>
      <i></i>
      <p>课程报名</p>
    </div>
    <div>
      <i></i>
      <p>个人中心</p>
    </div>
  </div>
</template>
<style type="text/css">
  .nav{
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
  }
  .nav div{
    flex: 1;
    display: flex;
    justify-content: center;
  }
</style>