import Square from './Square';

export default function Board({
    role, 
    setRole, 
    squares, 
    setSquares,
    setBanner
}) {
    function checkWin() {
        const states = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    
        let isWin = false
        for (let i = 0; i < states.length; i++) {
            const [a, b, c] = states[i];
    
            if (squares[a] != '' && squares[a] === squares[b] && squares[a] === squares[c]) {
                isWin = true
                setBanner('Winning: ' + role);
                setTimeout(() => {
                    setSquares([
                        '','','','','','','','',''
                    ]);
                }, 100);
                break;
            }
        }

        if (!isWin && !squares.includes('')) {
            setBanner('Failed');
            setTimeout(() => {
                setSquares([
                    '','','','','','','','',''
                ]);
            }, 100);
        }
    }

    return (
        <div className="squares">
            {squares.map((square, i) => (
                <Square
                    key={i}
                    index={i}
                    squares={squares}
                    setSquares={setSquares}
                    role={role}
                    setRole={setRole}
                    checkWin={checkWin}
                    setBanner={setBanner}
                />
            ))}
        </div>
    );
}