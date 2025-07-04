function capitalize (str) {
    const words = str.split(' ')
    const result = []

    for ( let word of words){
       result.push(word[0].toUpperCase() + word.slice(1))
    }

    return result.join(' ')

}

const str1 = 'my name is arpan'
const result1 = capitalize(str1)
console.log(result1);





function capitalize (str) {
    const words = str.split(' ')
    
   return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ')

}

const str = 'my name is arpan'
const result = capitalize(str)
console.log(result);
