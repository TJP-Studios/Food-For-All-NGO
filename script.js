//Header & Footer
const hamburgerIcon = document.querySelector ('.hamburger-icon')
const closeIcon = document.querySelector ('.close-icon')
const hamburgerMenu = document.querySelector ('.hamburger-menu')
const footerSubscribeBtn = document.querySelector ('.footer-subscribe-btn')
const overlaySubscribe = document.querySelector ('.overlay-subscribe')
const closeSubscribe = document.querySelector ('.close-subscribe')

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


footerSubscribeBtn.addEventListener('click', ()=> {
    overlaySubscribe.classList.add('hide');
    closeSubscribe.classList.add('hide');
}
)

closeSubscribe.addEventListener('click', ()=> {
    overlaySubscribe.classList.remove('hide');
    closeSubscribe.classList.remove('hide');
}
)


// Donation Page
const dedicatedCheckbox = document.querySelector ('.dedicated-checkbox')
const dedicatedInput = document.querySelector ('.dedicated-input')
const dedicatedCheckboxMonthly = document.querySelector ('.dedicated-checkbox-monthly')
const dedicatedInputMonthly = document.querySelector ('.dedicated-input-monthly')
const donationBtnLeft = document.querySelector ('.donation-btn-left')
const donationBtnMiddle = document.querySelector ('.donation-btn-middle')
const donationBtnRight = document.querySelector ('.donation-btn-right')
const donationMonthlyBtnLeft = document.querySelector ('.donation-monthly-btn-left')
const donationMonthlyBtnMiddle = document.querySelector ('.donation-monthly-btn-middle')
const donationMonthlyBtnRight = document.querySelector ('.donation-monthly-btn-right')

donationBtnLeft.addEventListener('click', ()=> {
    donationBtnLeft.classList.add('active');
    donationBtnMiddle.classList.remove('active');
    donationBtnRight.classList.remove('active');
})

donationBtnMiddle.addEventListener('click', ()=> {
    donationBtnLeft.classList.remove('active');
    donationBtnMiddle.classList.add('active');
    donationBtnRight.classList.remove('active');
})

donationBtnRight.addEventListener('click', ()=> {
    donationBtnLeft.classList.remove('active');
    donationBtnMiddle.classList.remove('active');
    donationBtnRight.classList.add('active');
})

donationMonthlyBtnLeft.addEventListener('click', ()=> {
    donationMonthlyBtnLeft.classList.add('active');
    donationMonthlyBtnMiddle.classList.remove('active');
    donationMonthlyBtnRight.classList.remove('active');
})

donationMonthlyBtnMiddle.addEventListener('click', ()=> {
    donationMonthlyBtnLeft.classList.remove('active');
    donationMonthlyBtnMiddle.classList.add('active');
    donationMonthlyBtnRight.classList.remove('active');
})

donationMonthlyBtnRight.addEventListener('click', ()=> {
    donationMonthlyBtnLeft.classList.remove('active');
    donationMonthlyBtnMiddle.classList.remove('active');
    donationMonthlyBtnRight.classList.add('active');
})


dedicatedCheckbox.addEventListener('click', ()=> {
    dedicatedInput.classList.toggle('visible');
})
dedicatedCheckboxMonthly.addEventListener('click', ()=> {
    dedicatedInputMonthly.classList.toggle('visible');
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

    donationBtnLeft.classList.remove('active');
    donationBtnMiddle.classList.remove('active');
    donationBtnRight.classList.remove('active');
})

oneTimeDonation.addEventListener('click', ()=> {
    oneTimeDonation.classList.remove('inactive');
    monthlyDonation.classList.remove('active');
    

    oneTimeDonationContainer.classList.remove('hide')
    monthlyDonationContainer.classList.remove('hide')

    donationMonthlyBtnLeft.classList.remove('active');
    donationMonthlyBtnMiddle.classList.remove('active');
    donationMonthlyBtnRight.classList.remove('active');
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
const securityQuestionImg = document.querySelector ('.security-question-img')
const cvvOverlay = document.querySelector ('.cvv-overlay')

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

securityQuestionImg.addEventListener('click', ()=> {
    cvvOverlay.classList.toggle('hide');
})

const anonymousCheckbox = document.querySelector ('.card-inactive')
const hideform = document.querySelector ('.card-inactive')


function myFunction() {
    // Get the text field
    var copyText = document.getElementsByClassName("copy");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }