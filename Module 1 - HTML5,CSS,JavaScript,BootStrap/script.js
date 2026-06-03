console.log("Page Loaded Successfully");

// Event Fee

const eventSelect =
document.getElementById("eventSelect");

const eventFee =
document.getElementById("eventFee");

eventSelect.addEventListener("change", () => {

eventFee.value =
"₹ " + eventSelect.value;

localStorage.setItem(
"selectedEvent",
eventSelect.value
);

});

// Load Saved Event

window.onload = () => {

const savedEvent =
localStorage.getItem("selectedEvent");

if(savedEvent){

eventSelect.value = savedEvent;

eventFee.value =
"₹ " + savedEvent;

}

};

// Character Counter

const message =
document.getElementById("message");

const charCount =
document.getElementById("charCount");

message.addEventListener("input", () => {

charCount.textContent =
"Characters: " +
message.value.length;

});

// Phone Validation

const phone =
document.getElementById("phone");

phone.addEventListener("blur", () => {

if(phone.value.length < 10){

alert("Enter valid phone number");

}

});

// Video Ready Event

const promoVideo =
document.getElementById("promoVideo");

promoVideo.addEventListener(
"canplay",
() => {

console.log(
"Video ready to play"
);

});