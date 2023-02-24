function sortNumbers() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);

    var arr = [num1, num2, num3, num4];
    arr.sort(function(a, b){return a - b});

    document.getElementById("result").innerHTML = arr.join(", ");
}
