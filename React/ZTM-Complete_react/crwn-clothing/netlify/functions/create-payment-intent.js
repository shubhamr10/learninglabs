const http = require("node:http");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Create the server
const server = http.createServer((req, res, next) => {
    try{
        if(req.method === "POST" && req.url === "/api/create-payment-intent"){
            let rawBody = "";

            req.on("data", chunk => {
                rawBody+=chunk.toString();
            })

            req.on("end", async () => {

                const { amount } = JSON.parse(rawBody);
                const paymentIntent = await stripe.paymentIntents.create({
                    amount:amount * 100,
                    currency:"usd",
                    payment_method_types:["card"]
                })
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Data received successfully', data: paymentIntent }));
            })
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received successfully', data: null }));
        }
    } catch (err) {
        console.log(err.message());
        res.writeHead(400, { "Content-Type":"application/json" });
        res.write("error occured");
        res.end();
    }
});

server.listen(5000, ()=>{
    console.log("server started!!!");
})