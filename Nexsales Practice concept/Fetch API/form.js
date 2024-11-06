function validation(event) {
    event.preventDefault();

    let fullname = document.querySelector("#fname").value;
    let phone = document.querySelector("#phone").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let cpassword = document.querySelector("#cpass").value;
    let Pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
    let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = document.querySelectorAll(".error");
    let flag = 1;

    if (fullname.length < 3) {
        error[0].textContent = "The Name is Invalid";
        flag = 0;
    }

    if (phone.length != 10) {
        error[1].textContent = "The phone number is invalid";
        flag = 0;
    }

    if (!emailpattern.test(email)) {
        error[2].textContent = "The email is invalid";
        flag = 0;
    }

    if (!Pattern.test(password)) {
        error[3].textContent = "Password is invalid";
        flag = 0;
    }

    if (password !== cpassword) {
        error[4].textContent = "The passwords do not match"; 
        flag = 0;
    }

    if (flag) {
        sendDataToApi({
            fullname: fullname,
            phone: phone,
            email: email,
            password: password
        });
    }
}

function sendDataToApi(data) {
    console.log(data);
    let url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json()) // Fix: return the parsed JSON data
    .then((res) => {
        console.log(res);
        console.log("Form successfully submitted");
    })
    .catch((error) => {
        console.error("Error submitting the form: ", error);  // Handle any fetch errors
    });
}
