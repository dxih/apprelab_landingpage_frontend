import { Container, Typography, Box } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container sx={{ py: 7, maxWidth: "md" ,     pt: { xs: 4, md: 14 }}}>
      {/* TITLE */}
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
        Apprelab Privacy Policy
      </Typography>

      <Typography sx={{ color: "#64748b", mb: 4 }}>
        Last Updated: December 2025
      </Typography>

      <Box sx={{ color: "#475569", lineHeight: 1.8 }}>
        <Typography paragraph>
          Welcome to Apprelab (“we”, “our”, “us”). Your privacy matters to us.
          This Privacy Policy explains how we collect, use, protect, and share
          your personal information when you use our website, platform, and
          services.
        </Typography>

        <Typography paragraph>
          By using Apprelab, you agree to the terms of this Privacy Policy.
        </Typography>

        {/* 1 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          We collect information to provide and improve our services.
        </Typography>

        <Typography sx={{ fontWeight: 600, mt: 2 }}>
          a. Information You Provide
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Full name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Profile information</li>
          <li>Skills and experience (for learners and mentors)</li>
          <li>Business information (for SMEs)</li>
          <li>Payment details (processed securely by third-party providers)</li>
        </Typography>

        <Typography sx={{ fontWeight: 600, mt: 2 }}>
          b. Automatically Collected Information
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Device type and browser</li>
          <li>IP address</li>
          <li>Pages visited</li>
          <li>Login activity</li>
          <li>Usage behavior</li>
        </Typography>

        <Typography paragraph>
          This information helps us improve performance and security.
        </Typography>

        {/* 2 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          2. How We Use Your Information
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Create and manage your account</li>
          <li>Connect learners, mentors, and SMEs</li>
          <li>Deliver courses, projects, and mentorship</li>
          <li>Process payments and earnings</li>
          <li>Improve our platform and user experience</li>
          <li>Communicate updates, notifications, and support</li>
          <li>Prevent fraud and ensure platform safety</li>
        </Typography>

        <Typography paragraph>
          We do not sell your personal data.
        </Typography>

        {/* 3 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          3. How We Share Your Information
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>With mentors or learners involved in a project</li>
          <li>With SMEs you choose to work with</li>
          <li>With payment providers to process transactions</li>
          <li>With legal authorities if required by law</li>
        </Typography>

        <Typography paragraph>
          All partners are required to protect your data.
        </Typography>

        {/* 4 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          4. Cookies and Tracking
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Keep you logged in</li>
          <li>Remember preferences</li>
          <li>Improve site performance</li>
          <li>Analyze usage</li>
        </Typography>

        <Typography paragraph>
          You can disable cookies in your browser, but some features may not work
          properly.
        </Typography>

        {/* 5 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          5. Data Security
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Secure servers</li>
          <li>Encryption where possible</li>
          <li>Access controls</li>
        </Typography>

        <Typography paragraph>
          While we take security seriously, no online system is 100% secure.
          Please protect your login details.
        </Typography>

        {/* 6 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          6. Your Rights
        </Typography>
        <Typography component="ul" sx={{ pl: 3, mb: 2 }}>
          <li>Access your data</li>
          <li>Update your information</li>
          <li>Request deletion of your account</li>
          <li>Opt out of promotional emails</li>
        </Typography>

        <Typography paragraph>
          You can manage these from your account settings or by contacting us.
        </Typography>

        {/* 7 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          7. Children’s Privacy
        </Typography>
        <Typography paragraph>
          Apprelab is not intended for users under the age of 16. We do not
          knowingly collect data from minors.
        </Typography>

        {/* 8 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          8. Changes to This Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page.
        </Typography>

        {/* 9 */}
        <Typography variant="h6" sx={{ mt: 4, fontWeight: 700 }}>
          9. Contact Us
        </Typography>
        <Typography paragraph>
          For privacy-related questions, contact us at{" "}
          <strong>support@apprelab.com</strong>.
        </Typography>
      </Box>
    </Container>
  );
}
