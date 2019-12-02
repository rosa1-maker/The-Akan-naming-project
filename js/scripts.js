    var maleNames=(
    "Kwasi", "KWado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
    );
    var femaleNames=(
        "Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua" "Ama"
    );
    function femaleNames(){
var day= parseInt(documentgetElementById("year").value);
var monthh=parseInt(documentgetElementById("Month").value);
var day =parseInt(documentgetElementById("day").value);
var d=new Date =d(year, month, date);
var yourDay=d.getDay();

if(yourDay==0){
    return document.getElementById("result").innerHTML +="Akosua";
};
if(yourDay==1){
    return document.getElementById("result").innerHTML +="Adwoa";
};

if(yourDay==2){
    return document.getElementById("result").innerHTML +="Abenaa";
};

if(yourDay==3){
    return document.getElementById("result").innerHTML +="Akua";
};

if(yourDay==4){
    return document.getElementById("result").innerHTML +="Yaa";
};

if(yourDay==5){
    return document.getElementById("result").innerHTML +="Afua";
};
if(yourDay==6){
    return document.getElementById("result").innerHTML +="Ama";
};


    }
    function maleNames(){
        var day= parseInt(documentgetElementById("year").value);
        var monthh=parseInt(documentgetElementById("Month").value);
        var day =parseInt(documentgetElementById("day").value);
        var d=new Date =d(year, month, date);
        var yourDay=d.getDay();
        
        if(yourDay==0){
            return document.getElementById("result").innerHTML +="Kwasi";
        };
        if(yourDay==1){
            return document.getElementById("result").innerHTML +="Kwado";
        };
        
        if(yourDay==2){
            return document.getElementById("result").innerHTML +="Kwabena";
        };
        
        if(yourDay==3){
            return document.getElementById("result").innerHTML +="Kwaku";
        };
        
        if(yourDay==4){
            return document.getElementById("result").innerHTML +="Yaw";
        };
        
        if(yourDay==5){
            return document.getElementById("result").innerHTML +="Kofi";
        };
        if(yourDay==6){
            return document.getElementById("result").innerHTML +="Kwame";
        };
                
            }