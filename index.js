import app from './src/app.js'

const port = process.env.PORT || 3000;

//server
app.listen(port, ()=>{
    console.log(`server on port ${port}`)
})