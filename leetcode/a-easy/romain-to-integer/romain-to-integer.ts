function romanToInt(str: string): number {
    const rep: {[key: string]: number} = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M : 1000,
    }

    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        if (i + 1 < str.length && rep[str[i]] < rep[str[i + 1]]) {
            sum -= rep[str[i]];
        } else {
            sum += rep[str[i]];
        }
    }

    return sum;
};
