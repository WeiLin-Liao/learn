var arr = [
    {a: 1, b: 2},
    {a: 2, b: 3}
]

console.log('--------of-------')

for (let k of arr) {
    console.log(k.a, k.b)
}

console.log('--------in-------')

for (let k in arr) {
    console.log(arr[k].a, arr[k].b)
}