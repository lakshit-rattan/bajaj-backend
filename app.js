const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }));

app.post("/bfhl",(req,res) => {
    const data = req.body.data;

    const num = [];
    const alp = [];

    data.forEach((k) => {
        if(isNaN(k))
            alp.push(k);
        else
            num.push(k);
    })

    const result ={
        is_success: true,
        user_id: "Lakshit_Rattan_03042001",
        email : "lakshit0439.cse19@chitkara.edu.in",
        roll_number:"1910990439",
        numbers: num,
        alphabets: alp
    }

    res.send(JSON.stringify(result));
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})