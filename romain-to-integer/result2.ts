function romanToInt(s: string): number {
    const roman: {[key: string]: number} = {
        I:             1,
        V:             5,
        X:             10,
        L:             50,
        C:             100,
        D:             500,
        M:             1000,
    };

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]] && i + 1 <  s.length) {
            result -= roman[s[i]];
            continue;
        }

        result += roman[s[i]]
    }

    return result;
};
