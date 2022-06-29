sink('some module', function (test, ok) {
  test('a failure', function () {
    ok(1 == 2, 'should fail')
  })
})

sink('another module', function (test, ok) {
  test('two success', function () {
    ok(true, 'this is basically true')
    ok(1 == 1, 'also true for you math majors')
  })
})
