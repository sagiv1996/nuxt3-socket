<template lang="pug">
el-card(shadow="hover")
    get-info-about-user(@submit-and-valid="connectToSocket")
</template>

<script setup type="ts">
const connectToSocket = (name) => {
    console.log(name)
}
</script>