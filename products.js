const productsOpenButton = document.querySelector('.products__footer__button');
const hiddenProductsSection = document.querySelector('.products__cards.products__cards_closed');

productsOpenButton.addEventListener('click', function () {
    hiddenProductsSection.classList.toggle('products__cards_open');
    this.innerText = hiddenProductsSection.classList.contains('products__cards_open') ? 'Show Less' : 'Browse All Product';
});