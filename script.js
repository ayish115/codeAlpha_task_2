
  const display = document.getElementById('display');
  let value = '';

  function update(){
    display.textContent = value || '0';
  }

  function calculate(){
    try{ value = String(eval(value.replace(/÷/g,'/').replace(/×/g,'*'))); }
    catch{ value = 'Error'; }
    update();
  }

  function handle(key){
    if(key === 'C'){ value=''; update(); return; }
    if(key === 'DEL'){ value = value.slice(0,-1); update(); return; }
    if(key === '='){ calculate(); return; }
    value += key; update();
  }

  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => handle(btn.dataset.key));
  });

  // BONUS: Keyboard support
  document.addEventListener('keydown', e =>{
    const k = e.key;
    if(/^[0-9]$/.test(k)) handle(k);
    if(['+','-','*','/','.','%'].includes(k)) handle(k);
    if(k === 'Enter') handle('=');
    if(k === 'Backspace') handle('DEL');
    if(k.toLowerCase() === 'c') handle('C');
  });

