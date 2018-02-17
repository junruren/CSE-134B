window.onload = function() {
    var next_btn = document.getElementById("next-btn");
    var check_departure = document.getElementById("checkbox-departure");
    var check_arrival = document.getElementById("checkbox-arrival");
    next_btn.onclick = function() {
        var has_departure = check_departure.checked;
        var has_arrival = check_arrival.checked;
        // Disallow continuing without an selection
        if (!has_departure && !has_arrival) {
            window.alert("Please make an selection to get started ψ(｀∇´)ψ");
            return;
        }
        // Write the selection to localStorage
        var rider_trip_demo = {
            "status": "no",
            "has_departure": has_departure,
            "has_arrival": has_arrival,
        }
        localStorage.setItem('rider_trip_demo', JSON.stringify(rider_trip_demo));
        // Jump to next step
        location.href='rider-new-trip-2.html';
    };
};