<template lang="pug">
el-card(shadow="hover")
    input-required-from-user(@submit-and-valid="userNameIsValid" v-if="!user.name" label="Name" placeholder="Enter your full name" button-text="Joint Chat")
    temaplate.transition-box(v-else)
        chat(:user="user" :data="chatData")
        input-required-from-user(@submit-and-valid="sendMsg" label="Message" placeholder="Add your message" button-text="Send")
</template>
<script setup type="ts">
import { v4 } from 'uuid';

const user = reactive({ name: null, uuid: v4() })
const chatData = reactive([]);
const { data, send, open } = useWebSocket('ws://localhost:3001', {
    autoReconnect: true,
})


const sendMsg = (msg) => send(JSON.stringify({ msg, user }))

const userNameIsValid = (name) => {
    user.name = name
}


watch(data, (value, oldValue) => {
    if (value) {
        chatData.push(JSON.parse(value))
    }

})
</script>