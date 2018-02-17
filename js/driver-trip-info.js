// dynamically create tables based on data passed in
function create_table(table_header, trip_data, extra_element) {
	// Get the amount of objects inside 'trip_data' so we can loop through each one.
	var trip_count = trip_data.length;
	var trip_form_keys = Object.keys(trip_data[0]);
	var column_count = trip_form_keys.length;

	var tableContent = "";

	// Loop through the JSON and output each row in to a string.
	for (i = 0; i < trip_count; i++) {
		var cur_row = '<tr class="trip_row">';
		for (j = 0; j < column_count; j++) {
			cur_row = cur_row + "<td>" + trip_data[i][trip_form_keys[j]] + "</td>";
		}
		cur_row = cur_row + extra_element + "</tr>";
		tableContent = tableContent + cur_row;
	}
	var tableFooter = "</table>";
	return (tableHeader + tableContent + tableFooter);
}

function store_selected_row() {
	console.log("selected a row");
	var trips = document.getElementsByClassName("trip_row");
	var checkboxes = document.getElementsByClassName("select_checkbox");
	for (var i = 0; i < trips.length; i++) {
		if (checkboxes[i].checked == true) {
			console.log("selected: " + i);
			localStorage.removeItem('driver_selected_trip');
			localStorage.setItem('driver_selected_trip', JSON.stringify(available_trips[i]));
			console.log("stored " + localStorage.getItem('driver_selected_trip'));
			return;
		}
	}
}

function render_table(selected_page, trips_data, extra_element) {
	if (selected_page != null) {
		var element_html = create_table(tableHeader, trips_data, extra_element);
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

function 
