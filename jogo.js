let jogo;

const elementos = {
    telaInicial: document.getElementById('inicial'),
    telaJogo: document.getElementById('jogo'),
    telaMensagem: document.querySelector('.mensagem'),
    textoMensagem: document.querySelector('.mensagem .texto'),
    teclado: document.querySelector('.teclado'),
    palavra: document.querySelector('.palavra'),
    botoes:{
        facil: document.querySelector('.botao-facil'),
        medio: document.querySelector('.botao-medio'),
        dificil: document.querySelector('.botao-dificil'),
        reiniciar: document.querySelector('.reiniciar'),    
    },
    boneco: [
        
        document.querySelector('.boneco-cabeca'),
        document.querySelector('.boneco-corpo'),
        document.querySelector('.boneco-braco-esquerdo'),
        document.querySelector('.boneco-braco-direito'),
        document.querySelector('.boneco-perna-esquerda'),
        document.querySelector('.boneco-perna-direita'),

    ],
};


const palavras = {
    facil: ['ardor','feito','noite','maior','vetor','ìmpar','anciã','avaro','salvo','pecha'],
    medio: ['âmago','mexer','êxito','termo','algoz','senso','nobre','plena','afeto','mútua'],
    dificil: ['concepção','essencial','plenitude','hipócrita','corolário','paradigma','dicotomia','hegemonia','ratificar','propósito'],
}
    
const novoJogo = () => {
    jogo = {
        dificuldade: undefined,
        palavra:{
            original: undefined,
            semAcentos: undefined,
            tamanho: undefined,
        },
        acertos: undefined,
        jogadas: [],
        chances: 6,
        definirPalavra: function (palavra) {
            this.palavra.original = palavra;
            this.palavra.tamanho = palavra.length;
            this.acertos ='';
            this.palavra.semAcentos = this.palavra.original.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            for (let i = 0; i < palavra.length; i++) {
                this.acertos += ' ';
            }

        },
        jogar: function (letraJogada){
            let acertou = false;
            for (let i = 0; i < this.palavra.tamanho; i++) {
                const letra = this.palavra.semAcentos[i].toLowerCase();
                if(letra == letraJogada.toLowerCase){
                    acertou = true;
                    this.acertos = replace(this.acertos, i, this.palavra.original[i]);
                }
            }
            if(!acertou){
                this.chances--;
            }

            return acertou;
        },
        ganhou: function (){},
        perdeu: function (){},
    };

    elementos.telaInicial.style.display = 'flex';
    elementos.telaJogo.style.display = 'none';
    elementos.telaMensagem.style.display = 'none'
    elementos.telaMensagem.classList.remove('mensagem-vitoria');
    elementos.telaMensagem.classList.remove('mensagem-derrota');
    for (const parte of elementos.boneco) {
        parte.classList.remove('escondido');
        parte.classList.add('escondido');
    }
};

novoJogo();

const iniciarJogo = (dificuldade) => {
    jogo.dificuldade = dificuldade;
    elementos.telaInicial.style.display = 'none';
    elementos.telaJogo.style.display = 'flex';


    //sortear palavra
    //mostrar palavra sorteada
};

const replace = (str, i, newChar) => str.substring(0, i) + newChar + str.substring(i + 1);

elementos.botoes.facil.addEventListener('click', () => iniciarJogo('facil'));
elementos.botoes.medio.addEventListener('click', () => iniciarJogo('medio'));
elementos.botoes.dificil.addEventListener('click', () => iniciarJogo('dificil'));

elementos.botoes.reiniciar.addEventListener('click', ()=> novoJogo());

novoJogo();
