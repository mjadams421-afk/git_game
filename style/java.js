//random background color
value=document.getElementById('intro');


function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

value.addEventListener("mouseout", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//Adding a number
add=document.querySelector('figure p');

let i=0;

function number() {
  i += 1;
  add.innerHTML = `The number is now ${i}`;
 for (let i=0; i<=100; i++) {
    console.log(i);
 }}
 
add.addEventListener('dblclick',number);

//house option
house=document.getElementById('option1');

function inside() {
 house.style.fontSize='100px';
 house.innerHTML='You entered the house';
}

 house.addEventListener('click',inside);

//underground celler option
celler=document.getElementById('option2');

 function hidden() {
 celler.style.fontSize='100px';
 celler.innerHTML='You entered the celler';
 }

 celler.addEventListener('click',hidden);

//leave the area option
leave=document.getElementById('option3');

function gone() {
 leave.style.fontSize='100px';
 leave.innerHTML='You left the area';
}

leave.addEventListener('click',gone);

 //house option upstairs
 upstairs=document.getElementById('option1A');

 function up() {
 upstairs.style.fontSize='100px';
 upstairs.innerHTML='You went upstairs';
 }

 upstairs.addEventListener('click',up);

 //house option downstairs
downstaris=document.getElementById('option1B');

function down() {
 downstaris.style.fontSize='100px';
 downstaris.innerHTML='You went downstairs';
}

 downstairs.addEventListener('click',down);