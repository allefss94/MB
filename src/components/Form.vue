<script setup>
import { useForm } from '@/composables/useForm';

const { onSubmit } = useForm()
</script>

<template>
    <form @submit.prevent="onSubmit">
        <slot />
    </form>
</template>

<style scoped>
form {
    margin: 0 auto;
    width: 400px;
}
</style>