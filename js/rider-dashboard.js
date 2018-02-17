function create_empty_hp (){
    var content = "<div class='vertical-middle'>" + 
        "<h1>Hello " + user_info_rider["nick_name"] + ",</h1>" +
        "<h2>Where is your next destination?</h2>" +
        "<button class='button' id='new_trip'>Find My Next Rides</button>" +
        "</div>";
    return content;
}

function create_trip_hp() {
    var content = 
    "<div class='vertical-middle with-more-info'>" +
      "<h1>Hello Annie,</h1>" +
      "<h2>Your trip to Los Angeles is good to go!</h2>" +
      "<div class='dashboard-info flex-container'>" +
        "<div class='arrival'>" +
          "<h3>Ride from Los Angeles (LAX)</h3>" +
          "<hr>" +
          "<div class='ride-info'>" +
            "<div class='ride-info-left'>" +
              "<button class='button'>Ride Details</button>" +
              "<button class='button'>Message Your Driver</button>" +
              "<button class='button'>Departure Flight Info</button>" +
            "</div>" +
            "<div class='ride-info-right'>" +
              "<img id='arrival_status_complete' src='icons/correct-32.png' alt='checkmark image'>" +
            "</div>" +
          "</div>" +
        "</div>" +
        "<div class='need-a-ride'>" +
          "<h3>Need a ride for your departure?</h3>"
          "<a class='find-a-ride' href='./rider-new-trip-2.html'>Request now</a>" +
        "</div>" +
        "<div class='find-another'>" +
          "<a href='./rider-new-trip.html'>Find Rides for Another Trip</a>" +
        "</div>" +
      "</div>" +
    "</div>";
    return content;
}

window.onload = function(){
    var dashboard_page = document.getElementById("dashboard_layout");
    var has_trip = (rider_trip_demo["status"] == "yes");
	if (!has_trip) {
		render_empty_hp(create_empty_hp());
	} else {
		render_trip_hp(create_trip_hp(latest_pickup));
	}

	function render_empty_hp(empty_hp_html) {
		if (dashboard_page != null) {
            dashboard_page.innerHTML = empty_hp_html;
            document.getElementById("new_trip").setAttribute(
				"onclick", "location.href='./rider-new-trip.html'");
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