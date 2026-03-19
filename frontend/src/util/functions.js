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

export function countTasksStatus(tasks) {
    return tasks.reduce((acc, task) => {
        acc[task.status] = (acc[task.status] || 0) + 1;
        return acc;
    }, {});
}

export function tasksStatusQuantity(statusCounts) {
    const total = Object.values(statusCounts).reduce((acc, value) => acc + Number(value || 0), 0);

    $('#total-tasks').text(total);
    $('#pending-tasks').text(statusCounts.pendente || 0);
    $('#in-progress-tasks').text(statusCounts.em_andamento || 0);
    $('#completed-tasks').text(statusCounts.concluido || 0);
}

export function handleSuccess(elementId, modal = null) {
    $(elementId).removeClass('d-none').addClass('show');
    
    if (modal) {
        $(modal).modal('hide');
    }

    setTimeout(() => {
        window.location.reload();
    }, 1000);
}

export function handleError(elementId) {
    $(elementId).removeClass('d-none').addClass('show');
}