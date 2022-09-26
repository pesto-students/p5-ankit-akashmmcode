function spiral(matrix) {
    const arr = [];
      
    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(a => a.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(a => a.shift()).reverse()
      );
    }
    return arr;
  }


console.log(spiral([[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]));