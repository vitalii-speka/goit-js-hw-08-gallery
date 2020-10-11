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

  // lightboxImagesRef.src = ``;
  // lightboxImagesRef.alt = ``;

  lightboxImagesRef.removeAttribute('src');
  lightboxImagesRef.removeAttribute('alt');

  
  window.removeEventListener('keydown', onEscKeyPress);
}

function onEscKeyPress(evt) {
  if (evt.code === `Escape`) {
    onCloseModal();
  }
}

let imagesOriginalArr = [];
gallery.forEach((item) => {
  imagesOriginalArr.push(item.original);
});

function onArrowRightKeyPress(e) {
  let index = imagesOriginalArr.indexOf(lightboxImagesRef.src);
  
  if (e.code === `ArrowRight`) {
    if (index < imagesOriginalArr.length - 1) {
      console.log(imagesOriginalArr.length - 1);
      const xxx = imagesOriginalArr[index + 1];
      console.log(xxx);
      console.log(imagesOriginalArr[1 + 1]);
      lightboxImagesRef.setAttribute("src", imagesOriginalArr[index + 1]);
    } else {
      index = -1;
      lightboxImagesRef.setAttribute("src", imagesOriginalArr[index + 1]);
    }
  }

  if (e.code === `ArrowLeft`) {
    if (index === 0) {
      index = imagesOriginalArr.length;
      lightboxImagesRef.setAttribute("src", imagesOriginalArr[index - 1]);
    } else lightboxImagesRef.setAttribute("src", imagesOriginalArr[index - 1]);
  }
}
