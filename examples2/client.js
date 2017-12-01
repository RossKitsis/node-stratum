var Client = require('stratum').Client;

client = Client.create();

client.connect({
    host: 'localhost',
    port: 3333
  }).then(function (socket){
    // defered, this can be chained if needed, no callback hell
    // "socket" refers to the current client, in this case, the 'client'
    // variable
    console.log('Connected! lets ask for subscribe');

    // After the first stratumSubscribe, the data will be handled internally
    // and returned deferreds to be resolved / rejected through the event 'mining'
    // above
    socket.stratumSubscribe('Node.js Stratum').then(
    // This isn't needed, it's handled automatically inside the Client class
    // but if you want to deal with anything special after subscribing and such.
    function(socket){
        console.log('Sent!');
    },
    function(error){
        console.log('Error');
    }
    );
})