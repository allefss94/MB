export function emailValidation(email) {
    if (!email || email.trim() === '') {
        return 'O email não pode estar vazio';
    }
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
        return 'Email inválido';
    }
    return null;
}

export function requiredEntityValidation(entity) {
    if (!entity) {
        return 'Selecione uma das opções para proseguir';
    }
    return null;
}

export function nameValidation(name) {
    if (!name || name.trim() === '') {
        return 'O nome não pode estar vazio';
    }
    return null;
}

export function documentValidation(document, entityType) {
    if (!document || document.trim() === '') {
        return 'O documento não pode estar vazio';
    }

    if (entityType === 'pf') {
        const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!regex.test(document)) {
            return 'CPF inválido, deve ter o formato XXX.XXX.XXX-XX';
        }
    } else {
        const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
        if (!regex.test(document)) {
            return 'CNPJ inválido, deve ter o formato XX.XXX.XXX/XXXX-XX';
        }
    }
    return null;
}

export function dateValidation(date) {
    if (!date || date.trim() === '') {
        return 'A data não pode estar vazia';
    }


    if(new Date(date) > Date.now()){
        return 'Data inválida, não é possível cadastrar datas futuras';
    }

    return null;
}

export function phoneValidation(phone) {
    if (!phone || phone.trim() === '') {
        return 'O telefone não pode estar vazio';
    }

    const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    if (!regex.test(phone)) {
        return 'Telefone inválido, deve ter o formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX';
    }
    return null;
}

export function passwordValidation(password) {
    if (!password || password.trim() === '') {
        return 'A senha não pode estar vazia';
    }
    return null;
}
