<script setup>
import { defineAsyncComponent, computed } from 'vue'
import Form from './components/Form.vue';
import { useForm } from './composables/useForm';

const { state,currentStep } = useForm()

const fields = {
  1: [
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: 'Endereço de e-mail',
        id: 'email',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseRadioGroup.vue')),
      props: {
        label: 'Tipo de usuário',
        id: 'selectedEntityType',        
        required: true,
        items: [
          { name: 'entityType', id: 'pf', value: 'pf', label: 'Pessoa Física' },
          { name: 'entityType', id: 'pj', value: 'pj', label: 'Pessoa Jurídica' }
        ]
      }
    }
  ],
  2: [
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType == 'pf' ? 'Nome' : 'Razão social',
        id: 'name', 
        
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType == 'pf' ? 'CPF' : 'CNPJ',
        id: 'document',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType.toLocaleLowerCase() == 'pf' ? 'Data de nascimento' : 'Data de abertura',
        id: 'date',       
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: 'Telefone',
        id: 'phone',
        required: true
      }
    }
  ],
  3: [
    {
        component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
        props: {
        label: 'Sua senha',
        id: 'password',
        required: true
      }
    }
  ],
  4: [
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: 'Endereço de e-mail',
        id: 'email',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType == 'pf' ? 'Nome' : 'Razão social',
        id: 'name',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType == 'pf' ? 'CPF' : 'CNPJ',
        id: 'document',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: state.selectedEntityType == 'pf' ? 'Data de nascimento' : 'Data de abertura',
        id: 'date',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: 'Telefone',
        id: 'phone',
        required: true
      }
    },
    {
      component: defineAsyncComponent(() => import('./components/BaseInput.vue')),
      props: {
        label: 'Sua senha',
        id: 'password',
        required: true
      }
    }
  ]
}

import Steps from './components/steps/Steps.vue';

</script>
<template>
  <main class="page">
    <Form>
      <Steps :fields="fields[currentStep]" />
    </Form>
  </main>
</template>
