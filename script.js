const panels = document.querySelectorAll('.panel')


panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
        removePreviousActive()
        panel.classList.add('active');
    })
})

const removePreviousActive = (panel) => {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
