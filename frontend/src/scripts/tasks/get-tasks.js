import { STATUS } from "../../constants/status";
import { countTasksStatus, tasksStatusQuantity } from "../../util/functions";

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:9000/tasks',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            const tasks = response.data;

            const statusCounts = countTasksStatus(tasks);
            tasksStatusQuantity(statusCounts);

            $('#tasks').html(
                tasks.map(task => {
                    const status = STATUS.find(s => s.value === task.status) ?? { color: 'bg-secondary', label: 'Desconhecido' };

                    return `
                        <tr>
                            <td>${task.title}</td>
                            <td>${task.description}</td>
                            <td><span class="badge rounded-pill ${status.color}">${status.label}</span></td>
                            <td>${new Date(task.created_at).toLocaleDateString('pt-BR')}</td>
                            <td class="d-flex gap-2">
                                <button
                                    title="Marcar como concluída"
                                    class="btn btn-sm btn-outline-success rounded-circle">
                                    <i class="bi bi-check-lg"></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-sm btn-outline-primary rounded-circle edit-task-btn"
                                    data-task-id="${task.id}"
                                    data-task-title="${task.title}"
                                    data-task-description="${task.description}"
                                    data-task-status="${task.status}"
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-edit-task"
                                    title="Editar tarefa"
                                >
                                    <i class="bi bi-pencil"></i>
                                </button>
                                <button
                                    data-bs-toggle="modal"
                                    data-bs-target="#modal-delete-task"
                                    title="Excluir tarefa"
                                    class="btn btn-sm btn-outline-danger rounded-circle delete-task-btn"
                                    data-task-id="${task.id}">
                                    <i class="bi bi-trash"></i>
                                </button>
                                <button
                                    ${task.status === "em_andamento" ? "disabled" : ""}
                                    title="Iniciar tarefa"
                                    class="btn btn-sm btn-outline-info rounded-circle">
                                    <i class="bi bi-play"></i>
                                </button>
                                <button
                                    ${task.status === "pendente" || task.status === "concluido" ? "disabled" : ""}
                                    title="Pausar tarefa"
                                    class="btn btn-sm btn-outline-warning rounded-circle">
                                    <i class="bi bi-pause"></i>
                                </button>
                            </td>
                        </tr>
                    `;
                })
            );
        },
        error: function(error) {
            $('#tasks-list-error').removeClass('d-none').addClass('show');
        }
    });
});