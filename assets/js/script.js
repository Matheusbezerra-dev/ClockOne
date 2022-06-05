window.onload = function createStructure() {
  const divContainer = document.createElement('div'); 
  document.body.appendChild(divContainer); 
  divContainer.setAttribute('id', 'clock')
  createDivChild()
}

function createDivChild() {
  const div = document.getElementById('clock');
  const div1 = document.createElement('div');
  div.appendChild(div1)
  div1.setAttribute('id', 'hour');
  
}