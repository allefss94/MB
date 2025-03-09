<script setup>
import { computed } from 'vue'
const props = defineProps({
    label: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        default: 'button',
        validator(value) {
            return ['button', 'submit', 'reset'].includes(value)
        }
    },
    variant: {
        type: String,
        default: 'primary',
        validator(value) {
            return ['primary', 'outlined'].includes(value)
        }
    }
})

const computedClasses = computed(() => ['base-button', `base-button--${props.variant}`])

</script>

<template>
    <button :class="computedClasses" :type="type">
        <slot>
            {{ label }}
        </slot>
    </button>
</template>

<style lang="css" scoped>
.base-button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: var(--color-primary);
    color: white;
    width: 100%;
}

.base-button--outlined {
    background-color: transparent;
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
}

</style>