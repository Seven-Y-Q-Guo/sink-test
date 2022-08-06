((exports) => {
  let startTime, endTime;
  let isWait = false;
  let listeners = [];

  const success = (msg) => {
    console.log(`%c${msg}`, "color: green");
  };

  const error = (msg) => {
    console.log(`%c${msg}`, "color: red");
  }

  function sink(name, cb) {
    cb({test, ok, assert, before});
  }

  sink.timeout = 3000;

  function test(description, cb) {
    if (isWait) {
      listeners.push(cb);
    } else {
      startTime = new Date().getTime();
      cb(complete);
    }

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
    let result = {};
    endTime = new Date().getTime();

    if ((endTime - startTime) > sink.timeout) {
      result = new Error('timeout');
    } else {
      result = {
        message: 'complete'
      };
    }

    listeners.forEach(listener => {
      startTime = new Date().getTime();
      listener(complete);
    });

    listeners = [];

    return result;
  }

  function before(cb) {
    isWait = true;
    listeners.push(cb);
  }

  exports.sink = sink;
})(window);
