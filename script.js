window.onload = function () {

    setTimeout(function () {

        document.getElementById("loading").style.display = "none";
        document.getElementById("envelope").style.display = "flex";

    }, 3000);

    document.querySelector(".mail").onclick = function () {

        document.getElementById("envelope").style.display = "none";

        document.getElementById("photo").style.display = "flex";

    };

};

const message = `Hi babyyyy, cheeky, kyraa

I made this for you because I know you deserve this, and I want to show you how important you are to me.
It's been 2 months since we started talking, and I still can't believe how far we've come.
We met unexpectedly on Litmatch, and I never thought that I would get to know you this much, become close with you, and have someone like you in my life.
At first, I thought our conversations would only be temporary. But as we spent more time talking, watching movies, and playing online games together, my heart slowly got attached to you until I realized that I was falling in love with you.
I want you to know that I'm serious about you. I want you to stay by my side, and I hope you'll be someone I can share my life with.
Thank you for choosing to understand me. Even when we don't always agree, you still stay by my side. Thank you for comforting me whenever I have problems and for not giving up on me.
I hope you know how much I appreciate you, Kyra.
Alam mo, nag-sink in sa isip ko yung sinabi mo kagabi. You're right. I don't want to waste this opportunity, and I'm scared of losing you.
That's why I want to be honest with you and show you how much you mean to me.`;

let index = 0;

function typeMessage(){

    if(index < message.length){

      document.getElementById("typing").innerHTML += message.charAt(index);

if(message.charAt(index) === "\n"){

    setTimeout(typeMessage,1500);

}else{

    setTimeout(typeMessage,80);

}

index++;

    }else{

        setTimeout(()=>{

     document.getElementById("messagePage").style.display="none";

     document.getElementById("soPage").style.display="flex";

            typeSo();

        },3000);

    }

}

     document.getElementById("continueBtn").onclick=function(){
        const music = document.getElementById("bgMusic");

music.volume = 1.0;

music.play();

    document.getElementById("photo").style.display="none";

    document.getElementById("messagePage").style.display="flex";

    typeMessage();

}

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}
const soText = "So................";
let soIndex = 0;

function typeSo(){

    if(soIndex < soText.length){

        document.getElementById("soTyping").innerHTML += soText.charAt(soIndex);

        soIndex++;

        setTimeout(typeSo,180);

    }else{

        setTimeout(()=>{

            document.getElementById("soPage").style.display="none";

            document.getElementById("proposalPage").style.display="flex";

            typeProposal();

        },2000);

    }

}

function heartExplosion(){

    for(let i=0;i<60;i++){

        setTimeout(createHeart,i*40);

    }

}

const proposalMessage = "May I court you, baby?";
let proposalIndex = 0;

function typeProposal(){

    if(proposalIndex < proposalMessage.length){

        document.getElementById("proposalText").innerHTML += proposalMessage.charAt(proposalIndex);

        proposalIndex++;

        setTimeout(typeProposal,120);

    }else{

    setTimeout(()=>{

        document.getElementById("finalMessage").style.opacity = 1;

    },3000);
   }

}

function createLily(){

    const lily = document.createElement("div");

    lily.innerHTML = "🌸";

    lily.className = "lily";

    lily.style.left = Math.random()*100 + "vw";

    lily.style.fontSize = (30 + Math.random()*30) + "px";

    document.body.appendChild(lily);

    setTimeout(()=>{
        lily.remove();
    },8000);

}
function createSparkle(){

    const sparkle = document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.className="sparkle";

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    document.body.appendChild(sparkle);


    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,500);