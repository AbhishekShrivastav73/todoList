const searchBox = document.querySelector("#searchBox");
const add = document.querySelector("#addBtn");
const list = document.querySelector("#listItem");

 function addTask(){
    if(searchBox.value === ''){
        alert("Please write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = searchBox.value;
        list.appendChild(li);//added element in ul
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//code for "X"
        li.appendChild(span);//added element in ul
    }
    searchBox.value='';
    saveData()
 };

 //target use hota hai particular ek chiz par target krne k liye

 //tagName ==humlog ko element ka tag name dedega

 list.addEventListener('click',(a)=>{
    console.log(a.target);//gives full html element
    console.log(a.target.tagName)//Gives Output in uppercase

    let tag =a.target.tagName;
    if(tag == "LI"){//so match it with upperCase
        a.target.classList.toggle("checked");//toggle bar bar badal dega, agr checked hoga to hata dega class ko aur agr nahi hogi to add kr dega
        saveData()
    }else if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove(); //removes the  Parent element and its child from DOM
        saveData()
    }
 },false);

 function saveData(){
    localStorage.setItem("data", list.innerHTML);
 }
 function showTask(){
    list.innerHTML = localStorage.getItem("data");
 }
 showTask()