import nodemailer from "nodemailer";

async function sendFakeMail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vermaharsha939@gmail.com",   // ✅ your Gmail
      pass: "abcd efgh ijkl mnop"         // ✅ your Gmail App Password
    }
  });

  let mailOptions = {
    from: '"Technanosoft Technologies" <talent@technanosoft.com>', // Spoofed From
    to: "abhikumars2007@gmail.com", // Send to yourself
    subject: "Congratulations! Selected for L1 Round – Internship Opportunity at Technanosoft Technologies",
    html: `
      <!-- Top Right Date & Time -->
      <div style="text-align:right; font-size:12px; color:#555;">
        30 Aug 2025, 20:05
      </div>

      <p><strong>Technanosoft Technologies</strong> &lt;talent@technanosoft.com&gt;</p>
      <br>
      <p>Dear Candidate,</p>
      <p>
        Congratulations on being shortlisted for the Level 1 Interview round for the Software Developer job profile. 
        This round will involve an activity assessment, with the specific activity being disclosed on the day of the interview. 
        Please note that the activity will be directly related to the responsibilities and skills required for your profile.
      </p>

      <h4>Interview Details:</h4>
      <p>
        Date: September 1, 2025<br>
        Day: Monday<br>
        Time: 11:45 am – 04:00 pm<br>
        Location: 809, Tower - B, ITHUM TOWER, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh 201301
      </p>

      <p><strong>Important Instructions:</strong><br>
      Please arrive at the specified location 10 minutes prior to the interview time.</p>
    `
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("✅ Fake mail sent:", info.messageId);
}

sendFakeMail().catch(console.error);
