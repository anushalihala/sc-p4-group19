{"filter":false,"title":"body3Edge1.js","tooltip":"/body3Edge1/body3Edge1.js","undoManager":{"mark":68,"position":68,"stack":[[{"start":{"row":82,"column":4},"end":{"row":110,"column":8},"action":"remove","lines":["if(device == 'bodyTempSensor') {","        var temperature = jMessage['temperature'];","        if(temperature > 100) {","            msg['metric'] = 'temperature';","            msg['metricValue'] = temperature.toString();","            msg['device'] = device;","            sendMail = true;","        }","    } else if(device == 'pacemakerSensor') {","        var heartbeat = jMessage['heartbeat'];","        if(heartbeat > 70) {","            msg['metric'] = 'heartbeat';","            msg['metricValue'] = heartbeat.toString();","            msg['device'] = device;","            sendMail = true;","        }","    } else if(device == 'glucoseSensor') {","        var glucoseSensor = jMessage['glucoseSensor'];","        if(glucoseSensor > 6.5) {","            msg['metric'] = 'glucoseSensor';","            msg['metricValue'] = glucoseSensor.toString();","            msg['device'] = device;","            sendMail = true;","        }","    } else if(device == 'pulseOximeterSensor') {","        var pulseOximeter = jMessage['PulseOximeter'];","    }","    ","    else"],"id":2},{"start":{"row":82,"column":4},"end":{"row":82,"column":5},"action":"remove","lines":[" "]}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":26},"action":"remove","lines":["scalable"],"id":3},{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["b"]},{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":["o"]},{"start":{"row":25,"column":20},"end":{"row":25,"column":21},"action":"insert","lines":["d"]},{"start":{"row":25,"column":21},"end":{"row":25,"column":22},"action":"insert","lines":["y"]}],[{"start":{"row":25,"column":22},"end":{"row":25,"column":23},"action":"insert","lines":["3"],"id":4},{"start":{"row":25,"column":23},"end":{"row":25,"column":24},"action":"insert","lines":["E"]},{"start":{"row":25,"column":24},"end":{"row":25,"column":25},"action":"insert","lines":["d"]},{"start":{"row":25,"column":25},"end":{"row":25,"column":26},"action":"insert","lines":["g"]},{"start":{"row":25,"column":26},"end":{"row":25,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":25,"column":27},"end":{"row":25,"column":28},"action":"insert","lines":["1"],"id":5}],[{"start":{"row":67,"column":16},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":68,"column":0},"end":{"row":68,"column":8},"action":"insert","lines":["        "]},{"start":{"row":68,"column":8},"end":{"row":68,"column":9},"action":"insert","lines":["c"]}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":9},"action":"remove","lines":["c"],"id":7}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":9},"action":"insert","lines":["c"],"id":8},{"start":{"row":68,"column":9},"end":{"row":68,"column":10},"action":"insert","lines":["o"]},{"start":{"row":68,"column":10},"end":{"row":68,"column":11},"action":"insert","lines":["n"]},{"start":{"row":68,"column":11},"end":{"row":68,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":12},"action":"remove","lines":["cons"],"id":9},{"start":{"row":68,"column":8},"end":{"row":68,"column":15},"action":"insert","lines":["console"]}],[{"start":{"row":68,"column":15},"end":{"row":68,"column":16},"action":"insert","lines":["."],"id":10},{"start":{"row":68,"column":16},"end":{"row":68,"column":17},"action":"insert","lines":["l"]},{"start":{"row":68,"column":17},"end":{"row":68,"column":18},"action":"insert","lines":["o"]},{"start":{"row":68,"column":18},"end":{"row":68,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":68,"column":16},"end":{"row":68,"column":19},"action":"remove","lines":["log"],"id":11},{"start":{"row":68,"column":16},"end":{"row":68,"column":21},"action":"insert","lines":["log()"]}],[{"start":{"row":68,"column":20},"end":{"row":68,"column":22},"action":"insert","lines":["\"\""],"id":12}],[{"start":{"row":68,"column":21},"end":{"row":68,"column":22},"action":"insert","lines":["c"],"id":13},{"start":{"row":68,"column":22},"end":{"row":68,"column":23},"action":"insert","lines":["o"]},{"start":{"row":68,"column":23},"end":{"row":68,"column":24},"action":"insert","lines":["r"]},{"start":{"row":68,"column":24},"end":{"row":68,"column":25},"action":"insert","lines":["s"]},{"start":{"row":68,"column":25},"end":{"row":68,"column":26},"action":"insert","lines":["s"]},{"start":{"row":68,"column":26},"end":{"row":68,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":68,"column":26},"end":{"row":68,"column":27},"action":"remove","lines":["e"],"id":14},{"start":{"row":68,"column":25},"end":{"row":68,"column":26},"action":"remove","lines":["s"]},{"start":{"row":68,"column":24},"end":{"row":68,"column":25},"action":"remove","lines":["s"]},{"start":{"row":68,"column":23},"end":{"row":68,"column":24},"action":"remove","lines":["r"]},{"start":{"row":68,"column":22},"end":{"row":68,"column":23},"action":"remove","lines":["o"]}],[{"start":{"row":68,"column":22},"end":{"row":68,"column":23},"action":"insert","lines":["r"],"id":15},{"start":{"row":68,"column":23},"end":{"row":68,"column":24},"action":"insert","lines":["o"]},{"start":{"row":68,"column":24},"end":{"row":68,"column":25},"action":"insert","lines":["s"]},{"start":{"row":68,"column":25},"end":{"row":68,"column":26},"action":"insert","lines":["s"]},{"start":{"row":68,"column":26},"end":{"row":68,"column":27},"action":"insert","lines":["e"]},{"start":{"row":68,"column":27},"end":{"row":68,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":68,"column":28},"end":{"row":68,"column":29},"action":"insert","lines":[" "],"id":16},{"start":{"row":68,"column":29},"end":{"row":68,"column":30},"action":"insert","lines":["c"]},{"start":{"row":68,"column":30},"end":{"row":68,"column":31},"action":"insert","lines":["o"]},{"start":{"row":68,"column":31},"end":{"row":68,"column":32},"action":"insert","lines":["u"]},{"start":{"row":68,"column":32},"end":{"row":68,"column":33},"action":"insert","lines":["n"]},{"start":{"row":68,"column":33},"end":{"row":68,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":68,"column":34},"end":{"row":68,"column":35},"action":"insert","lines":["!"],"id":17}],[{"start":{"row":68,"column":37},"end":{"row":68,"column":38},"action":"insert","lines":[";"],"id":18}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":38},"action":"remove","lines":["console.log(\"crossed count!\");"],"id":19}],[{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"remove","lines":["    "],"id":20},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":67,"column":16},"end":{"row":68,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":63,"column":39},"end":{"row":64,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":64,"column":0},"end":{"row":64,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":58,"column":34},"end":{"row":59,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":59,"column":0},"end":{"row":59,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":10},"action":"insert","lines":["concat"],"id":47}],[{"start":{"row":59,"column":10},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":48},{"start":{"row":60,"column":0},"end":{"row":60,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":60,"column":4},"end":{"row":60,"column":34},"action":"insert","lines":["jsonArray1.concat(jsonArray2);"],"id":49}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["+"],"id":50}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"insert","lines":["."],"id":51}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["."],"id":52}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"insert","lines":["c"],"id":53}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"remove","lines":["c"],"id":54}],[{"start":{"row":58,"column":8},"end":{"row":58,"column":9},"action":"insert","lines":["."],"id":55},{"start":{"row":58,"column":9},"end":{"row":58,"column":10},"action":"insert","lines":["c"]},{"start":{"row":58,"column":10},"end":{"row":58,"column":11},"action":"insert","lines":["o"]},{"start":{"row":58,"column":11},"end":{"row":58,"column":12},"action":"insert","lines":["n"]}],[{"start":{"row":58,"column":9},"end":{"row":58,"column":12},"action":"remove","lines":["con"],"id":56},{"start":{"row":58,"column":9},"end":{"row":58,"column":12},"action":"insert","lines":["con"]}],[{"start":{"row":58,"column":12},"end":{"row":58,"column":13},"action":"insert","lines":["c"],"id":57},{"start":{"row":58,"column":13},"end":{"row":58,"column":14},"action":"insert","lines":["a"]}],[{"start":{"row":58,"column":9},"end":{"row":58,"column":14},"action":"remove","lines":["conca"],"id":58},{"start":{"row":58,"column":9},"end":{"row":58,"column":17},"action":"insert","lines":["concat()"]}],[{"start":{"row":58,"column":16},"end":{"row":58,"column":27},"action":"insert","lines":["append_Data"],"id":59}],[{"start":{"row":58,"column":28},"end":{"row":58,"column":52},"action":"remove","lines":["=(toString(append_Data))"],"id":60}],[{"start":{"row":58,"column":29},"end":{"row":59,"column":10},"action":"remove","lines":["","    concat"],"id":61}],[{"start":{"row":59,"column":4},"end":{"row":59,"column":34},"action":"remove","lines":["jsonArray1.concat(jsonArray2);"],"id":62}],[{"start":{"row":58,"column":4},"end":{"row":58,"column":8},"action":"remove","lines":["data"],"id":63},{"start":{"row":58,"column":4},"end":{"row":58,"column":15},"action":"insert","lines":["append_Data"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":5},"action":"insert","lines":["a"],"id":64},{"start":{"row":0,"column":5},"end":{"row":0,"column":6},"action":"insert","lines":["p"]},{"start":{"row":0,"column":6},"end":{"row":0,"column":7},"action":"insert","lines":["p"]},{"start":{"row":0,"column":7},"end":{"row":0,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":0,"column":4},"end":{"row":0,"column":8},"action":"remove","lines":["appe"],"id":65},{"start":{"row":0,"column":4},"end":{"row":0,"column":15},"action":"insert","lines":["append_Data"]}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["d"],"id":66},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["a"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["t"]},{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"remove","lines":["a"]}],[{"start":{"row":66,"column":33},"end":{"row":66,"column":37},"action":"remove","lines":["data"],"id":68},{"start":{"row":66,"column":33},"end":{"row":66,"column":44},"action":"insert","lines":["append_Data"]}],[{"start":{"row":68,"column":8},"end":{"row":68,"column":12},"action":"remove","lines":["data"],"id":69},{"start":{"row":68,"column":8},"end":{"row":68,"column":19},"action":"insert","lines":["append_Data"]}],[{"start":{"row":26,"column":37},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":70},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"insert","lines":["c"]}],[{"start":{"row":27,"column":1},"end":{"row":27,"column":2},"action":"insert","lines":["o"],"id":71},{"start":{"row":27,"column":2},"end":{"row":27,"column":3},"action":"insert","lines":["n"]},{"start":{"row":27,"column":3},"end":{"row":27,"column":4},"action":"insert","lines":["s"]},{"start":{"row":27,"column":4},"end":{"row":27,"column":5},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":5},"end":{"row":27,"column":6},"action":"insert","lines":[" "],"id":72},{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["t"]},{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["o"]}],[{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["S"],"id":73},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["i"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["n"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["k"]}],[{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":["T"],"id":74},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["o"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["p"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["u"]}],[{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"remove","lines":["u"],"id":75}],[{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["i"],"id":76},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["c"]}],[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":[" "],"id":77},{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["="]}],[{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":[" "],"id":78}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":27},"action":"insert","lines":["body3/'"],"id":79}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["'"],"id":80}],[{"start":{"row":27,"column":28},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":81}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":37},"action":"insert","lines":["const sinkTopic = scalable + 'sink/';"],"id":82}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":17},"action":"remove","lines":["toSinkTopic"],"id":83},{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["s"]},{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["a"]}],[{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"remove","lines":["a"],"id":84}],[{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["c"],"id":85},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["a"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["l"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["a"]},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["b"]}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":12},"action":"remove","lines":["scalab"],"id":86},{"start":{"row":27,"column":6},"end":{"row":27,"column":14},"action":"insert","lines":["scalable"]}],[{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["1"],"id":87}],[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":["1"],"id":88}],[{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["t"],"id":89},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["o"]}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":["s"],"id":90}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["D"],"id":91}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":["D"],"id":92}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["S"],"id":93}],[{"start":{"row":68,"column":22},"end":{"row":68,"column":23},"action":"remove","lines":["s"],"id":94}],[{"start":{"row":68,"column":22},"end":{"row":68,"column":23},"action":"insert","lines":["t"],"id":95},{"start":{"row":68,"column":23},"end":{"row":68,"column":24},"action":"insert","lines":["o"]},{"start":{"row":68,"column":24},"end":{"row":68,"column":25},"action":"insert","lines":["S"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":29},"end":{"row":7,"column":29},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1574346424464,"hash":"5ad44686231ea0ed80f64787fc451f0c200a5278"}