export default function renderTasksList() {
  document.querySelector('#tasks-list').innerHTML = `
  <div id="tasks-list-error" class="alert alert-danger alert-dismissible fade d-none" role="alert">
    <strong>Erro!</strong> Ocorreu um erro ao carregar as tarefas.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>

  <section class="card p-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Tarefa</th>
          <th scope="col">Descrição</th>
          <th scope="col">Status</th>
          <th scope="col">Data de Criação</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody id="tasks"></tbody>
    </table>
  </section>
`;
}