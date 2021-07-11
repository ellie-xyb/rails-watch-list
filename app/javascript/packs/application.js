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
        strings: ['^800 All of your favorites in one place. ^600\n', 'Drama', 'Classic', 'Comedy', 'Action', 'Romantic', 'Thriller', 'Horror', 'Comedy', 'Sci-fi', 'Slasher ^70 ... ^400'],
        // strings: ['Drama', 'Classic', 'Comedy', 'Action', 'Romantic', 'Thriller', 'Horror', 'Slasher'],
        typeSpeed: 30,
        backSpeed: 16,
        loop: true,
        loopCount: Infinity,
        showCursor: false,
      });
    }
  };
  initTyped();
});

