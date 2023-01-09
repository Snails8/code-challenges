function isPalindrome(x: number): boolean {
    if (x < 0) return false

    return String(x).split('').reverse().join("") === String(x);
};
