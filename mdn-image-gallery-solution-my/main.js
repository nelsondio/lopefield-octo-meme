const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 0; i < 5; i++) {
   const newImage = document.createElement('img');
   newImage.setAttribute('src', `images/pic${i+1}.jpg`);
   thumbBar.appendChild(newImage);
//   newImage.addEventListener('click', function(){alert()});
   //console.log(newImage.src);
   //newImage.addEventListener('click', displayReplace);
}
let myPicsArray = document.querySelectorAll('img');
myPicsArray.forEach(   (item, index) => {
   console.log(index);
   item.addEventListener('click', displayReplace);
	
   function displayReplace() {
      //console.log(i);
      //alert(i);
   
      console.log('clicked!!')
      console.log(index);
      console.log()
      displayedImage.setAttribute('src', `images/pic${index}.jpg`);
   } 
});

console.log(btn.getAttribute('class') );

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', changeTransparency)

function changeTransparency() {
	
if (btn.getAttribute('class') === 'dark'){
	console.log("yes");
	btn.setAttribute('class', 'light')
	btn.textContent = 'lighten';
	overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
	
}
else{	
	console.log("light");
	btn.setAttribute('class', 'dark')
	btn.textContent = 'darken';
	overlay.style.backgroundColor = 'rgba(0,0,0,0)';
	
}
}
