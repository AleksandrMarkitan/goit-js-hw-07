import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
  head: document.querySelector('head'),
  body: document.querySelector('body'),
  //   basicLightbox: document.querySelector('basicLightbox'),
};

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc += `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`),
  ``
);

refs.gallery.insertAdjacentHTML('beforeend', markup);
// refs.head.insertAdjacentHTML(
//   'beforeend',
//   `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.css"/>`
// );
// refs.gallery.insertAdjacentHTML(
//   'afterend',
//   `<script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script>`
// );

console.log(refs.gallery);
console.log(refs.head);
console.log(refs.body);

refs.gallery.addEventListener('click', onItemHandler);

function onItemHandler(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    const pictureInModal = basicLightbox.create(`
      <img src = ${e.target.dataset.source}>
  `);
    pictureInModal.show();

    document.addEventListener('keydown', closeModal);
    function closeModal(e) {
      if (e.code === 'Escape') {
        pictureInModal.close();
        document.removeEventListener('keydown', closeModal);
      }
      console.log('code: ', e.code);
    }
  }
}
