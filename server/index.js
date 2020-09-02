const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');




const app = express();

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
	console.log("serve rrunning on port",4000);
});

