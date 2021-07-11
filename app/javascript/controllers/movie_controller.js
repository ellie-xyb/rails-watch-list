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
  static targets = ["card"];
  connect() {
    console.log(this.cardTarget);
  }
  show(event) {
    const infos = event.currentTarget.dataset.infos;
    console.log(infos)
    this.cardTarget.innerHTML = infos;
  };
}
