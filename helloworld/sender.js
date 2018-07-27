

const amqp = require('amqplib/callback_api');

//Connect to RMQ server
amqp.connect('amqp://localhost', (err, conn) => {
	//create a channel
	conn.createChannel((err, ch) => {
		//Declare queue
		let queueName = 'hello';
		ch.assertQueue(q, { durable: false });
		//Send to queue and write to log
		ch.sendToQueue(q, new Buffer('Hello World!'));
		console.log("  Sent 'Hello World!'");
	});
});







