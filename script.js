// Validando input vazio
document.querySelector('#push').onclick = function(){
  if(document.querySelector('#newtask input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      // Adicionando uma nova tarefa
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#newtask input').value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

      // Deletando uma tarefa
      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      // Riscando tarefa concluída
      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector("#newtask input").value = "";
  }
}

  window.addEventListener("keyup", function(event) {
  if (event.key == 'Enter') {
    this.document.getElementById('push').click();
  }
});