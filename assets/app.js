let range = document.querySelector(".my-range");
let output = document.getElementById("demo");
output.innerHTML = range.value;

range.addEventListener("input", refreshPrices);

function refreshPrices(){
    output.innerHTML = range.value;
      // Free card 
    if (range.value >= 0 && range.value <= 33) {
        $(".price-card").removeClass("active-card");
        $(".free-card").addClass("active-card");
    }

    // Standard card 
    else if  (range.value > 33 && range.value < 65) {
        $(".price-card").removeClass("active-card");
        $(".standard-card").addClass("active-card");
    }

    // Premium card 
    else{
        $(".price-card").removeClass("active-card");
        $(".premium-card").addClass("active-card");
    }
}
