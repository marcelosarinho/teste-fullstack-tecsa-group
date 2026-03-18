export function renderLayout() {
  document.querySelector('#app').innerHTML = `
  <main id="todo-list" class="container d-flex flex-column gap-3">
    <section class="card d-flex flex-column align-items-center gap-3 p-3">
      <div class="d-flex flex-row align-items-center gap-3">
        <i class="bi bi-check2-circle fs-1"></i>
        <h2 class="mb-0">Gerenciamento de Tarefas</h2>
      </div>

      <button class="btn btn-primary d-flex align-items-center gap-1 fs-6">
        <i class="bi bi-plus"></i>
        Adicionar Tarefa
      </button>
    </section>

    <section id="tasks-list" class="card d-flex flex-column align-items-center gap-3 p-3">
      <h3>Lista de Tarefas</h3>
    </section>
  </main>
`
}