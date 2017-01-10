const express = require ('express'),
      crypto = require ('crypto'),
      app = express ()
app.put ('/message/:id', (req, res) => {
    let hash = crypto
                .createHash('sha1')
                .update (new Date().toDateString() + req.params.id)
                .digest ('hex')
    res.end (hash)
})
app.listen (process.argv[2])