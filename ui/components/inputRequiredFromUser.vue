<template lang="pug">
el-form(ref="formRef" :model="validateForm", label-width="100px")
    el-form-item(:label="label" prop="value" :rules="[{ required: true, message: 'This is required' },]")
        el-input(v-model="validateForm.value" :placeholder="placeholder")
    el-form-item
        el-button(type='primary'  @click.stop="submitForm") {{buttonText}}
</template>
  
<script lang="ts" setup>
import type { FormInstance } from 'element-plus'

defineProps({
    label: {
        required: true,
        type: String
    },
    placeholder: {
        required: true,
        type: String
    },
    buttonText: {
        required: true,
        type: String
    }
})

const formRef = ref<FormInstance>()
const emit = defineEmits(['submitAndValid'])


const validateForm = reactive({
    value: '',
})

const submitForm = () => {
    formRef.value?.validate(valid => {
        if (valid) {

            emit('submitAndValid', validateForm.value)
            formRef.value?.resetFields()
        }
        return valid;
    })
}



</script>
  