//DOM manipulation variables and selectors
const taskInput = document.querySelector('.add-task-input')
console.log(taskInput);
const addTaskButton = document.querySelector('.add-task-btn')
console.log(addTaskButton)
const taskContainer = document.querySelector(".task-container")
let storedTaskArray = localStorage.getItem('tasks')
let updatedTaskArray = JSON.parse(storedTaskArray)
let taskArray = updatedTaskArray
console.log(taskArray);


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
//function to edit tasks
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

//function to map over taskArray after deleting or adding objects to taskArray
const mapTaskArray = () => {
  let MappedTaskArray = taskArray.map((task) => 
  ` <div class="task-div">
   <h1>${task.name}</h1>
   <p class="task-status">${task.status}</p>
   <button class='edit-btn'>Edit</button>
   <button class='del-button'>Delete</button>
   <input class="edit-task-input" type="text" placeholder="edit this task"><button class='edit'>click to edit</button>
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
 for(let i=0; i < taskEditInputs.length;i++){
  taskEditInputs[i].classList.add('hidden');
  actualEditbtns[i].classList.add('hidden');
 }
 for(let i=0;i<editButtons.length;i++){
  editButtons[i].addEventListener('click', function(){
    taskEditInputs[i].classList.remove('hidden');
    actualEditbtns[i].classList.remove('hidden')
  })
 }
 for(let i = 0; i<actualEditbtns.length; i++){
  actualEditbtns[i].addEventListener('click', function(){
    editTasks(taskEditInputs);
  })
 }
 
 deleteTask(deleteButtons)
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

