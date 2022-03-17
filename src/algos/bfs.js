async function BFS(start, end, cb, btns) {
  // input is [rowNum, colNum]
  const queue = [start];

  while (queue.length !== 0) {
    const current = queue.shift();
    if (JSON.stringify(current) === JSON.stringify(end)) {
      alert("FOUND!");
      break;
    }
    await cb(current, true);
    btns[`r${start[0]}c${start[1]}`].isVisited = true;
    const i = current[0];
    const j = current[1];
    const childKeys = [
      [i + 1, j],
      [i - 1, j],
      [i, j + 1],
      [i, j - 1],
    ];
    //console.log(childKeys);
    for (let childKey of childKeys) {
      const key = `r${childKey[0]}c${childKey[1]}`;

      const canVisit =
        btns[key] &&
        !btns[key].isVisited &&
        !btns[key].isStart &&
        !btns[key].isBlock &&
        !btns[key].isInQ;
      if (canVisit) {
        queue.push(childKey);
        btns[key].isInQ = true;
      }
  
    }
  }
}

export default BFS;
