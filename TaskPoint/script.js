const taskInput = document.querySelector('.add-task-input')
console.log(taskInput);
const addTaskButton = document.querySelector('.add-task-btn')
console.log(addTaskButton)
const taskContainer = document.querySelector(".task-container")
let storedTaskArray = localStorage.getItem('tasks')
let updatedTaskArray = JSON.parse(storedTaskArray)
const taskArray = updatedTaskArray
console.log(taskArray);
let MappedTaskArray = taskArray.map((task) => 
 ` <div class="task-div">
  <h1>${task.name}</h1>
  <button class='del-button'>Delete</button>
  </div>`
)
taskContainer.innerHTML = MappedTaskArray;
const deleteButton = document.querySelectorAll('del-button')
console.log(deleteButton);

//Function to add tasks to task array
const addTask = (name) => {
   let newObject ={
    name: name,
    status: 'Todo'
   }
   taskArray.push(newObject)
   console.log(taskArray)
   localStorage.setItem("tasks", JSON.stringify(taskArray));

}
addTaskButton.addEventListener('click', function(){
  if(!taskInput.value){
    console.log('write something in the input box');
  }else if(taskInput.value){
    addTask(taskInput.value)
  }
})
