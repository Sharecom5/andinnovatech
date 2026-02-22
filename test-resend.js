
const { Resend } = require('resend');
const dotenv = require('dotenv');
const fs = require('fs');

// Try to load .env.local manually
if (fs.existsSync('.env.local')) {
    const envConfig = dotenv.parse(fs.readFileSync('.env.local'));
    for (const k in envConfig) {
        process.env[k] = envConfig[k];
    }
}

console.log('--- Resend Configuration Test ---');
console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? 'Set (starts with ' + process.env.RESEND_API_KEY.substring(0, 5) + '...)' : 'NOT SET');
console.log('CONTACT_EMAIL:', process.env.CONTACT_EMAIL || 'NOT SET');

if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_key_here') {
    console.log('❌ Error: Valid API Key is missing.');
} else {
    const resend = new Resend(process.env.RESEND_API_KEY);
    resend.emails.send({
        from: 'AnD Innovatech <hello@andinnovatech.com>',
        to: ['hello@andinnovatech.com'],
        subject: 'API Key Test',
        html: '<p>Test successful!</p>'
    }).then(res => {
        if (res.error) {
            console.error('❌ Resend API Error:', res.error);
        } else {
            console.log('✅ Success: Email sent successfully!', res.data);
        }
    }).catch(err => {
        console.error('❌ Critical Error:', err);
    });
}
