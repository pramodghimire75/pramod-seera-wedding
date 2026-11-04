(function(){
  const target = new Date('2027-02-16T00:00:00+05:45').getTime();
  const ids = ['days','hours','minutes','seconds'];
  function updateCountdown(){
    let diff = target - Date.now();
    if(diff <= 0){ ids.forEach(id => document.getElementById(id).textContent = '0'); return; }
    const values = [Math.floor(diff/86400000),Math.floor(diff%86400000/3600000),Math.floor(diff%3600000/60000),Math.floor(diff%60000/1000)];
    ids.forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,'0'));
  }
  updateCountdown(); setInterval(updateCountdown,1000);
  let language='en';
  const toggle=document.getElementById('languageToggle');
  toggle.addEventListener('click',()=>{
    language=language==='en'?'ne':'en';
    document.documentElement.lang=language;
    document.querySelectorAll('[data-en][data-ne]').forEach(el=>{el.textContent=el.dataset[language];});
    toggle.textContent=language==='en'?'नेपाली':'English';
  });
})();
