<script setup>
defineProps({
    error: String,
    label: String,
    id: String
})
const modelValue = defineModel()
</script>

<template>
    <div class="input-container">
        <label v-if="label" :for="id">{{ label }}</label>
        <input v-bind="$attrs" :id="id" v-model="modelValue" :class="{ 'error': error }" />
        <transition >
            <p v-if="error" class="error-message">{{ error }}</p>
        </transition>
    </div>
</template>

<style lang="css" scoped>
.input-container {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
input {
    padding: 0.5rem 1rem;
    border: 1px solid var(--color-gray);
    border-radius: 0.25rem;
    font-size: 1rem;
    transition: all 250ms ease-in-out;
    outline: none;

    &.error {
        border-color: var(--color-error);
    }
}
.error-message {
    color: var(--color-error);
    font-size: 0.75rem;
    
}
</style>