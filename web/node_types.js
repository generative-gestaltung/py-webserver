var NODE_TYPES = {

    "inputs" : {
      "encoders":{
        name: "encoders",
        inputs: [
          {name:"led0", type:"xxx"}, {name:"led1", type:"xxx"}, {name:"led2", type:"xxx"}, {name:"led3", type:"xxx"},
          {name:"led4", type:"xxx"}, {name:"led5", type:"xxx"}, {name:"led6", type:"xxx"}, {name:"led7", type:"xxx"},
          {name:"led8", type:"xxx"}, {name:"led9", type:"xxx"}, {name:"led10", type:"xxx"}, {name:"led11", type:"xxx"},
          {name:"led12", type:"xxx"}, {name:"led13", type:"xxx"}, {name:"led14", type:"xxx"}, {name:"led15", type:"xxx"}
        ],
        outputs: [
          {name:"v0", type:"xxx"}, {name:"v1", type:"xxx"}, {name:"v2", type:"xxx"}, {name:"v3", type:"xxx"},
          {name:"v4", type:"xxx"}, {name:"v5", type:"xxx"}, {name:"v6", type:"xxx"}, {name:"v7", type:"xxx"},
          {name:"v8", type:"xxx"}, {name:"v9", type:"xxx"}, {name:"v10", type:"xxx"}, {name:"v11", type:"xxx"},
          {name:"v12", type:"xxx"}, {name:"v13", type:"xxx"}, {name:"v14", type:"xxx"}, {name:"v15", type:"xxx"}
        ]
      },
      "button_in":{
        name: "button_in",
        inputs: [],
        outputs: [{name:"button0", type:"frt"}, {name:"button1", type:"frt"}, {name:"button2", type:"frt"}, {name:"button3", type:"frt"}]
      },
      "trigger_in":{
        name: "trigger_in",
        inputs: [],
        outputs: [{name:"tr0", type:"frt"}, {name:"tr1", type:"frt"}, {name:"tr2", type:"frt"}, {name:"tr3", type:"frt"}]
      },
    },
    "sources": {
      "lfo":{
        name: "lfo",
        inputs: [{name:"freq", type:"frt"}, {name:"reset", type:"trg"}],
        outputs: [{name:"sin", type:"frt"}, {name:"saw", type:"frt"}, {name:"ramp", type:"frt"}, {name:"sq", type:"frt"}]
      },
      "envelope":{
        name: "envelope",
        inputs: [{name:"trigger", type:"trg"}],
        outputs: [{name:"value", type:"frt"}]
      },
      "const":{
        name: "const",
        inputs: [{name:"value", type:"usr"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "clock":{
        name: "clock",
        inputs: [{name:"speed", type:"frt"}, {name:"phase", type:"frt"}, {name:"reset", type:"trg"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "noise":{
        name: "noise",
        inputs: [],
        outputs: [{name:"out", type:"frt"}]
      },
      "counter":{
        name: "counter",
        inputs: [{name:"trigger", type:"frt"}, {name:"reset", type:"frt"}, {name:"max", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      }

    },
    "operators" : {
      "map":{
        name: "map",
        inputs: [{name:"in", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "sample_hold":{
        name: "sample_hold",
        inputs: [{name:"value", type:"frt"}, {name:"trigger", type:"trg"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "scale":{
        name: "scale",
        inputs: [{name:"in", type:"frt"}, {name:"scale", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "clockdivider":{
        name: "clockdivider",
        inputs: [{name:"in", type:"frt"}, {name:"divide", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "add":{
        name: "add",
        inputs: [{name:"in0", type:"frt"}, {name:"in1", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "demultiplex":{
        name: "demultiplex",
        inputs: [{name:"in0", type:"frt"},{name:"in1", type:"frt"},{name:"in2", type:"frt"}, {name:"in3", type:"frt"},
                 {name:"in4", type:"frt"},{name:"in5", type:"frt"},{name:"in6", type:"frt"}, {name:"in7", type:"frt"},
                 {name:"in8", type:"frt"},{name:"in9", type:"frt"},{name:"in10", type:"frt"}, {name:"in11", type:"frt"},
                 {name:"in12", type:"frt"},{name:"in13", type:"frt"},{name:"in14", type:"frt"}, {name:"in15", type:"frt"},
                 {name:"select", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "demultiplex4":{
        name: "demultiplex4",
        inputs: [{name:"in0", type:"frt"},{name:"in1", type:"frt"},{name:"in2", type:"frt"}, {name:"in3", type:"frt"},
                 {name:"select", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "demultiplex5":{
        name: "demultiplex5",
        inputs: [{name:"in0", type:"frt"},{name:"in1", type:"frt"},{name:"in2", type:"frt"}, {name:"in3", type:"frt"},
                 {name:"in4", type:"frt"},{name:"select", type:"frt"}],
        outputs: [{name:"out", type:"frt"}]
      },
      "multiplex":{
        name: "multiplex",
        inputs: [{name:"in0", type:"frt"},{name:"select", type:"frt"}],
        outputs:[{name:"out0", type:"frt"},{name:"out1", type:"frt"},{name:"out2", type:"frt"}, {name:"out3", type:"frt"},
                 {name:"out4", type:"frt"},{name:"out5", type:"frt"},{name:"out6", type:"frt"}, {name:"out7", type:"frt"},
                 {name:"out8", type:"frt"},{name:"out9", type:"frt"},{name:"out10", type:"frt"}, {name:"out11", type:"frt"},
                 {name:"out12", type:"frt"},{name:"out13", type:"frt"},{name:"out14", type:"frt"}, {name:"out15", type:"frt"},
                ]
      }
    },
    "outputs" : {
      "cv_out":{
        name: "cv_out",
        inputs: [{name:"cv0", type:"frt"}, {name:"cv1", type:"frt"}, {name:"cv2", type:"frt"}, {name:"cv3", type:"frt"}],
        outputs: []
      },
      "trigger_out":{
        name: "trigger_out",
        inputs: [{name:"tr0", type:"frt"}, {name:"tr1", type:"frt"}, {name:"tr2", type:"frt"}, {name:"tr3", type:"frt"}],
        outputs: []
      },
      "scope":{
        name: "scope",
        inputs: [{name:"value", type:"frt"}],
        outputs: [{name:"scope", type:"guiTxt"}]
      },
      "audio_test_gen":{
        name: "audio_test_gen",
        inputs: [{name:"freq", type:"frt"}],
        outputs: []
      }
    }
};



var Const = function() {

}

Const.prototype.init = function () {

}

Const.prototype.update = function (dt) {
  this.out = this.value;
}

var Lfo = function() {
  this.phase = 0;

}

Lfo.prototype.init = function () {

}

Lfo.prototype.update = function (dt) {

  this.sin = Math.sin (this.phase)*0.5+0.5;
  this.tri = this.sin;
  this.sq = this.sin;


  this.phase += dt*this.freq;
}

var Scope = function() {

}

Scope.prototype.init = function () {

}

Scope.prototype.update = function (dt) {
  this.scope = this.value;
}

var Add = function() {

}

Add.prototype.init = function () {

}

Add.prototype.update = function (dt) {
  this.out = this.in0 + this.in1;
}

var Clock = function() {

}

Clock.prototype.init = function () {
  this.phase = 0;
  this._TRIGGER_INPUTS.reset.onRisingEdge = ()=> {
    console.log("reset");
  };
}


Clock.prototype.update = function (dt) {

}


/*
var Clock = function() {

}

Clock.prototype.update = function (dt) {

}
*/
// TODO dynamic class and file management
var NODE_IMPL = {

  "const" : Const,
  "lfo" : Lfo,
  "scope" : Scope,
  "add" : Add,
  "clock" : Clock

};

/*
  "const":{
    file : "simple_nodes.js",
    className : "Const"
  },
  "lfo":{
    file : "lfo.js",
    className : "Lfo"
  },
  "clock":{

  },
  "scale":{

  },
  "map":{

  }
}
*/
