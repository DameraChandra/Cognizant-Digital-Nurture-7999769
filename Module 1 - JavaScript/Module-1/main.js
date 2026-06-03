console.log("Welcome to the Community Portal");
alert("Page Loaded Successfully!");
const eventName = "Music Festival";
const eventDate = "June 10";
let availableSeats = 50;
console.log(`Event: ${eventName}
Date: ${eventDate}
Seats: ${availableSeats}`);
availableSeats--;
console.log("Seats after registration:", availableSeats);
availableSeats++;
console.log("Seats after cancellation:", availableSeats);
const events = [
    {
        name: "Music Festival",
        date: "2026-06-10",
        seats: 20
    },
    {
        name: "Food Fair",
        date: "2024-01-01",
        seats: 15
    },
    {
        name: "Sports Meet",
        date: "2026-07-15",
        seats: 0
    }
];
const today = new Date();
events.forEach(function(event){
    const eventDate = new Date(event.date);
    if(eventDate > today && event.seats > 0){
        console.log(`${event.name} is available`);
    }
    else{
        console.log(`${event.name} is unavailable`);

    }
});
try{
    let registrationSeats = 0;
    if(registrationSeats <= 0){
        throw new Error("No seats available");
    }
    console.log("Registration successful");
}
catch(error){
    console.log("Error:", error.message);

}
function addEvent(name, category){
    console.log(`Event Added:
    ${name} - ${category}`);
}
addEvent("Dance Show", "Cultural");
function registerUser(userName, eventName){

    console.log(`${userName}
    registered for
    ${eventName}`);

}
registerUser("Sreeja", "Music Festival");
const communityEvents = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Fair",
        category: "Food"
    },

    {
        name: "Rock Concert",
        category: "Music"
    }

];
function filterEventsByCategory(category){
    const filteredEvents =
    communityEvents.filter(function(event){
        return event.category === category;
    });
    console.log(filteredEvents);

}
filterEventsByCategory("Music");
function registrationTracker(){
    let totalRegistrations = 0;
    return function(){
        totalRegistrations++;
        console.log(`Total Registrations:
        ${totalRegistrations}`);
    };

}
const trackMusicRegistrations =
registrationTracker();
trackMusicRegistrations();
trackMusicRegistrations();
trackMusicRegistrations();
function searchEvents(callback){
    callback();
}
searchEvents(function(){
    console.log("Searching events dynamically");
});
function Event(name, date, seats){
    this.name = name;
    this.date = date;
    this.seats = seats;

}
Event.prototype.checkAvailability =
function(){
    if(this.seats > 0){
        console.log(`${this.name}
        has seats available`);
    }
    else{
        console.log(`${this.name}
        is full`);
    }
};
const event1 = new Event("Music Festival","2026-06-10", 25);
const event2 = new Event("Sports Meet","2026-07-20", 0);
event1.checkAvailability();
event2.checkAvailability();
console.log(Object.entries(event1));
Object.entries(event1).forEach(function(item){
    console.log(item[0], ":", item[1]);
});
let communityPrograms = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Cooking Workshop",
        category: "Workshop"
    },

    {
        name: "Rock Concert",
        category: "Music"
    }

];
communityPrograms.push({
    name: "Baking Workshop",
    category: "Workshop"
});
console.log(communityPrograms);
const musicEvents =
communityPrograms.filter(function(event){
    return event.category === "Music";
});
console.log(musicEvents);
const formattedCards =
communityPrograms.map(function(event){
    return `Workshop on ${event.name}`;
});
console.log(formattedCards);
const eventContainer =
document.querySelector("#eventContainer");
const portalEvents = [
    {
        name: "Music Festival",
        category: "Music",
        seats: 10
    },

    {
        name: "Food Fair",
        category: "Food",
        seats: 5
    }

];
const categoryFilter = document.querySelector("#categoryFilter");
function displayEvents(filteredEvents){

    eventContainer.innerHTML = "";

    filteredEvents.forEach(function(event){

        const card =
        document.createElement("div");

        card.classList.add("eventCard");

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>
            Seats Available:
            <span>${event.seats}</span>
            </p>

            <button class="registerBtn">
            Register
            </button>

        `;

        eventContainer.appendChild(card);
        const registerButton =
card.querySelector(".registerBtn");

const seatText =
card.querySelector("span");

registerButton.onclick =
function(){
    if(event.seats > 0){
        event.seats--;
        seatText.textContent =
        event.seats;
    }
};

    });

}
displayEvents(portalEvents);
categoryFilter.onchange =
function(){
    const selectedCategory =
    categoryFilter.value;

    if(selectedCategory === "All"){
        displayEvents(portalEvents);
    } else {
        const filtered =
        portalEvents.filter(function(event){

            return event.category ===
            selectedCategory;

        });
        displayEvents(filtered);

    }

};
const searchBox = document.querySelector("#searchBox");
searchBox.onkeydown =
function(){

    const searchText =
    searchBox.value.toLowerCase();

    const searchedEvents =
    portalEvents.filter(function(event){

        return event.name
        .toLowerCase()
        .includes(searchText);

    });

    displayEvents(searchedEvents);

};
const loadingText =
document.querySelector("#loading");
fetch("https://jsonplaceholder.typicode.com/users")

.then(function(response){
     return response.json();
})
.then(function(data){
    console.log(data);
    loadingText.textContent =
    "Events Loaded Successfully";
})
.catch(function(error){
    console.log("Error:", error);
    loadingText.textContent =
    "Failed to load events";
});
async function fetchEvents(){

    try{

        loadingText.textContent =
        "Loading using Async/Await...";

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/users"
        );

        const data =
        await response.json();

        console.log(data);

        loadingText.textContent =
        "Async Events Loaded";

    }

    catch(error){

        console.log("Error:", error);

        loadingText.textContent =
        "Async Loading Failed";

    }

}
fetchEvents();
function addNewEvent(

    name = "Unknown Event",

    category = "General"

){

    console.log(`${name}
    belongs to
    ${category}`);

}
addNewEvent();
addNewEvent(
"Dance Show",
"Cultural"
);
const eventDetails = {

    eventName: "Music Festival",
    eventDate: "2026-06-10",
    availableSeats: 25

};
const {

    eventName: newEventName,
    eventDate: newEventDate,
    availableSeats: newAvailableSeats

} = eventDetails;
console.log(newEventName);
console.log(newEventDate);
console.log(newAvailableSeats);
const originalEvents = [
    "Music Festival",
    "Food Fair",
    "Sports Meet"
];
const clonedEvents = [
    ...originalEvents
];
const filteredEvents =
clonedEvents.filter(function(event){

    return event.includes("Music");

});
console.log(filteredEvents);
const registrationForm = document.querySelector("#registrationForm");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const formMessage = document.querySelector("#formMessage");
registrationForm.onsubmit =
function(event){
    console.log("Form Submitted");

    event.preventDefault();

    nameError.textContent = "";

    emailError.textContent = "";

    const formElements = registrationForm.elements;
    const userName = formElements.userName.value;
    const userEmail = formElements.userEmail.value;
    const selectedEvent = formElements.selectedEvent.value;

    let isValid = true;

    if(userName === ""){

        nameError.textContent =
        "Name is required";

        isValid = false;

    }

    if(userEmail === ""){

        emailError.textContent = "Email is required";
        isValid = false;

    }
    if(isValid){

    formMessage.textContent =
    "Sending registration...";

    setTimeout(function(){

        formMessage.textContent =
        "Registration Successful!";

    }, 2000);

}

};
$("#registerBtn").click(function(){

    console.log("jQuery Button Clicked");

});
$("#registerBtn").click(function(){

    $(".eventCard").fadeOut(1000);

    $(".eventCard").fadeIn(1000);

});
