function myFunction(){
    var x=document.getElementById("demo").value;
    if(x==""||isNaN(x)){
        alert("不是数字，请重新输入！");
    }
}
