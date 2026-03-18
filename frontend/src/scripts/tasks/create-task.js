import { validateForm, renderFormErrors } from "../../util/functions";

$(document).ready(function() {
    $('#create-task').on('submit', function(e) {
        e.preventDefault();
        
        const data = {
            title: $('#title').val(),
            description: $('#description').val(),
            status: $('#status').val()
        };

        const errors = validateForm(data);
        
        if (Object.keys(errors).length > 0) {
            renderFormErrors(errors);
            return;
        }

        $.ajax({
            url: 'http://localhost:9000/tasks',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});