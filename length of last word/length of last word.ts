function lengthOfLastWord(s: string): number {
    const list: string[] = s.split(' ').filter((v => v));

    return list[list.length-1].length;
};
