const alertMessage = document.getElementsByClassName("alert");

const clipboard = new ClipboardJS('.portapapeles');

clipboard.on('success', function(e) {
    alertMessage[0].classList.replace("hidden", "visible");
    setTimeout (dessaper, 650)
});

clipboard.on('error', function(e) {
 /*    En caso de error */
});

function dessaper (){
    alertMessage[0].classList.replace("visible", "hidden");
}
