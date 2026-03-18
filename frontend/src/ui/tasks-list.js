export function renderTasksList() {
  document.querySelector('#app').innerHTML = `
  <section id="tasks-list" class="card p-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Tarefa</th>
          <th scope="col">Status</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td class="d-flex flex-wrap gap-2">
            <button class="btn btn-sm btn-outline-success rounded-circle">
              <i class="bi bi-check-lg"></i>
            </button>
            <button class="btn btn-sm btn-outline-primary rounded-circle">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-sm btn-outline-danger rounded-circle">
              <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-sm btn-outline-info rounded-circle">
              <i class="bi bi-play"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
`;
}