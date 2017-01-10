const express = require ('express'),
      app = express ()
app.get ('/search', (req, res) => {
//    let body = {
//        results: req.query.results,
//        include_tabs: req.query.include_tabs
//    }
    res.send (req.query)
})
.listen (process.argv[2])