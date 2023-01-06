//match details
var overs, t1, t2, batfirst = 1, inning = 1, balls = 0, score = 0, wickets = 0;

var target;

function start() {
    document.getElementById("matchstart").style.display = "none";
    document.getElementById("score").style.display = "grid";
    document.getElementById("buttons").style.display = "grid";
    document.getElementById("infoT").style.display = "block";

    t1 = document.getElementById("t1").value;
    t2 = document.getElementById("t2").value;
    overs = document.getElementById("over").value;
    batfirst = document.getElementById("batf").value;

    document.getElementById("team1").innerHTML = t1
    document.getElementById("team2").innerHTML = t2;

    document.getElementById("overs1").innerHTML = "0/" + overs + ".0";
    document.getElementById("overs2").innerHTML = "0/" + overs + ".0";


}
function scoreadd(runs) {

    switch (runs) {
        case 1:
            score += 1;
            balls += 1;
            break;
        case 2:
            score += 2;
            balls += 1;
            break;

        case 3:
            score += 3;
            balls += 1;
            break;

        case 4:
            score += 4;
            balls += 1;
            break;

        case 5:
            score += 5;
            balls += 1;
            break;
        case 6:
            score += 6;
            balls += 1;
            break;

        case 7:
            wickets += 1;
            balls += 1;
            break;
        case 8:
            var x = prompt("Any extra runs scored on this wide/nb ");
            score += 1 + parseInt(x);
            break;

    }

    scoreupdate(batfirst, inning);

}

function checkinningchange() {
    if (inning == 1) {
        if (overs * 6 <= balls || wickets == 10) {
            inning = 2;
            target = score + 1;
            score = balls = wickets = 0;
            document.getElementById("target").innerHTML = "Target:" + target;
        }
    }
    else {
        if (score >= target) {
            if (batfirst == 1) {

                document.getElementById("winner").innerHTML = t2 + " Won by " + (10 - wickets) + " wickets";
                endmatch();

            } else {
                alert("else");
                document.getElementById("winner").innerHTML = t1 + " Won by " + (10 - wickets) + " wickets";
                endmatch();


            }
        }
        else if (wickets == 10 || (overs * 6 == balls && score <= target)) {
            if (batf == 1) {
                document.getElementById("winner").innerHTML = t2 + " Won by " + (target - score) + " runs";
                endmatch();

            } else {
                document.getElementById("winner").innerHTML = t1 + " Won by " + (target - score) + " runs";
                endmatch();

            }
        }
    }
}

function scoreupdate(batf, inn) {

    switch (inn) {
        case 1:
            if (batf == 1) {
                document.getElementById("score1").innerHTML = score + "/" + wickets;
                document.getElementById("overs1").innerHTML = (parseInt(balls / 6) + ((balls % 6) / 10)) + "/" + overs;
            } else {
                document.getElementById("score2").innerHTML = score + "/" + wickets;
                document.getElementById("overs2").innerHTML = (parseInt(balls / 6) + ((balls % 6) / 10)) + "/" + overs;
            }
            break;

        case 2:
            if (batf == 1) {
                document.getElementById("score2").innerHTML = score + "/" + wickets;
                document.getElementById("overs2").innerHTML = (parseInt(balls / 6) + ((balls % 6) / 10)) + "/" + overs;
            } else {
                document.getElementById("score1").innerHTML = score + "/" + wickets;
                document.getElementById("overs1").innerHTML = (parseInt(balls / 6) + ((balls % 6) / 10)) + "/" + overs;
            }

    }
    checkinningchange();
}
function endmatch() {
    document.getElementById("buttons").style.display = "none";
}