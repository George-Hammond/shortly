const axios = require('axios')
const  pool = require('../Model/db_connect');

//POST function
const shortenPost = async(req, res) => {
    try{
        let  { value_input , shorten_url } = req.body;
        const  response = await axios(`https://api.shrtco.de/v2/shorten?url=${value_input}`);

        shorten_url = response.data.result.full_short_link;

        const newValue = await pool.query('INSERT INTO shortly_table (value_input, shorten_url) VALUES($1, $2) RETURNING *',
         [value_input, shorten_url]
         );
    //   console.log(req.body)

    res.json(newValue);
    } 
    catch(err){
        console.log(err.message)
    }
}

//GET function

const shortenGet = async (req, res) =>{
    try{
        const getLinks = await pool.query('SELECT * FROM shortly_table');
        res.json(getLinks.rows);
    }
    catch(err){
        console.log(err.message)
    }
}

const getAShortenLink = async (req, res) => {
    try{
        const { id } = req.params;
        const getALink = await pool.query('SELECT * FROM shortly_table WHERE url_id = $1', [id])
        res.json(getALink.rows[0])
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports = { shortenPost, shortenGet, getAShortenLink }