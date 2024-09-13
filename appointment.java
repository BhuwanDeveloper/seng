class PatientPortal {
    constructor() {
        this.isNewPatient = false;
        this.appointmentAvailable = false;
    }

    start() {
        console.log("Start");
        this.hmsForPatientPortal();
    }

    hmsForPatientPortal() {
        if (this.isNewPatient) {
            this.registerNewPatient();
        } else {
            this.getPatientInfo();
        }
    }

    registerNewPatient() {
        console.log("Registering New Patient");
        // Logic for registering a new patient
        this.checkAppointmentAvailability();
    }

    getPatientInfo() {
        console.log("Getting Patient Info");
        // Logic to get existing patient information
        this.checkAppointmentAvailability();
    }

    checkAppointmentAvailability() {
        if (this.appointmentAvailable) {
            this.scheduleAppointment();
        } else {
            this.notifyPatientOfNoAvailability();
        }
    }

    scheduleAppointment() {
        console.log("Scheduling Appointment");
        this.startCheckUp();
    }

    notifyPatientOfNoAvailability() {
        console.log("Notify Patient of No Availability");
    }

    startCheckUp() {
        console.log("Starting the Check Up");
        this.stop();
    }

    stop() {
        console.log("Stop");
    }
}

// Example usage
const patientPortal = new PatientPortal();
patientPortal.isNewPatient = true; // Change this value to test different paths
patientPortal.appointmentAvailable = true; // Change this value to test different paths
patientPortal.start();