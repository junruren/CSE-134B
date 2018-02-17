window.onload = function() {
    // Get all elements needed
    var check_share_allowed = document.getElementById("check-share-allowed");
    var check_unknown = document.getElementById("check-unknown");
    var input_num = document.getElementById("input-num");
    var input_origin = document.getElementById("input-origin");
    var input_destination = document.getElementById("input-destination");
    var next_btn = document.getElementById("next-btn");

    // Read from localStorage
    var rider_trip_demo = JSON.parse(localStorage.getItem('rider_trip_demo'));

    // Populate the flight info
    var flight_number = rider_trip_demo['arrival']['flight_info']['flight_number'];
    var airport = rider_trip_demo['arrival']['flight_info']['airport'];
    var time = rider_trip_demo['arrival']['flight_info']['time'];
    var date = rider_trip_demo['arrival']['flight_info']['date'];
    document.getElementById("flight-number").innerHTML = "Flight " + flight_number;
    document.getElementById("airport").innerHTML = "For " + airport;
    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML = date;

    // If coming back for reedit: read from localStorage
    try {
        var flight_info = rider_trip_demo['arrival']['flight_info'];
        check_share_allowed.checked = flight_info['share_allowed'];
        var passenger_info = rider_trip_demo['arrival']['passenger_info'];
        input_num.value = passenger_info['total_riders'];
        check_unknown.checked = passenger_info['unknown']; 
        var locations = rider_trip_demo['arrival']['locations'];
        input_origin.value = locations['origin'];
        input_destination.value = locations['destination'];
    } catch (TypeError) {
        console.log("No previous record found.");
    }
    next_btn.onclick = function() {
        // Read user's input
        var share_allowed = check_share_allowed.checked;
        var num = input_num.value;
        var unknown = check_unknown.checked;
        var origin = input_origin.value;
        var destination = input_destination.value;
        // Disallow continuing without an selection
        if (!origin || !destination) {
            window.alert("Please tell us about your pickup/dropoff location(s) ψ(｀∇´)ψ");
            return;
        }
        // Write the selection to localStorage
        var passenger_info = {
            "total_riders": num,
            "unknown": unknown,
        };
        var locations = {
            "origin": origin,
            "destination": destination,
        };

        rider_trip_demo['arrival']['flight_info']['share_allowed'] = share_allowed;
        rider_trip_demo['arrival']['passenger_info'] = passenger_info;
        rider_trip_demo['arrival']['locations'] = locations;
        localStorage.setItem('rider_trip_demo', JSON.stringify(rider_trip_demo));

        // Jump to next step
        location.href='rider-new-trip-4.html';
    };
};

/*
 * Stretch Goal: Use Google Maps API for locations
 * https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
 */