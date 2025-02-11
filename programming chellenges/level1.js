//palidrom
const isPalidrome = (word)=> {

    if (word === '' ){
        return ''
    }

    const reverseWord = word.split('').reverse().join('');

    return word === reverseWord ? `${word} is palidrome` : `${letter} not palidrom`;
    
}
console.log(isPalidrome('ded'));

