<template lang="pug">
el-form(ref="formRef" :model="numberValidateForm", label-width="100px")
    el-form-item(label="Name" prop="name" :rules="[{ required: true, message: 'name is required' },]")
        el-input(v-model="numberValidateForm.name" placeholder="Enter you full name...")
    el-form-item
        el-button(type='primary'  @click="submitForm()") Join to chat!
</template>
  
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()
const emit = defineEmits(['submitAndValid'])


const numberValidateForm = reactive({
    name: '',
})

const submitForm = () => {
    formRef.value?.validate(valid => {
        if (valid) {
            emit('submitAndValid', numberValidateForm.name)
        }
        return valid;
    })
}



</script>
  