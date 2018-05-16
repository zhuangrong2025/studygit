var fs = require('fs');
var minify = require('html-minifier').minify;

//bundle.html
fs.readFile('./bundle.html', 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    fs.writeFile('./bundle-min.html', minify(data,{removeComments: true,collapseWhitespace: true,minifyJS:true, minifyCSS:true}),function(){
        console.log('minify bundle.html success');
    });
});

