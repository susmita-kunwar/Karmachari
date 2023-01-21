function display()
{
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');
    

    if(hrs>=12)
    {
        session.textContent = 'PM';

    }
    else{
        session.textContent = 'AM';
    }

    if(hrs>12){
        hrs = hrs - 12;
    }
    
    document.getElementById('hours').textContent = hrs;
    if(min<10)
        document.getElementById('minutes').innerHTML='0'+ min
    else
        {document.getElementById('minutes').innerHTML= min}
    if(sec<10)
        {document.getElementById('seconds').innerHTML='0' + sec}
    else
        {document.getElementById('seconds').innerHTML=sec}
}
setInterval(display, 10);
console.log(document.getElementById('seconds'))