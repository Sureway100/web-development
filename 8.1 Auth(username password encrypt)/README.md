https://cryptii.com/

mongoose-encryption -> package we used

//the only change we made for this encryption class

...............................................................................................................
the one bad thing about this is that secret key will be visible on github if push.. so use dotenv and gitignore
...............................................................................................................
//we would need to change this to mongoose instance schema object
const userSchema = new mongoose.Schema({
email: String,
password: String,
});

//the plugin method is defined, the secret we are going to use and the field we would want to encrypt
//so how mongoose encrypt works is that it will encrpt when you call save and decrypt when you call find automatically
const secret = "thisisoursecret";
userSchema.plugin(encrpt, { secret: secret, encryptedFields: ["password"] });
.................................................................................
