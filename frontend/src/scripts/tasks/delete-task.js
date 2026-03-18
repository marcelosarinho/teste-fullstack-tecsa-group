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
                $('#alert-delete-success').removeClass('d-none').addClass('show');
                $('#modal-delete-task').modal('hide');

                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            },
            error: function() {
                $('#alert-delete-error').removeClass('d-none').addClass('show');
            }
        });
    });
});