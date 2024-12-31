// template_u2jv7vp
// service_ba8q94k
// VOMXoZRy_Hu0gZMmY

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
        'VOMXoZRy_Hu0gZMmY'
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

let isModalOpen = false;
function toggleModal () {
    if (ismodalOpen) {
        isModalOpen = false
        return document.body.classlist.remove("modal--open")
        
    }
    isModalOpen = true;
    document.body.classlist += " modal--open"
}
