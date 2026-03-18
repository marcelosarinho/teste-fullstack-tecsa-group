import { STATUS } from "../constants/status";

export default function renderLayout() {
  document.querySelector('#app').innerHTML = `
  <main id="todo-list" class="container d-flex flex-column gap-3">
    <section id="tasks-header"></section>
    <section id="tasks-status"></section>
    <section id="tasks-search"></section>
    <section id="tasks-list"></section>

    <div id="modal-add-task" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Adicionar tarefa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <form>
            <div class="modal-body">
              <div class="mb-3">
                <label for="task-name" class="form-label">Nome da tarefa</label>
                <input type="text" class="form-control" id="task-name" placeholder="Digite o nome da tarefa" />
              </div>

              <div class="mb-3">
                <label for="task-description" class="form-label">Descrição</label>
                <textarea class="form-control" id="task-description" rows="3" placeholder="Descreva a tarefa"></textarea>
              </div>

              <div class="mb-3">
                <label for="task-status" class="form-label">Status</label>
                <select class="form-select" id="task-status">
                  ${STATUS.map((st => {
                    return `<option value="${st.value}">${st.label}</option>`
                  }))}
                </select>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-x"></i>
                Cancelar
              </button>
              <button type="button" class="btn btn-primary">
                <i class="bi bi-check"></i>
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
`
}