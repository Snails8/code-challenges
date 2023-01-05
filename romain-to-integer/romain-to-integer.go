func romanToInt(s string) int {
    dict := map[byte]int{
		  'I': 1,
		  'V': 5,
		  'X': 10,
		  'L': 50,
		  'C': 100,
		  'D': 500,
		  'M': 1000,
	  }

    result := 0
    for i := 0; i < len(s); i ++ {
        if (i + 1 != len(s) && dict[s[i]] < dict[s[i+1]]) {
            result -= dict[s[i]]
        } else {
            result += dict[s[i]]
        }
    }

    return result
}
