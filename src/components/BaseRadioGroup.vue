<script setup>
import { useForm } from '@/composables/useForm';


defineProps({
    items: {
        type: Array,
        required: true,
    },
    value: {
        type: String,
        default: null
    },
    defaultValue: {
        type: String,
        default: null
    },
    error:{
        type: String,
        required: false
    }
})

const modelValue = defineModel()



</script>

<template>
    <div class="radio-group-container">
        <template v-for="item in items">
            <input v-bind="$attrs" v-model="modelValue" type="radio" :name="item.name" :id="item.id" :value="item.value" />
            <label :for="item.id">{{ item.label }}</label>
        </template>
    </div>
    <transition >
        <p v-if="error" class="error-message">{{ error }}</p>
    </transition>
</template>

<style lang="css" scoped>
.radio-group-container {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
}

.error-message {
    color: var(--color-error);
    font-size: 0.75rem;
    margin-top: 0.25rem;
}
input[type="radio"] {
    accent-color: var(--color-gray);
}
</style>
