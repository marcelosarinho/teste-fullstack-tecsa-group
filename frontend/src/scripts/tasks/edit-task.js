$(document).ready(function() {
  $('#edit-task').on('submit', function(e) {
    e.preventDefault();
    
    const data = {
      title: $('#title').val(),
      description: $('#description').val(),
      status: $('#status').val()
    };
    
    console.log(data);
  });
})