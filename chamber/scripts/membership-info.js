const fullname = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const businessName = document.querySelector("#business-name");
const businessLevel = document.querySelector("#business-level");
const date = document.querySelector('#date');

const params = new URLSearchParams(window.location.search);

const firstNameData = params.get('firstName');
const lastNameData = params.get('lastName');
const emailData = params.get('Email');
const phoneData = params.get('phone');
const businessNameData = params.get('organization-name');
const businessLevelData = params.get('membership-level');
const time = params.get('timestamp');

fullname.innerHTML = `<strong>Name:</strong> ${lastNameData}, ${firstNameData}`;
email.innerHTML = `<strong>Email:</strong> ${emailData}`;
phone.innerHTML = `<strong>Phone:</strong> ${phoneData}`;
businessName.innerHTML = `<strong>Business/Company Name:</strong> ${businessNameData}`;
businessLevel.innerHTML = `<strong>Membership Level:</strong> ${businessLevelData}`;
date.innerHTML = `<strong>Date and Time:</strong> ${time}`;