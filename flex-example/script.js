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
    document.getElementById('minutes').textContent = min;
    document.getElementById('seconds').textContent = sec;

}
setInterval(display, 10);
console.log(document.getElementById('seconds'))