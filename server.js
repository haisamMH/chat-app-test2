const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/ui-react/build`));


app.use('/api/hello',(req,res)=>{
    res.json({message : "Hi thhisi is abb"});
})

const port = process.env.port || 3001;
app.listen(port, ()=>{
    console.log(`server is on at port ${port}`);
});