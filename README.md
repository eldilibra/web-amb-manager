web-amb-manager
===============

A RESTful api layer wrapping amb-manager-js

##How it works##
The API is a work in progress, and stands as follows:

* /monitor
  * params: ?channel=&node_addr=&relative_addr=&timestamp=
  * response: data for the selected node

* /monitor/timingevent
  * params: ?channel=&node_addr=&relative_addr=&timestamp=&event_time=
  * response: data for the selected node

* /monitor/next/timingevent
  * params: ?channel=&node_addr=&relative_addr=&timestamp=
  * response: data for the selected node

More to come soon!

**Note that despite the fact that the library this is built on doesn't exist yet,**
**you can still play with it locally due to the fake-amb-manager it currently boasts :~)**
