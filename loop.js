// Сондгой тоо
let num = 1;
while (num <= 100){
  console.log(num)
 num=num+2
}

for (let i = 1; i <= 5; i++){
  if(i % 2 != 0) console.log(i);
}

for (let i = 5; i > 1; i--) {
  if(i % 2 != 0) console.log(i);
}

// Сондгой тоонуудын нийлбэр
let i =1;
let sum = 0;
while (i<10){
  sum=sum+i;
  i=i+2;
}
console.log(sum)



// Exercise without math

let checkpoint = 0
while (checkpoint <= 100) {
  if (checkpoint === 50) {
    console.log("Half way there")
  } else if (checkpoint === 100) {
    console.log("You made it")
  } else {
    console.log("Checkpoint! "+ checkpoint)
  }
  checkpoint=checkpoint+10
}
console.log("All, done!")





