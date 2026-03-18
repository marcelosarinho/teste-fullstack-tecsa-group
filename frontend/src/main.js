import './style.css'
import renderLayout from './ui/layout'
import renderTasksStatus from './ui/tasks-status'
import renderTasksSearch from './ui/tasks-search'
import renderTasksList from './ui/tasks-list'
import renderTasksHeader from './ui/tasks-header'

import './scripts/tasks/get-tasks'
import './scripts/tasks/create-task'
import './scripts/tasks/edit-task'
import './scripts/tasks/delete-task'

renderLayout();
renderTasksHeader();
renderTasksStatus();
renderTasksSearch();
renderTasksList();
