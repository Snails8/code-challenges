type Hash = {
  [key: string]: number;
};

function kWeakestRows(mat: number[][], k: number): number[] {
  const hash: Hash = {};

  mat.forEach((row, rowIndex) => {
    hash[rowIndex] = 0;
    row.forEach((val) => {
      if (val) {
        hash[rowIndex]++;
      }
    });
  });

  return Object.entries(hash)
    .sort(([, a], [, b]) => a - b)
    .map(([key]) => parseInt(key))
    .slice(0, k);
}
