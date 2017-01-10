const express = require ('express'),
      stylus = require ('stylus')

const app = express ()
app.use (express.static (__dirname + '/public'))
app.use (stylus.middleware ({
    src: __dirname + '/styles',
    dest: __dirname + '/public'
}))
app.listen (process.argv[2])
