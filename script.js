
const studentName = "Ian Odhiambo";
const regNumber = "COM/B/01-00144/2025";
const academicProgramme = "Bachelor of Science in Computer Science";

console.log(" ");
console.log("Student Name:", studentName);
console.log("Registration Number:", regNumber);
console.log("Academic Programme:", academicProgramme);

// calculateGrade 
function calculateGrade(score) {
    if (score >= 70 && score <= 100) {
        return 'A';
    } else if (score >= 60 && score < 70) {
        return 'B';
    } else if (score >= 50 && score < 60) {
        return 'C';
    } else if (score >= 40 && score < 50) {
        return 'D';
    } else if (score >= 0 && score < 40) {
        return 'E';
    } else {
        return 'Invalid Score';
    }
}


const calculatedGrade = calculateGrade(75);
alert("Question 5(c) Calculated Grade for score 75: " + calculatedGrade);



   

document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("studentForm") || document.querySelector("form");
    
    let displayArea = document.getElementById("outputContainer");
    if (!displayArea) {
        displayArea = document.createElement("div");
        displayArea.id = "outputContainer";
        registrationForm.parentNode.appendChild(displayArea);
    }

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameVal = document.getElementById("fullname").value.trim();
        const regVal = document.getElementById("reg_num").value.trim();
        const emailVal = document.getElementById("email").value.trim();

        
        if (nameVal === "" || regVal === "") {
            alert("Validation Error: Full Name and Registration Number cannot be empty!");
            return;
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailVal)) {
            alert("Validation Error: Please enter a valid email address!");
            return;
        }

      
        displayArea.innerHTML = `
            <div style="margin-top: 15px; padding: 15px; background-color: #c6f6d5; border: 1px solid #38a169; border-radius: 5px; color: #22543d;">
                <h4 style="margin: 0 0 10px 0;">✔ Registration Successful!</h4>
                <p style="margin: 3px 0;"><strong>Student Name:</strong> ${nameVal}</p>
                <p style="margin: 3px 0;"><strong>Registration No:</strong> ${regVal}</p>
                <p style="margin: 3px 0;"><strong>Email Address:</strong> ${emailVal}</p>
            </div>
        `;

        registrationForm.reset();
    });
});
