// Solution to FCC/Rosetta Code problem '100 Doors'

function getFinalOpenedDoors(numDoors) {
  const doors = new Array(numDoors);
  doors.fill(false, 0, numDoors); // true == 'open', false == 'closed'
  for (let passNum = 0; passNum < numDoors; passNum++) {
    const stepDistance = passNum + 1; // number of doors to jump past
    for (let step = passNum; step < numDoors; step += stepDistance) {
      doors[step] = !doors[step]; // toggle door status
    }
  }
  const openDoors = []; 
  doors.forEach((door, index) => {
    if (door === true) {
      openDoors.push(index + 1);
    }
  });
  return openDoors;
}

getFinalOpenedDoors(100);
