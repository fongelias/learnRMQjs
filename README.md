# learnRMQjs
repo for learning RMQ using OSX

## [Installation](https://www.rabbitmq.com/download.html)
use homebrew to install with `brew install rabbitmq`

## Usage
Start up the server with `rabbitmq-server` (or with the `-detached` option)

Check the status with `rabbitmqctl service`

Default users will have username `guest` and password `guest`

Stop the server with `rabbitmqctl stop`

Download the javascript client with npm: `npm install amqplib`

## Conf
Configuration files are located at `etc/rabbitmq/rabbitmq-env.conf`

## Terminology
Terms | Meaning
--- | ---
Producer | program that sends messages
Queue | message buffer
Consumer | receiver of messages
