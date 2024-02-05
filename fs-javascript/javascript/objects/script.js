function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    };
}
const bookButton = document.querySelector('.book-button');
bookButton.addEventListener('click', () => {
    const title = document.querySelector('.input-title').value;
    const author = document.querySelector('.input-author').value;
    const pages = document.querySelector('.input-pages').value;
    const read = document.querySelector('.input-read').checked ? 'Yes' : 'No';
    const newBook = new Book(title, author, pages, read);
    const cards = document.querySelector('.cards');
    const card = document.createElement('div');
    card.classList.add('card-' + cards.childElementCount);
    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Title: ' + title;
    card.appendChild(cardTitle);
    const cardAuthor = document.createElement('div');
    cardAuthor.classList.add('card-author');
    cardAuthor.textContent = 'Author: ' + author;
    card.appendChild(cardAuthor);
    const cardPages = document.createElement('div');
    cardPages.classList.add('card-pages');
    cardPages.textContent = 'Pages: ' + pages;
    card.appendChild(cardPages);
    const cardRead = document.createElement('div');
    cardRead.classList.add('card-read');
    cardRead.textContent = 'Read?: ' + read;
    card.appendChild(cardRead);
    const cardRemove = document.createElement('button');
    cardRemove.classList.add('card-remove');
    cardRemove.textContent = 'Remove';
    cardRemove.addEventListener('click', () => {
        cards.removeChild(card);
    });
    card.appendChild(cardRemove);
    cards.appendChild(card);
});
