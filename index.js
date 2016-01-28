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
    result = document.querySelector("#result"),
    action = document.querySelector("button[name=submit]");

  action.addEventListener("mouseup", addSequence)
  let mode = true,
    done = false,
    seq, gen;


  function addSequence(e) {
    if (mode) {
      seq = fib(parseInt(input.value));
      action.textContent = "Add";
      mode = false;
      gen = seq.next();
      let appendItem = document.createElement("li");
      appendItem.innerHTML = gen.value;
      result.innerHTML = "";
      result.appendChild(appendItem);
    } else {

      if (!gen.done) {
        let appendItem = document.createElement("li");
        appendItem.innerHTML = gen.value;
        result.appendChild(appendItem);
        gen = seq.next();
        if (gen.done) {
          action.textContent = "Submit";
          mode = true;
        }
      }

    }
    /*
        while (!done) {
          let value = seq.next();
          done = value.done;
          if (!done) console.log(value.value, value.done);
        }*/
  }



})();
