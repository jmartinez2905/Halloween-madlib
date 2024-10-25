let place1 = prompt ("Enter a place");

let adjective1 = prompt ("Enter an adjective");

let pluralnoun1 = prompt ("Enter a plural noun");

let adjective2 = prompt ("Enter an adjective");

let noun1 = prompt ("Enter a noun");

let adjective3 = prompt ("Enter an adjective");

let noun2 = prompt ("Enter a noun");

let animal1 = prompt ("Enter an animal");

let adjective4 = prompt ("Enter an adjective");

let place2 = prompt ("Enter a place");

let adjective5 = prompt ("Enter an adjective");

let noun3 = prompt ("Enter a noun");

let adjective6 = prompt ("Enter an adjective");

let story = 
`Last Halloween, I decided to go to a haunted ${place1} with my friends. 
We dressed up as ${adjective1} ${pluralnoun1} and brought a ${adjective2} ${noun1} to scare the ghosts away.
 As soon as we arrived, we heard a ${adjective3} noise coming from behind a ${noun2}.
It turned out to be a ${animal1} that was just as ${adjective4} as we were!
 We all screamed and ran to the ${place2} where we could find safety.
 Suddenly, a ${adjective5} ${noun3} appeared out of nowhere and started dancing.
 We couldn’t believe our eyes! 
 We joined in and danced until we saw the moon rise.
 It was the most ${adjective6} Halloween ever!`;

 let madLibOutputDiv = document.getElementById("madLibOutput");

madLibOutputDiv.innerHTML = `<p>${story}</p>`; 