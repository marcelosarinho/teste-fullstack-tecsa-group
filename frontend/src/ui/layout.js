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

          <form id="create-task" method="post">
            <div class="modal-body">
              <div class="mb-3">
                <label for="title" class="form-label">Nome da tarefa</label>
                <input type="text" class="form-control" name="title" id="title" placeholder="Digite o nome da tarefa" />
                <p id="title-error" class="text-danger"></p>
              </div>

              <div class="mb-3">
                <label for="description" class="form-label">Descrição</label>
                <textarea class="form-control" name="description" id="description" rows="3" placeholder="Descreva a tarefa"></textarea>
                <p id="description-error" class="text-danger"></p>
              </div>

              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select class="form-select" name="status" id="status">
                  ${STATUS.map((st => {
                    return `<option value="${st.value}">${st.label}</option>`
                  }))}
                </select>
                <p id="status-error" class="text-danger"></p>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-x"></i>
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
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