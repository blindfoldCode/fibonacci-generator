(function() {
  "use strict";
  window.fib = function* genFib(max) {
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
})();
