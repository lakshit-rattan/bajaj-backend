const express = require('express');
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("test GET");
})
app.post("/bfhl", (req, res) => {
    const {data} = req.body;
    const numbers = [];
    const alphabets = [];
    const alphaRegex = /^[a-zA-Z]{1,}$/;
    const numRegex = /^[0-9]{1,}$/;
    try{
        data.forEach((item, index) => {
            if(numRegex.test(item)) {
                numbers.push(item);
            } else if(alphaRegex.test(item)){
                alphabets.push(item);
            }
        });
    
        const result = {
            isSuccess: "true",
            user_id: "Lakshit_Rattan_04032001",
            email: "lakshit0439.cse19@chitkara.edu.in",
            roll_number: 1910990439,
            numbers,
            alphabets
        };
    
        res.status(200).send(result);
    } catch(err) {
        res.status(422).send({isSuccess:"false"});
    }
    
})
app.listen(process.env.PORT|| 4000, () => {
    console.log(`Listening to PORT 4000`);
})