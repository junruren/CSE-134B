
// dynamically create tables based on data passed in
function create_table(table_header, trip_data, extra_element) {
	// Get the amount of objects inside 'trip_data' so we can loop through each one.
	var trip_count = trip_data.length;
	var trip_form_keys = Object.keys(trip_data[0]);
	var column_count = trip_form_keys.length;

	var tableContent = "";

	// Loop through the JSON and output each row in to a string.
	for (i = 0; i < trip_count; i++) {
		var cur_row = "<tr>";
		for (j = 0; j < column_count; j++) {
			cur_row = cur_row + "<td>" + all_trips[i][trip_form_keys[j]] + "</td>";
		}
		cur_row = cur_row + extra_element + "</tr>";
		tableContent = tableContent + cur_row;
	}
	var tableFooter = "</table>";
	return (tableHeader + tableContent + tableFooter);
}

function store_selected_row() {
	
}

/*************** Render table in driver-all-requests.html ***************/

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

var message_button = '<td><button class="button message">Message</button></td>';
var all_trips_html = create_table(tableHeader, all_trips, message_button);

var checkbox = '<td><input type="checkbox"></td>';
var available_trips_html = create_table(tableHeader, available_trips, checkbox);

// Render the table for different pages
window.onload = function(){
	render_table();
	function render_table() {
		var all_trips_page = document.getElementById("all-trips-render");
		var available_trips_page = document.getElementById("available_trips-render");
		if (all_trips_page != null) {
			all_trips_page.innerHTML = all_trips_html;
		}
		if (available_trips_page != null) {
			available_trips_page.innerHTML = available_trips_html;
		}
	}
}



