
// console.log(h);
// console.log(m);
// console.log(s);

 function showtime () {  

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    

    if (m<10){
        minutes="0"+`${m}`;
    }
    else{minutes=`${m}`;}


    if (s<10){
        seconds="0"+`${s}`;
    }
    else{seconds=`${s}`;}
    
    
    if (h<12){

     document.getElementById('time').innerHTML = h + ":" + minutes + ":" + seconds + "AM"}
     
     else{
        hours2 = h -12;
        document.getElementById('time').innerHTML = hours2 + ":" + minutes + ":" + seconds + "PM"}

     
   



    t = setTimeout(function() {    
        showtime()
    }, 1000);






 }

 showtime();
const hourhand= document.getElementById("hour-hand")
const minhand = document.getElementById("min-hand")
const sechand = document.getElementById("second-hand")

function gettime (){
    var today = new Date();
    var hours = today.getHours();
    var mins = today.getMinutes();
    var secs = today.getSeconds();


    var hdegree = ((hours) / 12) * 360;
    // console.log(hours);
    // console.log(hdegree);

    var mdegree = (mins /60) *360;
    // console.log(mins);
    // console.log(mdegree);

    var sdegree = (secs /60) *360;
    // console.log(secs);
    // console.log(sdegree);

    hourhand.style.transform = `rotate(${hdegree}deg)`;
    minhand.style.transform = `rotate(${mdegree}deg)`;
    sechand.style.transform = `rotate(${sdegree}deg)`;

       t = setTimeout(function() {    
        gettime()   }, 1000);
        
}
  gettime()



  var today2 = new Date();
    year= today2.getFullYear();
    month=today2.getMonth();
    day=today2.getDate();
    console.log(year);
    console.log(month);
    console.log(day);

    document.getElementById('date').innerHTML = day + "/" + (month+1) + "/" + year





