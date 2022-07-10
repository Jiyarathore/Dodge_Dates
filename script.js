let daylist = document.querySelector(".calendar-days")
let monthName = document.querySelector(".given-month")
let year = document.querySelector("#year")
let prev = document.querySelector("#prev-year")
let next = document.querySelector("#next-year")

//create date
let dt = new Date();
let month = dt.getMonth() + 1; // Because getmonth() start from 0. You may want to have d1.getMonth() + 1 to achieve it, as getMonth will give values between 0-11
let yr = dt.getFullYear();
let currentday = dt.getDate();

//array of month name
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

//previous and next button
prev.addEventListener('click',event=>{
    if(month==1)
    {
        month=12;
        month=month-1;
    }
    else
    {
        month=month-1;
    }
    calendar();
})

next.addEventListener('click',event=>{
    if(month==12)
    {
        month=1;
        month=month+1;
    }
    else
    {
        month=month+1;
    }
    calendar();
})

//calendar function
const calendar = () => {
    monthName.innerHTML = monthNames[month - 1];
    year.innerHTML = yr;
    daylist.innerHTML = ''

    daysInMonth = new Date(yr, month, 0).getDate(); //get total no. of days in particular month

       //date of new month should strt from next immediate date from when the previous month ends
    //match pattern by adding gaps before the satarting of the day in month
   //get day no. at which the current month start
   //0 for sunday, 6 for saturday we are taking gaps from monday because every time every month the date starts from monday

   dayNumber = new Date(yr,month-1,1).getDay();
   let gaps
   if(dayNumber===0)
   {
    gaps=6
   }
   else
   {
    gaps=dayNumber-1;
    //if dayNymber comes out to be monday then gap=1-1=0, if thrusday then gap=4-1=3
   }

    for ( var day = -gaps + 1; day <= daysInMonth; day++) {
        const days = document.createElement('div');
        if (day <= 0) {
            days.innerHTML = "";
            daylist.appendChild(days);
        }
        else if(day===currentday && month===dt.getMonth()+1 && yr===dt.getFullYear())
        {
            //make this dae as active as it is current date i.e. today
            days.setAttribute('class','active');
            days.innerHTML = day;
            daylist.appendChild(days)
        }
        else {
            days.innerHTML = day;
            daylist.appendChild(days);
        }
    }
}
