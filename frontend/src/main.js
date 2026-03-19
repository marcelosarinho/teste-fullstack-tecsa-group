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

function setAuthToken(token) {
  if (!token) return;

  localStorage.setItem('token', token);
  $.ajaxSetup({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

function clearAuthToken() {
  localStorage.removeItem('token');
  $.ajaxSetup({
    headers: {
      Authorization: ''
    }
  });
}

function renderLogin() {
  document.querySelector('#app').innerHTML = `
    <main class="container" style="max-width: 420px; padding-top: 5rem;">
      <h2 class="mb-4">Login</h2>
      <div id="login-error" class="alert alert-danger fade d-none" role="alert">
        Usuário ou senha inválidos.
      </div>
      <form id="login-form">
        <div class="mb-3">
          <label for="login-username" class="form-label">Usuário</label>
          <input id="login-username" class="form-control" type="text" autocomplete="username" required />
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">Senha</label>
          <input id="login-password" class="form-control" type="password" autocomplete="current-password" required />
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
      </form>
    </main>
  `;

  $('#login-form').on('submit', function (e) {
    e.preventDefault();

    $('#login-error').addClass('d-none').removeClass('show');

    const payload = {
      username: $('#login-username').val(),
      password: $('#login-password').val()
    };

    $.ajax({
      url: 'http://localhost:9000/login',
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(payload),
      success: function (response) {
        setAuthToken(response.token);
        window.location.reload();
      },
      error: function () {
        $('#login-error').removeClass('d-none').addClass('show');
      }
    });
  });
}

$(document).ajaxError(function(event, jqxhr) {
  if (jqxhr && jqxhr.status === 401) {
    clearAuthToken();
    renderLogin();
  }
});

const token = localStorage.getItem('token');
if (!token) {
  renderLogin();
} else {
  setAuthToken(token);

  renderLayout();
  renderTasksHeader();
  renderTasksStatus();
  renderTasksSearch();
  renderTasksList();
}
