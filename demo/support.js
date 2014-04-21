(function (window, undefined) {
    var SpeechRecognition = window.webkitSpeechRecognition;
    var SpeechSynthesis = window.speechSynthesis;

    if (!SpeechRecognition || !SpeechSynthesis) {
        var supportWarning = document.getElementsByClassName('brower-support');
        supportWarning[0].style.display = 'block';
    }
})(window);
