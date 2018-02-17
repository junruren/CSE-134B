var trips_displayed = available_trips;

// dynamically create tables based on data passed in
function create_table(no_status, table_header, trip_data, extra_element) {
	// Get the amount of objects inside 'trip_data' so we can loop through each one.
	var trip_count = trip_data.length;
	var trip_form_keys = Object.keys(trip_data[0]);
	var column_count = trip_form_keys.length;
	var tableContent = "";

	// Loop through the JSON and output each row in to a string.
	for (i = 0; i < trip_count; i++) {
		var cur_row = '<tr class="trip_row">';
		for (j = 0; j < column_count; j++) {
			var entry = trip_data[i][trip_form_keys[j]];
			if (no_status && j==column_count-1) { entry = ""; }
			cur_row = cur_row + "<td>" + entry + "</td>";
		}
		cur_row = cur_row + extra_element + "</tr>";
		tableContent = tableContent + cur_row;
	}
	var tableFooter = "</tbody></table>";
	return (tableHeader + tableContent + tableFooter);
}

function filter_upcoming() {
	var button = document.getElementById("filter-upcoming-button");
	var trips_to_display = all_trips;
	if (button.checked) {
		trips_to_display = [];
		for(var i = 0; i<all_trips.length; i++) {
			if(all_trips[i]["Status"]!="Finished") {
				trips_to_display.push(all_trips[i]);
			}
		}
	}
	var chat_page = "'chat.html'";
	var all_trips_page = document.getElementById("all-trips-render");
    var message_button = '<td><button class="button message" onclick="location.href='+chat_page+'">Message</button></td>';
	render_table(false, all_trips_page, trips_to_display, message_button); 
}

function filter_capacity() {
	var value = document.getElementById("capacity-input").value;
	var trips_to_display = [];
	for(var i = 0; i<available_trips.length; i++) {
			if(available_trips[i]["Total Riders"]<=value) {
				trips_to_display.push(available_trips[i]);
		}
	}
	trips_displayed = trips_to_display;
	var available_trips_page = document.getElementById("available-trips-render");
    var checkbox = '<td><input type="checkbox" class="select_checkbox" onclick="store_selected_row()"></td>';
    render_table(true, available_trips_page, trips_to_display, checkbox);
}

function store_selected_row() {
	var trips = document.getElementsByClassName("trip_row");
	var checkboxes = document.getElementsByClassName("select_checkbox");
	for (var i = 0; i < trips.length; i++) {
		if (checkboxes[i].checked == true) {
			localStorage.removeItem('driver_selected_trip');
			localStorage.setItem('driver_selected_trip', JSON.stringify(trips_displayed[i]));
			return;
		}
	}
}


function render_table(no_status, selected_page, trips_data, extra_element) {
	if (selected_page != null) {
		var element_html = create_table(no_status, tableHeader, trips_data, extra_element);
		selected_page.innerHTML = element_html;
	}
}


var tableHeader = "<table><thead><tr>" + 
	        	"<th>Name</th>" + 
	            "<th>Total Riders</th>" + 
	            "<th>Pick-up</th>" + 
	            "<th>Destination</th>" + 
	            "<th>Flight Number</th>" + 
	            "<th>Arrival Time</th>" + 
	            "<th>Nickname</th>" + 
	            "<th>Status</th>" +
	        	"</tr></thead><tbody>";


function store_input_text() {
	var text = document.getElementById("offer-content").value;
	localStorage.removeItem('driver_input_text');
	localStorage.setItem('driver_input_text', text);
}


function default_text_html(driver_name, guest_name) {
	var default_text = '<h2>Say hi to ' + guest_name + ' (and give a quote!):</h2>' + 
      '<div class="send-message">' + 
      '<textarea name="message" rows="8" cols="80" id="offer-content">Hi ' + guest_name + ', ' + 
	  "\n\nI'd like to make an offer of $100 for your ride. Please feel free to let me know if " + 
	  "you have any questions! Look forward to serve you! " + 
	  '\n\nBest,'+ '\n' + driver_name +'</textarea></div>';
	return default_text;
}


function display_default_text(driver_name, guest_name, selected_element) {
	if (selected_element != null) {
		var text_html = default_text_html(driver_name, guest_name);
		selected_element.innerHTML = text_html;
	}
}


function display_sent_text(selected_element, text){
	if (selected_element != null) {
		selected_element.innerHTML = text;
	}
}