<script setup>
import { useForm } from '@/composables/useForm'
import { computed } from 'vue'
import BaseButton from '../BaseButton.vue'
const { currentStep, updateStep, state } = useForm()
defineProps({
    fields: {
        type: Array,
        required: true
    }
})

const computedTitle = computed(() => {
  switch (currentStep.value) {
    case 1:
      return 'Seja bem-vindo(a)!'
    case 2:
      return state.selectedEntityType === 'pf' ? 'Pessoa Fisica' : 'Pessoa Juridica'
    case 3:
      return 'Senha de acesso'
    case 4:
      return 'Revise suas informações'
  }
})
const computedActions = computed(() => ({
    1: [
        {
            label: 'Continuar',
            type: 'submit'
        }
    ],
    2: [
        {
            label: 'Voltar',
            variant: 'outlined',
            type: 'button',
            onClick: () => updateStep(currentStep.value - 1)
        },
        {
            label: 'Continuar',
            type: 'submit'
        }
    ],
    3: [
        {
            label: 'Voltar',
            variant: 'outlined',
            type: 'button',
            onClick: () => updateStep(currentStep.value - 1)
        },
        {
            label: 'Continuar',
            type: 'submit'
        }
    ],
    4: [
        {
            label: 'Voltar',
            variant: 'outlined',
            type: 'button',
            onClick: () => updateStep(currentStep.value - 1)
        },
        {
            label: 'Cadastrar',
            type: 'submit'
        }
    ]
}))
</script>

<template>
    <div class="container">
        <section class="title">
            <p class="title__step">Passo <span class="title__step-number">{{ currentStep }}</span> de 4</p>
            <h1 class="title__heading">{{ computedTitle }}</h1>
        </section>

        <section class="fields">
            <template v-for="field in fields" :key="field.component">
                <component :is="field.component" v-model="state[field.props.id]" :error="state.errors[field.props.id]" v-bind="field.props" :type="field.props.id"/>
            </template>
        </section>

        <section class="actions">
            <BaseButton v-for="action in computedActions[currentStep]" :key="action.label" v-bind="action" />
        </section>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.title {
  color:black;
}
.title__step-number {
  color: var(--color-primary);
}
.title__heading {
  font-size: 1.5rem;
  margin: 0;
}

.actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
</style>  