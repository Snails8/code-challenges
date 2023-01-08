function fizzBuzz(n: number): string[] {
    let tmp: string[] = [];
    for (let i = 1; i < n + 1; i++) {
        if ( i % (3*5) === 0) {
            tmp.push('FizzBuzz');
            continue;
        }
        if (i % 3 === 0) {
            tmp.push('Fizz');
            continue;
        }

        if (i % 5 === 0) {
            tmp.push('Buzz');
            continue;
        }

        tmp.push(String(i))
    }
    return tmp;
};
