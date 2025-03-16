const aiservice = require("../services/ai.service")

module.exports.getReview = async (req,res)=>{ // is particular route pe jo apka user hoga vo apke liye kuch prompt bhejega aur us pronpt ko hum yaha pe nikalenge
    const code = req.body.code;
    
    if(!code){//if prompt does not come
        return res.status(400).send("Prompt is required");
    }
    const response = await aiservice(code);
    res.send(response);

    
}