var tasklistarray = [];

function savetask() {

    var taskname = document.getElementById("txtItem").value;
    var priroty = document.getElementById("priorities").value;

    var todoObject = {
        taskid: tasklistarray.length + 1,
        taskname: taskname,
        priroty: priroty
    };
    tasklistarray.push(todoObject);
    renderTaskList()


}
function renderTaskList() {
    //debugger;
    document.getElementById("my-TaskList").innerHTML = "";
    for (var i = 0; i < tasklistarray.length; i++) {
        var dynamicli = document.createElement("li");
        var hr = document.createElement("hr");
        var br = document.createElement("br");

        dynamicli.classList.add("task");
        // create label
        var mylabel = document.createElement("label");

        // create paragragh
        var mypara1 = document.createElement("p");
        var mypara2 = document.createElement("p");

        mypara1.textContent = tasklistarray[i].taskname;
        mypara2.textContent = tasklistarray[i].priroty;

        mylabel.appendChild(mypara1);

        dynamicli.appendChild(mylabel);

        var mydiv = document.createElement("div");
        mydiv.classList.add("setting");

        var editeicon = document.createElement("i");
        editeicon.classList.add("fa-solid");
        editeicon.classList.add("fa-pen-to-square");

        // add event 
        editeicon.addEventListener("click", editTask);
        // store value 
        editeicon.taskid = tasklistarray[i].taskid;




        var deleteicon = document.createElement("i");
        deleteicon.classList.add("fa-solid");
        deleteicon.classList.add("fa-trash-can");

        // add event 
        deleteicon.addEventListener("click", deletTask);
        // store value 
        deleteicon.taskid = tasklistarray[i].taskid;

        mydiv.appendChild(editeicon);
        mydiv.appendChild(deleteicon);




        document.getElementById("my-TaskList").appendChild(dynamicli);


        mylabel.appendChild(mypara2);

        dynamicli.appendChild(mylabel);

        dynamicli.appendChild(mydiv);
        dynamicli.appendChild(hr);

        document.getElementById("my-TaskList").appendChild(dynamicli);
    }

}
function deletTask(event) {
    var index = tasklistarray.findIndex(m => m.taskid == event.target.taskid);

    tasklistarray.splice(index, 1);

    renderTaskList()

}
function editTask(event) {


    var obj = tasklistarray.find(m => m.taskid == event.target.taskid);

    document.getElementById("txtItem").value = obj.taskname;

    document.getElementById("priorities").value = obj.priroty;

    deletTask(event);
}