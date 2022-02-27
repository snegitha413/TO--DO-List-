const options = {weekday :"long"}
const choice = {month:"long"}
    const d= new Date();
    document.getElementById("date").innerHTML=d.toLocaleDateString("en-us",options)+",";
    document.getElementById("day").innerHTML=d.getDate()+"th";
    document.getElementById("month").innerHTML=d.toLocaleDateString("en-us",choice);
    
    function toggle() {
      var blur = document.getElementById('blur');
      blur.classList.toggle('active')

      var popup = document.getElementById('popup');
      popup.classList.toggle('active')
    }

    function openForm() {
        $('#myForm').css('display','block');
      }
      
      function closeForm() {
        $('#myForm').css('display','none');
   }

   document.querySelector("#clock").addEventListener("input", function(e) {
    const reTime = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    const time = this.value;
    //console.log(time);
    if (reTime.exec(time)) {
      const minute = Number(time.substring(3,5));
     // console.log(minute);
      const hour = Number(time.substring(0,2)) % 12 + (minute / 60);
  }
});
     
    
     checkTodos();

function checkTodos() {
  let dataInLocalStorage = localStorage.getItem("todos");
  if (dataInLocalStorage == null) {
    todos = [];
  } else {
    todos = JSON.parse(dataInLocalStorage);
  }
  let html = "";
  todos.forEach((todo, index) => {
    html += `<div class="task" id="dos">
    <span id="taskname" ondblclick="removeTodo(${index});">
    <input type="checkbox" class="test" id="check">  
    <span> 
    ${todo.todo}
    <span id="space">
    ${todo.time}
    </span>
    </span>
    </span>
    </div>
    `;
  });
  $("#tasks").empty().append(html);
}

var total = document.getElementById('total');

$("#add").on("click", function () {
  total.textContent = +total.textContent + 1;
  var count = total.textContent;
  let data = localStorage.getItem("val");
    var tod={
    todo: $("input[name= task]").val(),
    time : $("input[name= clocktime]").val()  
  } 
    let todosData = localStorage.getItem("todos");
    if (todosData == null) {
      todos = [];
    } else {
      todos = JSON.parse(todosData);
    }
    todos.push(tod);
    /*todos.push(todo);*/
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("val" , count);
   /*var text={
      count: total.textContent
    }
    let data = localStorage.getItem("val");
    if (data == null) {
      val = [];
    } else {
      val = JSON.parse(data);
    }
    val.push(text);*/
    
    $("input").val("");
    checkTodos();   
});


let removeTodo = (index) => {
  let todosData = localStorage.getItem("todos");
  todos = JSON.parse(todosData);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  total.textContent = +total.textContent -1;
  var count = total.textContent;
  let data = localStorage.getItem("val");
  localStorage.setItem("val" , count);
  checkTodos();
};
    
	
  $(function () {
    $('input:checkbox').on('change', function () {
        var input = $(this).next('span');
      
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    })
})

function search()
{
  var txt = $('#txt').val();
  var index = todos.indexOf(txt);   
  if(index !== -1)
  {
   alert(' Task exist');
 }
 else{
  alert('Task does not exist');
  }
  $('#txt').val("");  
}
function myFunction() {
  var input, filter, container, span, a, i, txtValue;
  input = document.getElementById("txt");
filter = input.value.toUpperCase();
 container = document.getElementById("tasks");
  // index=todos.indexOf(filter);
 // console.log(input); 
 var inside = $("#tasks").find("*").length;
  // span = div.getElementsByTagName("span");
  
  
  for (i = 0; i <inside; i++) {
    var y=container.getElementsByTagName('span')[i];
    
    // a = span[i].getElementsByTagName("span")[0];
   
      txtValue = y.textContent || y.innerText;
    
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
         y.style.display = "";
     } else {
         y.style.display = "none";
    }
}
}


         