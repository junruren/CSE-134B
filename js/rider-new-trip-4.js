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
    check_share_allowed.checked = rider_trip_demo['arrival']['flight_info']['share_allowed'];

    // Populate passenger info
    input_num.value = rider_trip_demo['arrival']['passenger_info']['total_riders'];
    check_unknown.checked = rider_trip_demo['arrival']['passenger_info']['unknown'];

    // Populate locations
    input_origin.value = rider_trip_demo['arrival']['locations']['origin'];
    input_destination.value = rider_trip_demo['arrival']['locations']['destination'];


    next_btn.onclick = function() {
        // Mark status
        rider_trip_demo['status'] = "yes";
        // Write to localStorage
        localStorage.setItem('rider_trip_demo', JSON.stringify(rider_trip_demo));
        // Back to Dashboard
        location.href='rider-dashboard.html';
    };
};
