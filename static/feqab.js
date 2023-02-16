function clearResponse() {
        document.querySelector('.response-text').innerHTML = '';
    }
    function checkResponseHeight() {
        var response = document.querySelector(".response");
        var responseHeight = response.offsetHeight;
        if (responseHeight > 0) {
            box.style.marginTop = responseHeight + 20 + "px";
        } else {
            box.style.marginTop = "20px";
        }
    }
    window.onload = checkResponseHeight;
var response = document.querySelector('.response-text');

response.classList.add('ta');

function showResponse(text) {
    response.classList.remove('ta');
    response.innerText = text;
}

