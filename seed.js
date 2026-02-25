const db = require('./db/database');
const bcrypt = require('bcrypt');

async function seed() {
    console.log('Waiting for tables to be created...');

    setTimeout(async () => {
        console.log('Seeding database...');
        const adminPassword = await bcrypt.hash('admin123', 10);
        const doctorPassword = await bcrypt.hash('doctor123', 10);
        const patientPassword = await bcrypt.hash('patient123', 10);

        db.serialize(() => {
            db.run(`INSERT OR IGNORE INTO users (username, password_hash, role) VALUES ('admin', '${adminPassword}', 'Admin')`);

            db.run(`INSERT OR IGNORE INTO users (username, password_hash, role) VALUES ('doctor', '${doctorPassword}', 'Doctor')`);

            db.run(`INSERT OR IGNORE INTO users (username, password_hash, role) VALUES ('patient', '${patientPassword}', 'Patient')`, function (err) {
                if (!err && this.lastID) {
                    db.run(`INSERT OR IGNORE INTO patients (user_id, national_id, full_name, dob, contact_info) VALUES (${this.lastID}, '123456789', 'Test Patient', '2000-01-01', 'Test Contact')`);
                }
            });
        });

        console.log('Database seeded successfully (users: admin, doctor, patient).');
        setTimeout(() => db.close(), 1000);
    }, 2000); // give it 2 seconds to create tables
}

seed();
