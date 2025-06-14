const buyButton = document.getElementsByClassName("buy-button");

buyButton.item(0).addEventListener('click', (e) => {
    alert("У тебя столько нет")
})

Array.from(buyButton).forEach(button => {
    button.addEventListener('click', (e) => {
        alert('Мы передумали')
    })
    }
)