function thongbao(){
    let point = Number(document.getElementById("point").value);
    let result="";
    if (point<0 || point>10) {
        result="Khong hop le";
    }
    else
        if (point<=4){
            result="khong dat";
        } else
            if (point<=6){
                result="dat";
            }
            else if (point<=8){
                result="Kha";
            }
            else result="tot";

    alert(result);

}
function thongbao1(){
    let size = document.getElementById("size").value;
    let result="";
    //trong switch la bieu thuc can so sanh
    switch (size) {
        //sau case la gia tri can so sanh
        case "S":
        case "XS":
            result="40-48 cân, 1m45, 1m53";
            break;
        case "M":
            result="48<Cân<=55, 1m53<cao<=1m56";
            break;
        case "L":
            result="55<Cân<60, 1m56<cao<1m7";
            break;
        default:
            result="Nhap sai du lieu"
    }
    // if (size=="S")
    //     result="40-48 cân, 1m45, 1m53";
    // else
    //     if (size=="M")
    //         result="48<Cân<=55, 1m53<cao<=1m56";
    //     else
    //         if (size=="L")
    //             result="55<Cân<60, 1m56<cao<1m7";

    alert(result);

}
