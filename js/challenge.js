document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    let likedNumbers = {};

    //timer
    let timerId = setInterval(function() {
	let counter = document.querySelector('#counter');
	counter.innerText = parseInt(counter.innerText) + 1;
	counter++;
    }, 1000);

    //pause timer and disable all buttons 
    document.querySelector('#pause').addEventListener("click", function(event){
	let pauseButton = document.querySelector('#pause');
	let plusButton = document.querySelector('#plus');
	let minusButton = document.querySelector('#minus');
	let heartButton = document.querySelector('#heart');
	let submitCommentButton = document.querySelector('#submit');
	if(pauseButton.innerText === 'pause'){
	    pauseButton.innerText = 'resume';
	    plusButton.disabled = true;
	    minusButton.disabled = true;
	    heartButton.disabled = true;
	    submitCommentButton.disabled = true;
	    clearInterval(timerId);
	}
	else{
	    pauseButton.innerText = 'pause';
	    plusButton.disabled = false;
	    minusButton.disabled = false;
	    heartButton.disabled = false;
	    submitCommentButton.disabled = false;
	    timerId = setInterval(function() {
		let counter = document.querySelector('#counter');
		counter.innerText = parseInt(counter.innerText) + 1;
		counter++;
	    }, 1000);
	};
    });
    
    //add 1 second to timer
    document.querySelector('#plus').addEventListener("click", function(event){
	let counter = document.querySelector('#counter');
	counter.innerText = parseInt(counter.innerText) + 1;
    });

    //subtract 1 second from timer
    document.querySelector('#minus').addEventListener("click", function(event){
	let counter = document.querySelector('#counter');
	counter.innerText = parseInt(counter.innerText) - 1;
    });

    //like the number on the counter
    document.querySelector('#heart').addEventListener("click", function(event){
	const counterValue = document.querySelector('#counter').innerText;
	let ul = document.querySelector('.likes');
	if(document.querySelector(`#like${counterValue}`)){
	    let like = document.querySelector(`#like${counterValue}`)
	    let clicked = parseInt(likedNumbers.counterValue.toString()) + 1;
	    likedNumbers.counterValue = clicked;
	    like.innerText = `${counterValue} has been liked ${likedNumbers.counterValue} times`;
	}
	else{
	    let like = document.createElement('li');
	    like.innerText = `${counterValue} has been liked 1 time`;
	    like.id = `like${counterValue}`
	    ul.appendChild(like);
	    likedNumbers.counterValue = 1;
	};
	counter++;
    });

    //submit a comment
    document.querySelector('#submit').addEventListener("click", function(event){
	let comment = document.querySelector('#comment-input').value;
	let commentDiv = document.querySelector('#list');
	let newComment = document.createElement('p');
	newComment.innerHTML = comment;
	commentDiv.appendChild(newComment);
	event.preventDefault();
    });
});
