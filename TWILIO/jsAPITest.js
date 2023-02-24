
//getting in a pinch using fetch() to read Cred.json file, it isnt seem to be working. I thought
// I could get away with using just a single json file for both my python and javascript API test
// demos, but it seems like it will not work without more tinkering. 
// I have tried using fetch(), but it keeps giving me the ERR_INVALID_URL error, it might be because
// I am not using a live server, but I am using node to run my js app. So I am not sure why it is not 
// being read. 

// Next I will have to try using AJAX, or jQuery to be able to have my json file be read. We will see.

// or I could just relay the env method used by the API video and call it a day.


// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.messages.list({limit: 20})
//                .then(messages => messages.forEach(m => console.log(m.sid)));




fetch('./Cred.json')
      .then(response => response.json())
      .then(data => {



            // Download the helper library from https://www.twilio.com/docs/node/install
            // Find your Account SID and Auth Token at twilio.com/console
            // and set the environment variables. See http://twil.io/secure

            const accountSid = data.TWILIO_AUTH_TOKEN;
            console.log(accountSid);
            // const authToken = data[TWILIO_AUTH_TOKEN];
            // const client = require('twilio')(accountSid, authToken);

            // client.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
            //       .fetch()
            //       .then(message => console.log(message.to));

      })
      
      .catch(error => console.error(error));