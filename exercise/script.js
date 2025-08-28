let noogTimeClicked = localStorage.getItem('noogTimeClicked' || 0);

function buttonpressed() {
  noogTimeClicked++;
  localStorage.setItem('noogTimeClicked', noogTimeClicked);
  updateButton();
}

function updateButton(){
  let button = document.querySelector('#my-button');

  if (noogTimeClicked % 2 == 0) {
    button.classList.remove('odd');
    button.classList.add('even');
  } else {
    button.classList.remove('even');
    button.classList.add('odd');
  }
  button.innerText = noogTimeClicked;
}
updateButton();






function doGreeting(personName = 'dear') {
  let date = new Date();
  let hours = date.getHours();
  let heading = document.querySelector('#greeting');
  if (hours > 5 && hours < 12) {
    heading.innerText = `Good Moring ${personName}`;
  } else if (hours > 12 && hours < 18) {
    heading.innerText = `Good Aftone ${personName}`;
  } else {
    heading.innerText = `Good Night ${personName}`
  }
}

doGreeting();