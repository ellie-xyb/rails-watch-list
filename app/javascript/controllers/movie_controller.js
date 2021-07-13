import { Controller } from 'stimulus';

// export default class extends Controller {
//   static targets = [ 'selected' ];
//   const application = Application.start();
// const context = require.context("./controllers", true, /\.js$/);
//   connect() {
//     console.log(this.selectedTarget);
//   };

//   select(event) {
//     this.selectedTarget.innerHTML = event.currentTarget.dataset.template
//   }
// }

export default class extends Controller {
  static targets = ["title", "overview", "rating", "toggle", "star", "markbox", "heartmark", "markrating", "toggleheart"];

  show(event) {
    this.toggleTarget.style.display = " none";
    const title = event.currentTarget.dataset.title;
    const overview = event.currentTarget.dataset.overview;
    const rating = event.currentTarget.dataset.rating;
    const movieid = event.currentTarget.dataset.movieid;
    const markrating = event.currentTarget.dataset.markrating;
    const moviemarkid = event.currentTarget.dataset.moviemarkid;

    this.toggleheartTarget.innerHTML = markrating;
    this.heartmarkTarget.dataset.markid = moviemarkid;
    if (markrating === '1'){
      this.heartmarkTarget.classList.add('like');
    } else {
      this.heartmarkTarget.classList.remove('like');
    }

    this.markboxTarget.style.display = "block";
    this.markboxTarget.dataset.movieid = movieid;
    this.titleTarget.innerHTML = title;
    this.starTarget.style.display = "block";
    this.ratingTarget.innerHTML = rating;
    this.overviewTarget.innerHTML = overview;
  };
}
