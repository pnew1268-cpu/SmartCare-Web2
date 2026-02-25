// Dummy data for patients
const recentPatients = [
    {
        name: "Eleanor Pena",
        condition: "Hypertension",
        date: "Today, 09:30 AM",
        img: "https://i.pravatar.cc/150?img=1",
        status: "active",
        statusText: "Consulting"
    },
    {
        name: "Floyd Miles",
        condition: "Type 2 Diabetes",
        date: "Today, 11:15 AM",
        img: "https://i.pravatar.cc/150?img=2",
        status: "pending",
        statusText: "Waiting"
    },
    {
        name: "Jane Cooper",
        condition: "Routine Checkup",
        date: "Yesterday, 02:45 PM",
        img: "https://i.pravatar.cc/150?img=3",
        status: "active",
        statusText: "Completed"
    },
    {
        name: "Guy Hawkins",
        condition: "Asthma",
        date: "Yesterday, 04:00 PM",
        img: "https://i.pravatar.cc/150?img=4",
        status: "active",
        statusText: "Completed"
    }
];

// Dummy data for appointments
const upcomingAppointments = [
    {
        time: "10:00",
        ampm: "AM",
        name: "Dianne Russell",
        type: "General Consultation"
    },
    {
        time: "11:30",
        ampm: "AM",
        name: "Cameron Williamson",
        type: "ECG Test"
    },
    {
        time: "01:15",
        ampm: "PM",
        name: "Brooklyn Simmons",
        type: "Follow up"
    },
    {
        time: "03:00",
        ampm: "PM",
        name: "Kristin Watson",
        type: "Blood Test"
    }
];

// Render Patients
function renderPatients() {
    const container = document.getElementById('patientList');
    container.innerHTML = recentPatients.map(patient => `
        <div class="patient-item">
            <img src="${patient.img}" alt="${patient.name}" class="patient-img">
            <div class="patient-info">
                <h4>${patient.name}</h4>
                <p>${patient.condition} • ${patient.date}</p>
            </div>
            <span class="status-badge ${patient.status}">${patient.statusText}</span>
        </div>
    `).join('');
}

// Render Appointments
function renderAppointments() {
    const container = document.getElementById('appointmentList');
    container.innerHTML = upcomingAppointments.map(appt => `
        <div class="appointment-item">
            <div class="appt-time">
                <div class="time">${appt.time}</div>
                <div class="am-pm">${appt.ampm}</div>
            </div>
            <div class="appt-details">
                <h4>${appt.name}</h4>
                <p>${appt.type}</p>
            </div>
        </div>
    `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPatients();
    renderAppointments();
    
    // Add click effect to nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
