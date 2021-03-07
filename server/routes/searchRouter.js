const axios = require("axios")
const cheerio = require('cherio')
const Router = require('express');
const config = require('config')

const router = new Router();

router.post("/find", async (req, res) => {
    const{url}=req.body
    try {
        const getHTML=async (link)=>{
            const{data}=await axios.get(link);
            return cheerio.load(data)
        }
        const $= await getHTML(url)
        const h1 = [];
        const h2 = [];
        const h3 = [];
        const h4 = [];
        $('h1').each(function(i) {
            h1[i] = $(this).text();
        });
        $('h2').each(function(i) {
            h2[i] = $(this).text();
        });
        $('h3').each(function(i) {
            h3[i] = $(this).text();
        });
        $('h4').each(function(i) {
            h4[i] = $(this).text();
        });

        return res.json({message: `запрос на обработку ${url} прошел успешно`,h1,h2,h3,h4})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})
module.exports = router;

