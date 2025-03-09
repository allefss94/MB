import { httpClient } from '@/shared/http'
import { dateValidation, documentValidation, emailValidation, nameValidation, phoneValidation, requiredEntityValidation, passwordValidation } from '@/shared/validators'
import { reactive, ref } from 'vue'
const initialFormValue = () => ( {
    email: '',
    selectedEntityType: '',
    errors: {
        email: '',
        selectedEntityType: '',
        name: '',
        document: '',
        date: '',
        phone: '',
        password: ''
    },
    name: '',
    document: '',
    date: '',
    phone: '',
    password: ''
})

const state = reactive(initialFormValue())
const currentStep = ref(1)
export const useForm = () => {

    const onReset = () => {
        Object.assign(state, initialFormValue())
    }

    const validations = () => {
        state.errors = []
        switch (currentStep.value) {
            case 1:
                state.errors.email = emailValidation(state.email)
                state.errors.selectedEntityType = requiredEntityValidation(state.selectedEntityType)
                break;
            case 2:
                state.errors.name = nameValidation(state.name)
                state.errors.document = documentValidation(state.document, state.selectedEntityType)
                state.errors.date = dateValidation(state.date)
                state.errors.phone = phoneValidation(state.phone)
                break;
            case 3:
                state.errors.password = passwordValidation(state.password)
                break;

            case 4:
                state.errors.email = emailValidation(state.email)
                state.errors.selectedEntityType = requiredEntityValidation(state.selectedEntityType)
                state.errors.name = nameValidation(state.name)
                state.errors.document = documentValidation(state.document, state.selectedEntityType)
                state.errors.date = dateValidation(state.date)
                state.errors.phone = phoneValidation(state.phone)
                state.errors.password = passwordValidation(state.password)
                break;
            default:
                break;
        }

        state.errors = Object.entries(state.errors).reduce((acc, [key, value]) => {
            if (value !== null && value !== '') {
                acc[key] = value
            }
            return acc
        }, {})
        return Object.keys(state.errors).length === 0
    }

    const onSubmit = async () => {
        const isValid = validations()
        console.log(isValid)

        if(!isValid) {
            return
        }

        if(currentStep.value === 4) {
            try {
                const result = await httpClient('/register', 'POST', state)
                alert(result.message)
                return
            } catch (error) {
                console.log(error.message)
                alert(error.message)
                return 
            }
        }

        updateStep(currentStep.value + 1)

    }

    function updateStep(step) {
        currentStep.value = step
    }
    return {
        state,
        currentStep,
        onReset,
        onSubmit,
        updateStep
    }
}