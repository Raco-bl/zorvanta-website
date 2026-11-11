document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-btn'), links=document.querySelector('.navlinks');
 if(menu&&links) menu.addEventListener('click',()=>{links.classList.toggle('open');menu.setAttribute('aria-expanded',links.classList.contains('open')?'true':'false')});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('.notice');if(note){note.style.display='block';note.textContent='Thanks! This demo form is ready for a real form service or backend connection.'}form.reset()}));
 document.querySelectorAll('[data-generator]').forEach(form=>form.addEventListener('submit',e=>{e.preventDefault();const type=form.querySelector('[name="type"]')?.value||'social post';const topic=form.querySelector('[name="topic"]')?.value||'your business';const audience=form.querySelector('[name="audience"]')?.value||'your audience';const output=document.querySelector('#generated-output');if(output)output.textContent=`${type.toUpperCase()}\\n\\nDiscover ${topic} with a smarter approach. Designed for ${audience}, our solution helps you move from ideas to action.\\n\\nReady to get started? Let's make your next campaign count.\\n\\n#Marketing #Growth #ZORVANTA`; }));
 const theme=localStorage.getItem('zorvanta-theme');if(theme==='light')document.body.classList.add('light-mode');
 document.querySelectorAll('[data-theme]').forEach(btn=>btn.addEventListener('click',()=>{const v=btn.dataset.theme;localStorage.setItem('zorvanta-theme',v);document.body.classList.toggle('light-mode',v==='light')}));
});
