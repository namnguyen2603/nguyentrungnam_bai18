var textElement = document.getElementById("text");

var originalText = textElement.innerHTML;

var words = originalText.split(" ");

var count = 0;

var interval = setInterval(changeColor, 500);

function changeColor() {
    if (count >= words.length) {
        clearInterval(interval); 
        return;
    }
    var currentWord = words[count];

    var span = document.createElement("span");
    span.textContent = currentWord;
    span.classList.add("red");
    textElement.innerHTML = textElement.innerHTML.replace(currentWord, span.outerHTML);
    count++;
}


