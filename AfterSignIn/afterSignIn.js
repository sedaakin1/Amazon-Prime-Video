

var userName = JSON.parse(localStorage.getItem("userName")) || "Seda Akin";
document.querySelector("#userName").innerHTML =
 `${userName} <i class="fas fa-caret-down arrowDown langBtn"></i>`;


function subscription(duration) {
    if(duration === "freeSubscription") {
        window.location.href = "subs/freeSubscription.html";
    } else if (duration === "annualSubscription") {
        window.location.href = "subs/annualSubscription.html";
    } else if (duration === "quarterlySubscription") {
        window.location.href = "subs/quarterlySubscription.html";
    } else if (duration === "monthlySubscription") {
        window.location.href = "subs/monthlySubscription.html";
    }
}


