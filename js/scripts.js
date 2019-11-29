var submit=function(){
    var maleNames=(
        "Kwasi", "KWado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    );
    var femaleNames=(
        "Akosua", "Adwoa", "Abenaa", "Yaa", "Afua", "Ama"
    );
    var daysOfTheWeek(
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Fridaay", "Saturday"
    );
    var month = parseInt(document.getElementById(month).value);
    var year =parseInt(document.getElementById(year).value);
    var day =parseInt(document.getElementById(day).value);
    var name =parseInt(document.getElementById(name).value);
    var dateOfBirth =(year+"/" +month+"/"+day);
    var results =dateOfBirth.getDay();
    var output =document.getElementById("output");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
   var d= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
   if(var results===sunday&&male||female){
       console.log("Kwasi"||"Akosua");
   }
   
    }
