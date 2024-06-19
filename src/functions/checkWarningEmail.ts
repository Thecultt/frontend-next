const WARNING_EMAIL_DOMAINS = ['icloud.com', 'hotmail.com'];

export const checkWarningEmail = (email: string) => {
    if (!email) {
        return false;
    }

    const emailDomain = email.split('@')[1];
    return WARNING_EMAIL_DOMAINS.includes(emailDomain);
};
