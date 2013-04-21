module.exports = {
  channel_count: fillerMaker('channel_count'),
  reset: fillerMaker('reset'),
  find_serial_num: fillerMaker('find_serial_num'),
  get_nodes: fillerMaker('get_nodes'),
  flush: fillerMaker('flush'),
  monitor: fillerMaker('monitor'),
  monitor_timing_event: fillerMaker('monitor_timing_event'),
  monitor_next_timing_event: fillerMaker('monitor_next_timing_event'),
  command: fillerMaker('command'),
  command_timing_event: fillerMaker('command_timing_event'),
  command_next_timing_event: fillerMaker('command_next_timing_event')
}

function fillerMaker (funcName) {
  return function filler (options, callback) {
    if (!callback) {
      callback = options;
    }
    console.log('running', funcName);
    callback(null, '1dummydata');
  };
}
