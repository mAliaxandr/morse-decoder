const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const input = expr;
    console.log('------', input);
    const arrInput  = input.split('');
    console.log('res -- ', arrInput);
    let letter = '';
    let text = '';
    arrInput.forEach( item => {
        letter = letter.concat(item);
        console.log('-l- ', letter, item);
        if (letter == '**********'){
            text = text.concat(' ');
            letter = '';
        }
        if (letter.length == 10) {
            console.log(' -letter- ', letter);
            
            const key = getKey(letter);
            getLetter(key);
            letter = '';
        }
    })

    function getKey(str) {
        let key = '';
        for (var i = 0; i < str.length; i = i+2) {
            let simbol = str[i].concat(str[i+1])
            if ( simbol == '10') {
                key = key.concat('.');
            }
            if ( simbol == '11') {
                key = key.concat('-');
            }
            console.log('simbol -- ', simbol);
        }
        console.log('key -- ', key);
        return key;
    }

    function getLetter(key) {
        text = text.concat(MORSE_TABLE[key]);
        console.log('-----', key, MORSE_TABLE[key], text);
    }
    console.log('result --------', text);

    return text;
}

module.exports = {
    decode
}