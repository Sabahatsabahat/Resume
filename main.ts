interface ResumeData {
    fullName: string;
    email: string;
    phone: string;
    jobTitle: string;
    companyName: string;
    workDuration: string;
    skills: string;
}

function getInputElementValue(id: string): string {
    const element = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
    return element ? element.value : '';
}

// Function to validate phone number
function validatePhoneNumber(phone: string): boolean {
    const phonePattern = /^[0-9]+$/;
    return phonePattern.test(phone);
}

// Function to validate full name
function validateFullName(fullName: string): boolean {
    return fullName.trim().toLowerCase() === 'sabahat';
}

function generateResume(): void {
    const errorElement = document.getElementById("error-message");
    const editButton = document.getElementById("edit-button");
    const form = document.getElementById("resume-form");
    const resumePreview = document.getElementById("resume-preview");

    if (errorElement) {
        errorElement.innerText = "";
    }

    const fullName = getInputElementValue("fullName");
    const phone = getInputElementValue("phone");

    if (!validateFullName(fullName)) {
        if (errorElement) {
            errorElement.innerText = "Please enter 'Sabahat' as the full name.";
        }
        return;
    }

    if (!validatePhoneNumber(phone)) {
        if (errorElement) {
            errorElement.innerText = "Please enter a valid phone number with digits only.";
        }
        return;
    }

    const resumeData: ResumeData = {
        fullName: fullName,
        email: getInputElementValue("email"),
        phone: phone,
        jobTitle: getInputElementValue("jobTitle"),
        companyName: getInputElementValue("companyName"),
        workDuration: getInputElementValue("workDuration"),
        skills: getInputElementValue("skills"),
    };

    const resumeContent = `
        <h2>${resumeData.fullName}</h2>
        <p>Email: ${resumeData.email}</p>
        <p>Phone: ${resumeData.phone}</p>
        <h3>Work Experience</h3>
        <p>Job Title: ${resumeData.jobTitle}</p>
        <p>Company: ${resumeData.companyName}</p>
        <p>Duration: ${resumeData.workDuration}</p>
        <h3>Skills</h3>
        <p>${resumeData.skills}</p>
    `;

    const previewContent = document.getElementById("preview-content");
    if (previewContent) {
        previewContent.innerHTML = resumeContent;
    }

    // Hide the form and show the edit button
    if (form) {
        form.style.display = "none";
    }
    if (resumePreview) {
        resumePreview.style.display = "block";
    }
    if (editButton) {
        editButton.style.display = "inline";
    }
}

function editForm(): void {
    const form = document.getElementById("resume-form");
    const editButton = document.getElementById("edit-button");
    const resumePreview = document.getElementById("resume-preview");

    if (form) {
        form.style.display = "block";
    }
    if (resumePreview) {
        resumePreview.style.display = "none";
    }
    if (editButton) {
        editButton.style.display = "none";
    }

    // Clear the preview content
    const previewContent = document.getElementById("preview-content");
    if (previewContent) {
        previewContent.innerHTML = "";
    }
}
