let secret = Math.trunc(Math.random()*20) + 1;
document.querySelector("#check p").addEventListener(
    "click",function(){
        let highScore = Number(document.querySelector("#high span").textContent);
        let current = Number(document.querySelector("#current span").textContent);
        if(current){
            let guessed  = document.querySelector("input#guess").value;
            if(!guessed){
                document.querySelector("#msg").textContent="No Number";
            }
            else if(secret == guessed){
                document.querySelector("#msg").textContent="You Won the Game!";
                document.querySelector("#body").style.backgroundColor = "rgb(99, 149, 25)"
                if(current > highScore){
                    document.querySelector("#high span").textContent = current;
                }
            }
            else if(secret > guessed){
                document.querySelector("#msg").textContent="Smaller Number!";
                current--;
                document.querySelector("#current span").textContent = current;
                if(current==0){
                    document.querySelector("#msg").textContent="You Lost the Game!";
                    document.querySelector("#body").style.backgroundColor = "rgb(165, 61, 45)"
                }
            }
            else{
                document.querySelector("#msg").textContent="Bigger Number!";
                current--;
                document.querySelector("#current span").textContent = current;
                if(current==0){
                    document.querySelector("#msg").textContent="You Lost the Game!";
                    document.querySelector("#body").style.backgroundColor = "rgb(165, 61, 45)"
                }
            }
        }
    }
);

document.querySelector("#again").addEventListener(
"click",function(){
    document.querySelector("#msg").textContent="Start Guessing ...";
    document.querySelector("#current span").textContent = 20;
    document.querySelector("#body").style.backgroundColor = "black";
    secret = Math.trunc(Math.random()*20) + 1;
}
);