const express = require('express');
const cors =  require('cors')
const { shortenPost, shortenGet, getAShortenLink } = require('./functionsShorten')


const app = express();

app.use(cors());
app.use(express.json());

//create a shortenLink
app.post('/shorten', shortenPost )

// Get shorten_links

app.get('/shorten', shortenGet )

//GET a shorten_link

app.get('/shorten/:id', getAShortenLink )

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000...')
})

