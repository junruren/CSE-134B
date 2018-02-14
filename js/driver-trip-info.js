
var driver_trip_storage = window.localStorage;
localStorage.setItem('driver_has_trips', false);
var all_trips = [ 
	{
		"Name": "Giacomo Guilizzoni",
		"Total Riders": 3,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "MU538",
		"Arrival Time": "2018-01-19 15:03",
		"Nickname": "Peldi",
		"Status": "Driver Arrival"
	}, 
	{
		"Name": "Marco Botton",
		"Total Riders": 2,
		"Pick-up": "SAN",
		"Destination": "Irvine",
		"Flight Number": "AA1270",
		"Arrival Time": "2018-01-25 05:25",
		"Nickname": "Mark",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Mariah Maclachlan",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "La Jolla",
		"Flight Number": "XZ3265",
		"Arrival Time": "2018-01-26 09:33",
		"Nickname": "Patata",
		"Status": "Confirmed"
	}, 
	{
		"Name": "Valerie Liberty",
		"Total Riders": 2,
		"Pick-up": "LAX",
		"Destination": "Irvine",
		"Flight Number": "SQ972",
		"Arrival Time": "2018-02-01 23:42",
		"Nickname": "Val",
		"Status": "Confirmed"
	}
];

localStorage.setItem('driver_all_trips', JSON.stringify(all_trips));

// Get the amount of objects inside 'all_trips' so we can loop through each one.
var trip_count = all_trips.length;
var trip_form_keys = Object.keys(all_trips[0]);
var column_count = trip_form_keys.length;

// Make the results table to include in our output.
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
var tableContent = "";

// Loop through the JSON and output each row in to a string.
for (i = 0; i < trip_count; i++) {
	var cur_row = "<tr>";
	for (j = 0; j < column_count; j++) {
		cur_row = cur_row + "<td>" + all_trips[i][trip_form_keys[j]] + "</td>";
	}
	cur_row = cur_row + '<td><button class="button message">Message</button></td>' + "</tr>";
	tableContent = tableContent + cur_row;
}

var tableFooter = "</table>";

// Get div and output the HTML. You can include these HTML strings straight in to your emailText variable.
window.onload = function(){
	render_table();
	function render_table() {
		document.getElementById("table-render").innerHTML = tableHeader + tableContent + tableFooter;
	}
}

