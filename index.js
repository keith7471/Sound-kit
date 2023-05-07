// prompt("hello");

for(i=0; i<document.querySelectorAll(".drum").length; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", onbuttonclicked);

}

function onbuttonclicked()
{  
    this.style.color="orange"; 
    var letter= this.innerHTML;
    sound(letter);
 }

document.addEventListener("keypress", function(event)
{
    //var keyp=event.key;
    sound(event.key);
});

    function sound(keypp)
    {
    switch(keypp)
    {
        case "F":
        var music= new Audio("sounds/danza_kuduro.mp3");
        music.play();
        break;

        case "a":
            var top_2 = new Audio("sounds/tom-2.mp3");
            top_2.play();
            break;

        case "s":
            var top_3 = new Audio("sounds/tom-3.mp3");
            top_3.play();
            break;

        case "d":
            var top_4 = new Audio("sounds/tom-4.mp3")
            top_4.play();
            break;

        case "j":
            var top_5 = new Audio("sounds/crash.mp3")
            top_5.play();
            break;

        case "k":
            var top_6 = new Audio("sounds/kick-bass.mp3")
            top_6.play();
            break;

        case "l":
            var top_7= new Audio("sounds/snare.mp3")
            top_7.play();
            break;
    }      
    }
    

