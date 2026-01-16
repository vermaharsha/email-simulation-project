# Email-Simulation-Project
A Node.js project demonstrating how email headers, sender identity, and HTML-based emails can be configured using Nodemailer. This project is intended strictly for educational, testing, and awareness purposes.

## 🚀 Project Overview

This project showcases how emails are sent programmatically using Gmail SMTP via Nodemailer.
It highlights:

- Custom sender name & email address
- HTML email templates
- SMTP authentication using App Passwords
- How email headers appear to recipients

#### ⚠️ Important:
This project does NOT bypass Gmail security, SPF, DKIM, or DMARC protections. Modern email clients may flag such emails as spoofed or unverified.

## 🛠 Tech Stack
- Node.js
- Nodemailer (v7.0.6)
- Gmail SMTP

## 📂 Project Structure

```
fake-mail/
│── index.js              
│── package.json          
│── package-lock.json     

```

## ⚙️ Installation & Setup
#### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/fake-mail.git
cd fake-mail
```

#### 2️⃣ Install dependencies

```
npm install
```

## 🔐 Environment Configuration (IMPORTANT)
For security reasons, never hardcode credentials in production.

#### Recommended .env setup
```
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
```
🔑 Generate a Gmail App Password from
Google Account → Security → App Passwords


## ▶️ Usage
Run the script using:
```
node index.js
```

If successful, you’ll see:
```
✅ Fake mail sent: <message-id>
```

## 📩 Email Features Demonstrated

- Custom From Name & Address
- Rich HTML email layout
- Date & time rendering inside email body
- Gmail SMTP authentication
- Email delivery logging

Example sender configuration (from the code):
``` 
from: '"ABC Technologies" <talent@abc.com>'
```

## ⚠️ Disclaimer & Ethical Use

This project is created only for:
- Learning how SMTP works
- Understanding email headers
- Testing email formatting
- Security awareness & education

### 🚫 Do NOT use this project for:

- Phishing
- Impersonation
- Fraud
- Misleading communications

The author is not responsible for misuse of this code.

## 🧠 Key Learnings

- How Nodemailer handles SMTP transport
- Why email spoofing is unreliable due to SPF/DKIM/DMARC
- How email clients verify sender authenticity
- Secure handling of email credentials

## 📌 Possible Improvements
- Add .env support using dotenv
- Email template separation
- Multiple recipient support
- Validation & error handling
- Logging with timestamps


## 👩‍💻 Author

#### Harsha Verma
Full-Stack Developer
- 🌐 Portfolio: https://www.hrsha.site/
- 🐙 GitHub: https://github.com/vermaharsha
- 💼 LinkedIn: https://linkedin.com/in/verma-harsha
