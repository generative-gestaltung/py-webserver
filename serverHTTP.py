import http.server
import signal
import sys
from threading import Thread, Timer
from time import sleep, time
import json
from nodes import *
import datetime
import socketserver



HTTP_PORT = 8001


Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", HTTP_PORT), Handler)






print ("serving at port", HTTP_PORT)
httpd.serve_forever()

