var currentLight = -1;
var current_direction = "Right";
var lightCount = 6;
var intervalId = null;

const updateLight = () => {
    $("div").css("background", "white");

    if (current_direction === "Right"){
        currentLight ++;
        $("div").eq(currentLight).css("background", "red");
        if (currentLight - 1>=0){

            $("div").eq(currentLight -1).css("background", "#E97451");
        }
        if (currentLight === lightCount -1 ){
            current_direction = "Left";
        }
    }else {
        currentLight--;
        $("div").eq(currentLight).css("background", "red");
        $("div").eq(currentLight +1).css("background", "#E97451");
        if (currentLight === 0){
            current_direction = "Right";
        }
    }

}
$("#start").on('click', () => {
    if (intervalId === null){
        intervalId = setInterval(updateLight, 100);
        $("#audio")[0].play();
    }

})

$("#stop").on("click", () => {
    clearInterval(intervalId);
    intervalId= null;
    $("#audio")[0].pause();
})