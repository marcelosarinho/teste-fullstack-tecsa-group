$(document).ready(function() {
    $(document).on('click', '.delete-task-btn', function(event) {
        const taskId = $(this).data('task-id');
        
        $.ajax({
            url: `http://localhost:9000/tasks/${taskId}`,
            type: 'DELETE',
            dataType: 'json',
            success: function(response) {
                $('#alert-delete-success').removeClass('d-none');
            },
            error: function(error) {
                $('#alert-delete-error').removeClass('d-none');
            }
        });
    });
});