window.onload = function createStructure() {
  const divContainer = document.createElement('div');
  document.body.appendChild(divContainer);
  divContainer.setAttribute('id', 'clock')
  createDivChild()
}

function createDivChild() {
  const div = document.getElementById('clock');
  for (let index = 0; index < 3; index += 1) {
    const createDiv = document.createElement('div')
    div.appendChild(createDiv);
    createDiv.className = 'time';
  }
  const div1 = document.getElementsByClassName('time')[0];
  div1.setAttribute('id', 'hour')
  const div2 = document.getElementsByClassName('time')[1];
  div2.setAttribute('id', 'minutes')
  const div3 = document.getElementsByClassName('time')[2];
  div3.setAttribute('id', 'seconds')
  numbersClock()
}

function numbersClock() {
  const divcapture = document.getElementById('clock');
  for (let i = 1; i <= 12; i += 1) {
    const divs = document.createElement('div')
    divs.className = 'number';
    divs.classList.add('n' + [i])    
    divcapture.appendChild(divs)
    const span = document.createElement('span')
    span.innerText = [i]
    divs.appendChild(span)
  }
  setDate()
}

function setDate() {
  setInterval(setDate, 1000)
  const hour = document.getElementById('hour');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds')
  const currentDate = new Date();
  const sec = currentDate.getSeconds() / 60;
  const min = (sec + currentDate.getMinutes()) / 60;
  const hours = (min + currentDate.getHours()) / 12;
  setRotation(seconds, sec);
  setRotation(minutes, min);
  setRotation(hour, hours);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

