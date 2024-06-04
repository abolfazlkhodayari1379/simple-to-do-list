let $ = document
let continer = $.getElementById('task-continer')
let plusBtn = $.getElementById('plus')
let modalElem = $.getElementById('modal')
let tasks = $.querySelectorAll('.task')
let userTask = $.getElementsByTagName('input')
let adderBtn = $.getElementById('Add')
let closeElem = $.getElementById('close')
let error = $.getElementById('error')
// functions
function showModal(){
    modalElem.style.display = 'flex'
    userTask[0].focus()
}
function addedTask(event){
    if(userTask[0].value == ''){
        error.style.display = 'block'
        setTimeout(ernone, 3000)
        function ernone (){
            error.style.display = 'none'
        }
    }else if(event.keyCode == 13 || event.target == adderBtn){
        let newTaskName = userTask[0].value

        let newItem = $.createElement('p')
        newItem.innerHTML = newTaskName
        newItem.setAttribute('class', 'item')
        userTask[0].value = ''
        
        let newTaskBox = $.createElement('div')
        newTaskBox.setAttribute('class', 'task')

        newTaskBox.append(newItem)
        continer.append(newTaskBox)

        newItem.addEventListener('click', function(event){
            event.target.parentElement.remove()
        })
    }
}
plusBtn.addEventListener('click', showModal)
userTask[0].addEventListener('keyup', addedTask)
adderBtn.addEventListener('click', addedTask)