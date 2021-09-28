export default function makeBoard() {
    const row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const mines = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let newA = mines.map(mine => [...row])
    // let newA = mines.reduce((acc, cur) => {
    //     acc = [...acc, [...row]]
    //     return acc
    // }, [])
    let i = 0;
    while (i < 99) {
        newA = addNumber(newA);
        i++;
    }
    return newA
}

function addNumber(mineArray) {
    const row = Math.floor(Math.random() * 16);
    const col = Math.floor(Math.random() * 30);
    if (mineArray[row][col] === 1)
        return addNumber(mineArray);
    mineArray[row][col] = 1;
    return mineArray;
}
