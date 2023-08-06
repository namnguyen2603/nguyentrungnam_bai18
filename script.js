var textElement = document.getElementById("text");
var originalText = textElement.innerHTML;
var words = originalText.split(" ");
var count = 0;
var interval = setInterval(changeColor, 1000);

function changeColor() {
    if (count >= words.length) {
        clearInterval(interval);
        return;
    }
    var coloredWords = [...words].map(function(word, index) {
        if (index === count) {
            return "<span class='color'>" + word + "</span>";
        } else {
            return word;
        }
    });
    textElement.innerHTML = coloredWords.join(" ");
    count++;
}