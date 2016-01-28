(function() {
  "use strict";
  function* fib(max) {
    let o = 0,
      f = 1,
      s = 1;
    for (let i = 0; i < max; i++) {
      o = f + s;
      f = s;
      s = o;
      yield o;
    }
  };


    const   input = document.querySelector("input[type=number]").TEXT_NODE,
    action = document.querySelector("button[name=submit]");
    console.log(action.textContent);




})();
