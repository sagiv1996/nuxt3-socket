<template lang="pug">
el-container(:style="{width: '500px', margin: 'auto'}")
  el-card
    el-main
      slot
    el-footer
      center Bla Bla Bla  {{ new Date().getFullYear() }} ©
</template>
