$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19)
    $("#randomNumber").text(random);
    var number1 = Math.floor(Math.random() * 11 + 1)
    var number2 = Math.floor(Math.random() * 11 + 1)
    var number3 = Math.floor(Math.random() * 11 + 1)
    var number4 = Math.floor(Math.random() * 11 + 1)

    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses)
    function reset() {
        random = Math.floor(Math.random() * 101 + 19)
        $("#randomNumber").text(random);
        number1 = Math.floor(Math.random() * 11 + 1);
        number2 = Math.floor(Math.random() * 11 + 1);
        number3 = Math.floor(Math.random() * 11 + 1);
        number4 = Math.floor(Math.random() * 11 + 1);
        total = 0;
        $("#finalTotal").text(total);
    }

    function Winner() {
        alert("Winner!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    function Loser() {
        alert("You Lost, Try Again");
        losses++;
        $("#losses").text(losses)
        reset()
    }

    $("#first").on("click", function () {
        total = total + number1;
        $("#finalTotal").text(total);
        if (total == random) {
            Winner();
        }
        else if (total > random) {
            Loser();
        }
    });

    $("#second").on("click", function () {
        total = total + number2;
        $("#finalTotal").text(total);
        if (total == random) {
            Winner();
        }
        else if (total > random) {
            Loser();
        }
    });

    $("#third").on("click", function () {
        total = total + number3;
        $("#finalTotal").text(total);
        if (total == random) {
            Winner();
        }
        else if (total > random) {
            Loser();
        }
    });

    $("#fourth").on("click", function () {
        total = total + number4;
        $("#finalTotal").text(total);
        console.log("New total= " + total)
        if (total == random) {
            Winner();
        }
        else if (total > random) {
            Loser();
        }
    });

});
