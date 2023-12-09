const express =  require('express');
const app = express();
const PORT = process.env.PORT || 5555;
app.get('/api',(req,res)=>{
    res.send('This is a response from Express server');
});

app.listen(PORT,(err)=>{
    if(err){
        console.log('Error in running the Express server',err);
    }else{
        console.log('Express is running on this Port :',PORT);
    }
});