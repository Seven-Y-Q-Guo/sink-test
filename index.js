sink('some module', function (test, ok) {
  test('a failure', function () {
    ok(1 == 2, 'should fail')
  })
})

sink('another module', function (test, ok) {
  test('should have foo', function () {
    ok(true, 'this is basically true')
    ok(1 == 1, 'also true for you math majors')
  })
})

function sink(name, cb) {
  cb(test, ok);
}
function test(description, cb) {
  cb()
}
function ok(isTrue, message) {
  if (isTrue) {
    console.log(message);
  } else {
    console.error(message);
  }
}
