function* age () {
    yield 1;
    yield 2;
    yield 3;
    return 4
}

var a = age()

console.log(a.next())

// console.log(a.next())
// console.log(a.next())