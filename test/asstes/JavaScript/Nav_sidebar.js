
// =====================Clock section==================

function displayTime()
{
var dateTime = new Date();
var hrs=dateTime.getHours();
var min=dateTime.getMinutes();
var sec=dateTime.getSeconds();
var ses = document.getElementById('session');
if(hrs>12)
{
    hrs-=12;
    ses.textContent='PM'
}
else
{
    ses.textContent='AM'
}
document.querySelectorAll('hrs').innerHTML=hrs
if(min<10)
    document.getElementsByClassName('min').innerHTML='0'+ min
else
    {document.getElementsByClassName('min').innerHTML= min}
if(sec<10)
    {document.getElementsByClassName('sec').innerHTML='0' + sec}
else
    {document.getElementsByClassName('sec').innerHTML=sec}
}
setInterval(displayTime, 10);

// ===================== Drop Down Menu Section =====================

let subMenu=document.getElementById('sub-menu')
let dropDown=document.getElementById('drop-down')
dropDown.addEventListener('click',(e) =>
{
    subMenu.classList.toggle('sub-menu-active')
})

document.addEventListener("click",function(event)
{
    if( event.target.closest('.drop-down')) return
    subMenu.classList.remove('sub-menu-active')
})

//===================== Check in/out Time Section =====================

let checkIn=document.getElementById('Check-in')
let inTime=document.getElementById('in-time')
let outTime=document.getElementById('out-time')
checkIn.addEventListener('click',()=>
{
var n=document.getElementById('counter').textContent
var dateTime = new Date();
var hrs=dateTime.getHours();
var min=dateTime.getMinutes();
var sec=dateTime.getSeconds();
var ses = document.getElementById('session');
if(hrs>12)
{
    hrs-=12;
    var ses ='PM'
}
else
{
    ses='AM'
}
    n++
    if(n==1)
    {
        document.getElementById('counter').textContent='1'
        checkIn.textContent="Check Out"
        checkIn.classList.remove('Check-in')
        checkIn.classList.add('Check-out')
        inTime.textContent= hrs + " : " + min + " : " + sec + " " +ses  
    }
    
    if(n==2)
    {
        checkIn.classList.remove('Check-out')
        checkIn.classList.add('Reset')
        checkIn.textContent="Reset"
        document.getElementById('counter').textContent='2'
        outTime.textContent= hrs + " : " + min + " : " + sec + " " + ses
        // reset()
    }
    if(n==3)
    {
        checkIn.classList.remove('Reset')
        checkIn.classList.add('Check-in')
        checkIn.textContent="Check In"
        document.getElementById('counter').textContent=''
        outTime.textContent= "--:--:-- --"
        inTime.textContent= "--:--:-- --"
    }

})

//===================== Password Popup Section =====================
document.querySelector("#password-popup").addEventListener("click",()=>
{
    document.querySelector(".password-popup").classList.add("active");
});
document.querySelector(".close-icon").addEventListener("click",()=>
{
    document.querySelector(".password-popup").classList.remove("active");
});
//close Container
document.addEventListener("click",function(event2)
{
    if( event2.target.closest('.password-popup')||event2.target.closest('#password-popup')) return
    document.querySelector(".password-popup").classList.remove('active');
})