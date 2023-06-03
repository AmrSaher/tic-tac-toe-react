export default function Square({
    role, 
    setRole, 
    index,
    squares, 
    setSquares, 
    checkWin, 
    setBanner
}) {
    function handlePlay() {
        if (squares[index] != '') return;
        squares[index] = role;
        setSquares(squares);
        
        let roleR = role == 'x' ? 'o' : 'x';
        setRole(roleR);
        setBanner('Role: ' + roleR);
        checkWin();
    }

    return (
        <button
            className="square"
            onClick={handlePlay}
        >
            {squares[index]}
        </button>
    );
}