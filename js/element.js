import gallery from './gallery-items.js';

console.log(createGalleryCardsMark(gallery));

function createGalleryCardsMark(gallery) {
  return gallery
    .map(gallery => {
      return `
      <li class="gallery__item">
        <a
            class="gallery__link"
            href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
        >
        <img
        class="gallery__image"
        src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
        data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
        alt="Tulips"
        />
        </a>
      </li>
        `;
    })
    .join('');
}

// const lightboxRef = document.querySelector('.lightbox');

// console.log(lightboxRef);

// console.log(galleries[0]);
// console.log(galleries[0].original);

/*`<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>
`;

*/
