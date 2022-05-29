$(document).ready(function() {  
    declaration();
    hdwrite.addEvent();
    $('input#download').on("click", function() {
        hdwrite.download();
        
    }); 
    $('input#clear').on("click", function() {
        hdwrite.clear();
    }); 
});
var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext("2d");  


const dateObj = new Date();
let inputDate= document.getElementById("inputdate");
inputDate.innerText='תאריך:'+dateObj.getDate()+"/"+(dateObj.getMonth()+1)+"/"+dateObj.getFullYear();


function declaration() {
    let declaration=document.getElementById("declaration");
    let nameE=document.getElementById("nameE");
    declaration.innerHTML="אני "+nameE.value+' מצהיר/ה כי ידוע לי כי התג קרבה הינו אישי ואינו ניתן העברה, במקרה של אובדןיש לדווח מיד לקב"ט. ידוע לי כי עם הפסקת העבודתי עלי להחזיר את הת"ג לקב"ט.'+"<br />"+'מאשר בחתימת ידי כי אני מתחייב לפעול לפי ההוראות אלו.'
}
function save(){
var canvas = document.getElementById("mycanvas");
var img    = canvas.toDataURL("image/png");
document.write('<img src="'+img+'"/>');
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(200)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}