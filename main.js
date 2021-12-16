// alert("workrkowrkwo")
const button = document.querySelector('#purchase-btn')
const chairContainer = document.querySelector('#yard-box')

const addChair = () => {
    let newChair = document.createElement('div')
    newChair.classList.add('newImage')
    chairContainer.appendChild(newChair)
}

button.addEventListener('click', addChair)