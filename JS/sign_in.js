
$(document).ready(function () {
    $("#sign_in").validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Please enter email address."
            },
            password: {
                required: "Please enter password"
            }
        },

        submitHandler: function () {
            const email = $("#email").val();
            const password = $("#password").val();
            axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.length > 0) {
                        window.location.href = 'index.html';
                    } else {
                        alert("Invalid password or email");
                    }
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                });

        }
    });
});

