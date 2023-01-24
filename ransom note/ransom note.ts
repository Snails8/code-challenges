function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomLen  = ransomNote.length;
    const magazineLen = magazine.length;

    if (ransomLen > magazineLen) return false;
    if (ransomLen === 1) return ransomNote === magazine[1];

    const arr = magazine.split('');
    for (let i = 0; i < ransomLen; i++) {
        if (ransomNote[i] !== arr[i]) {
            break
        }
        return ransomNote[i] + ransomNote[i+1] === arr[i] + arr[i+1]
    }
};
