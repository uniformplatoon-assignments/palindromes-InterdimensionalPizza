palindrome = lambda word : [c.lower() for c in str(word) if c.isalnum()] == [c.lower() for c in str(word) if c.isalnum()][::-1]
#courtesy of Islomjon