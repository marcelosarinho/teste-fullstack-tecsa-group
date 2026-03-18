import { renderEditFormErrors, validateForm } from "../../util/functions";

$(document).ready(function() {
  $(document).on('click', '.edit-task-btn', function(event) {
    const taskTitle = $(this).data('task-title');
    const taskDescription = $(this).data('task-description');
    const taskStatus = $(this).data('task-status');

    $('#edit-title').val(taskTitle);
    $('#edit-description').val(taskDescription);
    $('#edit-status').val(taskStatus);
  });

  $('#edit-task').on('submit', function(e) {
    e.preventDefault();
    
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
    
    $.ajax({
      url: 'http://localhost:9000/tasks',
      type: 'PUT',
      dataType: 'json',
      data: JSON.stringify(data),
      success: function(response) {
          $('#alert-update-success').removeClass('d-none');
      },
      error: function(error) {
          $('#alert-update-error').removeClass('d-none');
      }
    })
  });
})