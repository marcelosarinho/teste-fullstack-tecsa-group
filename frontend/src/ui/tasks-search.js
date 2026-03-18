export function renderTasksSearch() {
  document.querySelector('#app').innerHTML = `
    <section id="tasks-search" class="card p-3">
      <div class="row align-items-center g-3">
        <div class="col-12 col-md-6">
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-search fs-6"></i>
            </span>
            <input type="text" class="form-control" placeholder="Buscar tarefa...">
          </div>
        </div>

        <div class="col-12 col-md-6 btn-group gap-3 flex-wrap">
          <button class="btn btn-outline-primary btn-sm rounded-pill">Todas</button>
          <button class="btn btn-outline-primary btn-sm rounded-pill">Concluídas</button>
          <button class="btn btn-outline-primary btn-sm rounded-pill">Pendentes</button>
          <button class="btn btn-outline-primary btn-sm rounded-pill">Em andamento</button>
        </div>
      </div>
    </section>
  `
}