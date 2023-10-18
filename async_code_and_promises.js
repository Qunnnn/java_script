const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => resolve('Done!'),
            2000,
        );
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData().then(test => {
        console.log(test);
    });
}, 2000
);

console.log('Hello');
console.log('Hi');



