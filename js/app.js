//*************    VARIABLES    ****************

let btn = document.querySelector('button');
let bugs = document.querySelectorAll('.bug');
let min = document.querySelector('#minutes');
let sec = document.querySelector('#seconds');
let totalSeconds = 0;
let timer;
let score = document.querySelector('#score');
let scoreNum = 0;
let container = document.querySelector('.container');
let remain = container.childElementCount;

Array.from(bugs);


//*************    ANIMACIE     ****************

function animeBugs(){
	bugs.forEach(function(bug){
		bug.style.display = "block";
			anime({
				targets: bug,
				translateX: [
					{ value: anime.random(200, 900), duration: anime.random(1400, 2300), delay: anime.random(1, 300) },
					{ value: 0, duration: anime.random(1400, 2300) }
				  ],
			
				  translateY: [
					{ value: anime.random(50, 330), duration: anime.random(1500, 2500), delay: anime.random(1, 300)  },
					  { value: 0, duration: anime.random(1400, 2300), delay: anime.random(1, 300)  }
					],
				
				easing: 'linear',
				loop: true,
				direction: 'alternate'
			});
			

			bug.addEventListener('click',  function killThem (event){
				event.preventDefault;
			
				//zabitie
				anime({
					targets: bug,
					scale: [
						{ value: 2, duration: 100 }
					],
					easing: 'linear',
						complete: function() {
						bug.remove();
				//zvýšenie score
						scoreNum++;
						score.innerHTML = scoreNum;	
					}
				});	
			});
	})
	}
	
//*****************  START  *******************

btn.addEventListener("click", () =>{
	animeBugs();
	timer = setInterval(gameTimer, 1000);
	
});

//*****************  TIMER  *******************

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
	  return "0" + valString;
	} else {
	  return valString;
	}
  }

function gameTimer (){
	remain = container.childElementCount;
	totalSeconds++;

	sec.innerHTML = pad(totalSeconds % 60);
	min.innerHTML = pad(parseInt(totalSeconds / 60));
			
				//pridanie textu po výhre
				if (remain < 1) {

					let winText1 = document.createElement("p");
					let winText2 = document.createElement("p");
					winText1.textContent = "All the mosquitoes are gone now!" ;
					winText2.textContent = "It takes you " + totalSeconds + "  seconds."; 
					container.appendChild(winText1);
					container.appendChild(winText2);

				//vynulovanie
					score.innerHTML = " ";
					sec.innerHTML = "00";
    				min.innerHTML = "00";
					clearInterval(timer);   
        			
				} 			
}


