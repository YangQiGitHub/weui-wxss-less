var fs = require("fs");
var path = 'style/widget/weui-tips/';


function changeExt(path) {

  fs.readdir(path, function(err, files) {
    console.log(files)
    files.forEach(function(filename) {
      if (/.wxss/i.test(filename)) {
        var oldPath = path + filename;
        var newPath = path + filename.replace('.wxss', '.less');
        fs.rename(oldPath, newPath, function (err) {
          if (!err) {
            console.log(filename + '名称修改成功');
          } else{
            console.log(err)
          }
        })
      }
    })
  })

}

changeExt(path)

// fs.readdir('style/widget/weui-grid/', function(err, files) {
//   console.log(files)
// })
// console.log(__dirname)