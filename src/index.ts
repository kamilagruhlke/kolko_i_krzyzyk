const circle: string = 'fa-circle-o';
const sharp: string = 'fa-times';

var round: string = 'x';

const mapping: string[][] = [
    ['c1','c2','c3'],
    ['c4','c5','c6'],
    ['c7','c8','c9']
];

const board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
];

const combinations: number[][] = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

const combinationsTable: string[][] = [
    ['c1','c2','c3'], ['c4','c5','c6'], ['c7','c8','c9'],
    ['c1','c4','c7'], ['c2','c5','c8'], ['c3','c6','c9'],
    ['c1','c5','c9'], ['c3','c5','c7']
];


for(let i in mapping) {
    for(let j in mapping[i]) {
        console.log(mapping[i][j]);
        let cell = document.getElementById(mapping[i][j]) as HTMLElement;
        cell.addEventListener('click', () => {
            if (board[i][j] === '') {
                board[i][j] = round;
                if (round === 'x') {
                    round = 'o';
                }
                else {
                    round = 'x';
                }
            }

            //logic
            if(board[0][0] === 'x' && board[0][1] === 'x' && board[0][2] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][0] === 'o' && board[0][1] === 'o' && board[0][2] === 'o') {
                alert("wygrał o");
            }

            if(board[1][0] === 'x' && board[1][1] === 'x' && board[1][2] === 'x') {
                alert("wygrał X");
            }
            else if(board[1][0] === 'o' && board[1][1] === 'o' && board[1][2] === 'o') {
                alert("wygrał o");
            }

            if(board[2][0] === 'x' && board[2][1] === 'x' && board[2][2] === 'x') {
                alert("wygrał X");
            }
            else if(board[2][0] === 'o' && board[2][1] === 'o' && board[2][2] === 'o') {
                alert("wygrał o");
            }

            if(board[0][0] === 'x' && board[1][0] === 'x' && board[2][0] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][0] === 'o' && board[1][0] === 'o' && board[2][0] === 'o') {
                alert("wygrał o");
            }

            if(board[0][1] === 'x' && board[1][1] === 'x' && board[2][1] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][1] === 'o' && board[1][1] === 'o' && board[2][1] === 'o') {
                alert("wygrał o");
            }

            if(board[0][2] === 'x' && board[1][2] === 'x' && board[2][2] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][2] === 'o' && board[1][2] === 'o' && board[2][2] === 'o') {
                alert("wygrał o");
            }

            if(board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o') {
                alert("wygrał o");
            }

            if(board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') {
                alert("wygrał X");
            }
            else if(board[0][2] === 'o' && board[1][1] === 'o' && board[2][0] === 'o') {
                alert("wygrał o");
            }


            
            if (cell.hasChildNodes()) {
                return;
            }

            let child = document.createElement('i');
            //<i></i>

            if (board[i][j] === 'x') {
                child.classList.add('fas');
                //<i class="fas"></i>

                child.classList.add('fa-times');
                //<i class="fas fa-times"></i>

                //child.innerHTML = "xyz";
                //<i class="fas fa-times">xyz</i>

                //child.id = "321"
                //<i id="321" class="fas fa-times">xyz</i>
            }
            else {
                child.classList.add('fas');
                child.classList.add('fa-genderless');
            }

            cell.appendChild(child);

            console.log(board)
        })
    }
}