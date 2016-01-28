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


  const input = document.querySelector("input[type=number]"),

    action = document.querySelector("button[name=submit]");

  action.addEventListener("mouseup", addSequence)
  let mode = true;


  function addSequence(e) {
    let done = false,
      seq = fib(parseInt(input.value));
    while (!done) {
      let value = seq.next();
      done = value.done;
      if (!done) console.log(value.value, value.done);
    }
  }



})();
