loadPage = () =>{
    var clickBtn = document.getElementById("click");
    var form = document.getElementById("myForm");
    form.onsubmit = Submit;
    clickBtn.onclick = myFunct;
}
Submit = () =>{
    var firstname = document.forms["myForm"]["firstname"];
    alert(firstname.value)
}
myFunct = () =>{
    alert("Hello");
}
window.onload = loadPage;