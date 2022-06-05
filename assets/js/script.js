window.onload = function createStructure() {
  const divContainer = document.createElement('div'); 
  document.body.appendChild(divContainer); 
  divContainer.setAttribute('id', 'clock')
  createDivChild()
}

function createDivChild() {
  const div = document.getElementById('clock');
  const div1 = document.createElement('div');
  div.appendChild(div1);
  div1.setAttribute('id', 'hour');
  const div2 = document.createElement('div');
  div.appendChild(div2);
  div2.setAttribute('id', 'minutes');
  const div3 = document.createElement('div')
  div.appendChild(div3);
  div3.setAttribute('id', 'second');  
  numbersClock()
}

function numbersClock() {
  const divcapture = document.getElementById('clock');
  for (let i = 1; i <= 12; i += 1) {   
    const divs = document.createElement('div')
    divs.className = 'number';
    divs.classList.add([i])
    divs.innerText = [i]       
    divcapture.appendChild(divs)
  }
}