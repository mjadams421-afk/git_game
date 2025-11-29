//house option
house=document.getElementById('option1');

function switchA() {
 house.style.fontSize='100px';
 house.innerHTML='You entered the house';
}

 house.addEventListener('click',switchA);

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