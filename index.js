
function calculateAge(){
    let userDate=document.getElementById("date").value;    
    let userMonth=document.getElementById("month").value;
    let userYear=document.getElementById("year").value;
    let months=[31,28,31,30,31,31,30,31,30,31,30,31];

    
    if(validateInput(userDate, userMonth, userYear, months)){
         let todaysDate= new Date();
         let currentDate=todaysDate.getDate();
         let currentMonth= 1 + todaysDate.getMonth();
         let currentYear=todaysDate.getFullYear();

         console.log(currentMonth)
         console.log(todaysDate)


         if(userDate>currentDate){
            // console.log("c date",currentDate)
            currentDate=currentDate+months[userMonth-1]
            // console.log("cdate + months",currentDate)
            currentMonth=currentMonth-1
        //  console.log("currmonths",currentMonth)
            
         }
         if(userMonth>currentMonth){
            currentMonth=currentMonth+12
            currentYear=currentYear-1
         }

         let numOfDays=currentDate-userDate;
         let numOfMonths=currentMonth-userMonth;
         let numOfYears=currentYear-userYear;

         showMsg("Your age is "+numOfYears+" Years ,"+numOfMonths+" Months & "+numOfDays+" Days")

         }
      

}

function validateInput(userDate, userMonth, userYear, months){
    if(userDate==null || userDate==""){
        showMsg("Please provide Date")
        return false;
    }

    if(userMonth==null || userMonth==""){
        showMsg("Please provide Month")
        return false;
    }

    if(userYear==null || userYear==""){
        showMsg("Please provide Year")
        return false;
    }
    if(parseInt(userMonth)>12){
        showMsg("Please provide month value in range 1 to 12")
        return false;
    }
    
    if(String(userYear).length<4){
        showMsg("Please provide year in format YYYY")
        return false;
    }
    if(isNaN(userDate)){
        showMsg("Please provide valid date")
        return false;
    }
    if(isNaN(userMonth)){
        showMsg("Please provide valid month")
        return false;
    }
    if(isNaN(userYear)){
        showMsg("Please provide valid year")
        return false;
    }
    if(userDate<=0){
        showMsg("Date cannot be 0 or less than 0")
        return false;
    }
    if(userMonth<=0){
        showMsg("Month cannot be 0 or less than 0")
        return false;
    }
    if(userYear<=0){
        showMsg("Year cannot be 0 or less than 0")
        return false;
    }
    if(userDate>months[userMonth-1]){
        showMsg("Please provide valid Date with respect to Month")
        return false;
    }
    return true
}

function showMsg(msg){
    let msgDiv=document.getElementById("msg")
    msgDiv.innerText=msg
}










// function age() { 
//     var d1 = document.getElementById('date').value; 
//     var m1 = document.getElementById('month').value; 
//     var y1 = document.getElementById('year').value; 
//     var date = new Date(); 
//     var d2 = date.getDate(); 
//     var m2 = 1 + date.getMonth(); 
//     var y2 = date.getFullYear(); 
//     var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; 
//     if(d1 > d2){ 
//         d2 = d2 + month[m2 - 1]; m2 = m2 - 1; 
//     } 
//     if(m1 > m2){
//          m2 = m2 + 12; y2 = y2 - 1;
//          } 
//     var d = d2 - d1; 
//     var m = m2 - m1; 
//     var y = y2 - y1; 
//     document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';
// }