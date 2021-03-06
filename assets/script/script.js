
var myList = document.getElementsByTagName("li");
var free = document.getElementById("noTasks");


function chkTasks() {
    if (myList.length === 0) {
        free.style.display = "block"
    } else if (myList.length > 0) {
        free.style.display = "none"
    }
}

//Close btn at end of list item
for (let i = 0; i < myList.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
   
}

//Hide list item when Close's clicked

var close = document.getElementsByClassName("close")
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
        chkTasks()
        
    }
    
}

//Creat checked simbol when click on li 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Addin' new tasks to the list
function newElement() {
    var li = document.createElement("li");
    var task = document.getElementById("addTask").value;
    var t = document.createTextNode(task);
    li.appendChild(t);
    if (task == ''){
        alert("You must schedule something!");
    } else {
        document.getElementById("myTasks").appendChild(li)
    }
    document.getElementById("addTask").value = "";
    var span = document.createElement("SPAN")
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt)
    li.appendChild(span)

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement
            div.remove();
            chkTasks()
        }
        
    }
    chkTasks()
}

var input = document.getElementById("addTask");
input.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        newElement();
        chkTasks();
    }
});

