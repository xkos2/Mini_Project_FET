
$(document).ready(function () {
    $("#sign_up").validate({
        rules: {
            uname: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                maxlength: 10,
                minlength: 10
            },
            pass: {
                required: true,
                minlength: 10
            },
            ConfirmPassword: {
                required: true,
                equalTo: "#new_password"
            }
        },

        messages: {
            uname: "Please enter your Name",
            email: {
                required: "Please enter email address.",
                email: "Please enter a valid email."
            },
            phone: {
                required: "Please provide a username"
            },
            pass: {
                required: "Please enter password",
                minlength: "Password must be at leaset 10 characters long."
            },
            ConfirmPassword: {
                required: "Please enter confirm password.",
                equalTo: "Confirm Password do not match with password.",
            }
        },

        submitHandler: function (event) {
            // form.submit();
            const uname = document.getElementById("uname").value;
            const password = document.getElementById("new_password").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const favourites = [];
            const token = generateToken();
            console.log(uname);
            axios.post('http://localhost:3000/users', { uname, password, phone, email, favourites, token })
                .then(response => {
                    console.log('Registration successful:', response.data);
                    // const currData = { username, password, token };
                    //console.log(userdata)
                    // localStorage.setItem('currData', JSON.stringify(currData));

                    window.location.href = 'sign_in.html';
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                });


            function generateToken() {
                // Replace this with your token generation logic
                return 'dummyToken';
            }
        }
    });
});

