function memoize(fn) {
    const cache = new Map();

    console.log(cache);

    return function (...args) {


        const key = args.toString();

        if (args.length != 2) {
            return args.toString();
        } else if (cache.has(key)) {

            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }

}

function add(a, b) {
    return a + b;
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100, 100));

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(300, 200));
console.log(memoizeAdd(100));





