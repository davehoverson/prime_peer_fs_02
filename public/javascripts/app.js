/**
 * Created by davidhoverson on 10/1/15.
 */
$(function(){
    var $results = $("#results");
    var mainArray = [];
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/cuties/',
        complete: function(){
            console.log('AJAX complete');
        },
        success: function(data){
            var element = data;
            data.forEach(function(element){
                mainArray.push(element.link);
                shuffle(mainArray);
            });
            for (var i=0; i<5; i++){
                $results.append("<div id=image" + i + "><img src=" + mainArray[i] + "><br><button class=replace" + i + ">Click to Replace</button></div>");
            }
        },
        error: function(request, errorType, errorMessage){
            alert(errorType + errorMessage);
        }
    });
    $(".newDeck").on('click', function(){
        $("#results").empty();
        shuffle(mainArray);
        for (var i=0; i<5; i++){
            $results.append("<div id=image" + i + "><img src=" + mainArray[i] + "><br><button class=replace" + i + ">Click to Replace</button></div>");
        }
    });
    $(".")
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    console.log(mainArray);
});