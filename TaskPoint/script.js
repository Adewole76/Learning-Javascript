//DOM manipulation variables and selectors

const taskInput = document.querySelector('.add-task-input');
const addTaskButton = document.querySelector('.add-task-btn');
const taskContainer = document.querySelector(".task-container")
const TodoTaskDiv = document.querySelector(".Todo-task-div");
console.log(TodoTaskDiv);
let storedTaskArray = localStorage.getItem('tasks')
let updatedTaskArray = JSON.parse(storedTaskArray)
let taskArray = updatedTaskArray ? updatedTaskArray:[]
console.log(taskArray);
const totalTasksDiv = document.querySelector('.Total-tasks-div');
console.log(totalTasksDiv)
const todoFilter = document.querySelector(".todo-filter");
console.log(todoFilter);
const InprogressFilter = document.querySelector('.Inprogress-filter');
const DoneFilter = document.querySelector('.Done-filter')
let filteredTasks;
const hamburgerMenu = document.querySelector('.hamburger');
const mobileSidebar =document.querySelector('.mobile-sidebar');
const sidebarOverlay =document.querySelector('.overlay');
const closeSidebar = document.querySelector('.close-sidebar');
const todoTaskDiv = document.querySelector('.Todo-task-divs');
const InprogressTaskDiv = document.querySelector('.Inprogress-task-div');
const CompletedTaskDiv = document.querySelector('.Completed-task-div');

//sidebar
hamburgerMenu.addEventListener('click', function(){
  mobileSidebar.classList.add('active');
})
closeSidebar.addEventListener('click', function(){
  mobileSidebar.classList.remove('active')
})

const taskArrayNumber = document.createElement('p');
taskArrayNumber.innerHTML = taskArray.length;
taskArrayNumber.style.color = 'black';
taskArrayNumber.style.fontSize = '32px';
totalTasksDiv.appendChild(taskArrayNumber);
//Filter for tasks with the same
const filterTasks = (keyWord) => {
 let storedTasks = localStorage.getItem('tasks')
 let updatedTasks = JSON.parse(storedTasks)
 taskArray = updatedTasks

 //console.log(taskArray, keyWord);
 filteredTasks = taskArray.filter(task => task.status === keyWord)
 console.log(filteredTasks)
 taskArray = filteredTasks;
 mapTaskArray();
}

//Event listeners for task filter buttons 
todoFilter.addEventListener('click', function(){
  filterTasks('Todo');
});
InprogressFilter.addEventListener('click', function(){
  filterTasks('Inprogress')
});
DoneFilter.addEventListener('click', function(){
  filterTasks('Completed')
})


 //Function to delete tasks from taskArray
const deleteTask = (arr) =>{
  for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener('click', function(){
      taskArray[i].status = 'deleted';
      console.log(taskArray[i])
      let filteredTasksArray = taskArray.filter(task => task.status === 'Todo');
      taskArray = filteredTasksArray
      console.log(taskArray)
      localStorage.setItem("tasks", JSON.stringify(taskArray));

      mapTaskArray()
    })
  }
}


//function to edit tasks name
const editTasks = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(taskArray[i]); 
    
    if (arr[i].value && arr[i].value.trim() !== "") {
      taskArray[i].name = arr[i].value;
      console.log(taskArray)
    } else {
      console.log('write something in the edit box');
    }
  }
  mapTaskArray()
  // Move this OUTSIDE the for-loop
  localStorage.setItem("tasks", JSON.stringify(taskArray));
};


//Function to edit tasks Status 
const editTasksStatus = (arr) => {
  for(let i = 0; i<arr.length; i++){
    console.log(taskArray[i])
    if (arr[i].value) {
      taskArray[i].status = arr[i].value;
      console.log(taskArray)
    } else {
      taskArray[i].status = 'Todo'
    }
  }
  mapTaskArray()
  // Move this OUTSIDE the for-loop
  localStorage.setItem("tasks", JSON.stringify(taskArray));
  }


//function to map over taskArray after deleting or adding objects to taskArray
const mapTaskArray = () => {
  //HTML rendering for all tasks
  let MappedTaskArray = taskArray.map((task) => 
  ` <div class="task-div">
   <h1 class='task-name'>${task.name}</h1>
   <p class="task-status">${task.status}</p>
   <section>
   <input class="edit-task-input" type="text" placeholder="edit this task">
   <input class="change-task-status" type="text" id="browser-choice" name="browser" list="browsers">

<datalist id="browsers">
  <option value="Todo">
  <option value="Inprogress">
  <option value="Completed">
</datalist>
   <button class='edit'>click to edit</button>
   </section>
   <button class='edit-btn'>Edit</button>
   <button class='del-button'>Delete</button>
   
   </div>`
 );
 
 //task Object iterable elements
 taskContainer.innerHTML = MappedTaskArray;
 const deleteButtons = document.querySelectorAll('.del-button');
 console.log(deleteButtons);
 const editButtons = document.querySelectorAll('.edit-btn');
 console.log(editButtons);
 const taskEditInputs = document.querySelectorAll('.edit-task-input');
 console.log(taskEditInputs);
 const actualEditbtns = document.querySelectorAll('.edit');
 console.log(actualEditbtns);
 const changeTaskStatusInputs = document.querySelectorAll('.change-task-status')
 console.log(changeTaskStatusInputs)

 
 for(let i=0; i < taskEditInputs.length;i++){
  taskEditInputs[i].classList.add('hidden');
  actualEditbtns[i].classList.add('hidden');
  changeTaskStatusInputs[i].classList.add('hidden');
 }
 for(let i=0;i<editButtons.length;i++){
  editButtons[i].addEventListener('click', function(){
    taskEditInputs[i].classList.remove('hidden');
    changeTaskStatusInputs[i].classList.remove('hidden');
    actualEditbtns[i].classList.remove('hidden');
  })
 }
 for(let i = 0; i<actualEditbtns.length; i++){
  actualEditbtns[i].addEventListener('click', function(){
    editTasks(taskEditInputs);
    editTasksStatus(changeTaskStatusInputs);
  })
 }
 
 deleteTask(deleteButtons)
 //useLess code moved outside the mapTaskArray function
//  for(let i = 0; i < deleteButtons.length; i++){
//    deleteButtons[i].addEventListener('click', function(){
//      taskArray[i].status = 'deleted';
//      console.log(taskArray[i])
//      let filteredTasksArray = taskArray.filter(task => task.status === 'Todo');
//      taskArray = filteredTasksArray
//      console.log(taskArray)
//      localStorage.setItem("tasks", JSON.stringify(taskArray));
 
//    })
//  }
}
mapTaskArray()

//Function to add tasks to task array
const addTask = (name) => {
   let newObject ={
    name: name,
    status: 'Todo'
   }
   taskArray.push(newObject)
   console.log(taskArray)
   mapTaskArray()
   localStorage.setItem("tasks", JSON.stringify(taskArray));

}
addTaskButton.addEventListener('click', function(){
  if(!taskInput.value){
    console.log('write something in the input box');
  }else if(taskInput.value){
    addTask(taskInput.value)
  }
})
