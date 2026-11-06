let audio = new Audio();

function lion(){
    document.body.style.background="yellow";
    document.getElementById('icon').innerHTML = '<img src="lion.jpeg">';
    document.getElementById('message').innerHTML="Lion is Here!!!"
    audio.pause();
    audio = new Audio("lion.wav");
    audio.play();
}

function elephant(){
    document.body.style.background="lightblue";
    document.getElementById('icon').innerHTML = '<img src="elephant.jpeg">';
    document.getElementById('message').innerHTML="Elephant is Here!!!"
    audio.pause();
    audio = new Audio("elephant.wav");
    audio.play();
}

function monkey(){
    document.body.style.background="orange";
    document.getElementById('icon').innerHTML = '<img src="monkey.jpeg">';
    document.getElementById('message').innerHTML="Monkey is Here!!!"
    audio.pause();
    audio = new Audio("monkey.wav");
    audio.play();
}

function dog(){
    document.body.style.background="darkgrey";
    document.getElementById('icon').innerHTML = '<img src="dog.jpeg">';
    document.getElementById('message').innerHTML="Dog is Here..."
    audio.pause();
    audio = new Audio("dog.wav");
    audio.play();
}

function stopSound(){
    audio.pause();
    
}