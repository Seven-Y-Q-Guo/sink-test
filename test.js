sink('should fail', function ({test, ok}) {
  test('a failure', function () {
    ok(1 === 2, 'should fail');
  });
});

sink('should pass', function ({test, ok}) {
  test('two success', function () {
    ok(true, 'this is basically true');
    ok(1 === 1, 'also true for you math majors');
  });
});

sink('should have posts', function({test, ok, assert}) {
  test('two success', function () {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        assert(res.status, 200, 'success');
        return res.json();
      })
      .then(res => ok(res.length > 0, 'get posts successfully'));
  });
});

sink('should timeout', function({test, ok, assert}) {
  test('a success', function (complete) {
    setTimeout(function () {
      const result = complete();

      ok(result.message === 'timeout', 'timeout');
    }, 4000);
  });
});

sink('should reset timeout', function({test, ok, assert, before}) {
  before(function() {
    sink.timeout = 5000;
  });

  test('a success', function(complete) {
    setTimeout(function () {
      const result = complete();

      ok(result.message === 'complete', 'reset timeout successfully');
    }, 4000);
  });
});
