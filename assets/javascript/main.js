
let loginbtn = document.querySelector('.login')
let searchbtn = document.querySelectorAll('.search')
let closelogin=document.querySelector('.closelogin')
let ctrlbtn = document.querySelectorAll('.contrl-element')
let video =document.querySelector('video')
let formlogin =document.querySelector('.form-login')
let aresearch = document.querySelector('.area-search')
let form =document.querySelector('.formm')
let subnav =document.querySelector('.nav-res')
let openbtn=document.querySelector('.openmenu')
let clsbtn =document.querySelector('.closemenu')

openbtn.addEventListener('click',function()
{
   openbtn.classList.add('active')
   subnav.classList.add('active')
   clsbtn.classList.remove('active')
   aresearch.classList.remove('active')
})
clsbtn.addEventListener('click',function()
{
   openbtn.classList.remove('active')
   subnav.classList.remove('active')
   clsbtn.classList.add('active')
})
loginbtn.addEventListener('click',function()
{
    formlogin.classList.toggle('active')
    form.classList.toggle('active')
    aresearch.classList.remove('active')
    subnav.classList.remove('active')
    clsbtn.classList.add('active')
    openbtn.classList.remove('active')
})
closelogin.addEventListener('click',()=>
{
   formlogin.classList.toggle('active')
   form.classList.toggle('active')
})
searchbtn.forEach(btn =>{
  btn.addEventListener('click',function()
  {   subnav.classList.remove('active')
      aresearch.classList.toggle('active')
      clsbtn.classList.add('active')
      openbtn.classList.remove('active')
  })
})
ctrlbtn.forEach(btn =>{
   btn.addEventListener('click',function()
   {   ctrlbtn.forEach(a =>
    {
        a.classList.remove('active')
    })
       let videosrc = btn.getAttribute('data-side')
       console.log(videosrc)
       video.src=videosrc
       btn.classList.toggle('active')
      
   })
})