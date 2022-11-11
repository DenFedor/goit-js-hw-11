import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const API_KEY = '31235153-11b91783de2de8bcbb11dc69c';
const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('[name="searchQuery"]'),
  gallery: document.querySelector('#gallery'),
  submitBtn: document.querySelector('#submitBtn'),
  loadBtn: document.querySelector('#loadBtn'),
};
const paramsObj = {
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};
const searchParams = new URLSearchParams(paramsObj);
let searchString = searchParams.toString();
console.log(searchParams.toString());

async function fetchImages(search) {
  const galleryImages = await fetch(`https://pixabay.com/api/?${search}`);
  return galleryImages;
}

fetchImages(paramsObj)
  .then(images => console.log(images.json()))
  .catch(error => console.error(error));

refs.form.addEventListener('input', e => {
  paramsObj.q = e.target.value;
  console.log(userInput);
});
refs.form('submit', {});
// https://pixabay.com/api/  GET API
// URL =
//   'https://pixabay.com/api/?key=' +
//   API_KEY +
//   '&q=' +
//   encodeURIComponent('red roses');

// key - твій унікальний ключ доступу до API.
// q - термін для пошуку. Те, що буде вводити користувач.
// image_type - тип зображення. На потрібні тільки фотографії, тому постав значення photo.
// image_type: "photo"
// orientation - орієнтація фотографії. Постав значення horizontal.
// orientation: "horizontal"
// safesearch - фільтр за віком. Постав значення true.
// safesearch: "true"

// https://pixabay.com/api/?key=31235153-11b91783de2de8bcbb11dc69c
// & q=yellow + flowers
// & image_type=photo

//GALLERY TEMPLATE
// {/* <div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>; */}
