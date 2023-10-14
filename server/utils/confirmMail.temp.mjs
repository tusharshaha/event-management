const confirmMailTemp = (user) => {
  return `
        <html>
            <body>
                <p>Hi ${user.name},</p>

                <p>Your email address has been registered with <b>Event Management</b>. Please confirm your account by clicking the link below:</p>

                <a href="${process.env.BACKEND_URL}/api/auth/confirm_email?token=${user.confirmationToken}" target="_blank">
                    Verify your account
                </a>

                <p>If you did not associate your email address with <b>Event Management</b>, please ignore this message and do not click on the link above.</p>

                <p>
                    Thank you,</br>
                    Event Management
                </p>
            </body>
        </html>
    `;
};

export default confirmMailTemp;