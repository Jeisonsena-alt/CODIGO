function isPrime(n: number): boolean {
    const divisors = [];
    for (let i = 1; i <= n; i++) {
        if (i % n) {
            divisors.push(i);
        }
    }

    console.info(divisors);

    return divisors.length === 2;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((n) => {
    console.info(n, isPrime(n));
});
