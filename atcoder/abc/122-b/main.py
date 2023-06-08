"""
英大文字からなる文字列 S が与えられます。
S の部分文字列であるような最も長い ACGT 文字列 の長さを求めてください。

ここで、ACGT 文字列とは A, C, G, T 以外の文字を含まない文字列です。
"""

S = input()

answer = 0
count = 0

for i in range(len(S)):
  if S[i] in "ACGT":
    count += 1
    answer = max(answer, count)
  else:
     count = 0

print(answer)

### 

for c in S:
  if c in 'ACGT':
    count += 1
    answer = max(answer, count)
  else:
    count = 0

