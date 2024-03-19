function calculate(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    var sum = num1 + num2 + num3;    
    var difference = num1 - num2 - num3
    var product = num1 * num2 * num3;

    var mean = sum / 3;

    var maxNum = Math.max(num1, num2, num3);
    var minNum = Math.min(num1, num2, num3);
    var midNum = (num1 + num2 + num3) - maxNum - minNum;

    var result = "<pre>" + 
                "Angka Pertama          : " + num1 + "<br>" + 
                "Angka Kedua              : " + num2 + "<br>" + 
                "Angka Ketiga              : " + num3 + "<br>" + "<br>" + 
                "Hasil Penjumlahan    : " + sum + "<br>" + 
                "Hasil Pengurangan   : " + difference + "<br>" + 
                "Hasil Perkalian           : " + product + "<br>" + "<br>" +    
                "Hasil Rata-Rata         : " + mean.toFixed(2) + "<br>" + "<br>" + 
                "Nilai Maksimum         : " + maxNum + "<br>" +
                "Nilai Tengah               : " + midNum + "<br>" +
                "Nilai Minimum            : " + minNum;

    document.getElementById("result").innerHTML = result;
}

function clearInput() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("result").innerHTML = "";
}