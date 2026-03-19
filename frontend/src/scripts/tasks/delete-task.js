import { handleError, handleSuccess } from "../../util/functions";

$(document).ready(function() {
    $(document).on('click', '.delete-task-btn', function(event) {
        const taskId = $(this).data('task-id');

        $('#modal-delete-task').data('task-id', taskId);
    });

    $('#confirm-delete-task-btn').on('click', function() {
        const taskId = $('#modal-delete-task').data('task-id');

        console.log(taskId);

        if (!taskId) return;

        $.ajax({
            url: `http://localhost:9000/tasks/${taskId}`,
            type: 'DELETE',
            dataType: 'json',
            success: function() {
                handleSuccess('#alert-delete-success', '#modal-delete-task');
            },
            error: function() {
                handleError('#alert-delete-error');
            }
        });
    });
});