var fs = require('fs')
var CleanCSS = require('clean-css')
var output = new CleanCSS().minify(['../stylesheets/creator.css','../stylesheets/override.css'])

//output是一个对象包含说明信息和样式字符串
//如果 node css-minifier.js放到.bat中，那么这里的路径就是.bat文件的路径
fs.writeFile('../stylesheets/creator.min.css', output.styles,function(){
   console.log('minify css success')
})
