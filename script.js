const password = document.getElementById('password')
const bg = document.getElementById('bg')
const currentFilter = 30
const filterStrength = 2
bg.style.filter = `blur: ${currentFilter}`

password.addEventListener('input', e => {
    filter(e.target.value.length)
})

function filter(length) {
    bg.style.filter = `blur(${currentFilter - (length * filterStrength)}px)`
}
