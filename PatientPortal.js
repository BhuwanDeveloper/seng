const XLSX = require('xlsx');
const fs = require('fs');

class PatientPortal {
    constructor() {
        this.isNewPatient = false;
        this.appointmentAvailable = false;
        this.excelFilePath = 'HMS_DATA.xlsx'; // Path to your Excel file
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
        this.addPatientToExcel({ id: 1, name: 'John Doe', appointment: '2024-09-14' });
        this.checkAppointmentAvailability();
    }

    getPatientInfo() {
        console.log("Getting Patient Info");
        // Logic to get existing patient information
        const patientData = this.readPatientFromExcel(1); // example patient ID
        console.log(patientData);
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

    addPatientToExcel(patient) {
        let workbook;
        if (fs.existsSync(this.excelFilePath)) {
            workbook = XLSX.readFile(this.excelFilePath);
        } else {
            workbook = XLSX.utils.book_new();
        }

        let worksheet;
        if (workbook.SheetNames.length > 0) {
            worksheet = workbook.Sheets[workbook.SheetNames[0]];
        } else {
            worksheet = XLSX.utils.aoa_to_sheet([['ID', 'Name', 'Appointment']]);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Patients');
        }

        const newRow = [patient.id, patient.name, patient.appointment];
        XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

        XLSX.writeFile(workbook, this.excelFilePath);
    }

    readPatientFromExcel(patientId) {
        if (!fs.existsSync(this.excelFilePath)) {
            console.log("Excel file not found");
            return null;
        }

        const workbook = XLSX.readFile(this.excelFilePath);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        for (let i = 1; i < data.length; i++) {
            if (data[i][0] === patientId) {
                return {
                    id: data[i][0],
                    name: data[i][1],
                    appointment: data[i][2]
                };
            }
        }

        console.log("Patient not found");
        return null;
    }
}

module.exports = PatientPortal;
