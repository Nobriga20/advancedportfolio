// template_u2jv7vp
// service_ba8q94k
// VOMXoZRy_Hu0gZMmY

let isModalOpen = false;
let contrastToggle = false
const scalefactor = 1/20

function moveBackGround(event) {
    const shapes = document.querySelectorAll(".shape")
    const x=event.clientX * scalefactor;
    const y=event.clientY * scalefactor;
    
    for (let i=0; i < shapes.length; ++i) {
        const isodd = i % 2 !== 0
        const boolInt = isodd ? -1 : 1;
        shapes[i].style.transform = shapes[i].style.transform = `translate(${x * boolInt}px,${ y * boolInt }px)`;
    }
}

function toggleContrast() {
    contrastToggle =!contrastToggle
  if (contrastToggle) {
    document.body.classList += " dark-theme"
}
else {
    document.body.classList.remove("dark-theme")
}
}

function contact(event) {
   event.PreventDefault();
   const loading = document.querySelector('.modal__overlay--loading')
   const success = document.querySelector('.modal__overlay--success')
   success.classlist += "modal__overlay--visible";
    emailjs
    .sendform(
       'service_ba8q94k',
        'template_u2jv7vp',
        event.target,
        '7W0h4pZMuuMIZ-nvh'
    ) .then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classlist += "modal__overlay--visible";
   }) .catch ( ()=>{
    loading.classList.remove("modal__overlay--visible")
    alert(
        "The email service is temporarily unavailable. Please contact me directly on courtvizn@gmail.com"
    )
   })
}


function toggleModal () {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
        
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}
