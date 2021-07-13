// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import 'bootstrap';
import '../controllers/index';
import $ from 'jquery';
import 'jquery-bar-rating';
import 'select2';
import Typed from 'typed.js';
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


document.addEventListener('turbolinks:load', () => {
  $('.bar-rating').barrating({
    theme: 'css-stars',
    initialRating: null
  });

 $('#bookmark_movie_id').select2({
    selectOnClose: true
  });

  const initTyped = () => {
    const element = document.querySelector('.typed-js');
    if (element) {
      new Typed('.typed-js', {
        strings: ['^800 All of your favorites in one place. ^600\n', 'Drama', 'Classic', 'Comedy', 'Action', 'Romantic', 'Thriller', 'Horror', 'Comedy', 'Sci-fi', 'Slasher ^70 ...', '🍿'],
        // strings: ['Drama', 'Classic', 'Comedy', 'Action', 'Romantic', 'Thriller', 'Horror', 'Slasher'],
        typeSpeed: 30,
        backSpeed: 16,
        loop: true,
        loopCount: 1,
        showCursor: false,
      });
    }
  };
  initTyped();

  const fetchmark = (url, rates) => {
    fetch(url, {
      body: JSON.stringify({
      rating: rates,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  };

  const heartMark = document.getElementById('heart-mark');
  const checkMarkId = heartMark.dataset.markid;
  const MarkIdInt = parseInt(checkMarkId, 10);

  const toggleHeart = document.getElementById('toggle-heart');
  const toggleValue = toggleHeart.innerHTML;


  if (heartMark != null) {
    heartMark.addEventListener('click', ()=> {
      const heartMark = document.getElementById('heart-mark');
      const checkMarkId = heartMark.dataset.markid;
      const MarkIdInt = parseInt(checkMarkId, 10);

      const toggleHeart = document.getElementById('toggle-heart');
      const toggleValue = toggleHeart.innerHTML;

      // console.log(MarkIdInt);
      // console.log(toggleValue);
      if (checkMarkId === '-1') {
        // create mark with rating 0
        const markpostform = document.getElementById('markpostform');
        const movieId = parseInt(markpostform.dataset.movieid, 10);
        fetch(`/movies/${movieId}/marks`, {
          body: JSON.stringify({
          movie_id: movieId,
          }),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
        toggleHeart.innerHTML = '1';
        heartMark.classList.add('like');
      } else if (checkMarkId != '-1' && toggleValue === '1') {
          // update rating = 0
          const heartMark = document.getElementById('heart-mark');
          const checkMarkId = heartMark.dataset.markid;
          const MarkIdInt = parseInt(checkMarkId, 10);

          fetchmark(`/marks/${MarkIdInt}`, 0);
          toggleHeart.innerHTML = '0';
          heartMark.classList.remove('like');
      } else if (checkMarkId != '-1' && toggleHeart.innerHTML === '0') {
          // update rating = 1
          const heartMark = document.getElementById('heart-mark');
          const checkMarkId = heartMark.dataset.markid;
          const MarkIdInt = parseInt(checkMarkId, 10);

          fetchmark(`/marks/${MarkIdInt}`, 1);
          toggleHeart.innerHTML = '1';
          heartMark.classList.add('like');
      }
    });
  }
});
