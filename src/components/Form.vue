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
    width: 300px;

    @media screen and (min-width: 768px) {
        width: 500px;
    }
}
</style>