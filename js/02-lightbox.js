import { galleryItems } from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.gallery'),
};

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc += `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`),
  ``
);
refs.gallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
