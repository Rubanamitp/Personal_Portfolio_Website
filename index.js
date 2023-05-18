let item=document.getElementsByClassName('item')
let iconOpen=document.getElementsByClassName('iconOpen')
let iconClose=document.getElementsByClassName('iconClose')
let sidebar=document.querySelector('.sidebar')
let hamburger=document.querySelector('.hamburger')
let ham=document.querySelector('#ham')
let cross=document.querySelector('#cross')
let blogContainer=document.querySelector('.blogContainer')





// console.log(item)
for(let i=0;i<item.length;i++){
    iconClose[i].style.display='none'
    item[i].addEventListener('click',()=>{
        if(item[i].classList.toggle('active')){
            iconOpen[i].style.display='none'
            iconClose[i].style.display='inline'
        }
        else{
            iconOpen[i].style.display='inline'
            iconClose[i].style.display='none'
        }

    })
}

cross.style.display='none'
hamburger.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebarGo')
    if(sidebar.classList.contains('sidebarGo')){
        ham.style.display='inline'
        cross.style.display='none'
    }
    else{
        ham.style.display='none'
        setTimeout(()=>{

            cross.style.display='inline'
        },300)
    }
    
})
// console.log(span)

    





   
  
   
    
    

