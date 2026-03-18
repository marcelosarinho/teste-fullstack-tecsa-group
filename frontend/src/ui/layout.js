import { STATUS } from "../constants/status";

export default function renderLayout() {
  document.querySelector('#app').innerHTML = `
  <main id="todo-list" class="container d-flex flex-column gap-3">
    <div id="alert-create-success" class="alert alert-success alert-dismissible fade d-none" role="alert">
      <strong>Sucesso!</strong> Tarefa criada com sucesso!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div id="alert-create-error" class="alert alert-danger alert-dismissible fade d-none" role="alert">
      <strong>Erro!</strong> Erro ao criar tarefa!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div id="alert-update-error" class="alert alert-danger alert-dismissible fade d-none" role="alert">
      <strong>Erro!</strong> Erro ao atualizar tarefa!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div id="alert-update-success" class="alert alert-success alert-dismissible fade d-none" role="alert">
      <strong>Sucesso!</strong> Tarefa atualizada com sucesso!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div id="alert-delete-error" class="alert alert-danger alert-dismissible fade d-none" role="alert">
      <strong>Erro!</strong> Erro ao excluir tarefa!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div id="alert-delete-success" class="alert alert-success alert-dismissible fade d-none" role="alert">
      <strong>Sucesso!</strong> Tarefa excluída com sucesso!
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <section id="tasks-header"></section>
    <section id="tasks-status"></section>
    <section id="tasks-search"></section>
    <section id="tasks-list"></section>

    <div id="modal-create-task" class="modal fade" tabindex="-1">
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

    <div id="modal-edit-task" class="modal fade" tabindex="-1">
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Editar tarefa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>

          <form id="edit-task">
            <input type="hidden" name="edit-id" id="edit-id" />
            <div class="modal-body">
              <div class="mb-3">
                <label for="edit-title" class="form-label">Nome da tarefa</label>
                <input type="text" class="form-control" name="edit-title" id="edit-title" placeholder="Digite o nome da tarefa" />
                <p id="edit-title-error" class="text-danger"></p>
              </div>

              <div class="mb-3">
                <label for="edit-description" class="form-label">Descrição</label>
                <textarea class="form-control" name="edit-description" id="edit-description" rows="3" placeholder="Descreva a tarefa"></textarea>
                <p id="edit-description-error" class="text-danger"></p>
              </div>

              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select class="form-select" name="edit-status" id="edit-status">
                  ${STATUS.map((st => {
                    return `<option value="${st.value}">${st.label}</option>`
                  }))}
                </select>
                <p id="edit-status-error" class="text-danger"></p>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                <i class="bi bi-x"></i>
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-check"></i>
                Atualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div id="modal-delete-task" class="modal fade" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Excluir tarefa</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Tem certeza que deseja excluir esta tarefa?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              <i class="bi bi-x"></i>
              Cancelar
            </button>
            <button id="confirm-delete-task-btn" type="button" class="btn btn-danger">
              <i class="bi bi-trash"></i>
              Excluir
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
`
}