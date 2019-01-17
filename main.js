var x = 16;

if(x > 12) { 
    console.log(x);
    console.log('groovin with if');
} else {
    console.log('sorry, x is too small')
}

//1. Initialize
//2. Condition
//3. Post Loop Action
for(var i = 0; i < x; i++) {
    if(i % 2 === 0) {
        console.log(i, " rabid bunnies charge you");
    }
}

function sayHello() {
    console.log('Well, hello there marty')
    console.log('It sure seems like lots of rabbits are after you...')
}
if(x % 2 === 0) {
    sayHello();
}