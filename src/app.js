const HeaderItems = document.querySelectorAll('.header-item')
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

// show home section

HeaderItems[0].addEventListener('click', () => {
  
 
hideSections()
HomeSection.classList.remove('hide-section')

})

// show about section

HeaderItems[1].addEventListener('click', () => {

hideSections()
AboutTitle.classList.add('animate-show')
AboutSection.classList.remove('hide-section')

})

// show service section


HeaderItems[2].addEventListener('click', () => {

hideSections()

ServiceBoxes.forEach(box => {

box.classList.add('animate-bottom')

})

ServiceSection.classList.remove('hide-section')

})

// show contact section 

HeaderItems[3].addEventListener('click', () => {

hideSections()
ContactSection.classList.remove('hide-section')



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

console.log('Your Inform is Valid');  

window.location.href = `mailto:yosef.kabootari69@gmail.com?
subject=New Project&body=name: ${NameElem.value} 
%0ALast Name: ${LastElem.value} 
%0APhone: ${PhoneElem.value} 📱
%0A%0AEmail: ${EamilElem.value} ✉
%0A%0AMessage:${MessageElem.value} 📄
`
NameElem.value = ''
LastElem.value = ''
PhoneElem.value = ''
EamilElem.value = ''
MessageElem.value = ''
  
} else {

console.log('Please Enter Valid Information');

}

})

