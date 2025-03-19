type Direcao = 'w' | 'a' | 's' |'d';

type Movimento = {
    teclaPressionada: Direcao,
    passos: number
}
// function caminhar(teclaPressionada: Direcao, passos: number) {           
//     let direcao: string = '';
//     switch(teclaPressionada) {
//         case 'w': direcao = 'Frente';
//             break
//         case 'a': direcao = 'Esquerda';
//             break
//         case 's': direcao = 'Trás';
//             break
//         case 'd': direcao = 'Direita';
//             break
//         default: direcao = 'Direção inválida';
//             break
        
//     }
//     console.log(`O personagem caminhou ${passos} para ${direcao}`);
// }

function caminhar(movimento: Movimento) {
    let direcao: string = '';
    switch(movimento.teclaPressionada) {
        case 'w': direcao = 'Frente';
            break
        case 'a': direcao = 'Esquerda';
            break                                   // COM TIPO CUSTOMIZADO COMO OBJETO
        case 's': direcao = 'Trás';
            break
        case 'd': direcao = 'Direita';
            break
        default: direcao = 'Direção inválida';
            break
        
    }
    console.log(`O personagem caminhou ${movimento.passos} para ${direcao}`);
}

caminhar({teclaPressionada: 'a', passos: 10});