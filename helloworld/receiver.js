

const amqp = require('amqplib/callback_api');

//Connect to RMQ
amqp.connect('amqp:localhost', (err, conn) => {
	//create a channel
	conn.createChannel((err, ch) => {
		//declare queue to consume
		const queueName = 'hello';
		ch.assertQueue(queueName, { durable: false });
		console.log("\tWaiting for messages in %s", queueName);
		//consome queue
		ch.consume(queueName, (msg) => {
			console.log("\tReceived: %s", msg.content.toString());
		}, { noAck: true});

		//Close Connection and exit
		setTimeout(() => {
			conn.close();
			process.exit(0);
		}, 500);
	});
});






