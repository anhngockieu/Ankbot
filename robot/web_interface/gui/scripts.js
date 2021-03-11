var ip = location.hostname;
var ros = new ROSLIB.Ros({
	url : 'ws://' + ip + ':9090'
});

ros.on('connection', function() {
	document.getElementById("status").innerHTML = "Connected";
});

ros.on('error', function(error) {

	document.getElementById("status").innerHTML = "Error";
});

ros.on('close', function() {
	document.getElementById("status").innerHTML = "Closed";
});

// Publishing a Topic

var test_button = new ROSLIB.Topic({
	ros : ros,
	name : "/button",
	messageType : 'std_msgs/String'
});

function display1() {
	var txt = new ROSLIB.Message({
		data: "U"
	});
	test_button.publish(txt);
}

function display2() {
	var txt = new ROSLIB.Message({
		data: "L"
	});
	test_button.publish(txt);
}

function display3() {
	var txt = new ROSLIB.Message({
		data: "S"
	});
	test_button.publish(txt);
}

function display4() {
	var txt = new ROSLIB.Message({
		data: "R"
	});
	test_button.publish(txt);
}

function display5() {
	var txt = new ROSLIB.Message({
		data: "D"
	});
	test_button.publish(txt);
}

