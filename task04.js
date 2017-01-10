const express = require ('express'),
      bodyParser = require ('body-parser')

const app = express ()
app.listen (process.argv[2])
app.use (bodyParser.urlencoded({extended: false}))
app.post ('/form', (req, res) => {
    let str = req.body.str,
        rev = str.split('').reverse().join('')
    res.end (rev)
})