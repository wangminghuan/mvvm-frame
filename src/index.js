import {
  MVVM
} from "./static/js/mvvm";
var vm = new MVVM({
  el: '#app',
  data: {
    word: 'Hello World!'
  },
  methods: {
    sayHi: function () {
      this.word = 'Hi, everybody!';
    }
  }
});