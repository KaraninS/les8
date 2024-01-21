// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const ulList = document.querySelector(".gallery");

// console.log(galleryItems);

const murkup = galleryItems.map(({original,description,preview}) => 
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
).join("");
// console.log(murkup)
ulList.insertAdjacentHTML("beforeend", murkup)
ulList.addEventListener("click", onClick)
function onClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) return; 
   const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
    
};
