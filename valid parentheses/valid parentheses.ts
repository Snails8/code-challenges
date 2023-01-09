function isValid(s: string): boolean {
    const matching: {[key: string]: string} = {
        "(" : ")",
        "{" : "}",
        "[" : "]", 
    }

    let stack: string[] = [];
    for (const char of s) {
        console.log(char);
        if (matching[char]) stack.push(char);
        else if (char !== matching[stack[stack.length -1]]) return false;
        else stack.pop();
    }

    return stack.length === 0;
};
