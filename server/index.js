const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//allow cross-origin request


const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://kumar:kumar123@cluster0.a0bus.mongodb.net/user?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',()=>{
	console.log('database connected');
})

app.get('/',(req,res)=>{
	res.send("Hello World");
})

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql:true 
}));



app.listen(4000,()=>{
	console.log("serve running on port",4000);
});

