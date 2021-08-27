// Adicionando validação para campo de input vazio
document.querySelector('#push').onclick = function() {
  if(document.querySelector('#newtask input').value.length == 0) {
    alert("Por favor, insira uma tarefa válida!")
  } else {
    // Adicionando uma nova tarefa
    document.querySelector('#tasks').innerHTML 
    += `<div class="task">
          <span id="taskname">
            ${document.querySelector('#newtask input').value}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
    `;

    // Deletando a tarefa criada
    var currentTasks = document.querySelectorAll('.delete');
    for(var i=0; i<currentTasks.length; i++) {
      currentTasks[i].onclick = function() {
        this.parentNode.remove();
      }
    }
  }
}