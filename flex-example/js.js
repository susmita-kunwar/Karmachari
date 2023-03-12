let incrementBtn = document.getElementById('plus-btn')
incrementBtn.addEventListener('click',function()
{
    document.getElementById('counter').textContent++

})

let saveBt = document.getElementById('save')
saveBt.addEventListener('click',function()
{
    document.getElementById('counter').textContent=0

})
