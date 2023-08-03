
var userName = JSON.parse(localStorage.getItem("userName")) || "Seda Akin";

document.querySelector("#userName").innerHTML = userName;

document.querySelector("#signOut").addEventListener("click", function () {
    window.location.href = "/index.html";
});

//Slick js

$(document).ready(function () {
    $(".regular").slick ({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 5,
        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
});

//throwback Controller

var throwbackController = document.querySelectorAll(".throwbackController");

var throwbackPics = document.getElementsByClassName("T");

var t = 0;
throwbackController[1].onclick = () => {
    t++;
    for (var i of throwbackPics) {
        if (t == 0) {
            i.style.left = "0px";
        }
        if (t == 1) {
            i.style.left = "-280px";
        }
        if (t > 1) {
            t = 1;
        }
    }
};

throwbackController[0].onclick = () => {
    t--;
    for(var i of throwbackPics) {
        if (t == 0) {
            i.style.left = "0px";
        }
        if (t == 1) {
            i.style.left = "-740px";
        }
        if (t < 0) {
            t = 0;
        }
    }
};

