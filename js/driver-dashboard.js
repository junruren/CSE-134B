function create_empty_hp (){
	var greetings = '<div class="vertical-middle">' + 
        '<h1>Hello, ' + user_name + '</h1>' + 
        '<h2>Ready to take another order?</h2>' + 
        '<button class="button homepage" id="find_riders">Find Riders</button>' + 
      	'</div>';
    return greetings;
}


function create_trip_hp (latest_pickup){
	var greetings = '<div class="vertical-middle with-more-info" id="greet-user">' + 
        '<h1>Hello, ' + user_name + '</h1>';

    var pick_up_info = '<hr><div class="dashboard-info flex-container">' + 
        '<div class="upcoming" id="trip-info">' + 
        '<h2>Upcoming: '+ latest_pickup['Arrival Time'] +'</h2>' +
        '<h2>Picking up: ' + latest_pickup['Name'] + '</h2>' + 
        '<h2>Flight: ' + latest_pickup['Flight Number'] + '</h2>' + 
        '<div class="detail-buttons">' + 
        '<button class="button indv-detail-button" id="ride-detail-button">Ride Details</button>' + 
        '<button class="button indv-detail-button" id="message-button">Message Your Guest</button>' + 
        '<button class="button indv-detail-button">Arriving Flight Info</button></div></div>';

    var check_list = '<div class="todos"><div>' + 
            '<input type="checkbox" checked><button disabled class="button checklist">Find a request</button></div>' + 
            '<div><input type="checkbox" checked><button disabled class="button checklist">Send price offer</button></div>' + 
            '<div><input type="checkbox" checked><button disabled class="button checklist">Confirm deal</button></div>' + 
            '<div><input type="checkbox"><button class="button checklist">Confirm driver arrival</button></div>' + 
            '<div><input type="checkbox"><button class="button checklist">Confirm guests pickup</button></div>' + 
            '<div><input type="checkbox"><button class="button checklist">Confirm dropoff</button></div>' + 
            '<div><input type="checkbox"><button class="button checklist">Write a review</button></div>' + 
            '</div></div>';

    var more_links = '<div class = "more-links">' + 
        '<a class = "more-links-content" href="driver-all-requests.html">See All Upcoming</a>' + 
        '<a class = "more-links-content" href="driver-new-request.html">Find New Rides</a>' + 
        '</div></div>';

    return greetings + pick_up_info + check_list + more_links;
}

/* Display layout based on whether the driver has upcoming trips or not*/
window.onload = function(){

	var dashboard_page = document.getElementById("dashboard_layout");
	var has_trip = (all_trips.length > 0);
	if (!has_trip) {
		render_empty_hp(dashboard_page, create_empty_hp());
	} else {
		render_trip_hp(create_trip_hp(latest_pickup));
	}

	function render_empty_hp(dashboard_page, empty_hp_html) {
		if (dashboard_page != null) {
			dashboard_page.innerHTML = empty_hp_html;
			document.getElementById("find_riders").setAttribute(
				"onclick", "location.href='driver-new-request.html'");
		}
	}
	
	function render_trip_hp(trip_hp_html) {
		if (dashboard_page != null) {
			dashboard_page.innerHTML = trip_hp_html;
            document.getElementById("ride-detail-button").setAttribute(
                "onclick", "location.href='driver-all-requests.html'");
            document.getElementById("message-button").setAttribute(
                "onclick", "location.href='chat.html'");
		}
	}
}