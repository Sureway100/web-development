//one weak thing about this encryption is that we would always need a key.. and that key will most
//likely be in a plain text
//with hashing, it takes out the key and replaces it with a function

//you can turn a password into a hash and almost impossible cannot turn that hash back to a password
// 13 \* 29 is 377 => pretty easy to decode but how many seconds would it take you to find that 377/0, 377/1, 377/2, 377/3 -- 377/13
//that will give you a whole number which is 29

//so what we do is to compare users hash against the hash already stored in the backend.... so this is true because when you run the
//hash function on the same string, the has that is going to be created is going to be the same string

---

// so for hashing, md5 is used
email: req.body.username,
password: md5(req.body.password),

---

//so the issue with this kind of hashing function is that every time you hash a particular word, it will always return same hashed
//string. this means that, if a hacker gets hold of a database, he can have hashes of common password and match it against all hashed
//value in the database.
some come up with common hashes like all words from dictionary(dictionary attack), common passwords, telephone numbers etc
