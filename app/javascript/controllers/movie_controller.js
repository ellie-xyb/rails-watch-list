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
  static targets = ["title", "overview", "rating", "toggle", "star"];

  show(event) {
    this.toggleTarget.style.display = " none";
    const title = event.currentTarget.dataset.title;
    const overview = event.currentTarget.dataset.overview;
    const rating = event.currentTarget.dataset.rating;

    this.titleTarget.innerHTML = title;
    this.starTarget.style.display = "block";
    this.ratingTarget.innerHTML = rating;
    this.overviewTarget.innerHTML = overview;
  };
}
