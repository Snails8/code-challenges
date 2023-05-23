interface HashMap {
    [key: string] : number
}

function canConstruct(ransomNote: string, magazine: string): boolean {
    let hm: HashMap = {}

    for (const ch of magazine) {
        if (hm[ch]) {
            hm[ch]++;
        } else {
            hm[ch] = 1;
        }
    }


    for (const ch of ransomNote) {
      if (hm[ch]) {
        console.log(hm[ch])
        hm[ch]--;
        console.log(hm[ch])
      } else {
        return false;
      }
    }

    return true;
};
