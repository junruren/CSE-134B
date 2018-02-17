var user_info_rider = {
    "first_name": "Ziyi",
    "last_name": "Xiao",
    "nick_name": "Annie",
    "phone": "8581234567",
    "email": "anniexiao@example.com",
};

/*
 * Currently not working - want to preserve user entered values in localStorage
 * AKA: not keep initializing localStorage with the values above...
 */
if (window.localStorage.getItem('user_info_rider') == null) {
    console.log("Reset user info!");
    localStorage.setItem('user_info_rider', JSON.stringify(user_info_rider));
}
