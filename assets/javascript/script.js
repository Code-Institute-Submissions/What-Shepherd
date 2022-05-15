//Check correct answers
//Original code source: https://stackoverflow.com/questions/36921415/score-in-a-javascript-quiz

var score = 0;
function fsubmit()
{
    var correct1 = document.getElementById("q1b");
    if(correct1.checked === true)
    {
        score++;
    }
    var correct2 = document.getElementById("q2a");
    if(correct2.checked === true)
    {
        score++;
    }
    var correct3 = document.getElementById("q3a");
    if(correct3.checked === true)
    {
        score++;
    }
}