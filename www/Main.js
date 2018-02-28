/**
 * Created by JohnnyWaity on 2/27/18.
 */

var accordianButtons = document.getElementsByClassName("selectionBox");
//alert("Hello")
var allSliders = document.getElementsByClassName("slider");
var selectedSliders = [];

var i;
//alert(accordianButtons.length);
for(i = 0; i < accordianButtons.length; i++){
    accordianButtons[i].addEventListener("click", function () {
        //this.classList.toggle("active");
        var par = this.parentElement;
        var panel = par.nextElementSibling;
        var name = "";
        name = this.nextElementSibling.innerHTML;

        if(panel.style.maxHeight){
            panel.style.maxHeight = null;

            var newArray = []

            for(var k = 0; k < selectedSliders.length; k++){
                if(selectedSliders[k] === name){

                }
                else{
                    newArray.push(selectedSliders[k])
                }
            }
            selectedSliders = newArray;
            //alert(selectedSliders)
        }
        else {
            var height = 5000;
            height = height*panel.childElementCount;
            panel.style.maxHeight = height+"px";

            selectedSliders.push(name)
            //alert(selectedSliders)
        }

    });
}

function calculate() {
    var score = 0;
    for(var i = 0; i < selectedSliders.length; i++){
        score += parseInt(document.getElementById(selectedSliders[i]).value);

    }
    document.getElementById("result").innerHTML = "Your Severity: " + score;
}
