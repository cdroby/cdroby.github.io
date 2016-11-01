
//This could be simplified with automation to pull div IDs and background info into arrays
var pageids = ["#blue", "#red", "#yellow", "#green"]
var backgrounds = ["#3369E8", "#D50F25","#EEB211","#009925"]

$(document).on('swipeleft', '.ui-page', function(event){
	if(event.handled !== true) // This will prevent event triggering more then once
	{
		leftshift();
		event.handled = true;
	}
	return false;
});

//Tempted to only allow left swipes for the time being...
$(document).on('swiperight', '.ui-page', function(event){
	if(event.handled !== true) // This will prevent event triggering more then once
	{
		rightshift();
		event.handled = true;
	}
	return false;
});

function newID() {
	currentid = "page" + page;
}

function leftshift() {
	$(pageids[0]).attr("class","shuffledleft").addClass("page")
	var holder = pageids.shift();
	pageids.push(holder);
	setTimeout(resetclass, 200);
}

function rightshift() {
	$(pageids[0]).attr("class","shuffledright").addClass("page")
	var holder = pageids.shift();
	pageids.push(holder);
	setTimeout(resetclass, 200);
}

// Can be linked to a "back" button to see the previous page
function backshift() {
	$(pageids[3]).attr("class","shuffledback").addClass("page")
	var holder = pageids.pop();
	pageids.unshift(holder);
	setTimeout(resetclass, 200);
}

function resetclass() {
	var page = 1;
	for (index = 0; index < pageids.length; ++index) {
		page = index + 1;
		currentclass = "page" + page;
		$(pageids[index]).attr("class",currentclass).addClass("page")
	}
	//$('.container').css('background-color', $('.page1').css('background-color'));
}