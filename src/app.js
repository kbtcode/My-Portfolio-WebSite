let $ = document

const HeaderItems = $.querySelectorAll('.header-item')
const Sections = $.querySelectorAll('.section')
const HomeSection = $.getElementById('home-section')
const AboutSection = $.getElementById('about-section')
const ServiceSection = $.getElementById('service-section')
const ContactSection = $.getElementById('contact-section')
const ReadMoreBtn = $.querySelector('.read')
const AboutTitle = $.getElementById('about')
const MoreInfo = $.getElementById('more-info')
const ServiceBoxes = $.querySelectorAll('.service-box')
const NameElem = $.getElementById('FirstName-input')
const LastElem = $.getElementById('LastName-input')
const PhoneElem = $.getElementById('Phone-input')
const EmailElem = $.getElementById('Email-input')
const MessageElem = $.getElementById('message-input')
const SubmitBtn = $.getElementById('Submit')
const ShowMenu = $.getElementById('menu-bar')
const HeaderMenu = $.getElementById('header-menu')
const BreakMenu = $.getElementById('break-menu')
const AlertNotif = $.getElementById('alert')
const ChangeThemeBtn = $.getElementById('change-theme')


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

NameElem.value = null; 
LastElem.value = null;
PhoneElem.value = null;
EmailElem.value = null;
MessageElem.value = null;   
    
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
let RegexPhone = /^(091([0-8])|090[0-5]|099[0-6]|093[0-9]|092[0-4]|094[0-2]) \d{3} \d{4}$/
let EmailRegex = /^(\w*)+.?(\w*){3,15}@(\w){3,5}.[\w]{2,3}$/

let RegexResName = RegexName.test(NameElem.value);
let RegexLastNameRes = RegexLastName.test(LastElem.value);
let RegexPhoneRes = RegexPhone.test(PhoneElem.value);
let RegexEmailRes = EmailRegex.test(EmailElem.value);



if(RegexResName && RegexLastNameRes && RegexPhoneRes && RegexEmailRes && MessageElem.value){


  window.location.href = `mailto:yosef.842005@gmail.com?subject=${encodeURIComponent('New Project')}&body=${encodeURIComponent(
    `name: ${NameElem.value}\n\n
    Last Name: ${LastElem.value}\n\n
    Phone: ${PhoneElem.value} 📱\n\n
    Email: ${EmailElem.value} ✉\n\n
    Message 📄: ${MessageElem.value}`
  )}`;

EmptyFormValues()
  
} else {

AlertNotif.classList.add('alert-modal')

setTimeout(() => {
  
AlertNotif.classList.remove('alert-modal')

}, 3000);

}
})

//change theme btn

ChangeThemeBtn.addEventListener('click', () => {

  
  const isDark = document.documentElement.classList.toggle("dark");
  if(isDark) {  
    localStorage.theme = 'dark'
    ChangeThemeBtn.innerHTML= `
    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>
`


  } else{ 
    localStorage.theme = 'light'
    ChangeThemeBtn.innerHTML = `
    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>
`



  }

  
 
})

console.log(ChangeThemeBtn);




const template = document.createElement('template');
template.innerHTML = `
<!DOCTYPE html>
<html data-theme="dark" lang="en">
<link rel="stylesheet" href="src/output.css">
    

     <div class="px-5 pt-8 w-full flex flex-col gap-7 justify-center items-center">
      <div class="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-300/75 to-indigo-300/75 flex justify-center items-center
      ">
       <slot class="text-white" name="icon"></slot>
        </div>
        
        
          <h1 class="font-PoppinMedium text-xl border-b-2 pb-1 border-b-sky-400 text-black/60 max-sm:text-[16px]
           dark:border-pink-600 dark:text-white/60"><slot name="title"></slot></h1>
          <p class="font-MonsterateRegular max-sm:text-sm max-sm:text-center dark:text-white/60"><slot name="summary"></slot></p>

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
