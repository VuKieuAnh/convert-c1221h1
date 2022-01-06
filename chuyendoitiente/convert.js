function convert() {
    //lay du lieu
    let amount = Number(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let result="";
    //tinh toan
    if (from=="VND" && to=="USD"){
        result = amount/23000;
    }
    else
        if (from=="USD" && to=="VND"){
            result = amount*23000;
        }
        else {
            result="Chon lai de";
        }
      //hien thi du lieu
    document.getElementById("result").innerText = result;
}
function convert1() {
    //lay du lieu
    let amount = Number(document.getElementById("amount").value);
    let from = Number(document.getElementById("from").value);
    let to = Number(document.getElementById("to").value);
    let rate=to/from;
    let result=amount*rate;
      //hien thi du lieu
    document.getElementById("result").innerText = result;
}
