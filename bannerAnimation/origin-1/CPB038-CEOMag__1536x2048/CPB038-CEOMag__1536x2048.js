(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Asset1 = function() {
	this.initialize(img.Asset1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1443,1110);


(lib.Asset2 = function() {
	this.initialize(img.Asset2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1443,1110);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SQUARE_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F6F7").s().p("Ax8N7IAA71MAj5AAAIAAb1g");
	this.shape.setTransform(42.875,193.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SQUARE_2, new cjs.Rectangle(-72,104,229.8,178.2), null);


(lib.SQUARE_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F6F7").s().p("AzBNmIAA7LMAmDAAAIAAbLg");
	this.shape.setTransform(110.15,151.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SQUARE_1, new cjs.Rectangle(-11.6,64.1,243.5,173.9), null);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGVBRQgHgIAAgMIAAg+IgTAAIAAgVIATAAIAAgXIAWgLIAAAiIAXAAIAAAVIgXAAIAAA5QAAANALAAQAHAAAJgGIACAAIgFAVIgBAAQgHAFgNAAQgLAAgHgIgADzBLQgRgQAAgaQAAgbARgPQAQgPAZAAQAXAAAQATIAAAAIgNAOIAAAAQgMgLgPAAQgPAAgKAJQgJAKAAAQQAAAPAJAKQAKAKAPAAQAPAAAMgNIAAAAIANAPIAAABQgQASgXAAQgZAAgQgOgAhyBHQAAgJAGgEQAGgEAIAAQAJAAAFADIAAgGQAAgNgMAAQgHAAgHAFIgDgHQAHgDALAAQASgBAAASIAAAlIgHAAIAAgHQgHAIgKAAQgRAAAAgRgAhqBGQAAAMAKAAQAKAAAGgJIAAgKQgGgDgIAAQgMAAAAAKgAjzBSQgHgIAAgOQAAgMAGgIQAGgHAKAAQAKAAAGAHQAFAHAAAMIAAAEIgkAAQABASAOAAQAHAAAIgEIAEAFQgLAGgJAAQgJAAgFgGgAjzA4IAdAAQgBgRgOAAQgMAAgCARgAkWBMIAAgkIgHAAIAAgGIAHAAIAAgRIAHgEIAAAVIAOAAIAAAGIgOAAIAAAjQAAAGAGAAQAEAAADgCIAAAHQgFACgFAAQgKAAAAgMgAlLBUQgFgEAAgJQAAgJAGgEQAGgEAIAAQAJAAAFADIAAgGQAAgNgMAAQgIAAgGAFIgEgHQAIgDAKAAQAUgBAAASIAAAlIgIAAIAAgHQgHAIgKAAQgHAAgFgEgAlJBGQAAAMALAAQAKAAAGgJIAAgKQgHgDgHAAQgNAAAAAKgAHTBYIAAhuIAWAAIAABugAFQBYIAAhuIAXAAIAABugAAbBXIgOgcIgJANIAAAPIgHAAIAAhGIAHgEIAAAwIAUgbIAIAAIgOASIARAjgAgZBXIAAgfQAAgRgMAAQgOAAAAARIAAAfIgIAAIAAg1IAIAAIAAAGQAGgHAJAAQATgBAAAWIAAAhgAiqBXIAAhHIAaAAQAUAAAAASQAAAKgLAEQAOADAAAPQAAAVgXAAgAiiBPIASAAQAPABAAgNQAAgOgPgBIgSAAgAiiAtIARAAQAMAAAAgLQAAgLgLAAIgSAAgAluBXIgTg1IAIAAIAPAsIAOgsIAIAAIgTA1gAmTBXIAAg1IAIAAIAAA1gAm7BXIAAg1IAIAAIAAAGQAFgHAIAAIAJABIgCAIQgEgCgFAAQgLAAAAAPIAAAggAn2BXIAAhHIAaAAQALAAAGAEQAGAGAAAKQAAALgGAGQgHAGgLAAIgSAAIAAAcgAnvA0IASAAQAQAAAAgPQAAgOgPAAIgTAAgAmVASQAAgFAGAAQAFAAAAAFQAAAGgFAAQgGAAAAgGgAHdgoQgbgdgmAAQglAAgcAdIgaAAQAPgWAYgNQAZgOAbAAQAcABAZAOQAYAMAOAWg");
	this.shape.setTransform(9.725,-82.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.LOGO, new cjs.Rectangle(-40.6,-91.6,100.7,17.89999999999999), null);


(lib.IMG_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.setTransform(-221,-176,0.3457,0.3457);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IMG_2, new cjs.Rectangle(-221,-176,498.9,383.8), null);


(lib.IMG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Asset1();
	this.instance.setTransform(-231,-255,0.3516,0.3516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.IMG_1, new cjs.Rectangle(-231,-255,507.4,390.3), null);


(lib.ENDFRAME_LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai/B2QgbgaAAgpQAAgqAbgYQAagYAmAAQAlAAAZAeIABABIgVAXIAAgBQgUgSgXAAQgXAAgQAPQgPAPAAAZQAAAYAPAQQAQAQAXAAQAXAAAUgUIAAAAIAVAYIgBABQgZAdglAAQgmAAgagXgABACAQgLgNAAgUIAAhiIgeAAIAAghIAeAAIAAgjIAjgTIAAA2IAkAAIAAAhIgkAAIAABcQAAAUARAAQAMAAAOgJIACgBIgIAhIgBABQgNAIgSAAQgSgBgLgMgAChCKIAAiuIAkAAIAACugAgsCKIAAiuIAkAAIAACugACyhAQgrgtg8AAQg7AAgqAtIgqAAQAYgjAmgUQAmgVArAAQAsAAAnAVQAmAVAXAig");
	this.shape.setTransform(-68.925,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDFRAME_LOGO, new cjs.Rectangle(-90.8,-14.1,43.8,28.299999999999997), null);


(lib.ENDFRAME_COPYa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAyBBQAVAAAHgHQAHgGgBgPIAAgFQgKANgPAAQgNAAgJgLQgIgKAAgWQAAgUAJgNQAJgLAOAAQAOAAAJALIAAgJIANAAIAABLQAAAUgKAJQgKAKgXAAgAApACQAAAPAFAJQAGAJAKgBQANAAAJgMIAAgpQgIgNgOAAQgVAAAAAigAgCArIAAgwQAAgbgUAAQgJAAgGAHQgGAGAAAOIAAAwIgMAAIAAhTIAMAAIAAAKQAIgMAQAAQAcAAAAAjIAAAygAhdArIAAhTIAMAAIAABTgAhdg6QgDgDAAgDQAAgEADgCQACgDAEAAQAEAAACADQADACAAAEQAAADgDADQgCADgEgBQgEABgCgDg");
	this.shape.setTransform(-67.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDFRAME_COPYa, new cjs.Rectangle(-77.1,-7.4,19.299999999999997,14.8), null);


(lib.ENDFRAME_COPY2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AJEAxIAHgJQALAJAMAAQAHAAAEgCQAGgDAAgIQAAgFgEgEIgCgBIgOgHQgNgGgFgFQgGgFAAgJQAAgKAIgGQAHgGAMAAQAGAAAFACQAJACAHAFIgHAJQgEgDgFgCQgGgCgGAAQgHAAgDADQgEADAAAEQAAAFAEADQADADAMAFIAHAEQAIADADADQAHAGAAALQAAALgJAHQgEADgFABQgFACgGAAQgQAAgOgLgAGjAyQgLgMAAgXQAAgTAKgMQAJgMAQAAQAQAAAJAMQAIALAAASIAAAHIg4AAQABANAGAIQAGAIAKAAQALAAANgIIAFAJIgOAHQgHADgJAAQgOAAgJgKgAHRAKQgBgbgWAAQgUAAgCAbIAtAAIAAAAgADxAoIAAg4IgKAAIAAgKIAKAAIAAgaIANgHIAAAhIAVAAIAAAKIgVAAIAAA2QAAAGABACQACADAFAAQAGAAAGgDIgBALQgHADgIAAQgRAAAAgUgABtArQgMgQAAgZQAAgZANgQQANgRAUAAQAXAAANASIgKAIQgGgIgGgDQgGgDgJAAQgOAAgJANQgKANAAATQAAAVAKANQAJANAPAAQAQAAALgPIAJAIQgOATgXAAQgUAAgNgRgAg7A2QgIgHAAgPQAAgNAJgHQAJgHAOAAQAMAAAJAFIAAgKQAAgRgSAAQgMAAgLAGIgFgKQANgHAQAAQAdAAAAAcIAAA6IgMAAIAAgLQgLANgPAAQgMAAgHgGgAgyATQgFAFAAAIQAAASARAAQAPAAAJgNIAAgRQgJgFgNAAQgJAAgFAEgAiKAwIAAAKIgMAAIAAhuIAMgHIAAAsQALgNAOAAQAOAAAIALQAIALAAAUQAAAWgJAMQgJAMgNAAQgOAAgKgMgAiKgFIAAApQAIANAPAAQAVAAAAgjQAAgOgGgJQgGgIgKAAQgMAAgKAMgAjqAwQgKgMAAgUQAAgUAKgMQALgMAQAAQAQAAAKALQAKAMAAAUQAAAVgLAMQgKAMgQAAQgQAAgKgMgAjhgJQgHAJAAAPQAAARAHAIQAGAJALAAQAMAAAGgJQAHgIAAgRQAAgPgHgJQgGgIgMAAQgLAAgGAIgAl2ArQgMgQAAgZQAAgZANgQQANgRAUAAQAXAAANASIgKAIQgGgIgGgDQgGgDgJAAQgOAAgJANQgKANAAATQAAAVAKANQAJANAPAAQAdAAAAgiIAAgBIgVAAIAAgLIAhAAIAAALQAAAWgMANQgLAMgTAAQgUAAgNgRgAo6AwQgLgMAAgUQAAgUALgMQAKgMAQAAQAQAAAKALQALAMAAAUQAAAVgLAMQgKAMgRAAQgQAAgJgMgAoygJQgHAJAAAPQAAARAHAIQAHAJALAAQALAAAHgJQAGgIAAgRQAAgPgGgJQgHgIgLAAQgLAAgHAIgAImA6IAAgyQAAgZgUAAQgJAAgGAGQgGAHAAAMIAAAyIgMAAIAAhUIAMAAIAAALQAIgNAQAAQAdAAAAAiIAAA0gAFKA6IAAgJIAuhBIgqAAIAAgKIA4AAIAAAJIguBBIAuAAIAAAKgAEpA6IAAhUIAMAAIAABUgADIA6IAAhUIANAAIAABUgAAWA6IAAhuIANgHIAAB1gAkWA6IAAhuIANgHIAAB1gAnnA6IAAhUIAMAAIAAALQADgGAGgDQAGgEAGAAQAJAAAEADIgDAMQgFgDgHAAQgJAAgFAGQgFAHAAALIAAAygApyA6IAAhKIgMAAIAAgKIAMAAIAAgLQAAgVAUAAQAGAAAFABIAAAMQgFgCgFAAQgJAAAAAJIAAAMIARAAIAAAKIgRAAIAABKgAEpgrQgDgDAAgDQAAgEADgDQACgCAEAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgEAAgCgCgADIgrQgCgDAAgDQAAgEACgDQADgCAEAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgEAAgDgCg");
	this.shape.setTransform(-112.125,19.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDFRAME_COPY2, new cjs.Rectangle(-176,13.5,127.8,11.899999999999999), null);


(lib.ENDFRAME_COPY1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADHA2QgJgHAAgPQAAgNAKgHQAJgHANAAQAMAAAKAFIAAgKQAAgRgTAAQgMAAgLAGIgEgKQAMgHAQAAQAeAAgBAcIAAA6IgLAAIAAgLQgMANgPAAQgLAAgHgGgADPATQgFAFAAAIQAAASARAAQAPAAAKgNIAAgRQgKgFgNAAQgJAAgFAEgAgNAyQgKgMgBgXQAAgTAKgMQAKgMAOAAQAQAAAKAMQAIALAAASIAAAHIg4AAQACANAFAIQAGAIAKAAQALAAANgIIAFAJIgOAHQgHADgJAAQgNAAgKgKgAAhAKQgBgbgWAAQgTAAgDAbIAtAAIAAAAgAhDAoIAAg4IgKAAIAAgKIAKAAIAAgaIANgHIAAAhIAVAAIAAAKIgVAAIAAA2QAAAGACACQABADAGAAQAGAAAFgDIAAALQgIADgIAAQgRAAAAgUgAiXA2QgIgHgBgPQAAgNAKgHQAJgHAOAAQAMAAAJAFIAAgKQAAgRgSAAQgNAAgLAGIgEgKQANgHAPAAQAeAAAAAcIAAA6IgMAAIAAgLQgLANgQAAQgLAAgHgGgAiOATQgFAFgBAIQAAASARAAQAQAAAJgNIAAgRQgJgFgNAAQgKAAgEAEgAGdA6IgWgtIgOAUIAAAZIgMAAIAAhuIAMgHIAABNIAfgsIAOAAIgXAdIAbA3gAFNA6IAAgyQgBgZgTAAQgKAAgFAGQgHAHAAAMIAAAyIgLAAIAAhUIALAAIAAALQAJgNAPAAQAeAAgBAiIAAA0gABnA6IAAhwIAqAAQAOAAAHAHQAJAHAAAOQAAARgQAGQAWAFAAAWQAAAiglAAgAB0AuIAdAAQAXAAAAgVQAAgKgGgGQgHgGgLAAIgcAAgAB0gHIAbAAQAUAAAAgSQAAgSgTAAIgcAAgAjPA6IgfhUIAOAAIAVBCIABAEIAXhGIAMAAIgdBUgAkMA6IAAhUIAMAAIAABUgAlNA6IAAhUIAMAAIAAALQADgGAFgDQAGgEAHAAQAJAAAEADIgDAMQgFgDgIAAQgJAAgEAGQgFAHAAALIAAAygAmpA6IAAhwIAqAAQAQAAAJAIQALAJAAARQAAAQgLAIQgKAJgRAAIgbAAIAAAtgAmcACIAbAAQAZAAABgWQAAgXgZAAIgcAAgAkMgrQgDgDAAgDQAAgEADgDQACgCAEAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgEAAgCgCg");
	this.shape.setTransform(-0.6,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENDFRAME_COPY1, new cjs.Rectangle(-43.2,-6,85.2,12), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAhQgLgLAAgWQAAgSAJgMQAKgLANAAQAQAAAJALQAIALAAASIAAAFIg2AAQABANAGAIQAGAHAJAAQALAAAMgHIAFAIQgIAFgGACQgHACgIAAQgMAAgJgJgAAWgEQgBgbgVAAQgTAAgCAbIArAAIAAAAg");
	this.shape.setTransform(44.125,219.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApIAAhQIALAAIAAAKQADgFAFgDQAFgDAGgBQAJAAAEACIgDAMQgFgDgHAAQgIAAgEAGQgFAHAAALIAAAvg");
	this.shape_1.setTransform(37.225,219.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAgQgKgMAAgUQAAgTAKgMQAKgKAOAAQAPAAAKAKQALALAAAUQAAAUgLALQgKALgPAAQgPAAgJgKgAgQgXQgGAIgBAPQABAQAGAIQAGAIAKAAQALAAAGgIQAGgIAAgQQAAgPgGgIQgGgIgLAAQgKAAgGAIg");
	this.shape_2.setTransform(29.35,219.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqApIAAguQAAgOgFgGQgEgFgJgBQgSABAAAZIAAAuIgLAAIAAguQAAgZgSgBQgSABAAAZIAAAuIgLAAIAAhQIALAAIAAAKQAIgMANAAQAQABAFAOQAJgOAQgBQAbABAAAhIAAAwg");
	this.shape_3.setTransform(18.4,219.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAnIAAg2IgKAAIAAgKIAKAAIAAgZIALgGIAAAfIAUAAIAAAKIgUAAIAAA0QAAAGABACQACACAFAAQAGAAAFgCIgBAKQgGACgJAAQgOAAAAgSg");
	this.shape_4.setTransform(4.8,217.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeAIIAAgwIALAAIAAAuQAAAZATABQAJAAAFgHQAGgGAAgNIAAguIALAAIAABQIgLAAIAAgKQgIALgOAAQgcAAAAghg");
	this.shape_5.setTransform(-2.325,219.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAgQgLgMABgUQAAgTAKgMQAJgKAPAAQAPAAAKAKQALALAAAUQAAAUgLALQgKALgPAAQgPAAgJgKgAgQgXQgGAIgBAPQABAQAGAIQAGAIAKAAQALAAAGgIQAHgIgBgQQABgPgHgIQgGgIgLAAQgKAAgGAIg");
	this.shape_6.setTransform(-11.05,219.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAwQgJgLAAgVQAAgTAJgMQAJgLANAAQAMAAAKAKIAAgiIAMgGIAABwIgMAAIAAgKQgLALgNAAQgNAAgHgJgAgUAQQAAAPAFAIQAGAIAJAAQALAAAKgLIAAgoQgIgMgNAAQgUAAAAAgg");
	this.shape_7.setTransform(-23.975,217.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUApIAAguQAAgZgUgBQgIAAgFAHQgGAGAAANIAAAuIgLAAIAAhQIALAAIAAAKQAIgMAOAAQAcABAAAhIAAAwg");
	this.shape_8.setTransform(-32.475,219.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFA4IAAhQIALAAIAABQgAgFgpQgDgDAAgDQAAgDADgDQACgCADAAQADAAADACQACADAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_9.setTransform(-38.8,217.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA2IAAhrIA/AAIAAALIgzAAIAAAkIAdAAIAAAKIgdAAIAAAyg");
	this.shape_10.setTransform(-44.65,218.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ArtCWIAAkrIXbAAIAAErg");
	this.shape_11.setTransform(-0.4501,218.3441,1.0493,1.4996);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-79.1,195.9,157.39999999999998,45), null);


(lib.COPY_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtBDIAAgCQAqgyAJgPQANgRAAgOQAAgNgHgGQgHgIgLAAQgLAAgIAFQgJAGgIALIgCgBQAUgdAYABQAOgBAJAJQAIAHAAAOQAAAOgPAUIgyA6IAuAAQAPAAAIgGQAFgGAEgMIACABIgFAPQgDALgCADQgCAFgFAAg");
	this.shape.setTransform(-41.325,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUBDIgSgBIgRABIgEAAIAAgCIAEAAQALAAAAgOIAAhZQAAgKgDgCQgDgDgLADIgBgCQAQgEAMgJIACAAIAAB0QAAAOAMAAIADAAIAAACg");
	this.shape_1.setTransform(-49.6,92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA6QgMgJAAgOQAAgWAdgNQgYgMAAgWQAAgOAJgJQAKgJAQAAQAQAAAKAHQAKAIAAAMQAAAUgaANQAQAGAHAHQAKAKAAAPQAAAQgLAJQgMAKgSAAQgSAAgMgJgAgeAiQAAANAIAIQAJAJAOAAQAOAAAJgIQAJgHAAgMQAAgPgOgJIgOgHIgOgGQgVAKAAAYgAgUg4QgHAHAAAKQAAANALAIQAFAEARAHQATgKAAgVQAAgLgHgHQgIgHgLAAQgLAAgIAHg");
	this.shape_2.setTransform(-57.625,92.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATBDIgSgBIgQABIgDAAIAAgCIADAAQALAAAAgOIAAhZQAAgKgDgCQgEgDgLADIAAgCQAQgEANgJIABAAIAAB0QAAAOALAAIAEAAIAAACg");
	this.shape_3.setTransform(-65.85,92.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgTAMgNQANgNASAAQAOAAAIAHQAIAHAAAMIAAAEIg8AAQgBAFgBAGQAAASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgLgLgAgOgjQgHAGgEALIAwAAIAAgDQAAgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_4.setTransform(-77.8,94.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbAiQgLgLAAgVQAAgUAOgNQAOgNASAAQALAAAJADQAKAEAAAFQAAAGgGAAQgDAAgDgCIgEgFQgGgIgLAAQgNAAgKALQgJALAAASQAAARAKALQAKALASAAQAOAAANgMIABABQgSASgTAAQgSAAgLgLg");
	this.shape_5.setTransform(-86.875,94.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_6.setTransform(-96.925,94.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASBDIgSgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAIgFIACAAIAABIQAAAOAMAAIADAAIAAACgAgIg4QAAgJAIAAQAKAAAAAJQAAAKgKAAQgIAAAAgKg");
	this.shape_7.setTransform(-105,92.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQgBgIgHgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGAMAAQAMAAAJAFIABgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQAMAEAFAEQAHAHABAKQAAAMgJAHQgIAHgMAAQgMAAgLgFg");
	this.shape_8.setTransform(-111.6,94.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAvBDIgSgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgpQAAgXgVAAQgMAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgRgBIgSABIgEAAIAAgCIAEAAQALAAAAgOIAAhfQAAgOgLABIgBAAIAAgCIABAAQANgBAJgFIABAAIAAA+QAMgMAGgEQAGgCAIAAQAMgBAHAIQAIAHAAANIAAAtQAAAOALAAIAEAAIAAACg");
	this.shape_9.setTransform(-125.6,92.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQgBgIgHgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGAMAAQAMAAAJAFIABgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQAMAEAFAEQAHAHABAKQAAAMgJAHQgIAHgMAAQgMAAgLgFg");
	this.shape_10.setTransform(-135,94.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARBDIgRgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgzQAAgOgMAAIgBAAIAAgCIABAAQANAAAJgFIABAAIAABIQAAAOALAAIAEAAIAAACgAgJg4QAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_11.setTransform(-141.4,92.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFAtIgQgBIgRABIgEAAIAAgCIAEAAQALAAgBgOIAAgzQABgOgLAAIgCAAIAAgCIACAAQAMAAAJgFIABAAIAAAOQAOgOALAAQAGAAAEABQAEACAAAEQAAAFgGAAQgDAAgEgCQgFgDgDAAQgHAAgLAKIAAA3QAAAOALAAIADAAIAAACg");
	this.shape_12.setTransform(-147.55,94.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAmQgHgHAAgOIAAgsQAAgPgMAAIgEAAIAAgBIAEAAIAWgBIABABIAAA5QABAZARgBQANABAPgOIAAg0QAAgPgLAAIgDAAIAAgBIADAAIAXgBIABABIAABHQAAAOALAAIADAAIAAACIgDAAIgWABIgCgBIAAgRQgKALgIADQgFAEgIAAQgMAAgHgHg");
	this.shape_13.setTransform(-156.85,94.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAhQgOgNAAgUQAAgSAOgNQANgNASAAQAUAAANANQAMANAAASQAAAUgNANQgMAMgUAAQgSAAgNgMgAgXgeQgHAKAAARQgBAUAKAMQAJANAOAAQAOAAAIgLQAIgKAAgRQAAgUgJgMQgKgNgOAAQgNAAgJALg");
	this.shape_14.setTransform(-167.5,94.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARBDIgRgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAhfQAAgOgLABIgCAAIAAgCIACAAQAMgBAIgFIACAAIAAB0QAAAOALAAIAEAAIAAACg");
	this.shape_15.setTransform(-175.325,92.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAABDIgOgBIgSABIgDAAIAAgCIADAAQAMAAAAgOIAAhEIgOAAIAAgDIAOAAIAAgKQAAgQAIgKQAJgJANAAQAKAAAIACQAIAEAAAEQAAAHgGAAQgCAAgCgCIgEgGQgFgHgHAAQgJABgEAGQgFAHAAAMIAAARIAZAAIAAADIgZAAIAABEQAAAOAKAAIAEAAIAAACg");
	this.shape_16.setTransform(-179.675,92.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfAhQgOgNAAgUQAAgSAOgNQANgNASAAQAUAAANANQAMANAAASQAAAUgNANQgMAMgUAAQgSAAgNgMgAgXgeQgHAKAAARQgBAUAKAMQAJANAOAAQAOAAAIgLQAIgKAAgRQAAgUgJgMQgKgNgOAAQgNAAgJALg");
	this.shape_17.setTransform(-5.95,71.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIACgBQAIgCAGgGQAHgHAEgJIABAAIAAAXIAaAAIAAAEIgaAAIAABAQAAAPAKAAQAIAAAKgHIABACQgOAKgLAAQgGAAgFgEg");
	this.shape_18.setTransform(-14.25,70.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQAAgIgIgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGALAAQANAAAJAFIABgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgJAAQgHAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQALAEAGAEQAIAHAAAKQgBAMgHAHQgJAHgMAAQgMAAgLgFg");
	this.shape_19.setTransform(-26.2,71.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIADgBQAGgCAHgGQAHgHADgJIACAAIAAAXIAbAAIAAAEIgbAAIAABAQAAAPAKAAQAIAAAKgHIABACQgPAKgKAAQgGAAgFgEg");
	this.shape_20.setTransform(-33.1,70.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_21.setTransform(-41.725,71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgTAMgNQANgNASAAQAOAAAIAHQAIAHAAAMIAAAEIg8AAQgBAFgBAGQAAASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgRAAgMgLgAgNgjQgIAGgEALIAwAAIAAgDQAAgJgFgFQgFgGgKAAQgJAAgHAGg");
	this.shape_22.setTransform(-51.6,71.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARBDIgRgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgzQAAgOgMAAIgBAAIAAgCIABAAQANAAAJgFIABAAIAABIQAAAOALAAIAEAAIAAACgAgJg4QAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_23.setTransform(-58.8,69.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARBDIgRgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAhfQAAgOgLABIgCAAIAAgCIACAAQAMgBAIgFIACAAIAAB0QAAAOALAAIAEAAIAAACg");
	this.shape_24.setTransform(-63.975,69.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAiQgLgLAAgVQAAgUAOgNQAOgNASAAQALAAAJADQAKAEAAAFQAAAGgGAAQgDAAgDgCIgEgFQgGgIgLAAQgNAAgKALQgJALAAASQAAARAKALQAKALASAAQAOAAANgMIABABQgSASgTAAQgSAAgLgLg");
	this.shape_25.setTransform(-70.875,71.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAFAtIgRgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgBAAIAAgCIABAAQANAAAJgFIACAAIAAAOQAOgOALAAQAFAAAEABQAEACAAAEQAAAFgGAAQgDAAgEgCQgFgDgDAAQgGAAgLAKIAAA3QAAAOAKAAIADAAIAAACg");
	this.shape_26.setTransform(-83.8,71.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgbAmQgHgHgBgOIAAgsQAAgPgLAAIgEAAIAAgBIAEAAIAWgBIABABIAAA5QAAAZASgBQANABAQgOIAAg0QAAgPgMAAIgDAAIAAgBIADAAIAXgBIABABIAABHQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgRQgLALgHADQgGAEgJAAQgLAAgHgHg");
	this.shape_27.setTransform(-93.1,71.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggAhQgMgNAAgUQAAgSAMgNQANgNAUAAQASAAAOANQANANAAASQgBAUgNANQgNAMgSAAQgUAAgNgMgAgXgeQgIAKAAARQABAUAIAMQAKANAOAAQAOAAAIgLQAIgKAAgRQAAgUgKgMQgIgNgOAAQgPAAgIALg");
	this.shape_28.setTransform(-103.75,71.375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghBBQgIgFAAgJQAAgNAWgKQgRgCAAgLQAAgKAVgKQgRgIgBgSQABgMAHgHQAHgIALgCQAHgCAQgBQAOgBAMgGIAAAMIgjgBQAMACAIAIQAGAHAAALQAAANgKAIQgJAJgOAAQgFAAgHgCQgOAEABAIQAAAIALAAIAaAAQAdAAAAAVQAAAOgNAKQgPAJgUAAQgSAAgIgGgAggAvQAAAQAbAAQATAAAMgGQAMgHgBgLQAAgGgFgCQgGgDgOAAIgbAAIAAAAQgRAIAAALgAgPgzQgEAGAAALQAAANAFAIQAHAIAIAAQAJAAAGgGQAEgHAAgKQABgNgHgIQgFgJgKAAQgJAAgFAHg");
	this.shape_29.setTransform(-118.5,73.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_30.setTransform(-128.475,71.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AARBDIgRgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgzQAAgOgMAAIgBAAIAAgCIABAAQANAAAJgFIABAAIAABIQAAAOALAAIAEAAIAAACgAgJg4QAAgJAJAAQAKAAAAAJQAAAKgKAAQgJAAAAgKg");
	this.shape_31.setTransform(-136.55,69.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AARBDIgRgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAhfQAAgOgLABIgCAAIAAgCIACAAQAMgBAIgFIACAAIAAB0QAAAOALAAIAEAAIAAACg");
	this.shape_32.setTransform(-141.725,69.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOBAIgKgDQgEAAgDAGIgCAAIAAhvQAAgOgLAAIgCAAIAAgCIACAAQAMAAAJgGIACAAIAAA7QAKgJAHgDQAGgDAJAAQAPAAALALQAKALAAAUQAAAVgNAOQgNAMgUAAQgHAAgIgDgAgVgEIAAA5QAKALANAAQAPAAAJgLQAJgLAAgSQAAgTgIgJQgIgLgOAAQgMAAgOALg");
	this.shape_33.setTransform(-149.775,69.175);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_34.setTransform(-158.975,71.375);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_35.setTransform(-169.275,71.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTAMgNQANgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_36.setTransform(-179.15,71.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQgBgIgHgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGAMAAQAMAAAJAFIABgEIABAAQAAAKACAQIgCAAQgBgNgIgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQAMAEAFAEQAHAHABAKQAAAMgJAHQgIAHgMAAQgMAAgLgFg");
	this.shape_37.setTransform(12.6,47.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgTAMgNQANgNASAAQANAAAJAHQAJAHgBAMIAAAEIg8AAQgCAFAAAGQAAASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgRAAgMgLgAgNgjQgIAGgDALIAvAAIAAgDQgBgJgEgFQgFgGgKAAQgJAAgHAGg");
	this.shape_38.setTransform(4.4,47.975);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgbAiQgLgLAAgVQAAgUAOgNQAOgNASAAQALAAAJADQAKAEAAAFQAAAGgGAAQgDAAgDgCIgEgFQgGgIgLAAQgNAAgKALQgJALAAASQAAARAKALQAKALASAAQAOAAANgMIABABQgSASgTAAQgSAAgLgLg");
	this.shape_39.setTransform(-4.675,47.975);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASBDIgSgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAIgFIACAAIAABIQAAAOAMAAIADAAIAAACgAgIg4QAAgJAIAAQAKAAAAAJQAAAKgKAAQgIAAAAgKg");
	this.shape_40.setTransform(-11.85,45.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAAsIgihIQgGgOgMAAIgDAAIAAgCIADAAIASABIATgBIAEAAIAAACIgEAAQgMAAAGAMIAZA6IAXgxQAFgLgBgFQgBgFgGAAIgEAAIAAgCIAEAAIAPACIAPgCIACAAIAAACIgCAAQgGAAgGAFQgFAFgFALIgfBBg");
	this.shape_41.setTransform(-19.775,48.05);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAFAtIgQgBIgSABIgDAAIAAgCIADAAQAMAAgBgOIAAgzQABgOgMAAIgBAAIAAgCIABAAQANAAAJgFIACAAIAAAOQAOgOAKAAQAGAAAEABQAEACAAAEQAAAFgGAAQgDAAgEgCQgFgDgDAAQgHAAgKAKIAAA3QgBAOALAAIADAAIAAACg");
	this.shape_42.setTransform(-28.55,47.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTANgNQAMgNARAAQAPAAAIAHQAJAHAAAMIAAAEIg9AAQgBAFAAAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgDALIAuAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_43.setTransform(-36.7,47.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVAoIgCAEIgBAAQAAgKgGgSIACAAQAKAaAUAAQAIAAAGgFQAFgEAAgIQAAgIgHgGQgEgDgMgFQgMgEgFgEQgHgHAAgKQAAgKAHgGQAIgGAMAAQAMAAAIAFIACgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQALAEAGAEQAHAHAAAKQABAMgJAHQgHAHgNAAQgMAAgLgFg");
	this.shape_44.setTransform(-45.35,47.975);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghBBQgIgFAAgJQAAgNAVgKQgQgCAAgLQAAgKAWgKQgTgIABgSQgBgMAIgHQAHgIALgCQAIgCAOgBQAPgBAMgGIAAAMIgkgBQAOACAGAIQAHAHAAALQAAANgJAIQgKAJgOAAQgGAAgFgCQgPAEAAAIQAAAIAMAAIAbAAQAdAAAAAVQgBAOgOAKQgOAJgUAAQgRAAgJgGgAggAvQAAAQAcAAQARAAAMgGQAMgHAAgLQABgGgGgCQgFgDgOAAIgbAAIgBAAQgRAIAAALgAgOgzQgGAGAAALQAAANAHAIQAGAIAIAAQAKAAAEgGQAFgHABgKQgBgNgFgIQgHgJgJAAQgJAAgEAHg");
	this.shape_45.setTransform(-58.7,49.625);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_46.setTransform(-68.675,47.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASBDIgSgBIgQABIgEAAIAAgCIAEAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAIgFIACAAIAABIQAAAOAMAAIADAAIAAACgAgIg4QAAgJAIAAQAKAAAAAJQAAAKgKAAQgIAAAAgKg");
	this.shape_47.setTransform(-76.75,45.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAwBDIgQgBIgQABIgDAAIAAgCIACAAQAIAAgIgKIgagkIgLAKIAAAWQAAAOALAAIAEAAIAAACIgEAAIgRgBIgSABIgDAAIAAgCIADAAQAMAAAAgOIAAhfQAAgOgMABIgBAAIAAgCIABAAQANgBAKgFIABAAIAABZIAegaQAHgHgBgFQgDgEgHgBIgEAAIAAgBIAEAAIATABIATgBIACAAIAAABIgCAAQgGABgHAEQgGADgKAKIgPANIAfAnQAGAJAFACQAEADAEAAIACAAIAAACg");
	this.shape_48.setTransform(-84.25,45.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAvAtIgRgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAgoQAAgYgTAAQgNAAgOAMIAAA0QAAAOAMAAIADAAIAAACIgDAAIgSgBIgRABIgDAAIAAgCIADAAQALAAAAgOIAAgzQAAgOgLAAIgCAAIAAgCIACAAQAMAAAKgFIABAAIAAASQALgMAIgDQAFgEAJABQALgBAHAIQAIAHAAAOIAAAsQAAAOALAAIADAAIAAACg");
	this.shape_49.setTransform(-95.025,47.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_50.setTransform(-104.875,47.975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgOBAIgKgDQgEAAgDAGIgCAAIAAhvQAAgOgLAAIgCAAIAAgCIACAAQAMAAAJgGIACAAIAAA7QAKgJAHgDQAGgDAJAAQAPAAALALQAKALAAAUQAAAVgNAOQgNAMgUAAQgHAAgIgDgAgVgEIAAA5QAKALANAAQAPAAAJgLQAJgLAAgSQAAgTgIgJQgIgLgOAAQgMAAgOALg");
	this.shape_51.setTransform(-115.325,45.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTANgNQAMgNARAAQAPAAAIAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_52.setTransform(-129.3,47.975);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIACgBQAIgCAGgGQAHgHADgJIACAAIAAAXIAaAAIAAAEIgaAAIAABAQAAAPAKAAQAIAAAKgHIABACQgOAKgLAAQgGAAgFgEg");
	this.shape_53.setTransform(-137,46.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_54.setTransform(-144.525,47.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAsIgihIQgGgOgMAAIgDAAIAAgCIADAAIASABIATgBIAEAAIAAACIgEAAQgMAAAGAMIAZA6IAXgxQAFgLgBgFQgBgFgGAAIgEAAIAAgCIAEAAIAPACIAPgCIACAAIAAACIgCAAQgGAAgGAFQgFAFgFALIgfBBg");
	this.shape_55.setTransform(-154.725,48.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AASBDIgSgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgzQAAgOgMAAIgBAAIAAgCIABAAQANAAAIgFIACAAIAABIQAAAOAMAAIADAAIAAACgAgIg4QAAgJAIAAQAKAAAAAJQAAAKgKAAQgIAAAAgKg");
	this.shape_56.setTransform(-162.5,45.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAFAtIgRgBIgRABIgDAAIAAgCIADAAQAMAAAAgOIAAgzQAAgOgMAAIgCAAIAAgCIACAAQANAAAJgFIACAAIAAAOQANgOAMAAQAFAAAEABQAEACAAAEQAAAFgGAAQgDAAgEgCQgEgDgEAAQgGAAgLAKIAAA3QAAAOAKAAIAEAAIAAACg");
	this.shape_57.setTransform(-168.65,47.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgHBCIgVgBIgSABIgDAAIAAgCIADAAQALAAAAgOIAAhjQAAgOgLAAIgDAAIAAgCIADAAIASABIAbgBQAWAAAOAKQAPAKAAATQAAATgPAKQgNALgXAAQgLAAgJgDIAAAnQAAAOAOAAIAEAAIAAACgAgVg5IAABAQAJADALAAQAPAAAKgKQALgIAAgSQAAgRgLgKQgJgIgQAAQgPAAgFAEg");
	this.shape_58.setTransform(-177.95,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.COPY_2, new cjs.Rectangle(-185.9,32.9,210,72.69999999999999), null);


(lib.COPY_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQAAgIgIgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGALAAQANAAAJAFIABgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgJAAQgHAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQALAEAGAEQAIAHAAAKQgBAMgHAHQgJAHgMAAQgMAAgLgFg");
	this.shape.setTransform(-61.3,118.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFAsIgQgBIgRABIgEAAIAAgBIAEAAQALAAgBgPIAAgxQABgPgLAAIgCAAIAAgCIACAAQAMABAJgHIABAAIAAAPQAPgPAKAAQAGAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgEgCgEAAQgGAAgMAJIAAA3QAAAPALAAIADAAIAAABg");
	this.shape_1.setTransform(-68.7,118.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTANgNQAMgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgBAFAAAGQgBASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgDALIAuAAIAAgDQAAgJgEgFQgFgGgKAAQgJAAgIAGg");
	this.shape_2.setTransform(-76.85,118.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AglA4QgKgLAAgVQAAgVANgNQAOgMAUAAQALAAAKAFIAAgbQAAgOgLAAIgCAAIAAgCIACAAQANAAAJgGIACAAIAAB0QgBAOALAAIAEAAIAAACIgEAAIgVABIgCgBIAAgOQgKAJgGADQgGADgJAAQgQAAgLgLgAgagIQgIAKgBASQABATAHAKQAJALANAAQAMAAAOgLIAAg5QgKgLgNAAQgPAAgJALg");
	this.shape_3.setTransform(-86.7,116.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAsIgQgBIgRABIgEAAIAAgBIAEAAQALAAgBgPIAAgxQABgPgLAAIgCAAIAAgCIACAAQAMABAJgHIABAAIAAAPQAOgPALAAQAGAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgFgCgDAAQgHAAgLAJIAAA3QAAAPALAAIADAAIAAABg");
	this.shape_4.setTransform(-95.8,118.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAhQgOgNAAgUQAAgSAOgNQANgNASAAQAUAAANANQAMANAAASQAAAUgNANQgMAMgUAAQgSAAgNgMgAgXgeQgHAKAAARQgBAUAKAMQAJANAOAAQAOAAAIgLQAIgKAAgRQAAgUgJgMQgKgNgOAAQgNAAgJALg");
	this.shape_5.setTransform(-104.95,118.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBAIgKgDQgEAAgDAGIgCAAIAAhvQAAgOgLAAIgCAAIAAgCIACAAQAMAAAJgGIACAAIAAA7QAKgJAHgDQAGgDAJAAQAPAAALALQAKALAAAUQAAAVgNAOQgNAMgUAAQgHAAgIgDgAgVgEIAAA5QAKALANAAQAPAAAJgLQAJgLAAgSQAAgTgIgJQgIgLgOAAQgMAAgOALg");
	this.shape_6.setTransform(-115.775,116.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAoIgCAEIgBAAQAAgKgGgSIACAAQAJAaAVAAQAIAAAGgFQAFgEAAgIQAAgIgHgGQgEgDgMgFQgLgEgFgEQgIgHAAgKQAAgKAIgGQAHgGAMAAQAMAAAIAFIACgEIABAAQgBAKADAQIgCAAQgCgNgHgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAIAFIAPAIQALAEAGAEQAHAHAAAKQABAMgJAHQgHAHgNAAQgMAAgLgFg");
	this.shape_7.setTransform(-129.4,118.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTANgNQAMgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgBAFAAAGQgBASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgDALIAuAAIAAgDQAAgJgEgFQgFgGgKAAQgJAAgIAGg");
	this.shape_8.setTransform(-137.6,118.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAoIgBAEIgCAAQgBgKgFgSIACAAQAJAaAVAAQAIAAAGgFQAFgEABgIQgBgIgHgGQgEgDgMgFQgLgEgGgEQgHgHAAgKQAAgKAHgGQAIgGAMAAQAMAAAJAFIABgEIABAAQAAAKACAQIgCAAQgCgNgHgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQAMAEAFAEQAHAHABAKQAAAMgJAHQgIAHgMAAQgMAAgLgFg");
	this.shape_9.setTransform(-146.25,118.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAoIgCAEIgDAAQAAgKgEgSIABAAQAJAaAUAAQAJAAAGgFQAGgEAAgIQAAgIgIgGQgEgDgMgFQgMgEgFgEQgHgHAAgKQAAgKAHgGQAIgGALAAQANAAAJAFIABgEIABAAQgBAKADAQIgCAAQgCgNgHgGQgGgFgJAAQgHAAgFAEQgFAEAAAHQAAAHAHAFIAQAIQAMAEAFAEQAIAHAAAKQgBAMgHAHQgJAHgNAAQgMAAgJgFg");
	this.shape_10.setTransform(-154.1,118.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAhQgNgNAAgUQAAgSANgNQAOgNASAAQAUAAANANQAMANAAASQABAUgNANQgNAMgUAAQgSAAgOgMgAgXgeQgIAKABARQAAAUAJAMQAJANAOAAQAOAAAIgLQAIgKAAgRQAAgUgJgMQgKgNgNAAQgOAAgJALg");
	this.shape_11.setTransform(-163.3,118.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAFAsIgQgBIgSABIgDAAIAAgBIADAAQAMAAgBgPIAAgxQABgPgMAAIgBAAIAAgCIABAAQANABAJgHIACAAIAAAPQAOgPAKAAQAGAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgFgCgDAAQgHAAgKAJIAAA3QgBAPALAAIADAAIAAABg");
	this.shape_12.setTransform(-172.1,118.15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAiQgLgLAAgVQAAgUAOgNQAOgNASAAQALAAAJADQAKAEAAAFQAAAGgGAAQgDAAgDgCIgEgFQgGgIgLAAQgNAAgKALQgJALAAASQAAARAKALQAKALASAAQAOAAANgMIABABQgSASgTAAQgSAAgLgLg");
	this.shape_13.setTransform(-180.325,118.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIACgBQAIgCAGgGQAHgHADgJIACAAIAAAXIAaAAIAAAEIgaAAIAABAQAAAPAKAAQAIAAAKgHIABACQgOAKgLAAQgGAAgFgEg");
	this.shape_14.setTransform(19.15,93.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_15.setTransform(11.625,94.825);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAvBCIgRgBIgRABIgEAAIAAgBIAEAAQALAAgBgPIAAgoQAAgXgTAAQgNAAgNAMIAAAzQAAAPALAAIAEAAIAAABIgEAAIgSgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAhdQAAgPgMAAIgCAAIAAgCIACAAQANABAJgHIACAAIAAA+QAKgKAIgEQAFgEAJAAQALABAHAGQAIAIAAANIAAAsQAAAPALAAIADAAIAAABg");
	this.shape_16.setTransform(1.35,92.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIADgBQAGgCAHgGQAHgHADgJIACAAIAAAXIAbAAIAAAEIgbAAIAABAQAAAPAKAAQAIAAAKgHIABACQgPAKgKAAQgGAAgFgEg");
	this.shape_17.setTransform(-7.1,93.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghBBQgIgFAAgJQAAgNAVgKQgQgCAAgLQAAgKAWgKQgTgIABgSQAAgMAHgHQAHgIALgCQAIgCAOgBQAPgBAMgGIAAAMIgkgBQAOACAGAIQAHAHAAALQAAANgKAIQgJAJgOAAQgFAAgHgCQgNAEAAAIQgBAIAMAAIAbAAQAcAAAAAVQABAOgOAKQgPAJgUAAQgRAAgJgGgAggAvQAAAQAcAAQARAAAMgGQANgHAAgLQAAgGgGgCQgGgDgNAAIgbAAIgBAAQgRAIAAALgAgOgzQgGAGAAALQAAANAHAIQAFAIAKAAQAIAAAFgGQAGgHAAgKQAAgNgHgIQgFgJgKAAQgJAAgEAHg");
	this.shape_18.setTransform(-19.8,96.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAvAsIgRgBIgSABIgDAAIAAgBIADAAQALAAAAgPIAAgnQAAgYgTAAQgNAAgOAMIAAAzQAAAPAMAAIADAAIAAABIgDAAIgSgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgBIACAAQAMAAAKgHIABAAIAAASQALgKAIgEQAFgEAJAAQALABAHAGQAIAIAAAOIAAArQAAAPALAAIADAAIAAABg");
	this.shape_19.setTransform(-29.775,94.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASBCIgSgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAgyQAAgOgMAAIgBAAIAAgBIABAAQANAAAIgHIACAAIAABIQAAAPAMAAIADAAIAAABgAgIg4QAAgKAIAAQAKAAAAAKQAAAKgKAAQgIAAAAgKg");
	this.shape_20.setTransform(-37.85,92.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAwBCIgRAAIgPAAIgEAAIAAgBIADAAQAIAAgIgKIgagkIgLAKIAAAVQAAAPALAAIAEAAIAAABIgEAAIgRgBIgSABIgDAAIAAgBIADAAQAMAAAAgPIAAhdQAAgPgMAAIgBAAIAAgCIABAAQANABAKgHIABAAIAABaIAegbQAIgGgDgFQgBgFgJABIgDAAIAAgCIADAAIATABIAUgBIADAAIAAACIgDAAQgGgBgHAFQgGADgKAKIgPAMIAfAoQAGAJAFADQAEACAEAAIACAAIAAABg");
	this.shape_21.setTransform(-45.35,92.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvAsIgRgBIgSABIgDAAIAAgBIADAAQALAAAAgPIAAgnQAAgYgTAAQgNAAgOAMIAAAzQAAAPAMAAIADAAIAAABIgDAAIgSgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgBIACAAQAMAAAKgHIABAAIAAASQALgKAIgEQAFgEAJAAQALABAHAGQAIAIAAAOIAAArQAAAPALAAIADAAIAAABg");
	this.shape_22.setTransform(-56.125,94.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_23.setTransform(-65.975,94.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOBAIgKgDQgEAAgDAGIgCAAIAAhvQAAgOgLAAIgCAAIAAgCIACAAQAMAAAJgGIACAAIAAA7QAKgJAHgDQAGgDAJAAQAPAAALALQAKALAAAUQAAAVgNAOQgNAMgUAAQgHAAgIgDgAgVgEIAAA5QAKALANAAQAPAAAJgLQAJgLAAgSQAAgTgIgJQgIgLgOAAQgMAAgOALg");
	this.shape_24.setTransform(-76.425,92.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgTAMgNQANgNASAAQAOAAAIAHQAIAHAAAMIAAAEIg8AAQgBAFgBAGQAAASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgLgLgAgOgjQgHAGgEALIAwAAIAAgDQAAgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_25.setTransform(-90.4,94.825);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIADgBQAGgCAHgGQAHgHADgJIACAAIAAAXIAaAAIAAAEIgaAAIAABAQAAAPAKAAQAIAAAKgHIABACQgPAKgKAAQgHAAgEgEg");
	this.shape_26.setTransform(-98.1,93.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_27.setTransform(-105.625,94.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAtIgihJQgGgOgMAAIgDAAIAAgCIADAAIASABIATgBIAEAAIAAACIgEAAQgMAAAGAMIAZA6IAXgwQAFgMgBgFQgBgFgGAAIgEAAIAAgCIAEAAIAPABIAPgBIACAAIAAACIgCAAQgGAAgGAFQgFAFgFAMIgfBBg");
	this.shape_28.setTransform(-115.825,94.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AARBCIgRgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAgyQAAgOgMAAIgBAAIAAgBIABAAQANAAAJgHIABAAIAABIQAAAPALAAIAEAAIAAABgAgJg4QAAgKAJAAQAKAAAAAKQAAAKgKAAQgJAAAAgKg");
	this.shape_29.setTransform(-123.6,92.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAFAsIgRgBIgQABIgEAAIAAgBIAEAAQAKAAABgPIAAgxQgBgPgKAAIgDAAIAAgBIADAAQAMAAAJgHIABAAIAAAPQAOgPALAAQAGAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgFgCgDAAQgHAAgLAJIAAA3QAAAPALAAIAEAAIAAABg");
	this.shape_30.setTransform(-129.75,94.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJBCIgRAAIgSAAIgDAAIAAgBIADAAQAMgBAAgOIAAhdQAAgPgMAAIgBAAIAAgBIABAAQANAAAJgHIACAAIAAAQQAKgJAGgDQAHgEAIAAQAQAAAKAMQALALAAAUQAAAWgNAMQgNANgUAAQgNAAgJgFIAAAfQAAAOALABIAEAAIAAABgAgUgvIAAA5QAJALAOAAQAPAAAJgLQAJgLAAgRQAAgTgIgLQgIgKgOgBQgMAAgOAMg");
	this.shape_31.setTransform(-139.175,96.95);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAvBCIgRgBIgRABIgEAAIAAgBIAEAAQALAAgBgPIAAgoQAAgXgTAAQgNAAgNAMIAAAzQAAAPALAAIAEAAIAAABIgEAAIgSgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAhdQAAgPgMAAIgCAAIAAgCIACAAQANABAJgHIACAAIAAA+QAKgKAIgEQAFgEAJAAQALABAHAGQAIAIAAANIAAAsQAAAPALAAIADAAIAAABg");
	this.shape_32.setTransform(-154.35,92.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIADgBQAGgCAHgGQAHgHADgJIACAAIAAAXIAbAAIAAAEIgbAAIAABAQAAAPAKAAQAIAAAKgHIABACQgPAKgKAAQgGAAgFgEg");
	this.shape_33.setTransform(-162.8,93.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASBCIgSgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAgyQAAgOgLAAIgCAAIAAgBIACAAQAMAAAIgHIACAAIAABIQAAAPAMAAIADAAIAAABgAgIg4QAAgKAIAAQAKAAAAAKQAAAKgKAAQgIAAAAgKg");
	this.shape_34.setTransform(-168.55,92.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAaAtIgahDIgYBDIgBAAIgdhJQgFgOgJAAIgDAAIAAgCIADAAIAPABIATgBIACAAIAAACIgCAAQgMABAEALIAVA3IAUg1QgFgOgKAAIgDAAIAAgCIADAAIAQABIARgBIADAAIAAACIgDAAQgFAAgCADQgCAEACAFIAUA3IARgtQAFgMgBgEQgBgGgGAAIgDAAIAAgCIADAAIAOABIANgBIABAAIAAACIgBAAQgLABgIAVIgZBBg");
	this.shape_35.setTransform(-178.125,94.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAoIgDAEIgCAAQAAgKgEgSIABAAQAKAaATAAQAJAAAGgFQAGgEgBgIQABgIgIgGQgEgDgLgFQgNgEgEgEQgIgHAAgKQAAgKAIgGQAHgGALAAQANAAAIAFIACgEIACAAQgBAKACAQIgCAAQgBgNgIgGQgGgFgJAAQgHAAgFAEQgFAEAAAHQAAAHAIAFIAPAIQAMAEAFAEQAIAHgBAKQAAAMgHAHQgJAHgNAAQgMAAgJgFg");
	this.shape_36.setTransform(6.35,71.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTAMgNQANgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_37.setTransform(-1.85,71.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASBCIgSgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAgyQAAgOgMAAIgBAAIAAgCIABAAQANABAIgHIACAAIAABIQAAAPAMAAIADAAIAAABgAgIg4QAAgKAIAAQAKAAAAAKQAAAKgKAAQgIAAAAgKg");
	this.shape_38.setTransform(-9.05,69.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AARBCIgRgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAhdQAAgPgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAAB0QAAAPALAAIAEAAIAAABg");
	this.shape_39.setTransform(-14.225,69.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASBCIgSgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAgyQAAgOgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAABIQAAAPAMAAIADAAIAAABgAgIg4QgBgKAJAAQAKAAAAAKQAAAKgKAAQgJAAABgKg");
	this.shape_40.setTransform(-19.25,69.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABJAsIgSgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgnQABgYgTAAQgMAAgOANIABAHIAAArQAAAPALAAIADAAIAAABIgDAAIgRgBIgQABIgEAAIAAgBIAEAAQALAAgBgPIAAgnQAAgYgSAAQgMAAgNAMIAAAzQAAAPAMAAIADAAIAAABIgDAAIgSgBIgRABIgEAAIAAgBIAEAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgBIACAAQAMAAAJgHIACAAIAAASQALgKAGgEQAHgEAIAAQASAAAEATQALgLAHgEQAGgEAIAAQALABAHAGQAHAIAAAOIAAArQAAAPALAAIADAAIAAABg");
	this.shape_41.setTransform(-29.85,71.35);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_42.setTransform(-42.325,71.425);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAABCIgOgBIgSABIgDAAIAAgBIADAAQAMAAAAgPIAAhCIgOAAIAAgEIAOAAIAAgLQAAgPAIgKQAJgKANAAQAKABAIADQAIADAAAFQAAAGgGAAQgCAAgCgDIgEgEQgFgIgHABQgJAAgEAGQgFAHAAAMIAAARIAZAAIAAAEIgZAAIAABCQAAAPAKAAIAEAAIAAABg");
	this.shape_43.setTransform(-49.075,69.15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkA4QgLgLAAgVQAAgVANgNQAOgMAUAAQALAAAKAFIAAgbQAAgOgLAAIgBAAIAAgCIABAAQANAAAIgGIADAAIAAB0QAAAOALAAIADAAIAAACIgDAAIgXABIgBgBIAAgOQgKAJgGADQgHADgIAAQgQAAgKgLgAgZgIQgKAKABASQgBATAJAKQAHALAOAAQANAAANgLIAAg5QgKgLgNAAQgPAAgIALg");
	this.shape_44.setTransform(-63.15,69.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAvAsIgRgBIgSABIgDAAIAAgBIADAAQALAAAAgPIAAgnQAAgYgTAAQgNAAgOAMIAAAzQAAAPAMAAIADAAIAAABIgDAAIgSgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgBIACAAQAMAAAKgHIABAAIAAASQALgKAIgEQAFgEAJAAQALABAHAGQAIAIAAAOIAAArQAAAPALAAIADAAIAAABg");
	this.shape_45.setTransform(-74.125,71.35);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_46.setTransform(-83.975,71.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAoIgDAEIgCAAQAAgKgEgSIABAAQAKAaATAAQAJAAAGgFQAGgEgBgIQABgIgIgGQgEgDgLgFQgNgEgEgEQgIgHAAgKQAAgKAIgGQAHgGALAAQANAAAIAFIACgEIACAAQgBAKACAQIgCAAQgBgNgIgGQgGgFgJAAQgHAAgFAEQgFAEAAAHQAAAHAIAFIAPAIQAMAEAFAEQAIAHgBAKQAAAMgHAHQgJAHgNAAQgMAAgJgFg");
	this.shape_47.setTransform(-97.6,71.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AARBCIgRgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAhdQAAgPgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAAB0QAAAPALAAIAEAAIAAABg");
	this.shape_48.setTransform(-104.025,69.15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_49.setTransform(-110.825,71.425);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbAmQgHgHAAgPIAAgrQAAgOgMAAIgEAAIAAgCIAEAAIAWgBIABABIAAA5QABAZARAAQANAAAPgPIAAgzQAAgOgLAAIgDAAIAAgCIADAAIAXgBIABABIAABGQAAAPALAAIADAAIAAABIgDAAIgWABIgCgBIAAgQQgKALgIADQgFAEgIAAQgMAAgHgHg");
	this.shape_50.setTransform(-121.2,71.45);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglA4QgKgLAAgVQAAgVANgNQAOgMAUAAQALAAAKAFIAAgbQAAgOgLAAIgCAAIAAgCIACAAQANAAAJgGIACAAIAAB0QgBAOALAAIAEAAIAAACIgEAAIgVABIgCgBIAAgOQgKAJgGADQgGADgJAAQgQAAgLgLgAgagIQgIAKgBASQABATAHAKQAJALANAAQAMAAAOgLIAAg5QgKgLgNAAQgPAAgJALg");
	this.shape_51.setTransform(-131.7,69.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AARBCIgRgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAgyQAAgOgMAAIgBAAIAAgCIABAAQANABAJgHIABAAIAABIQAAAPALAAIAEAAIAAABgAgJg4QAAgKAJAAQAKAAAAAKQAAAKgKAAQgJAAAAgKg");
	this.shape_52.setTransform(-139.8,69.15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAtIgihJQgGgOgMAAIgDAAIAAgCIADAAIASABIATgBIAEAAIAAACIgEAAQgMAAAGAMIAZA6IAXgwQAFgMgBgFQgBgFgGAAIgEAAIAAgCIAEAAIAPABIAPgBIACAAIAAACIgCAAQgGAAgGAFQgFAFgFAMIgfBBg");
	this.shape_53.setTransform(-147.725,71.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASBCIgSgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAgyQAAgOgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAABIQAAAPAMAAIADAAIAAABgAgIg4QAAgKAIAAQAKAAAAAKQAAAKgKAAQgIAAAAgKg");
	this.shape_54.setTransform(-155.5,69.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA4QgLgLAAgVQAAgVANgNQAOgMAUAAQALAAAKAFIAAgbQAAgOgLAAIgCAAIAAgCIACAAQANAAAJgGIACAAIAAB0QgBAOALAAIAEAAIAAACIgEAAIgVABIgCgBIAAgOQgKAJgGADQgGADgJAAQgQAAgKgLgAgagIQgJAKAAASQAAATAIAKQAJALANAAQANAAANgLIAAg5QgKgLgNAAQgPAAgJALg");
	this.shape_55.setTransform(-163.3,69.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAvAsIgRgBIgSABIgDAAIAAgBIADAAQALAAAAgPIAAgnQAAgYgTAAQgNAAgOAMIAAAzQAAAPAMAAIADAAIAAABIgDAAIgSgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgBIACAAQAMAAAKgHIABAAIAAASQALgKAIgEQAFgEAJAAQALABAHAGQAIAIAAAOIAAArQAAAPALAAIADAAIAAABg");
	this.shape_56.setTransform(-174.275,71.35);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AARBCIgRgBIgRABIgDAAIAAgBIADAAQAMAAAAgPIAAgyQAAgOgMAAIgBAAIAAgCIABAAQANABAJgHIABAAIAABIQAAAPALAAIAEAAIAAABgAgJg4QAAgKAJAAQAKAAAAAKQAAAKgKAAQgJAAAAgKg");
	this.shape_57.setTransform(-182.35,69.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgyA5QAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAAEAFQAFAFAEAAQAPAAAMgdIgghRQgDgIgEgDQgEgDgFAAIgEAAIAAgCIAEAAIARABIATgBIADAAIAAACIgDAAQgMAAAEALIAZBFIAYg7QAEgMgBgFQgCgEgHAAIgEAAIAAgCIAEAAIAPABIAPgBIACAAIAAACIgCAAQgHAAgEAFQgFAEgFAMIgcBIQgHAUgJAIQgIAIgMAAQgRAAAAgJg");
	this.shape_58.setTransform(27,50.225);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAvBCIgRgBIgRABIgEAAIAAgBIAEAAQALAAgBgPIAAgoQAAgXgTAAQgNAAgNAMIAAAzQAAAPALAAIADAAIAAABIgDAAIgSgBIgRABIgDAAIAAgBIADAAQAMAAgBgPIAAhdQABgPgMAAIgCAAIAAgCIACAAQANABAJgHIACAAIAAA+QAKgKAIgEQAFgEAIAAQAMABAHAGQAIAIAAANIAAAsQAAAPALAAIAEAAIAAABg");
	this.shape_59.setTransform(16.55,45.75);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHA0QgFgFAAgKIAAhBIgQAAIAAgCIADgBQAGgCAHgGQAHgHADgJIACAAIAAAXIAaAAIAAAEIgaAAIAABAQAAAPAKAAQAIAAAKgHIABACQgPAKgKAAQgHAAgEgEg");
	this.shape_60.setTransform(8.1,46.925);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AARBCIgRgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAhdQAAgPgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAAB0QAAAPALAAIAEAAIAAABg");
	this.shape_61.setTransform(2.325,45.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghApQgGgFAAgKQAAgOAQgHIAQgFIAUgHIAAgHQAAgZgUAAQgIAAgIAFQgIAFgEAJIgCgBQAKgXAZAAQAMAAAHAHQAIAHAAAPIAAArQAAAOALAAIAEAAIAAACIgEAAIgWABIgBgBIAAgQQgRARgOAAQgJAAgGgEgAgRAJQgJAFAAAJQAAAPAPAAQAGAAAFgDQAEgDAJgIIAAgdQgYAKgGAEg");
	this.shape_62.setTransform(-4.475,48.025);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgbAiQgLgMAAgVQAAgTAMgNQANgNASAAQANAAAJAHQAIAHAAAMIAAAEIg8AAQgBAFgBAGQAAASAKALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgRAAgMgLgAgNgjQgIAGgEALIAwAAIAAgDQgBgJgEgFQgFgGgKAAQgJAAgHAGg");
	this.shape_63.setTransform(-13.7,48.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAaAtIgahDIgYBDIgBAAIgdhJQgFgOgJAAIgDAAIAAgCIADAAIAPABIATgBIACAAIAAACIgCAAQgMABAEALIAVA3IAUg1QgFgOgKAAIgDAAIAAgCIADAAIAQABIARgBIADAAIAAACIgDAAQgFAAgCADQgCAEACAFIAUA3IARgtQAFgMgBgEQgBgGgGAAIgDAAIAAgCIADAAIAOABIANgBIABAAIAAACIgBAAQgLABgIAVIgZBBg");
	this.shape_64.setTransform(-25.325,48.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAbIAJgmIADgMQACgEAEAAQAGAAAAAHQAAAFgDAJIgSAig");
	this.shape_65.setTransform(-39.4,53.375);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgyA5QAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAAEAFQAFAFAEAAQAPAAAMgdIgghRQgDgIgEgDQgEgDgFAAIgEAAIAAgCIAEAAIARABIATgBIADAAIAAACIgDAAQgMAAAEALIAZBFIAYg7QAEgMgBgFQgCgEgHAAIgEAAIAAgCIAEAAIAPABIAPgBIACAAIAAACIgCAAQgHAAgEAFQgFAEgFAMIgcBIQgHAUgJAIQgIAIgMAAQgRAAAAgJg");
	this.shape_66.setTransform(-45.9,50.225);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AARBCIgRgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAhdQAAgPgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAAB0QAAAPALAAIAEAAIAAABg");
	this.shape_67.setTransform(-53.525,45.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AglA4QgKgLAAgVQAAgVAOgNQANgMAUAAQAMAAAJAFIAAgbQAAgOgLAAIgCAAIAAgCIACAAQAMAAAJgGIACAAIAAB0QABAOAKAAIAEAAIAAACIgEAAIgWABIgBgBIAAgOQgKAJgGADQgHADgIAAQgQAAgLgLgAgZgIQgJAKAAASQAAATAHAKQAIALAOAAQAMAAAOgLIAAg5QgJgLgOAAQgPAAgIALg");
	this.shape_68.setTransform(-61.2,45.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AARBCIgRgBIgQABIgEAAIAAgBIAEAAQALAAAAgPIAAhdQAAgPgLAAIgCAAIAAgCIACAAQAMABAIgHIACAAIAAB0QAAAPALAAIAEAAIAAABg");
	this.shape_69.setTransform(-69.325,45.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAFAsIgQgBIgSABIgDAAIAAgBIADAAQAMAAgBgPIAAgxQABgPgMAAIgBAAIAAgCIABAAQANABAJgHIACAAIAAAPQAOgPAKAAQAGAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgFgCgDAAQgHAAgKAJIAAA3QgBAPALAAIADAAIAAABg");
	this.shape_70.setTransform(-75.35,47.95);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AggAhQgMgNAAgUQAAgSAMgNQANgNAUAAQASAAAOANQANANAAASQAAAUgOANQgNAMgSAAQgUAAgNgMgAgXgeQgHAKgBARQAAAUAJAMQAKANAOAAQAOAAAIgLQAIgKAAgRQAAgUgKgMQgIgNgPAAQgOAAgIALg");
	this.shape_71.setTransform(-84.5,48.025);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAaAtIgahDIgYBDIgBAAIgdhJQgFgOgJAAIgDAAIAAgCIADAAIAPABIATgBIACAAIAAACIgCAAQgMABAEALIAVA3IAUg1QgFgOgKAAIgDAAIAAgCIADAAIAQABIARgBIADAAIAAACIgDAAQgFAAgCADQgCAEACAFIAUA3IARgtQAFgMgBgEQgBgGgGAAIgDAAIAAgCIADAAIAOABIANgBIABAAIAAACIgBAAQgLABgIAVIgZBBg");
	this.shape_72.setTransform(-96.725,48.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTANgNQAMgNARAAQAPAAAIAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_73.setTransform(-112.65,48.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAAAtIgihJQgGgOgMAAIgDAAIAAgCIADAAIASABIATgBIAEAAIAAACIgEAAQgMAAAGAMIAZA6IAXgwQAFgMgBgFQgBgFgGAAIgEAAIAAgCIAEAAIAPABIAPgBIACAAIAAACIgCAAQgGAAgGAFQgFAFgFAMIgfBBg");
	this.shape_74.setTransform(-122.625,48.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAFAsIgRgBIgRABIgDAAIAAgBIADAAQALAAAAgPIAAgxQAAgPgLAAIgCAAIAAgCIACAAQANABAJgHIACAAIAAAPQAOgPALAAQAFAAAEADQAEACAAACQAAAHgGAAQgDAAgEgEQgEgCgEAAQgGAAgLAJIAAA3QAAAPAKAAIADAAIAAABg");
	this.shape_75.setTransform(-131.4,47.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTAMgNQANgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_76.setTransform(-139.55,48.025);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgVAoIgCAEIgCAAQABgKgGgSIACAAQAJAaAUAAQAJAAAGgFQAGgEgBgIQAAgIgHgGQgEgDgLgFQgMgEgFgEQgIgHAAgKQAAgKAIgGQAHgGAMAAQAMAAAIAFIACgEIACAAQgCAKADAQIgCAAQgBgNgIgGQgGgFgIAAQgIAAgFAEQgFAEAAAHQAAAHAIAFIAPAIQALAEAGAEQAHAHAAAKQABAMgJAHQgHAHgOAAQgMAAgKgFg");
	this.shape_77.setTransform(-148.2,48.025);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgaAiQgMgMAAgVQAAgTAMgNQANgNARAAQAOAAAJAHQAJAHAAAMIAAAEIg9AAQgCAFABAGQAAASAJALQAKAMAQAAQAQAAAMgMIACACQgSARgTAAQgSAAgKgLgAgOgjQgHAGgEALIAvAAIAAgDQABgJgFgFQgFgGgKAAQgJAAgIAGg");
	this.shape_78.setTransform(-161.15,48.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAbBCIgbg7IgZA7IgCAAIg0h0QgGgOgMAAIgDAAIAAgBIADAAIASAAIAVAAIAEAAIAAABIgEAAQgMAAAFAMIAsBkIAUgvIgYgzQgFgOgMAAIgDAAIAAgBIACAAIASAAIAWAAIADAAIAAABIgDAAQgNAAAGAMIAQAoIANgfQAGgLgBgFQgBgFgHAAIgEAAIAAgBIAEAAIAQAAIAPAAIACAAIAAABIgCAAQgNAAgJAVIgRAlIAYA2IAohbQAFgLgBgFQgBgFgGAAIgEAAIAAgBIAEAAIAPAAIAPAAIACAAIAAABIgCAAQgMAAgKAVIgxBtg");
	this.shape_79.setTransform(-175.45,45.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.COPY_1, new cjs.Rectangle(-187.1,32.9,234.89999999999998,96.1), null);


(lib.button_clickthrough_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG, new cjs.Rectangle(-150,-125,300,250), null);


(lib.IMG_2_Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_150 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(150).call(this.frame_150).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay2NmIAA7LMAltAAAIAAbLg");
	mask.setTransform(11.75,-21.55);

	// Layer_1
	this.instance = new lib.IMG_2();
	this.instance.setTransform(34,-23.75,0.5,0.5,0,0,0,68,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({regX:28.4,regY:15.9,x:14.2,y:-15.75},0).wait(2).to({scaleX:0.5001,scaleY:0.5001},0).wait(1).to({scaleX:0.5002,scaleY:0.5002},0).wait(1).to({scaleX:0.5003,scaleY:0.5003},0).wait(1).to({scaleX:0.5005,scaleY:0.5005},0).wait(1).to({scaleX:0.5006,scaleY:0.5006,y:-15.7},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,x:14.15},0).wait(1).to({scaleX:0.5011,scaleY:0.5011,x:14.2},0).wait(1).to({scaleX:0.5013,scaleY:0.5013,y:-15.65},0).wait(1).to({scaleX:0.5016,scaleY:0.5016,x:14.15,y:-15.6},0).wait(1).to({scaleX:0.5019,scaleY:0.5019,y:-15.55},0).wait(1).to({scaleX:0.5022,scaleY:0.5022,x:14.1},0).wait(1).to({scaleX:0.5026,scaleY:0.5026,y:-15.5},0).wait(1).to({scaleX:0.503,scaleY:0.503,y:-15.45},0).wait(1).to({scaleX:0.5034,scaleY:0.5034},0).wait(1).to({scaleX:0.5038,scaleY:0.5038,x:14.05,y:-15.4},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,y:-15.35},0).wait(1).to({scaleX:0.5048,scaleY:0.5048,y:-15.25},0).wait(1).to({scaleX:0.5053,scaleY:0.5053,x:14,y:-15.2},0).wait(1).to({scaleX:0.5058,scaleY:0.5058},0).wait(1).to({scaleX:0.5063,scaleY:0.5063,y:-15.15},0).wait(1).to({scaleX:0.5069,scaleY:0.5069,x:13.95,y:-15.1},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,x:13.9,y:-15.05},0).wait(1).to({scaleX:0.5081,scaleY:0.5081,y:-14.95},0).wait(1).to({scaleX:0.5088,scaleY:0.5088,y:-14.85},0).wait(1).to({scaleX:0.5094,scaleY:0.5094,x:13.85,y:-14.8},0).wait(1).to({scaleX:0.5101,scaleY:0.5101,y:-14.75},0).wait(1).to({scaleX:0.5108,scaleY:0.5108,x:13.8,y:-14.7},0).wait(1).to({scaleX:0.5116,scaleY:0.5116,y:-14.6},0).wait(1).to({scaleX:0.5123,scaleY:0.5123,x:13.75,y:-14.5},0).wait(1).to({scaleX:0.5131,scaleY:0.5131,x:13.7,y:-14.45},0).wait(1).to({scaleX:0.5139,scaleY:0.5139,y:-14.4},0).wait(1).to({scaleX:0.5147,scaleY:0.5147,x:13.65,y:-14.25},0).wait(1).to({scaleX:0.5155,scaleY:0.5155,x:13.6,y:-14.2},0).wait(1).to({scaleX:0.5163,scaleY:0.5163,x:13.55,y:-14.1},0).wait(1).to({scaleX:0.5172,scaleY:0.5172,y:-14.05},0).wait(1).to({scaleX:0.518,scaleY:0.518,x:13.5,y:-13.95},0).wait(1).to({scaleX:0.5189,scaleY:0.5189,y:-13.85},0).wait(1).to({scaleX:0.5198,scaleY:0.5198,x:13.45,y:-13.8},0).wait(1).to({scaleX:0.5207,scaleY:0.5207,x:13.4,y:-13.65},0).wait(1).to({scaleX:0.5216,scaleY:0.5216,x:13.35,y:-13.55},0).wait(1).to({scaleX:0.5225,scaleY:0.5225,y:-13.5},0).wait(1).to({scaleX:0.5235,scaleY:0.5235,x:13.3,y:-13.4},0).wait(1).to({scaleX:0.5244,scaleY:0.5244,x:13.25,y:-13.3},0).wait(1).to({scaleX:0.5254,scaleY:0.5254,x:13.2,y:-13.2},0).wait(1).to({scaleX:0.5263,scaleY:0.5263,y:-13.1},0).wait(1).to({scaleX:0.5273,scaleY:0.5273,x:13.1,y:-13},0).wait(1).to({scaleX:0.5282,scaleY:0.5282,y:-12.9},0).wait(1).to({scaleX:0.5292,scaleY:0.5292,y:-12.8},0).wait(1).to({scaleX:0.5302,scaleY:0.5302,x:13,y:-12.7},0).wait(1).to({scaleX:0.5312,scaleY:0.5312,y:-12.6},0).wait(1).to({scaleX:0.5321,scaleY:0.5321,x:12.95,y:-12.5},0).wait(1).to({scaleX:0.5331,scaleY:0.5331,x:12.9,y:-12.4},0).wait(1).to({scaleX:0.5341,scaleY:0.5341,x:12.85,y:-12.3},0).wait(1).to({scaleX:0.535,scaleY:0.535,y:-12.2},0).wait(1).to({scaleX:0.536,scaleY:0.536,x:12.8,y:-12.15},0).wait(1).to({scaleX:0.5369,scaleY:0.5369,x:12.75,y:-12},0).wait(1).to({scaleX:0.5379,scaleY:0.5379,y:-11.9},0).wait(1).to({scaleX:0.5388,scaleY:0.5388,x:12.7,y:-11.85},0).wait(1).to({scaleX:0.5398,scaleY:0.5398,x:12.65,y:-11.7},0).wait(1).to({scaleX:0.5407,scaleY:0.5407,x:12.6,y:-11.65},0).wait(1).to({scaleX:0.5416,scaleY:0.5416,y:-11.55},0).wait(1).to({scaleX:0.5425,scaleY:0.5425,x:12.55,y:-11.45},0).wait(1).to({scaleX:0.5434,scaleY:0.5434,y:-11.35},0).wait(1).to({scaleX:0.5442,scaleY:0.5442,x:12.45,y:-11.3},0).wait(1).to({scaleX:0.5451,scaleY:0.5451,y:-11.2},0).wait(1).to({scaleX:0.5459,scaleY:0.5459,x:12.4,y:-11.1},0).wait(1).to({scaleX:0.5467,scaleY:0.5467,y:-11},0).wait(1).to({scaleX:0.5475,scaleY:0.5475,x:12.35,y:-10.95},0).wait(1).to({scaleX:0.5483,scaleY:0.5483,x:12.3,y:-10.9},0).wait(1).to({scaleX:0.549,scaleY:0.549,y:-10.75},0).wait(1).to({scaleX:0.5498,scaleY:0.5498,x:12.25,y:-10.7},0).wait(1).to({scaleX:0.5505,scaleY:0.5505,y:-10.65},0).wait(1).to({scaleX:0.5512,scaleY:0.5512,x:12.2,y:-10.6},0).wait(1).to({scaleX:0.5518,scaleY:0.5518,x:12.15,y:-10.55},0).wait(1).to({scaleX:0.5524,scaleY:0.5524,y:-10.4},0).wait(1).to({scaleX:0.553,scaleY:0.553,x:12.1,y:-10.35},0).wait(1).to({scaleX:0.5536,scaleY:0.5536,y:-10.3},0).wait(1).to({scaleX:0.5542,scaleY:0.5542},0).wait(1).to({scaleX:0.5547,scaleY:0.5547,x:12.05,y:-10.25},0).wait(1).to({scaleX:0.5552,scaleY:0.5552,y:-10.15},0).wait(1).to({scaleX:0.5556,scaleY:0.5556,y:-10.1},0).wait(1).to({scaleX:0.556,scaleY:0.556,x:12,y:-10.05},0).wait(1).to({scaleX:0.5564,scaleY:0.5564},0).wait(1).to({scaleX:0.5568,scaleY:0.5568,x:11.95,y:-10},0).wait(1).to({scaleX:0.5571,scaleY:0.5571},0).wait(1).to({scaleX:0.5573,scaleY:0.5573,x:12,y:-9.95},0).wait(1).to({scaleX:0.5576,scaleY:0.5576,x:11.95},0).wait(1).to({scaleX:0.5578,scaleY:0.5578,y:-9.9},0).wait(1).to({scaleX:0.558,scaleY:0.558},0).wait(1).to({scaleX:0.5581,scaleY:0.5581},0).wait(1).to({scaleX:0.5582,scaleY:0.5582,x:11.9,y:-9.85},0).wait(1).to({scaleX:0.5583,scaleY:0.5583},0).wait(1).to({regX:67.8,regY:0,x:34,y:-18.75},0).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-108.5,241.5,174);


(lib.IMG_1_Animation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_150 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(150).call(this.frame_150).wait(1));

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay0NnIAA7NMAlpAAAIAAbNg");
	mask.setTransform(3.5,-36.025);

	// Layer_1
	this.instance = new lib.IMG_1();
	this.instance.setTransform(34,0,0.5,0.5,0,0,0,68,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({regX:22.7,regY:-59.8,x:11.35,y:-29.9},0).wait(2).to({scaleX:0.5001,scaleY:0.5001},0).wait(1).to({scaleX:0.5002,scaleY:0.5002},0).wait(1).to({scaleX:0.5003,scaleY:0.5003,y:-29.85},0).wait(1).to({scaleX:0.5005,scaleY:0.5005,y:-29.9},0).wait(1).to({scaleX:0.5006,scaleY:0.5006,y:-29.85},0).wait(1).to({scaleX:0.5008,scaleY:0.5008,x:11.3,y:-29.8},0).wait(1).to({scaleX:0.5011,scaleY:0.5011,y:-29.75},0).wait(1).to({scaleX:0.5013,scaleY:0.5013,x:11.35},0).wait(1).to({scaleX:0.5016,scaleY:0.5016,x:11.3,y:-29.7},0).wait(1).to({scaleX:0.5019,scaleY:0.5019,y:-29.65},0).wait(1).to({scaleX:0.5022,scaleY:0.5022},0).wait(1).to({scaleX:0.5026,scaleY:0.5026,x:11.25,y:-29.55},0).wait(1).to({scaleX:0.503,scaleY:0.503},0).wait(1).to({scaleX:0.5034,scaleY:0.5034,y:-29.45},0).wait(1).to({scaleX:0.5038,scaleY:0.5038,x:11.2},0).wait(1).to({scaleX:0.5042,scaleY:0.5042,y:-29.35},0).wait(1).to({scaleX:0.5047,scaleY:0.5047,x:11.15,y:-29.3},0).wait(1).to({scaleX:0.5052,scaleY:0.5052,x:11.1,y:-29.2},0).wait(1).to({scaleX:0.5058,scaleY:0.5058,x:11.15,y:-29.15},0).wait(1).to({scaleX:0.5063,scaleY:0.5063,x:11.1,y:-29.1},0).wait(1).to({scaleX:0.5069,scaleY:0.5069,x:11.05,y:-29},0).wait(1).to({scaleX:0.5075,scaleY:0.5075,x:11,y:-28.9},0).wait(1).to({scaleX:0.5081,scaleY:0.5081,x:11.05,y:-28.85},0).wait(1).to({scaleX:0.5087,scaleY:0.5087,x:11,y:-28.7},0).wait(1).to({scaleX:0.5094,scaleY:0.5094,x:10.95,y:-28.65},0).wait(1).to({scaleX:0.5101,scaleY:0.5101,y:-28.55},0).wait(1).to({scaleX:0.5108,scaleY:0.5108,x:10.9,y:-28.45},0).wait(1).to({scaleX:0.5115,scaleY:0.5115,x:10.85,y:-28.4},0).wait(1).to({scaleX:0.5122,scaleY:0.5122,y:-28.3},0).wait(1).to({scaleX:0.513,scaleY:0.513,x:10.8,y:-28.2},0).wait(1).to({scaleX:0.5138,scaleY:0.5138,x:10.75,y:-28.05},0).wait(1).to({scaleX:0.5146,scaleY:0.5146,y:-27.95},0).wait(1).to({scaleX:0.5154,scaleY:0.5154,x:10.7,y:-27.8},0).wait(1).to({scaleX:0.5162,scaleY:0.5162,x:10.65,y:-27.7},0).wait(1).to({scaleX:0.5171,scaleY:0.5171,y:-27.6},0).wait(1).to({scaleX:0.5179,scaleY:0.5179,x:10.55,y:-27.5},0).wait(1).to({scaleX:0.5188,scaleY:0.5188,y:-27.35},0).wait(1).to({scaleX:0.5197,scaleY:0.5197,x:10.5,y:-27.3},0).wait(1).to({scaleX:0.5206,scaleY:0.5206,x:10.45,y:-27.15},0).wait(1).to({scaleX:0.5215,scaleY:0.5215,y:-27.05},0).wait(1).to({scaleX:0.5224,scaleY:0.5224,x:10.35,y:-26.9},0).wait(1).to({scaleX:0.5233,scaleY:0.5233,y:-26.75},0).wait(1).to({scaleX:0.5243,scaleY:0.5243,x:10.3,y:-26.65},0).wait(1).to({scaleX:0.5252,scaleY:0.5252,x:10.25,y:-26.5},0).wait(1).to({scaleX:0.5262,scaleY:0.5262,x:10.2,y:-26.35},0).wait(1).to({scaleX:0.5271,scaleY:0.5271,x:10.15,y:-26.25},0).wait(1).to({scaleX:0.5281,scaleY:0.5281,y:-26.15},0).wait(1).to({scaleX:0.5291,scaleY:0.5291,x:10.1,y:-26},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:10.05,y:-25.85},0).wait(1).to({scaleX:0.531,scaleY:0.531,x:10,y:-25.75},0).wait(1).to({scaleX:0.532,scaleY:0.532,y:-25.6},0).wait(1).to({scaleX:0.5329,scaleY:0.5329,x:9.9,y:-25.45},0).wait(1).to({scaleX:0.5339,scaleY:0.5339,x:9.85,y:-25.35},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,y:-25.25},0).wait(1).to({scaleX:0.5358,scaleY:0.5358,x:9.8,y:-25.1},0).wait(1).to({scaleX:0.5367,scaleY:0.5367,x:9.75,y:-24.95},0).wait(1).to({scaleX:0.5377,scaleY:0.5377,x:9.7,y:-24.8},0).wait(1).to({scaleX:0.5386,scaleY:0.5386,y:-24.7},0).wait(1).to({scaleX:0.5396,scaleY:0.5396,x:9.65,y:-24.55},0).wait(1).to({scaleX:0.5405,scaleY:0.5405,x:9.55,y:-24.45},0).wait(1).to({scaleX:0.5414,scaleY:0.5414,y:-24.3},0).wait(1).to({scaleX:0.5423,scaleY:0.5423,x:9.5,y:-24.25},0).wait(1).to({scaleX:0.5431,scaleY:0.5431,y:-24.1},0).wait(1).to({scaleX:0.544,scaleY:0.544,x:9.45,y:-24},0).wait(1).to({scaleX:0.5448,scaleY:0.5448,x:9.35,y:-23.9},0).wait(1).to({scaleX:0.5457,scaleY:0.5457,y:-23.75},0).wait(1).to({scaleX:0.5465,scaleY:0.5465,x:9.3,y:-23.65},0).wait(1).to({scaleX:0.5473,scaleY:0.5473,x:9.25,y:-23.55},0).wait(1).to({scaleX:0.548,scaleY:0.548,y:-23.4},0).wait(1).to({scaleX:0.5488,scaleY:0.5488,x:9.2,y:-23.3},0).wait(1).to({scaleX:0.5495,scaleY:0.5495,x:9.15,y:-23.2},0).wait(1).to({scaleX:0.5502,scaleY:0.5502,y:-23.15},0).wait(1).to({scaleX:0.5509,scaleY:0.5509,x:9.1,y:-23.05},0).wait(1).to({scaleX:0.5515,scaleY:0.5515,y:-22.95},0).wait(1).to({scaleX:0.5522,scaleY:0.5522,y:-22.85},0).wait(1).to({scaleX:0.5528,scaleY:0.5528,x:9.05,y:-22.8},0).wait(1).to({scaleX:0.5533,scaleY:0.5533,x:9,y:-22.7},0).wait(1).to({scaleX:0.5539,scaleY:0.5539,x:8.95,y:-22.6},0).wait(1).to({scaleX:0.5544,scaleY:0.5544,x:9,y:-22.55},0).wait(1).to({scaleX:0.5549,scaleY:0.5549,x:8.95,y:-22.5},0).wait(1).to({scaleX:0.5553,scaleY:0.5553,x:8.9,y:-22.45},0).wait(1).to({scaleX:0.5557,scaleY:0.5557,y:-22.4},0).wait(1).to({scaleX:0.5561,scaleY:0.5561,x:8.85,y:-22.35},0).wait(1).to({scaleX:0.5565,scaleY:0.5565,x:8.9,y:-22.3},0).wait(1).to({scaleX:0.5568,scaleY:0.5568,y:-22.25},0).wait(1).to({scaleX:0.557,scaleY:0.557,x:8.85,y:-22.2},0).wait(1).to({scaleX:0.5573,scaleY:0.5573},0).wait(1).to({scaleX:0.5575,scaleY:0.5575,y:-22.15},0).wait(1).to({scaleX:0.5577,scaleY:0.5577,x:8.8},0).wait(1).to({scaleX:0.5578,scaleY:0.5578,y:-22.1},0).wait(1).to({scaleX:0.5579,scaleY:0.5579},0).wait(1).to({y:-22.05},0).wait(1).to({regX:68,regY:0.1,scaleX:0.558,scaleY:0.558,x:34.1,y:11.3},0).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117,-123.1,241,174.2);


(lib.ENDFRAME_ANIMATION = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_111 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(-49.25,75.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).wait(108));

	// LOGO
	this.instance_1 = new lib.ENDFRAME_LOGO();
	this.instance_1.setTransform(117.4,98.75,1.3274,1.3274);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({alpha:1},9).wait(41));

	// ENDFRAME_COPY1
	this.instance_2 = new lib.ENDFRAME_COPY1();
	this.instance_2.setTransform(-63,109.5,1.3274,1.3274,0,0,0,0,-0.1);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},4).wait(45).to({regX:-0.6,regY:0,x:-63.9,y:109.65},0).wait(1).to({x:-64.3},0).wait(1).to({x:-64.95},0).wait(1).to({x:-65.8},0).wait(1).to({x:-66.95},0).wait(1).to({x:-68.35},0).wait(1).to({x:-69.9},0).wait(1).to({x:-71.7},0).wait(1).to({x:-73.6},0).wait(1).to({x:-75.7},0).wait(1).to({x:-77.85},0).wait(1).to({x:-80.1},0).wait(1).to({x:-82.3},0).wait(1).to({x:-84.5},0).wait(1).to({x:-86.6},0).wait(1).to({x:-88.55},0).wait(1).to({x:-90.35},0).wait(1).to({x:-91.95},0).wait(1).to({x:-93.3},0).wait(1).to({x:-94.35},0).wait(1).to({x:-95.15},0).wait(1).to({x:-95.6},0).wait(1).to({regX:0,regY:-0.1,x:-95,y:109.5},0).wait(41));

	// ENDFRAME_COPY2
	this.instance_3 = new lib.ENDFRAME_COPYa();
	this.instance_3.setTransform(97.1,111.4,1.3274,1.3274,0,0,0,-0.1,-0.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},4).wait(37).to({alpha:0},10).wait(61));

	// ENDFRAME_COPY2
	this.instance_4 = new lib.ENDFRAME_COPY2();
	this.instance_4.setTransform(97.1,111.4,1.3274,1.3274,0,0,0,-0.1,-0.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},4).wait(37).to({alpha:0},10).wait(61));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.3,80.1,207.3,236.29999999999998);


// stage content:
(lib.CPB038CEOMag__1536x2048_R0a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {loop:415};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,415];
	// timeline functions:
	this.frame_0 = function() {
		// DobuleClick ClickTag functions for banner
		
		
		this.clickThru.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		
		
		function fl_MouseClickHandler_2()
		{
			// clickTag, Don't forget to define clickTag variable in the HTML
			
			window.open(window.clickTag)	
		
			// End your custom code
		}
	}
	this.frame_1 = function() {
		stage.enableMouseOver();
		stage.addEventListener();
	}
	this.frame_415 = function() {
		if (!this.looped) this.looped = 1;  
		if (this.looped++ > 1) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(414).call(this.frame_415).wait(35));

	// keyline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B3B3B3").ss(1,0,0,4).p("Eh36if6MDv1AAAMAAAE/1Mjv1AAAg");
	this.shape.setTransform(768,1024);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(450));

	// LOGO
	this.instance = new lib.LOGO();
	this.instance.setTransform(1022.45,2383.1,6.4491,6.4491);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(235).to({alpha:0},7).to({_off:true},1).wait(207));

	// BG
	this.instance_1 = new lib.BG();
	this.instance_1.setTransform(767.95,1023.95,5.12,12.2879);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(439).to({_off:false},0).to({alpha:1},10).wait(1));

	// END FRAME
	this.instance_2 = new lib.ENDFRAME_ANIMATION("synched",0,false);
	this.instance_2.setTransform(990.95,282.05,4.465,4.465);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(254).to({_off:false},0).wait(196));

	// COPY_2
	this.instance_3 = new lib.COPY_2();
	this.instance_3.setTransform(1090.55,-16.65,5.12,5.12);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(122).to({_off:false},0).to({alpha:1},12).wait(92).to({alpha:0},16).to({_off:true},1).wait(207));

	// IMG_2
	this.instance_4 = new lib.IMG_2_Animation();
	this.instance_4.setTransform(2273.25,1241.85,5.12,5.12);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(122).to({_off:false},0).wait(1).to({regX:11.8,regY:-21.5,x:2332.4,y:1131.75},0).wait(1).to({x:2328.45},0).wait(1).to({x:2321.55},0).wait(1).to({x:2311.3},0).wait(1).to({x:2297.15},0).wait(1).to({x:2278.7},0).wait(1).to({x:2255.1},0).wait(1).to({x:2225.65},0).wait(1).to({x:2189.25},0).wait(1).to({x:2144.5},0).wait(1).to({x:2089.85},0).wait(1).to({x:2023.25},0).wait(1).to({x:1942.5},0).wait(1).to({x:1845.6},0).wait(1).to({x:1732.35},0).wait(1).to({x:1606.8},0).wait(1).to({x:1478.6},0).wait(1).to({x:1359.55},0).wait(1).to({x:1257.3},0).wait(1).to({x:1173.65},0).wait(1).to({x:1106.95},0).wait(1).to({x:1054.65},0).wait(1).to({x:1014.1},0).wait(1).to({x:983.2},0).wait(1).to({x:960.25},0).wait(1).to({x:943.9},0).wait(1).to({x:933.2},0).wait(1).to({x:927.25},0).wait(1).to({regX:0,regY:0,x:865,y:1241.85},0).wait(62).to({regX:11.8,regY:-21.5,x:923.95,y:1131.75},0).wait(1).to({x:919.4},0).wait(1).to({x:911.45},0).wait(1).to({x:899.65},0).wait(1).to({x:883.45},0).wait(1).to({x:862.3},0).wait(1).to({x:835.5},0).wait(1).to({x:802.05},0).wait(1).to({x:760.95},0).wait(1).to({x:710.7},0).wait(1).to({x:649.65},0).wait(1).to({x:575.65},0).wait(1).to({x:486.25},0).wait(1).to({x:379.1},0).wait(1).to({x:252.65},0).wait(1).to({x:108.75},0).wait(1).to({x:-44.85},0).wait(1).to({x:-195.5},0).wait(1).to({x:-331.1},0).wait(1).to({x:-445.8},0).wait(1).to({x:-539.3},0).wait(1).to({x:-613.95},0).wait(1).to({x:-672.9},0).wait(1).to({x:-718.75},0).wait(1).to({x:-753.9},0).wait(1).to({x:-780.1},0).wait(1).to({x:-798.8},0).wait(1).to({x:-811.15},0).wait(1).to({x:-818},0).wait(1).to({regX:0,regY:0,x:-880.6,y:1241.85},0).to({_off:true},1).wait(207));

	// SQUARE_2
	this.instance_5 = new lib.SQUARE_2();
	this.instance_5.setTransform(360.95,-2534.35,5.12,5.12);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(122).to({_off:false},0).wait(1).to({regX:42.9,regY:193.1,x:580.6,y:-1543.15},0).wait(1).to({y:-1535.1},0).wait(1).to({y:-1521},0).wait(1).to({y:-1499.95},0).wait(1).to({y:-1471.1},0).wait(1).to({y:-1433.25},0).wait(1).to({y:-1385.05},0).wait(1).to({y:-1324.75},0).wait(1).to({y:-1250.2},0).wait(1).to({y:-1158.75},0).wait(1).to({y:-1046.9},0).wait(1).to({y:-910.65},0).wait(1).to({y:-745.4},0).wait(1).to({y:-547.1},0).wait(1).to({y:-315.4},0).wait(1).to({y:-58.5},0).wait(1).to({y:203.75},0).wait(1).to({y:447.35},0).wait(1).to({y:656.6},0).wait(1).to({y:827.8},0).wait(1).to({y:964.2},0).wait(1).to({y:1071.25},0).wait(1).to({y:1154.2},0).wait(1).to({y:1217.45},0).wait(1).to({y:1264.4},0).wait(1).to({y:1297.75},0).wait(1).to({y:1319.7},0).wait(1).to({y:1331.9},0).wait(1).to({regX:0,regY:0,x:360.95,y:347.1},0).wait(62).to({regX:42.9,regY:193.1,x:580.6,y:1337.4},0).wait(1).to({y:1342.7},0).wait(1).to({y:1352},0).wait(1).to({y:1365.8},0).wait(1).to({y:1384.7},0).wait(1).to({y:1409.35},0).wait(1).to({y:1440.7},0).wait(1).to({y:1479.75},0).wait(1).to({y:1527.8},0).wait(1).to({y:1586.45},0).wait(1).to({y:1657.8},0).wait(1).to({y:1744.2},0).wait(1).to({y:1848.6},0).wait(1).to({y:1973.8},0).wait(1).to({y:2121.45},0).wait(1).to({y:2289.5},0).wait(1).to({y:2468.95},0).wait(1).to({y:2644.9},0).wait(1).to({y:2803.35},0).wait(1).to({y:2937.3},0).wait(1).to({y:3046.45},0).wait(1).to({y:3133.7},0).wait(1).to({y:3202.5},0).wait(1).to({y:3256.1},0).wait(1).to({y:3297.1},0).wait(1).to({y:3327.7},0).wait(1).to({y:3349.55},0).wait(1).to({y:3364},0).wait(1).to({y:3372},0).wait(1).to({regX:0,regY:0,x:360.95,y:2385.9},0).to({_off:true},1).wait(207));

	// COPY_1
	this.instance_6 = new lib.COPY_1();
	this.instance_6.setTransform(1090.55,-16.65,5.12,5.12);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},12).wait(92).to({alpha:0},16).to({_off:true},1).wait(329));

	// IMG_1
	this.instance_7 = new lib.IMG_1_Animation();
	this.instance_7.setTransform(-875.5,1443.8,5.12,5.12);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:3.5,regY:-36,x:-856.3,y:1259.5},0).wait(1).to({x:-852.2},0).wait(1).to({x:-845},0).wait(1).to({x:-834.25},0).wait(1).to({x:-819.55},0).wait(1).to({x:-800.25},0).wait(1).to({x:-775.7},0).wait(1).to({x:-744.95},0).wait(1).to({x:-706.95},0).wait(1).to({x:-660.3},0).wait(1).to({x:-603.25},0).wait(1).to({x:-533.8},0).wait(1).to({x:-449.55},0).wait(1).to({x:-348.45},0).wait(1).to({x:-230.3},0).wait(1).to({x:-99.35},0).wait(1).to({x:34.35},0).wait(1).to({x:158.55},0).wait(1).to({x:265.25},0).wait(1).to({x:352.5},0).wait(1).to({x:422.05},0).wait(1).to({x:476.7},0).wait(1).to({x:519},0).wait(1).to({x:551.2},0).wait(1).to({x:575.15},0).wait(1).to({x:592.2},0).wait(1).to({x:603.35},0).wait(1).to({x:609.6},0).wait(1).to({regX:0,regY:0,x:593.65,y:1443.8},0).wait(62).to({regX:3.5,regY:-36,x:612.95,y:1259.5},0).wait(1).to({x:617.35},0).wait(1).to({x:625.15},0).wait(1).to({x:636.65},0).wait(1).to({x:652.45},0).wait(1).to({x:673.1},0).wait(1).to({x:699.35},0).wait(1).to({x:732},0).wait(1).to({x:772.15},0).wait(1).to({x:821.25},0).wait(1).to({x:880.9},0).wait(1).to({x:953.15},0).wait(1).to({x:1040.45},0).wait(1).to({x:1145.2},0).wait(1).to({x:1268.7},0).wait(1).to({x:1409.25},0).wait(1).to({x:1559.35},0).wait(1).to({x:1706.5},0).wait(1).to({x:1839},0).wait(1).to({x:1951.05},0).wait(1).to({x:2042.35},0).wait(1).to({x:2115.3},0).wait(1).to({x:2172.85},0).wait(1).to({x:2217.65},0).wait(1).to({x:2252},0).wait(1).to({x:2277.6},0).wait(1).to({x:2295.85},0).wait(1).to({x:2307.9},0).wait(1).to({x:2314.6},0).wait(1).to({regX:0,regY:0,x:2298.85,y:1443.8},0).to({_off:true},1).wait(329));

	// SQUARE_1
	this.instance_8 = new lib.SQUARE_1();
	this.instance_8.setTransform(1791.95,347.1,5.12,5.12);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:110.2,regY:151,x:2354.85,y:1120.2},0).wait(1).to({x:2350.85},0).wait(1).to({x:2343.85},0).wait(1).to({x:2333.4},0).wait(1).to({x:2319},0).wait(1).to({x:2300.2},0).wait(1).to({x:2276.2},0).wait(1).to({x:2246.2},0).wait(1).to({x:2209.15},0).wait(1).to({x:2163.6},0).wait(1).to({x:2107.95},0).wait(1).to({x:2040.2},0).wait(1).to({x:1957.95},0).wait(1).to({x:1859.3},0).wait(1).to({x:1744.05},0).wait(1).to({x:1616.2},0).wait(1).to({x:1485.75},0).wait(1).to({x:1364.55},0).wait(1).to({x:1260.45},0).wait(1).to({x:1175.25},0).wait(1).to({x:1107.4},0).wait(1).to({x:1054.1},0).wait(1).to({x:1012.85},0).wait(1).to({x:981.35},0).wait(1).to({x:958},0).wait(1).to({x:941.4},0).wait(1).to({x:930.5},0).wait(1).to({x:924.4},0).wait(1).to({regX:0,regY:0,x:358.35,y:347.1},0).wait(62).to({regX:110.2,regY:151,x:921.2,y:1120.2},0).wait(1).to({x:916.95},0).wait(1).to({x:909.45},0).wait(1).to({x:898.35},0).wait(1).to({x:883.2},0).wait(1).to({x:863.35},0).wait(1).to({x:838.15},0).wait(1).to({x:806.8},0).wait(1).to({x:768.2},0).wait(1).to({x:721.05},0).wait(1).to({x:663.75},0).wait(1).to({x:594.3},0).wait(1).to({x:510.45},0).wait(1).to({x:409.85},0).wait(1).to({x:291.2},0).wait(1).to({x:156.15},0).wait(1).to({x:11.95},0).wait(1).to({x:-129.45},0).wait(1).to({x:-256.75},0).wait(1).to({x:-364.4},0).wait(1).to({x:-452.1},0).wait(1).to({x:-522.2},0).wait(1).to({x:-577.5},0).wait(1).to({x:-620.55},0).wait(1).to({x:-653.55},0).wait(1).to({x:-678.1},0).wait(1).to({x:-695.65},0).wait(1).to({x:-707.25},0).wait(1).to({x:-713.7},0).wait(1).to({regX:0,regY:0,x:-1279.95,y:347.1},0).to({_off:true},1).wait(329));

	// BG
	this.instance_9 = new lib.BG();
	this.instance_9.setTransform(767.95,1023.9,5.12,8.192);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(450));

	// clickThru
	this.clickThru = new lib.button_clickthrough_btn();
	this.clickThru.name = "clickThru";
	this.clickThru.setTransform(768,1024,5.12,8.1921,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickThru, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.clickThru).wait(450));

	// stageBackground
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("Eh5jihjMDzHAAAMAAAFDHMjzHAAAg");
	this.shape_1.setTransform(768,1024);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(50,50,50,0)").s().p("Eh5jChkMAAAlDHMDzHAAAMAAAFDHg");
	this.shape_2.setTransform(768,1024);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(450));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-706.5,-977.8,3712.9,4808.3);
// library properties:
lib.properties = {
	id: 'E54B4EB5E0B44945A513FA013C111257',
	width: 1536,
	height: 2048,
	fps: 30,
	color: "#323232",
	opacity: 0.00,
	manifest: [
		{src:"Asset1.jpg?1657714461651", id:"Asset1"},
		{src:"Asset2.jpg?1657714461651", id:"Asset2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E54B4EB5E0B44945A513FA013C111257'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;