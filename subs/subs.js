
function AfterSignIn() {
    window.location.href = "/AfterSignIn/afterSignIn.html";
}

function pay(value) {
    if(value === 0) {
        document.querySelector(".upiOption").style.display= "none";
        document.querySelector(".upi").style.background = "";
        document.querySelector(".netbanking").style.background = "";
        document.querySelector(".netBankingOption").style.display = "none";
        document.querySelector(".debitContainer").style.display = "block";
        document.querySelector(".debit").style.background = "#eff0f3";
    } else if (value === 1) {
        document.querySelector(".upiOption").style.display= "none";
        document.querySelector(".upi").style.background = "";
        document.querySelector(".netbanking").style.background = "#fcf5ee";
        document.querySelector(".netBankingOption").style.display = "block";
        document.querySelector(".debitContainer").style.display = "none";
        document.querySelector(".debit").style.background = "";
    } else if (value === 2) {
        document.querySelector(".upiOption").style.display= "block";
        document.querySelector(".upi").style.background = "#eff0f3";
        document.querySelector(".netbanking").style.background = "";
        document.querySelector(".netBankingOption").style.display = "none";
        document.querySelector(".debitContainer").style.display = "none";
        document.querySelector(".debit").style.background = "";
    }
}

document.querySelector("#promoCode").addEventListener("click", function () {
    document.querySelector(".promoInput").style.display = "block";
    document.querySelector(".caretDown").setAttribute("class", "fas fa-angle-up caretDown");
});

document.querySelector("#promoCode").addEventListener("dblclick", function () {
    document.querySelector(".promoInput").style.display = "none";
    document.querySelector(".caretDown").setAttribute("class", "fas fa-angle-down caretDown");
});

//Enabling continue button after clicking on upi verify

document.querySelector("#verify").addEventListener("click", function () {
    var upiID = document.querySelector("#upiID").value;
    if(upiID === "7894561230@upi" || upiID === "abcdef01@oksvi"){
        alert(`${upiID} is Verified`);
        var continueBtn = document.querySelector(".continueBtn");
        continueBtn.style.opacity = "1";
        continueBtn.style.color = "#fff";
        continueBtn.removeAttribute("disabled");
    } else {
        alert(`${upiID} is Invalid`);
    }
});

//Enabling continue button after adding debit/credit card

document.querySelector("#addDebitCard").addEventListener("click", function() {
    var userName = JSON.parse(localStorage.getItem("userName")) || "";
    var cardName = document.querySelector("#cardName").value;
    var cardNumber = document.querySelector("#cardNumber").value;
    var expiryDate = document.querySelector("#expiryDate").value;

    if(
        cardNumber === "964357982788" && cardName === "Seda Akin" && expiryDate === "2023-12"
    ) {
        alert(`${userName} Your Card ${cardNumber} is Verified `);
        var continueBtn = document.querySelector(".continueBtn");
        continueBtn.style.opacity = "1";
        continueBtn.style.color = "#fff";
        continueBtn.removeAttribute("disabled");
    } else {
        alert(`${userName} Your Card ${cardNumber} is Invalid `);
    }

});

// Promocode Check

document.querySelector("#promoCheck").addEventListener("click", function () {
    var promoCodeInput = document.querySelector("#promoCodeInput").value;
    if(promoCodeInput) {
        if(promoCodeInput === "code114"){
            alert("You'll get 15 days extra subscription. Complete your payment !");
        } else {
            alert("Promo Code is Invalid");
        }
    } else {
        alert("Enter Promo Code");
    }
});

// Continue button for otp

function proceed() {
    var userName = JSON.parse(localStorage.getItem("userName")) || "";
    var otp = prompt("Enter your OTP");
    while (otp !== "7894561230") {
        if(otp === "78945") {
            alert (`Payment is Successfull ! We have received your payment ${userName}, 
            Thank you and enjoy watching Amazon Prime`);
            window.location.href = "/AfterSubs/mainHome.html";
            break;
        } else if (otp == "null" || otp == "" || null) {
            break;
        } else {
            alert("Wrong OTP");
            var otp = prompt("Enter your OTP");
        }
    }
}

