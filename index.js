var fs = require('fs');
function base64_encode(file) {
  var bitmap = fs.readFileSync(file);
  return 'data:text/css;base64,'+new Buffer(bitmap).toString('base64');
}
console.log('\n');
console.log(base64_encode('./wxLogin.css'));
console.log('\n');