import { STATUS } from "../../constants/status";

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:9000/tasks',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response.data);

            const tasks = response.data;

            $('#tasks').html(
                tasks.map(task => {
                    const status = STATUS.find(s => s.value === task.status) ?? { color: 'bg-secondary', label: 'Desconhecido' };

                    return `
                        <tr>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td><span class="badge rounded-pill ${status.color}">${status.label}</span></td>
                            <td>${new Date(task.created_at).toLocaleDateString('pt-BR')}</td>
                            <td class="d-flex flex-wrap gap-2">
                                <button class="btn btn-sm btn-outline-success rounded-circle">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-primary rounded-circle">
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-danger rounded-circle">
                                    <i class="bi bi-trash"></i>
                                </button>
                                <button class="btn btn-sm btn-outline-info rounded-circle">
                                    <i class="bi bi-play"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                }).join('')
            );
        },
        error: function(error) {
            $('#tasks-list-error').removeClass('d-none').addClass('show');
        }
    });
});