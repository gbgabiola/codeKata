// Create a button
const btn = document.getElementById('btn');

// What to do when the button is clicked
btn.addEventListener('click', function () {

  // Increment number on button's label by 1
  // buttonCounter.innerHTML = +(buttonCounter.innerHTML) + 1;
  let btnValue = this.innerHTML;
  this.innerHTML = parseInt(btnValue) + 1;
});


/*
const btn = document.querySelector("#btn");
// After click the button then increment the button value by 1
btn.addEventListener('click', () => {
  btnValue = Number(btn.innerText) + 1;
  btn.innerText = btnValue;
});
*/


/*
let clicks = 0;
let btn = document.createElement('button');
btn.id = 'btn';
btn.innerHTML = clicks;
btn.classList.add("btn");
btn.onclick = function () {
  btn.innerHTML = ++clicks;
};
document.body.appendChild(btn);
*/