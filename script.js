//Header & Footer
const hamburgerIcon = document.querySelector ('.hamburger-icon')
const closeIcon = document.querySelector ('.close-icon')
const hamburgerMenu = document.querySelector ('.hamburger-menu')

hamburgerIcon.addEventListener('click', ()=> {
    hamburgerIcon.classList.add('hide');
    closeIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
}
)

closeIcon.addEventListener('click', ()=> {
    closeIcon.classList.add('hide');
    hamburgerIcon.classList.remove('hide');
    hamburgerMenu.classList.toggle('visible');
}
)

// Donation Page
const dedicatedCheckbox = document.querySelector ('.dedicated-checkbox')
const dedicatedInput = document.querySelector ('.dedicated-input')

dedicatedCheckbox.addEventListener('click', ()=> {
    dedicatedInput.classList.toggle('visible');
})



const oneTimeDonation = document.querySelector ('.one-time-donation-inactive')
const monthlyDonation = document.querySelector ('.monthly-donation-active')
const oneTimeDonationContainer = document.querySelector ('.one-time-donation-container')
const monthlyDonationContainer = document.querySelector ('.monthly-donation-container')

monthlyDonation.addEventListener('click', ()=> {
    oneTimeDonation.classList.add('inactive');
    monthlyDonation.classList.add('active');
    

    oneTimeDonationContainer.classList.add('hide')
    monthlyDonationContainer.classList.add('hide')
})

oneTimeDonation.addEventListener('click', ()=> {
    oneTimeDonation.classList.remove('inactive');
    monthlyDonation.classList.remove('active');
    

    oneTimeDonationContainer.classList.remove('hide')
    monthlyDonationContainer.classList.remove('hide')
})


const anonymousCheckboxInput = document.querySelector ('.anonymous-checkbox')
const anonymousForm = document.querySelector ('form')

anonymousCheckboxInput.addEventListener('click', ()=> {
    anonymousForm.classList.toggle('hide');
})


const cardPaymentInactive = document.querySelector ('.card-inactive')
const bankPaymentActive = document.querySelector ('.bank-active')
const ussdPaymentActive = document.querySelector ('.ussd-active')
const paypalPaymentActive = document.querySelector ('.paypal-active')
const cardContainer = document.querySelector ('.card-payment-container')
const bankContainer = document.querySelector ('.bank-transfer-payment-container')
const ussdContainer = document.querySelector ('.ussd-payment-container')
const paypalContainer = document.querySelector ('.paypal-payment-container')

bankPaymentActive.addEventListener('click', ()=> {
    cardPaymentInactive.classList.add('inactive');
    bankPaymentActive.classList.add('active');
    ussdPaymentActive.classList.remove('active');
    paypalPaymentActive.classList.remove('active');

    cardContainer.classList.add('hide')
    bankContainer.classList.add('hide')
    ussdContainer.classList.remove('hide')
    paypalContainer.classList.remove('hide')
})

ussdPaymentActive.addEventListener('click', ()=> {
    cardPaymentInactive.classList.add('inactive');
    bankPaymentActive.classList.remove('active');
    ussdPaymentActive.classList.add('active');
    paypalPaymentActive.classList.remove('active');

    cardContainer.classList.add('hide')
    bankContainer.classList.remove('hide')
    ussdContainer.classList.add('hide')
    paypalContainer.classList.remove('hide')
})

paypalPaymentActive.addEventListener('click', ()=> {
    cardPaymentInactive.classList.add('inactive');
    bankPaymentActive.classList.remove('active');
    ussdPaymentActive.classList.remove('active');
    paypalPaymentActive.classList.add('active');

    cardContainer.classList.add('hide')
    bankContainer.classList.remove('hide')
    ussdContainer.classList.remove('hide')
    paypalContainer.classList.add('hide')
})

cardPaymentInactive.addEventListener('click', ()=> {
    cardPaymentInactive.classList.remove('inactive');
    bankPaymentActive.classList.remove('active');
    ussdPaymentActive.classList.remove('active');
    paypalPaymentActive.classList.remove('active');

    cardContainer.classList.remove('hide')
    bankContainer.classList.remove('hide')
    ussdContainer.classList.remove('hide')
    paypalContainer.classList.remove('hide')
})

const anonymousCheckbox = document.querySelector ('.card-inactive')
const hideform = document.querySelector ('.card-inactive')