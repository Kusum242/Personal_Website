// send_ethereal.js — quick Ethereal test sender
const nodemailer = require('nodemailer');

(async () => {
  try {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    });

    const info = await transporter.sendMail({
      from: `Ethereal Test <${testAccount.user}>`,
      to: 'recipient@example.com',
      subject: 'Ethereal Delivery Test',
      text: 'This is a test message sent using Ethereal.',
      html: '<p>This is a <b>test</b> message sent using Ethereal.</p>'
    });

    console.log('Message sent. MessageId:', info.messageId);
    const preview = nodemailer.getTestMessageUrl(info);
    console.log('Preview URL:', preview);
  } catch (err) {
    console.error('Ethereal send error:', err);
    process.exit(1);
  }
})();
