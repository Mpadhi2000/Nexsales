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

    if(fullname.length < 3) {
        error[0].textContent = "This name is invalid";
        flag = 0;
    }

    if(phone.length != 10) {
        error[1].textContent = "This Phone number is invalid";
        flag = 0;
    }

    if(!emailpattern.test(email)) {
        error[2].textContent = "This email address is invalid";
        flag = 0;
    }
    if(!Pattern.test(password)) {
        error[3].textContent = "Password must contain at least 1 special character, 1 number, and 1 letter";
        flag = 0; 
    }
    if (password !== cpassword) {
        error[4].textContent = "Passwords do not match";
        flag = 0;
    }
    if(flag) {
        dataSendtoApi({
            fullname: fullname,
            phone: phone,
            email: email,
            password: password,
        });
    }
}
function dataSendtoApi(data) {
    // Step 1: Create XHR object
    let xhr = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/posts";
    
    // Step 2: Open a POST request
    xhr.open("POST", url, true);

    // Step 3: Set request header (to specify the data format being sent)
    xhr.setRequestHeader("Content-Type", "application/json");

    // Step 4: Define response handler (optional)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) { 
            console.log(xhr.responseText);
        }
    };
    // Step 5: Define error handler (optional)
    xhr.onerror = function() { 
        console.error("Request failed");
    };

    // Step 6: Prepare the data to be sent
    xhr.send(JSON.stringify(data));
}