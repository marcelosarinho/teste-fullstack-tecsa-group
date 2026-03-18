import './style.css'
import renderLayout from './ui/layout'
import renderTasksStatus from './ui/tasks-status'
import renderTasksSearch from './ui/tasks-search'
import renderTasksList from './ui/tasks-list'
import renderTasksHeader from './ui/tasks-header'

renderLayout();
renderTasksHeader();
renderTasksStatus();
renderTasksSearch();
renderTasksList();

$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:9000/tasks',
        type: 'GET',
        success: function(response) {
            console.log(response);
        }
    });
});