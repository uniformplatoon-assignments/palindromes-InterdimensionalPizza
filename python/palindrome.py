def palindrome(word):
    word=str(word).lower()
    word1=[]
    for ltr in word:
        if ltr.isalnum():
            word1.append(ltr)
    word2=word1[::-1]
    return word1 == word2
