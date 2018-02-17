var user_info_rider = {
    "first_name": "Yage",
    "last_name": "Bentian",
    "nick_name": "Scarlett",
    "phone": "8581234567",
    "email": "scarlett@example.com",
};

/*
 * Currently not working - want to preserve user entered values in localStorage
 * AKA: not keep initializing localStorage with the values above...
 */
if (window.localStorage.getItem('user_info_rider') == null) {
    console.log("Reset user info!");
    localStorage.setItem('user_info_rider', JSON.stringify(user_info_rider));
}


var rider_trip_1 = {
    "status": "yes",
    "has_departure": true,
    "has_arrival": true,
    "departure": {
        "flight_info": {
            "flight_number": "CA983",
            "origin": "Beijing (PEK)",
            "date": "2018-08-01",
            "time": "9:00pm",
            "share_allowed": true,
        },
        "passenger_info": {
            "total_riders": 1,
            "unknown": false,
        },
        "locations": {
            "origin": "Golden Arches International Hotel",
            "destination": "Beijing Capital International Airport",
        },
    },
    "arrival": {
        "flight_info": {
            "flight_number": "CA983",
            "destination": "Los Angeles (LAX)",
            "date": "2018-08-01",
            "time": "6:00pm",
            "share_allowed": true,
        },
        "passenger_info": {
            "total_riders": 1,
            "unknown": false,
        },
        "locations": {
            "origin": "Arrival Gate B, Tom Bradly Intl Terminal",
            "destination": "9229 Regents Road, La Jolla, CA",
        },
    },
};

