// to open model when page load

const myModal = new bootstrap.Modal('#modal');

window.addEventListener('DOMContentLoad', () => {
  myModal.show()
})

// to close modal
document