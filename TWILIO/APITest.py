# Download the helper library from https://www.twilio.com/docs/python/install
import os
import json
from twilio.rest import Client

# from Cred.py import *
# depracted use of Cred.py file, using a Cred.json file so both Python and JS can open read it

# needed to point the read json file onto the same folder directory first, and then call it
with open('./TWILIO/Cred.json') as f:
    credInfo = json.load(f)

    # Find your Account SID and Auth Token at twilio.com/console
    # and set the environment variables. See http://twil.io/secure
    account_sid = credInfo["TWILIO_ACCOUNT_SID"]
    auth_token = credInfo["TWILIO_AUTH_TOKEN"]
    client = Client(account_sid, auth_token)

    messages = client.messages.list(limit=20)


    # Lists all the typed messages from the text conversation from Account Phone number
    # check committance
    for record in messages:
        print(record.body)