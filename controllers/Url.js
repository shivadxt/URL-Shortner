const shortid = require("shortid");
const URL = require("../models/Url");

async function generateUrlShortner(req,res){

    const body = req.body;

    if(!body.URL) return res.status(400).json({error: 'Please enter URL'})
    const shortId = shortid();

    await URL.create({
    shortId: shortId,
    redirectURl: body.URL,  
    visitHistory: []  
    })
    
    return res.json({id: shortId});

} 

module.exports = {
    generateUrlShortner,
}