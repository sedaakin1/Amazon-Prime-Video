function signinPage() {
    window.location.href = "SignIn/signIn.html";
}


var favChannels = [
    {img_url: "home/img/channels/Discovery.jpg"},
    {img_url: "home/img/channels/Docubay.jpg"},
    {img_url: "home/img/channels/Erosnow.jpg"},
    {img_url: "home/img/channels/Hayu.jpg"},
    {img_url: "home/img/channels/hoichoi.jpg"},
    {img_url: "home/img/channels/LionsgatePlay.jpg"},
    {img_url: "home/img/channels/MANORAMAMAX.jpg"},
    {img_url: "home/img/channels/Mubi.jpg"},
    {img_url: "home/img/channels/ShortsTV.jpg"},
];

favChannels.map(function (elem){
    var div = document.createElement("div");
    div.setAttribute("class", "channelDiv");

    var image = document.createElement("img");
    image.setAttribute("src", elem.img_url);

    div.append(image);
    document.querySelector(".channelBtn").append(div);
});

localStorage.setItem("favChannels", JSON.stringify(favChannels));

