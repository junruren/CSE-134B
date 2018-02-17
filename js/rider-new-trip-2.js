window.onload = function() {
    var next_btn = document.getElementById("next-btn");
    var input_flight_number = document.getElementById("input-f-n");
    var input_date = document.getElementById("input-date");
    var input_time = document.getElementById("input-time");

    // If coming back for reedit: read from localStorage
    try {
        var rider_trip_demo = JSON.parse(localStorage.getItem('rider_trip_demo'));
        var flight_info = rider_trip_demo['arrival']['flight_info'];
        input_flight_number.value = flight_info['flight_number'];
        input_date.value = flight_info['date'];
        input_time.value = flight_info['time'];
    } catch (TypeError) {
        console.log("No previous record found.");
    }

    next_btn.onclick = function() {
        var flight_number = input_flight_number.value;
        var date = input_date.value;
        var time = input_time.value;
        // Disallow continuing without an selection
        if (!flight_number || !date || !time) {
            window.alert("Please tell us about your flight ψ(｀∇´)ψ");
            return;
        }
        // Write the selection to localStorage
        var rider_trip_demo = JSON.parse(localStorage.getItem('rider_trip_demo'));
        var flight_info = {
            "flight_number": flight_number,
            "airport": "Los Angeles (LAX)",
            "date": date,
            "time": time,
        }
        try {
            rider_trip_demo['arrival']['flight_number'] = flight_number;
            rider_trip_demo['arrival']['date'] = date;
            rider_trip_demo['arrival']['time'] = time;

        } catch (TypeError) {
            // Initialize when no previous record is found
            rider_trip_demo['arrival'] = {
                'flight_info': flight_info,
            }; 
        }
        localStorage.setItem('rider_trip_demo', JSON.stringify(rider_trip_demo));

        // Jump to next step
        location.href='rider-new-trip-3.html';
    };
};