//random background color
value=document.getElementById('intro');


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

value.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//house option
house=document.getElementById('option1');

function switchA() {
 house.style.fontSize='100px';
 house.innerHTML='You entered the house';
}

 house.addEventListener('click',switchA);

 //house option upstairs
 upstairs=document.getElementById('option1A');

 function switch1A() {
 upstairs.style.fontSize='100px';
 upstairs.innerHTML='You went upstairs';
 }

 upstairs.addEventListener('click',switch1A);

 //house option downstairs
downstaris=document.getElementById('option1B');

function switch1B() {
 downstaris.style.fontSize='100px';
 downstaris.innerHTML='You went downstairs';
}

 downstairs.addEventListener('click',switch1B);

//underground celler option
celler=document.getElementById('option2');

 function switchB() {
 celler.style.fontSize='100px';
 celler.innerHTML='You entered the celler';
 }

 celler.addEventListener('click',switchB);

//leave the area option
leave=document.getElementById('option3');

function switchC() {
 leave.style.fontSize='100px';
 leave.innerHTML='You left the area';
}

leave.addEventListener('click',switchC);