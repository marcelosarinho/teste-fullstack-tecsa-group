export function renderTasksStatus() {
  document.querySelector('#todo-list').innerHTML = `
    <section id="tasks-status" class="card p-3">
      <h3 class="text-center mb-4">Status das Tarefas</h3>

      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center">
            <h4>Total</h4>
            <h6 class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center">
            <h4>Pendentes</h4>
            <h6 class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center">
            <h4>Em andamento</h4>
            <h6 class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center">
            <h4>Concluídas</h4>
            <h6 class="fs-5">0</h6>
          </div>
        </div>
      </div>
    </section>
  `
}