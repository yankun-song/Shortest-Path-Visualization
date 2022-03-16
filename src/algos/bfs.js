const BFS = (pos, cb, btns) => {
  // input is [rowNum, colNum]
  const [i, j] = pos;

  const queue = [];
  queue.push([i, j]);

  while (queue.length !== 0) {
    const current = queue.shift();
    const i = current[0];
    const j = current[1];
    const childKeys = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    for (let childKey of childKeys) {
      const key = `r${childKey[0]}c${childKey[1]}`;
      const canVisit =
        btns[key] &&
        !btns[key].isVisited &&
        !btns[key].isStart &&
        !btns[key].isEnd &&
        !btns[key].isBlock;
      if (canVisit) {
        cb(childKey, true);
        console.log(childKey);
        queue.push(childKey);
      }
    }
  }
};

export default BFS;
