let time=document.querySelector('#time')
let spantime=document.getElementById('spanTime')
let picmob=document.querySelector('#picmob')
let picmob2=document.querySelector('#picmob2')

let plussign=document.querySelector('.plusSign')

setInterval(timeupdate,1000)
function timeupdate(){
    time.innerHTML=new Date()
}
    

// --Portfolio Section--



time.style.display='none'
plussign.addEventListener('click',()=>{
    
    
    
        if(plussign.classList.toggle('active')){
            
            plussign.style.display='inline'
            spantime.style.color='blue'
        
        setTimeout(()=>{
        time.style.display='block'
        
        spantime.style.color='blue'
        picmob.style.display='inline'
        picmob2.style.display='inline'
        
   
    

        time.style.height='100'+'px'
        time.style.backgroundColor='bisque'
        time.style.color='black'
        
       
        
    },100)
}
else{
    
       
        plussign.style.display='inline'
        time.style.display='none'
        picmob.style.display='none'
        picmob2.style.display='none'
       
    
}

    
})
