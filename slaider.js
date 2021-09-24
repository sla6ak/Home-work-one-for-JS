const sliders = document.querySelectorAll('.cards')
for(const slider of sliders){
    slider.addEventListener('click', () => {
        clearActive()
        slider.classList.add('active')
    })
}
function clearActive() {
    for(const slider of sliders){
        slider.classList.remove('active')
    }
}