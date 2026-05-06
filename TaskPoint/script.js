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
//function to map over taskArray after deleting or adding objects to taskArray
const mapTaskArray = () => {
  let MappedTaskArray = taskArray.map((task) => 
  ` <div class="task-div">
   <h1>${task.name}</h1>
   <p class="task-status">${task.status}</p>
   <button class='del-button'>Delete</button>
   <input class="edit-task-input type="text" placeholder="edit the task">
   </div>`
 );
 
 taskContainer.innerHTML = MappedTaskArray;
 const deleteButtons = document.querySelectorAll('.del-button')
 console.log(deleteButtons);
 
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
