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
plusBtn.addEventListener('click', showModal)