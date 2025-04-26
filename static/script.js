


function groupReservation(){
   (window.open("https://form.jotform.com/240705601606145", "_blank"));
}

const AllLinks = document.querySelectorAll('nav a');
AllLinks.forEach(
    MyLink => {
        if (MyLink.getAttribute('href') == 'index.html'){
            return;
        }
        if (MyLink.href.includes(window.location.pathname)){
            MyLink.classList.add("active");
        }
    }
)

function fieldTrip(page){
    (window.open(page, "_blank"));
}

function mailingList(){
    (window.open('./views/mailingList.html', "_blank"));
}


//credit to meta facebook developers code website for embedded facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function checkForm(event) {
    event.preventDefault();
    
    const success = document.getElementById('success');

    const form = document.getElementById('mailingForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const zip = document.getElementById('zip');
    const text = document.getElementById('text');

    const errorName = document.getElementById('nameError');
    const errorEmail = document.getElementById('emailError');
    const errorPhone = document.getElementById('phoneError');
    const errorZip = document.getElementById('zipError');

    [errorName, errorEmail, errorPhone, errorZip].forEach(el => {
        el.textContent = '';
        el.style.display = 'none';
    });
    
    if (!name.checkValidity()) {
        errorName.style.display = 'block';
        errorName.textContent = 'Please enter your name';
        name.focus();
        return false;
        }
            
    if (!email.checkValidity()) {
        errorEmail.style.display = 'block';
        errorEmail.textContent = 'Please enter a valid email';
        email.focus();
        return false;
        }
         
    if (phone.value && !phone.checkValidity() && phone.value.length != 10) {
        errorPhone.style.display = 'block';
        errorPhone.textContent = 'Please enter a 10-digit phone number';
        phone.focus();
        return false;
        }
        
    if (zip.value && !zip.checkValidity() && zip.value.length != 5) {
        errorZip.style.display = 'block';
        errorZip.textContent = 'Please enter a 5-digit zip code';
        zip.focus();
        return false;
    }
        
    if (text.checked && !phone.value) {
        errorPhone.textContent = 'Phone required for SMS updates';
        errorPhone.style.display = 'block';
        phone.focus();
        return false;
    }

    success.textContent = 'FORM SUCCESSFULLY SUBMITTED'
    window.location.href = `mailto:duq.incline@duquesneincline.org`;
    form.reset();
    return true;
}


function greetingFunc(){
    var greetingElement = document.getElementById("greeting");
    if (!greetingElement) {
        console.log("Greeting element not found");
        return;
    }
    var d = new Date();
    var h = d.getHours();
    if (h < 12){
        document.getElementById("greeting").innerHTML = ("GOOD MORNING,");
    } else if (h >= 12 && h < 18){
        document.getElementById("greeting").innerHTML = ("GOOD AFTERNOON,");
    } else if (h >= 18 && h < 20){
        document.getElementById("greeting").innerHTML = ("GOOD EVENING,");
    } else if ((h >= 20 && h < 24) || (h >= 0 && h < 5)){
        document.getElementById("greeting").innerHTML = ("GOOD NIGHT,");
    }
}
greetingFunc();

function timeFunc() {
    const d = new Date();
    const hour = d.getHours();
    const minute = d.getMinutes();
    const open = new Date();
    open.setHours(6, 30, 0, 0);
    const closed = new Date();
    closed.setHours(24, 30, 0, 0);
    let message = "";
    if (d >= open && d < closed) {
        const timeLeft = new Date(closed - d);
        const hoursLeft = timeLeft.getUTCHours();
        const minutesLeft = timeLeft.getUTCMinutes();
        message = `Currently OPEN - Closes in ${hoursLeft}h ${minutesLeft}m`;
    }
    else {
        let timeUntilOpen;
        if (d < openTime) {
            timeUntilOpen = new Date(open - d);
        } else {
            const tomorrowOpen = new Date(openTime);
            tomorrowOpen.setDate(tomorrowOpen.getDate() + 1);
            timeUntilOpen = new Date(tomorrowOpen - d);
        }
        const hoursLeft = timeUntilOpen.getUTCHours();
        const minutesLeft = timeUntilOpen.getUTCMinutes();
        message = `Currently CLOSED - Opens in ${hoursLeft}h ${minutesLeft}m`;
    }
    document.getElementById("time").textContent = message;
    setTimeout(timeFunc, 60000);
}
timeFunc();

/* web geolocation API from w3 */
const x = document.getElementById("demo");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch(err) {
    x.innerHTML = err;
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}


//credit from w3resource https://www.w3resource.com/jquery-exercises/part1/jquery-practical-exercise-2.php
$(document).ready(function() {
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });$("html, body").animate({ scrollTop: 0 }, "slow");
});
  