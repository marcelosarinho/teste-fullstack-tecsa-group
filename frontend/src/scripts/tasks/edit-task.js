import { renderEditFormErrors, validateForm } from "../../util/functions";

function updateTask(id, data) {
  return $.ajax({
    url: `http://localhost:9000/tasks/${id}`,
    type: 'PUT',
    dataType: 'json',
    data: JSON.stringify(data),
    contentType: 'application/json'
  });
}

function handleSuccess() {
  $('#alert-update-success').removeClass('d-none').addClass('show');
  $('#modal-edit-task').modal('hide');

  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

function handleError() {
  $('#alert-update-error').removeClass('d-none').addClass('show');
}

$(document).ready(function() {
  $(document).on('click', '.edit-task-btn', function(event) {
    $('#edit-id').val($(this).data('task-id'));
    $('#edit-title').val($(this).data('task-title'));
    $('#edit-description').val($(this).data('task-description'));
    $('#edit-status').val($(this).data('task-status'));
  });

  $('#edit-task').on('submit', function(e) {
    e.preventDefault();

    const id = $('#edit-id').val();

    const data = {
      title: $('#edit-title').val(),
      description: $('#edit-description').val(),
      status: $('#edit-status').val()
    };

    const errors = validateForm(data);
    
    if (Object.keys(errors).length > 0) {
      renderEditFormErrors(errors);
      return;
    }
    
    updateTask(id, data).done(() => handleSuccess()).fail(handleError);
  });

  $(document).on('click', '.change-status-btn', function(event) {
    const taskId = $(this).data('id');
    const status = $(this).data('status');
    
    const data = { 
      title: $(this).data('task-title'),
      description: $(this).data('task-description'), 
      status 
    };

    updateTask(taskId, data).done(() => handleSuccess()).fail(handleError);
  });
})