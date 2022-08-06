sink('some module', function ({test, ok}) {
  test('a failure', function () {
    ok(1 == 2, 'should fail')
  });
});

sink('another module', function ({test, ok}) {
  test('two success', function () {
    ok(true, 'this is basically true')
    ok(1 == 1, 'also true for you math majors')
  });
});

sink('should have foo', function({test, ok, assert}) {
  test('two success', function () {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        assert(res.status, 200, 'success');
        return res.json();
      })
      .then(res => ok(res.length > 0, 'get posts successfully'));
  });
});
