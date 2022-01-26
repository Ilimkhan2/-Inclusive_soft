const progText = document.querySelectorAll(".progrText");
const progress = document.querySelectorAll(".progress");
const progContainer = document.querySelector(".contaier");
let bol = false;

window.addEventListener("scroll", function(){
    if (pageYOffset > progContainer.offsetTop - 600 && bol === false){
        for (let i = 0; i < progText.length; i++){
            progText[i].innerText = 0;
            count = 0;

            progress[i].style.bottom = "100%";

            progress[i].style.bottom = progText[i].dataset.count - 100 + "%";

            function updateCount(){
                target = parseInt(progText[i].dataset.count);
                if (count < target){
                    count++;
                    progText[i].innerText = count;
                    setTimeout(updateCount, 50);
                }else{
                    progText[i].innerText = target + "%";
                }
            }
            updateCount();
            bol = true;
        }
    }
});
