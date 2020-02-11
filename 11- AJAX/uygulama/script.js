
if (navigator.geolocation) {
    alert("it is supported");


    document.querySelector("#button").addEventListener("click", () => {

        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
            console.log(position.coords.latitude);
            console.log(position.coords.latitude + "," + position.coords.longitude);
        });

    });

} else {
    console.log("geo location is not supported");
}

