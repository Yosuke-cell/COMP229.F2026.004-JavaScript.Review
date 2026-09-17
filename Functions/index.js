function btnClick(){
    console.log("Hello World");
}

const myBtn = document.getElementById("myButton");
//myBtn.addEventListener("click", btnClick);
myBtn.onclick = btnClick;

//btnClick();