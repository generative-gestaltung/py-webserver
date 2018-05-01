from websocket_server import WebsocketServer
import signal
import sys
from time import sleep, time
import json
from nodes import *
import datetime



WS_PORT = 8888


server = WebsocketServer(WS_PORT)



def new_client(client, server):
	print("New client connected and was given id %d" % client['id'])
	server.send_message_to_all("Hey all, a new client has joined us")


# Called for every client disconnecting
def client_left(client, server):
	print("Client(%d) disconnected" % client['id'])


# Called when a client sends a message
def message_received(client, server, message):
	global PATCH
	#if len(message) > 200:
	#	message = message[:200]+'..'
	#print("Client(%d) said: %s" % (client['id'], message))

	MSG = json.loads(message)

	if MSG["cmd"] == "SAVE" :
		file = open (MSG["data"], "w")
		file.write (json.dumps(PATCH))
		file.close()

	if MSG["cmd"] == "LOAD" :
		print (MSG["data"])

	'''
	if MSG["cmd"] == "PATCH" :
		PATCH = MSG["data"]
		for key in PATCH["nodes"]:
			if key not in PATCH_IMPL:
				PATCH_IMPL[key] = classes[PATCH["nodes"][key]["name"]]()
	'''


server.set_fn_new_client(new_client)
server.set_fn_client_left(client_left)
server.set_fn_message_received(message_received)
server.run_forever()
