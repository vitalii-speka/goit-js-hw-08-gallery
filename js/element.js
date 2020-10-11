import gallery from './gallery-items.js';

const galleryConteiner = document.querySelector('.js-gallery');
const gallerysMarkup = createGalleryCardsMark(gallery);
const btnModalClose = document.querySelector(`[data-action='close-lightbox']`);
const lightboxImagesRef = document.querySelector('.lightbox__image');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay');

btnModalClose.addEventListener('click', onCloseModal);

galleryConteiner.insertAdjacentHTML('beforeend', gallerysMarkup);

galleryConteiner.addEventListener('click', onGalleryOpenClick);

lightboxOverlayRef.addEventListener('click', onCloseModal);

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

function onGalleryOpenClick(evt) {
  evt.preventDefault();

  window.addEventListener('keydown', onEscKeyPress);
  window.addEventListener('keydown', onArrowRightKeyPress);
  // window.addEventListener('keydown', onArrowLeftKeyPress);

  const isGalleryImageEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryImageEl) {
    return;
  }

  addClassList();

  lightboxImagesRef.src = evt.target.dataset.source;
  lightboxImagesRef.alt = evt.target.alt;
}

function addClassList() {
  document.querySelector('.lightbox').classList.add('is-open');
}

function removeClassList() {
  document.querySelector('.lightbox').classList.remove('is-open');
}

function onCloseModal() {
  removeClassList();

  lightboxImagesRef.src = ``;
  lightboxImagesRef.alt = ``;
  
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(evt) {
  if (evt.code === `Escape`) {
    onCloseModal();
  }
}
function onArrowRightKeyPress(evt) {
  if (evt.code === `ArrowRight`) {
    const i = gallery;
    console.log(i);
    console.log(lightboxImagesRef.src)
    // lightboxImagesRef.src = gallery.original;
    // gallery.description = lightboxImagesRef.alt;
  }
}

// clickLightbox: function () {
//     this.nextImage = !!this.currentImage.parentElement.parentElement.nextElementSibling ? this.currentImage.parentElement.parentElement.nextElementSibling.querySelector("img") : this.initialImage;
//     this.modalImageRef.src = this.nextImage.dataset.source;
//     this.currentImage = this.nextImage;
//   },

/* не готовы
function onArrowRightKeyPress(evt) {
  if (evt.code === `ArrowRight`) {
    console.log(evt.original);
    // lightboxImagesRef.src = gallery.original;
    // gallery.description = lightboxImagesRef.alt;
  }
}


function onArrowLeftKeyPress(evt) {
  if (evt.code === `ArrowLeft`) {
    console.log(evt.code);
  }
}
*/
