function charMap (str) {
    const charMap = {}
     str = str.toLowerCase().replace(/[\W]/g,'')
     
     for ( let char of str){
        charMap[char] = (charMap[char] || 0) + 1
     }

     return charMap
}

function anagrams (str1, str2) {
    const charMap1 = charMap(str1)
    const charMap2 = charMap(str2)

    if (Object.keys(charMap1).length !== Object.keys(charMap2).length)  return false

    for ( let key in charMap1){
        if( charMap1[key] !== charMap2[key]) return false
    }

    return true;

}   


console.log(anagrams('arpan', 'napra'));





function cleanStr (str) {

    return str.toLowerCase().replace(/[\W]/g,'').split('').sort().join('')
}

function anagrams (str1, str2) {
    
    return cleanStr(str1) === cleanStr(str2)
}