import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import os
import threading


def test (arg) :
   os.system("sudo /home/maxg/dev/tmp/final/main "+arg)


t = threading.Thread(target=test, args=["s"])
t.start()


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

class WSHandler(tornado.websocket.WebSocketHandler):
  def open(self):
    print 'New connection was opened'
    self.write_message("Welcome to my websocket!")

  def on_message(self, message):
    print message
    #self.write_message("You said: " + message)

    os.system("sudo killall main")
    t = threading.Thread(target=test, args=[message])
    t.start()
    #file = open("/home/maxg/dev/tmp/final/xxx", "w")
    #file.write (message)
    #file.close()

  def on_close(self):
    print 'Connection was closed...'

application = tornado.web.Application([
  (r'/ws', WSHandler),
  (r"/web/(.*)",tornado.web.StaticFileHandler, {"path": "./web"},),
])

if __name__ == "__main__":
  http_server = tornado.httpserver.HTTPServer(application)
  http_server.listen(8888)
  tornado.ioloop.IOLoop.instance().start()

