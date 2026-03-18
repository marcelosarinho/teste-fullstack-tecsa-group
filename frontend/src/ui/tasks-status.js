export default function renderTasksStatus() {
  document.querySelector('#tasks-status').innerHTML = `
    <section class="card p-3">
      <h3 class="text-center mb-4">Status das Tarefas</h3>

      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center bg-primary text-white" style="--bs-bg-opacity: .75; --bs-text-opacity: 1;">
            <h4>Total</h4>
            <h6 id="total-tasks" class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center bg-warning text-dark" style="--bs-bg-opacity: .75; --bs-text-opacity: 1;">
            <h4>Pendentes</h4>
            <h6 id="pending-tasks" class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center bg-info text-dark" style="--bs-bg-opacity: .75; --bs-text-opacity: 1;">
            <h4>Em andamento</h4>
            <h6 id="in-progress-tasks" class="fs-5">0</h6>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-3">
          <div class="card p-3 text-center bg-success text-white" style="--bs-bg-opacity: .75; --bs-text-opacity: 1;">
            <h4>Concluídas</h4>
            <h6 id="completed-tasks" class="fs-5">0</h6>
          </div>
        </div>
      </div>
    </section>
  `
}