z = /\^[0-9] + [a-z]*\$/
console.log(y.test("abc"))
console.log(y.test("ggg0abc"))

//2019-05-19
exp = /d{4}-d\d{1,2}-\d{1,2}/
console.log(exp)

    exp2 = /[^0-9]/