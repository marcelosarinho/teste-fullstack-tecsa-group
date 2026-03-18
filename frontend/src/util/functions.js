export function validateForm(data) {
    const errors = {};
    
    if (!data.title) {
        errors.title = 'O campo título é obrigatório';
    }

    if (data.title && data.title.length < 3) {
        errors.title = 'O campo título deve ter no mínimo 3 caracteres';
    }

    if (data.title && data.title.length > 255) {
        errors.title = 'O campo título deve ter no máximo 255 caracteres';
    }
    
    if (!data.description) {
        errors.description = 'O campo descrição é obrigatório';
    }

    if (data.description && data.description.length < 3) {
        errors.description = 'O campo descrição deve ter no mínimo 3 caracteres';
    }

    if (data.description && data.description.length > 255) {
        errors.description = 'O campo descrição deve ter no máximo 255 caracteres';
    }
    
    if (!data.status) {
        errors.status = 'O campo status é obrigatório';
    }
    
    return errors;
}

export function renderCreateFormErrors(errors) {
    Object.entries(errors).forEach(([key, value]) => {
        $(`#${key}-error`).text(value);
    });
}

export function renderEditFormErrors(errors) {
    Object.entries(errors).forEach(([key, value]) => {
        $(`#edit-${key}-error`).text(value);
    });
}