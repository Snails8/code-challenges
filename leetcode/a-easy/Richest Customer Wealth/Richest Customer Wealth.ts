function maximumWealth(accounts: number[][]): number {

    let result = 0;
    let tmp = 0;
    for (let i = 0; i < accounts.length; i ++ ) {

        for (let l = 0; l < accounts[i].length; l++) {
            tmp += accounts[i][l]
        }

        if (result === 0) {
            result = tmp;
        } else if (result < tmp) {
            result = 0;
            result += tmp;
        }

        tmp = 0;
    }
    return result;
};
