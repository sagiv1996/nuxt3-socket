<template lang="pug">
el-card
    slot#header 
        div(:style="{ textAlign: 'center'}") Hello {{ user.name }} and welcome!
    div(v-for="o of data" :style="{ textAlign: user.uuid === o.user.uuid? 'right' : 'left' }" ) 
        div
            small {{o.user.name}} say: 
                UseTimeAgo(v-slot="{ timeAgo }" :time="new Date(o.date)")  ({{ timeAgo }}) 

        div 
            span {{ o.msg }}  
            small
                
           
</template>
<script setup lang="ts">
import { UseTimeAgo } from '@vueuse/components'
defineProps({
    user: {
        required: true,
        type: Object,
    },
    data: {
        type: [Object],
    }
})



</script>