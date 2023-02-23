# Download the helper library from https://www.twilio.com/docs/python/install
from Cred import *
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = TWILIO_ACCOUNT_SID
auth_token = TWILIO_AUTH_TOKEN
client = Client(account_sid, auth_token)

messages = client.messages.list(limit=20)


# Lists all the typed messages from the text conversation from Account Phone number
# check committance
for record in messages:
    print(record.body)