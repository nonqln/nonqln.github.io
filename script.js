console.log('мяу', 42)





function openModal(modalID) {
    const modal_window = document.getElementById(modalID)
    if (modal_window) {
        modal_window.style.display = 'flex'
    }
}

function closeModal(modalID) {
    const modal_window = document.getElementById(modalID)
    if (modal_window) {
        modal_window.style.display = 'none'
    }
}
