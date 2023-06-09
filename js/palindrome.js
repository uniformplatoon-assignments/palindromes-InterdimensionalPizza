exports.palindrome = function(word) {
    word=String(word).toLowerCase()
    let word1=[]
    let word2=[]
    for (let i=0; i<word.length; i++){
        if(/^[a-z0-9]/i.test(word[i])){
            word1.push(word[i])
            word2.push(word[i])
        }
    }
    word2=word2.reverse().join('')
    word1=word1.join('')
    return word1 === word2;
};
