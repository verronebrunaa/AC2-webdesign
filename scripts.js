document.getElementById('add-card').addEventListener('click', function () {
    const title = document.getElementById('new-card-title').value;
    const images = [
        "https://picsum.photos/200",
        "https://picsum.photos/300",
        "https://picsum.photos/400",
        "https://picsum.photos/500"
    ];

    if (title) {
        const cardContainer = document.querySelector('.cards');
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.style.width = '18rem';
        let currentIndex = cardContainer.children.length % images.length;
        newCard.innerHTML = `
            <img src="${images[currentIndex]}" class="card-img-top" alt="random with picsum">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <a class="btn btn-primary">Apagar</a>
            </div>
        `;
        cardContainer.appendChild(newCard);
    }
});

document.querySelectorAll('.delete-card').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.card').remove();
    });
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-card')) {
        event.target.closest('.card').remove();
    }
});

document.getElementById('delete-all').addEventListener('click', function () {
    const cards = document.querySelectorAll('.cards .card');
    cards.forEach(card => card.remove());
});
