module.exports = function(mongoose){

var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	nickName : String,
	contrasena : String
});
userSchema.methods.generateHash = function(contrasena) {
    return bcrypt.hashSync(contrasena, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(contrasena) {
    return bcrypt.compareSync(contrasena, this.contrasena);
};

return mongoose.model('user',userSchema);
}
