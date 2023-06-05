"""
https://atcoder.jp/contests/abc144/tasks/abc144_b
整数 N が与えられるので、N を 1 以上 9 以下の２つの整数の積として表すことができるか判定し、できるなら Yes を、できないなら No を出力
"""

N = int(input())
answer = 'No'

for i in range(1, 10):
  for j in range(1, 10):
    if N == i * j:
      answer = 'Yes'
   
print(answer)
