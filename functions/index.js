
const admin = require('firebase-admin');
const myFunctions = require("./function.js");

admin.initializeApp({
    credential: admin.credential.cert({
        "type": "service_account",
        "project_id": "YOUR_APP",
        "private_key_id": "************************",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIeg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-mtb2y@YOUR_APP.iam.gserviceaccount.com",
        "client_id": "*************",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mtb/YOUR_APP.iam.gserviceaccount.com"
    }
    ),
    projectId: "YOUR_APP"
});


let countries = fs.readFileSync('countries.json');

for (const country in countries) {
    myFunctions.addData(country);
}

