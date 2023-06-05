"""
https://atcoder.jp/contests/abc150/tasks/abc150_b

英大文字のみからなる長さ N の文字列 S があります。
S の連続する部分列として ABC がいくつ含まれるかを求めてください。
"""

N = int(input())
S = input()

answer = 0

for i in range (N-2):
  if S[i] == 'A' and S[i+1] == 'B' ans S[i+2] == 'C':
    answer += 1

print(answer)
