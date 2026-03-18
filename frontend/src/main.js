import './style.css'
import { renderLayout } from './ui/layout'
import { renderTasksStatus } from './ui/tasks-status'
import { renderTasksSearch } from './ui/tasks-search'
import { renderTasksList } from './ui/tasks-list'

renderLayout();
renderTasksStatus();
renderTasksSearch();
renderTasksList();