function render_user_info() {
    first_name_input.value = user_info_rider["first_name"];
    nick_name_input.value = user_info_rider["nick_name"];
    last_name_input.value = user_info_rider["last_name"];
    phone_input.value = user_info_rider["phone"];
    email_input.value = user_info_rider["email"];
}

window.onload = function() {
    var user_info_rider = JSON.parse(localStorage.getItem("user_info_rider"));
    var save_btn = document.getElementById("save_btn");
    save_btn.style.display = "none";

    var first_name_input = document.getElementById("first_name_input");
    var nick_name_input = document.getElementById("nick_name_input");
    var last_name_input = document.getElementById("last_name_input");
    var phone_input = document.getElementById("phone_input");
    var email_input = document.getElementById("email_input");

    var inputs = [first_name_input, nick_name_input, last_name_input, 
                    phone_input, email_input];

    render_user_info();
    var edit_btn = document.getElementById("edit_btn");
    var reset_btn = document.getElementById("reset_btn");
    edit_btn.onclick = function() {
        save_btn.style.display = "inline-block";
        edit_btn.style.display = "none";
        reset_btn.style.display = "none";
        // Enable inputs for editing
        inputs.forEach(element => {
            element.disabled = false;
        });
    };

    save_btn.onclick = function() {
        save_btn.style.display = "none";
        edit_btn.style.display = "inline-block";
        reset_btn.style.display = "inline-block";
        // Enable inputs for editing
        inputs.forEach(element => {
            element.disabled = true;
        });
        update_user_info();
        window.alert("Personal Information updated!")
    };
};

function update_user_info() {
    var user_info_rider = {
        "first_name": first_name_input.value,
        "last_name": last_name_input.value,
        "nick_name": nick_name_input.value,
        "phone": phone_input.value,
        "email": email_input.value,
    }
    localStorage.setItem('user_info_rider', JSON.stringify(user_info_rider));
    console.log("Updated!");
    console.log(localStorage.user_info_rider);
    
    
}