const listContainer = document.querySelector('.color-boxes');
const entirePage = document.body;
listContainer.addEventListener('click', (e)=> {
 if(e.target.closest('li')){
    const targetContent = e.target.closest('li'); 
    console.log(targetContent.textContent);
    entirePage.style.backgroundColor = targetContent.textContent;
 }
})