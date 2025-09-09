const HeaderItems = document.querySelectorAll('.header-item')
const Sections = document.querySelectorAll('.section')
const HomeSection = document.getElementById('home-section')
const AboutSection = document.getElementById('about-section')
const ServiceSection = document.getElementById('service-section')
const ContactSection = document.getElementById('contact-section')
const ReadMoreBtn = document.querySelector('.read')
const AboutTitle = document.getElementById('about')
const MoreInfo = document.getElementById('more-info')
const ServiceBoxes = document.querySelectorAll('.service-box')
const NameElem = document.getElementById('FirstName-input')
const LastElem = document.getElementById('LastName-input')
const PhoneElem = document.getElementById('Phone-input')
const EmailElem = document.getElementById('Email-input')
const MessageElem = document.getElementById('message-input')
const SubmitBtn = document.getElementById('Submit')
const ShowMenu = document.getElementById('menu-bar')
const HeaderMenu = document.getElementById('header-menu')
const BreakMenu = document.getElementById('break-menu')
const AlertNotif = document.getElementById('alert')

ShowMenu.addEventListener('click', () => {

HeaderMenu.classList.toggle('show-menu')

})

function Break(){

HeaderMenu.classList.remove('show-menu')

}





/* Header-swicher */

 function hideSections() {

 HomeSection.classList.add('hide-section')
 AboutSection.classList.add('hide-section')
 ServiceSection.classList.add('hide-section')
 ContactSection.classList.add('hide-section')

}

function EmptyFormValues(){

NameElem.value = ''
LastElem.value = ''
PhoneElem.value = ''
EamilElem.value = ''
MessageElem.value = ''    
    
}

HeaderItems.forEach((btn,index) => {

btn.addEventListener('click', () => {

hideSections()    
Sections[index].classList.remove('hide-section')    
Break()


if(!AboutSection.classList.contains('hide-section')){

AboutTitle.classList.add('animate-show') 

}
    
else if(!ServiceSection.classList.contains('hide-section')){

ServiceBoxes.forEach(box => {

box.classList.add('animate-bottom')

})
        
}

})

})
/* Hide and show about title */

ReadMoreBtn.addEventListener('click', () => {

MoreInfo.classList.toggle('hide-about')
MoreInfo.classList.toggle('show-about')

MoreInfo.classList.contains('hide-about') ? ReadMoreBtn.textContent = 'Read more' : 
ReadMoreBtn.textContent = 'Hide more'

})

/* form validiation */

SubmitBtn.addEventListener('click', () => {

let RegexName = /^(\D){3,12}$/
let RegexLastName = /^(\D){3,22}$/
let RegexPhone = /^(091([0-8])|090[0-5]|099[0-6]|093[0-9]|092[0-4]) \d{3} \d{4}$/
let EmailRegex = /^(\w*)+.?(\w*){3,15}@(\w){3,5}.[\w]{2,3}$/

let RegexResName = RegexName.test(NameElem.value);
let RegexLastNameRes = RegexLastName.test(LastElem.value);
let RegexPhoneRes = RegexPhone.test(PhoneElem.value);
let RegexEmailRes = EmailRegex.test(EmailElem.value);



if(RegexResName && RegexLastNameRes && RegexPhoneRes && RegexEmailRes && MessageElem.value){


  window.location.href = `mailto:yosef.842005@gmail.com?subject=${encodeURIComponent('New Project')}&body=${encodeURIComponent(
    `name: ${NameElem.value}\nLast Name: ${LastElem.value}\nPhone: ${PhoneElem.value} 📱\n\nEmail: ${EmailElem.value} ✉\n\nMessage 📄: ${MessageElem.value}`
  )}`;

EmptyFormValues()
  
} else {

AlertNotif.classList.add('alert-modal')

setTimeout(() => {
  
AlertNotif.classList.remove('alert-modal')

}, 3000);

}
})


const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="output.css">
    

     <div class="p-10 w-full flex flex-col gap-7 justify-center items-center">
      <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-300/75 to-indigo-300/75 flex justify-center items-center">
       <slot class="text-white" name="icon"></slot>
        </div>
        
        
          <h1 class="font-PoppinMedium text-xl border-b-2 pb-1 border-b-sky-400 text-black/60"><slot name="title"></slot></h1>
          <p class="font-MonsterateRegular"><slot name="summary"></slot></p>

     </div>`;



class Service extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('site-service', Service);

BreakMenu.addEventListener('click', Break)
