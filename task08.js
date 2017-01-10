const express = require ('express'),
      fs = require ('fs'),
      app = express ()
app.get ('/books', (req, res) => {
    fs.readFile (process.argv[3], 'utf8', (err, data) => {
        if (err) {
            return res.send (500)
        }
        try {
            books = JSON.parse (data)
        }
        catch (e) {
            res.send (500)
        }
        res.json (books)
    })
})
.listen (process.argv[2])