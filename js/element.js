import gallery from './gallery-items.js';

const galleryConteiner = document.querySelector('.js-gallery');
const gallerysMarkup = createGalleryCardsMark(gallery);
const btnModalClose = document.querySelector(`[data-action='close-lightbox']`);

btnModalClose.addEventListener('click', onCloseModal);

galleryConteiner.insertAdjacentHTML('beforeend', gallerysMarkup);

galleryConteiner.addEventListener('click', onGalleryClick);

function createGalleryCardsMark(gallery) {
  return gallery
    .map(({ original, preview, description }) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    })
    .join('');
}

function onGalleryClick(evt) {
  evt.preventDefault();

  const isGalleryImageEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  addClassList();

  // setImageGalleryModalWindow();
  const lightboxImagesRef = document.querySelector('.lightbox__image');
  lightboxImagesRef.src = evt.target.dataset.source;
  lightboxImagesRef.alt = evt.target.alt;
}

function addClassList() {
  document.querySelector('.lightbox').classList.add('is-open');
}

function onCloseModal() {
  removeClassList();
}

function removeClassList() {
  document.querySelector('.lightbox').classList.remove('is-open');
}

// function setImageGalleryModalWindow() {
//   const lightboxImagesRef = document.querySelector('.lightbox__image');
//   lightboxImagesRef.src = evt.target.dataset.source;
//   lightboxImagesRef.alt = evt.target.alt;
// }
