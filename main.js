((exports) => {
  const success = (msg) => {
    console.log(`%c${msg}`, "color: green");
  };

  const error = (msg) => {
    console.log(`%c${msg}`, "color: red");
  }

  function sink(name, cb) {
    cb({test, ok, assert});
  }

  function test(description, cb) {
    cb();
  }

  function ok(isTrue, message) {
    if (isTrue) {
      success(message);
    } else {
      error(message);
    }
  }

  function assert(actual, expected, message) {
    ok(actual === expected, message);
  }

  exports.sink = sink;
})(window);
