function demo1() {
    window.alert("Day la external code");
}
function demo2() {
    var a = 5;
    var b = 5.5;
    var c = true;
    var d = "apple";
    var e = [1, 2, 3, 4, 5];
    var f = [id = "SELL", name = "Khanh"];
    window.document.writeln("<br>Kieu cua a: " + typeof (a));
    window.document.writeln("<br>Kieu cua b: " + typeof (b));
    window.document.writeln("<br>Kieu cua c: " + typeof (c));
    window.document.writeln("<br>Kieu cua d: " + typeof (d));
    window.document.writeln("<br>Kieu cua e: " + typeof (e));
    window.document.writeln("<br>Kieu cua f: " + typeof (f));
}
function demo3() {
    var x = 5;
    if (x === "5")
        window.document.bgColor = "red";
    else
        window.document.bgColor = "yellow";
}
function demo4() {
    var kq = window.confirm("em co hoc vi dam me?");
    if (kq == true)
        document.title = "pass";
    else
        document.title = "fail";

}
function demo5()
 {
    var x = window.prompt("Nhap so thu 1: ");
    var y = window.prompt("Nhap so thu 2:");
    var c = window.prompt("Nhap so thu +-*/:");
    //x = new Number(x);
    //y = new Number(y);
    if(window.isNaN(x)==true || window.isNaN(y)==true)
    window.alert("nhap sai");
    else {

   
    x = window.parseFloat(x);
    y = window.parseFloat(y);
    switch(c)
    {
         case "+": window.alert("kq=" + (x+y));
    }
}
}