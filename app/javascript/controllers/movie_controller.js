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
  static targets = ["title", "overview", "rating", "toggle"];
  connect() {
    console.log(this.cardTarget);
  }
  show(event) {
    this.toggleTarget.style.display = " none";
    const title = event.currentTarget.dataset.title;
    const overview = event.currentTarget.dataset.overview;
    const string = event.currentTarget.dataset.rating;
    const rating = parseInt(string, 10);

    this.titleTarget.innerHTML = title;
    let star = this.ratingTarget.innerHTML;
    this.ratingTarget.innerHTML = star + rating;
    this.ratingTarget.style.display = "block";
    this.overviewTarget.innerHTML = overview;
  };
}
