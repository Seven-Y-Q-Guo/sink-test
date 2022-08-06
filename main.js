((exports) => {
  let startTime, endTime;
  const success = (msg) => {
    console.log(`%c${msg}`, "color: green");
  };

  const error = (msg) => {
    console.log(`%c${msg}`, "color: red");
  }

  function sink(name, cb) {
    cb({test, ok, assert});
  }

  sink.timeout = 3000;

  function test(description, cb) {
    startTime = new Date().getTime();
    cb(complete);
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

  function complete() {
    endTime = new Date().getTime();

    if ((endTime - startTime) > sink.timeout) {
      return new Error('timeout');
    }
  }

  exports.sink = sink;
})(window);
