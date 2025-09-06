const HeaderItems = document.querySelectorAll('.header-item')
const Sections = document.querySelectorAll('.section')
const HomeSection = document.getElementById('home-section')
const AboutSection = document.getElementById('about-section')
const ServiceSection = document.getElementById('service-section')
const ContactSection = document.getElementById('contact-section')
const ReadMoreBtn = document.querySelector('.read')
const AboutTitle = document.getElementById('about')
const MoreInfo = document.getElementById('more-info')
const ServiceBoxes = document.querySelectorAll('#service-box')
const NameElem = document.getElementById('FirstName-input')
const LastElem = document.getElementById('LastName-input')
const PhoneElem = document.getElementById('Phone-input')
const EamilElem = document.getElementById('Email-input')
const MessageElem = document.getElementById('message-input')
const SubmitBtn = document.getElementById('Submit')

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
let RegexEmailRes = EmailRegex.test(EamilElem.value);

if(RegexResName && RegexLastNameRes && RegexPhoneRes && RegexEmailRes && MessageElem.value){

window.location.href = `mailto:yosef.842005@gmail.com?
subject=New Project&body=name:${NameElem.value} 
%0ALast Name: ${LastElem.value} 
%0APhone: ${PhoneElem.value} 📱
%0A%0AEmail: ${EamilElem.value} ✉
%0A%0AMessage 📄:${MessageElem.value}`

EmptyFormValues()
  
} else {

console.log('Please Enter Valid Information');

}
})


