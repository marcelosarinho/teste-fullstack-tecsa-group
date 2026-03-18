export default function renderLayout() {
  document.querySelector('#app').innerHTML = `
  <main id="todo-list" class="container d-flex flex-column gap-3">
    <section id="tasks-header"></section>
    <section id="tasks-status"></section>
    <section id="tasks-search"></section>
    <section id="tasks-list"></section>
  </main>
`
}