var settings = document.getElementById("settings");
var hiddenIcons = document.getElementById("hiddenIcons");
var start = document.getElementById("start");
var shut = document.getElementById("shutDown");
var notepad = document.getElementById("notepad");
var paint = document.getElementById("paint");
var edge = document.getElementById("edge");
var mail = document.getElementById("mail");
var store = document.getElementById("store");
var showtips = document.getElementById("tips");
var search = document.getElementById("search");

document.getElementById("stratMenu").style.display="none";
document.getElementById("searchbar").style.display="none";

settings.addEventListener("click", function () {
    Swal.fire({
        title: 'Windows 11 Fan Made',
        text: 'Made by Uday Chugh',
        //text: 'Version : 1.1.0',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
});



hiddenIcons.addEventListener("click", function () {
    Swal.fire({
        position: 'bottom-end',
        icon: 'question',
        title: 'No Hidden Icons Available',
        showConfirmButton: false,
        timer: 2000
    })
});

start.addEventListener("click", function () {
    var menu = document.getElementById("stratMenu");
    if (menu.style.display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

search.addEventListener("click", function () {
    var searchbar = document.getElementById("searchbar");
    if (searchbar.style.display === "none") {
        searchbar.style.display = "flex";
    } else {
        searchbar.style.display = "none";
    }
}); 


shut.addEventListener("click", function () {
    window.close();
});

notepad.addEventListener("click", function () {
    window.location.replace("https://udaychugh.github.io/notepad/");
});

paint.addEventListener("click", function () {
    window.location.replace("https://udaychugh.github.io/paint/");
});

edge.addEventListener("click", function () {
    window.location.replace("https://www.microsoft.com/en-us/edge");
});

mail.addEventListener("click", function () {
    window.location.replace("https://www.microsoft.com/en-in/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook");
});

store.addEventListener("click", function () {
    window.location.replace("https://www.microsoft.com/en-in/store/apps/windows");
});




showtips.addEventListener("click", function () {
    //giving tips
    var tips = new Array();
    tips[0] = "This Windows 11 clone is develop by Mr. Uday Chugh";
    tips[1] = "Use windows Defender";
    tips[2] = "Don't watch porn from any malicious website";
    tips[3] = "Keep Your Device Drivers Up to Date";
    tips[4] = "See Several Windows at Once with Snap View";
    tips[5] = "Expand Your Desktop with Multiple Monitors";
    tips[6] = "Utilize Cortana as Your Personal Assistant";
    tips[7] = "Avoid a Cluttered Desktop";
    tips[8] = "Quickly Find Items with the Taskbar’s Search Box";
    tips[9] = "Let Windows Do the Cleaning";
    tips[10] = "Customize the Start Menu to Fit Your Needs";
    tips[11] = "Keep Frequently Used Apps on the Taskbar";
    tips[12] = "No more Tips";
    tips[13] = "This is not original windows";
    tips[14] = "Always use VPN while Watching Porn";

    var i = Math.floor(15 * Math.random());

    Swal.fire({
        title: 'Aaj Ka Gyaan',
        text: tips[i],
        //text: 'Version : 1.1.0',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
});


//show time and date
n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();

var T = new Date();
H = T.getHours();
M = T.getMinutes();
S = T.getSeconds();

let month;

switch (m) {
    case 1:
        month = "Jan";
        break;
    case 2:
        month = "Feb";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "Jul";
        break;
    case 8:
        month = "Aug";
        break;
    case 9:
        month = "Sept";
        break;
    case 10:
        month = "Oct";
        break;
    case 11:
        month = "Nov";
        break;
    case 12:
        month = "Dec";
        break;
}

document.getElementById("date").innerHTML = d + "-" + month + "-" + y;
document.getElementById("time").innerHTML = H + ":" + M;
