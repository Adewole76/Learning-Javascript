const taskInput = document.querySelector('.add-task-input')
console.log(taskInput);
const taskArray =[]
const addTaskButton = document.querySelector('.add-task-btn')
console.log(addTaskButton)
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
