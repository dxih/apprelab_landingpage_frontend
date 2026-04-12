import { Container, Typography, Box } from "@mui/material";
import PageHero from "../components/PageHero";

export default function CookiePolicy() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 10 }}>
      <PageHero title="Apprelab Cookie Policy" minHeight={{ xs: "30vh", md: "40vh" }} />

      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -8 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ background: "#FFFFFF", borderRadius: "40px", p: { xs: 4, md: 8 }, boxShadow: "0 20px 60px rgba(1, 10, 69, 0.05)", border: "1px solid rgba(203, 213, 225, 0.3)" }}>
          <Typography sx={{ color: "#64748b", mb: 4, fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
            Last Updated: December 2025
          </Typography>

          <Box sx={{ color: "#475569", lineHeight: 1.9, fontFamily: "Poppins, sans-serif", fontSize: "1.05rem", "& h6": { fontFamily: "Poppins, sans-serif" }, "& ul": { pl: 3, mb: 3 } }}>
            <Typography paragraph>
              This Cookie Policy explains how Apprelab (“we”, “our”, “us”) uses cookies
              and similar technologies when you visit our website or use our
              platform.
            </Typography>

            <Typography paragraph>
              By continuing to use Apprelab, you agree to the use of cookies as
              described in this policy.
            </Typography>

            {/* 1 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              1. What Are Cookies?
            </Typography>
            <Typography paragraph>
              Cookies are small text files stored on your device (phone, tablet, or
              computer) when you visit a website.
            </Typography>

            <Typography component="ul">
              <li>Remember your preferences</li>
              <li>Keep you logged in</li>
              <li>Improve performance</li>
              <li>Understand how users interact with the site</li>
            </Typography>

            <Typography paragraph>
              Cookies do not harm your device.
            </Typography>

            {/* 2 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              2. Why Apprelab Uses Cookies
            </Typography>
            <Typography component="ul">
              <li>Make our platform work properly</li>
              <li>Keep your account secure</li>
              <li>Remember your login details</li>
              <li>Improve user experience</li>
              <li>Understand how people use Apprelab</li>
              <li>Analyze traffic and performance</li>
              <li>Personalize content where possible</li>
            </Typography>

            <Typography paragraph>
              Without cookies, some features of Apprelab may not function correctly.
            </Typography>

            {/* 3 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              3. Types of Cookies We Use
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              a. Essential Cookies
            </Typography>
            <Typography paragraph>
              These cookies are required for the platform to work properly. They help
              with logging in, account security, navigation, and saving your session.
              You cannot disable these cookies.
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              b. Performance &amp; Analytics Cookies
            </Typography>
            <Typography component="ul">
              <li>Understand which pages are visited most</li>
              <li>See how users move around the platform</li>
              <li>Identify areas where users face issues</li>
            </Typography>

            <Typography paragraph>
              This information is anonymous and helps us improve Apprelab.
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              c. Functional Cookies
            </Typography>
            <Typography component="ul">
              <li>Language preferences</li>
              <li>User settings</li>
              <li>Dashboard preferences</li>
            </Typography>

            <Typography paragraph>
              These cookies help make your experience smoother.
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              d. Marketing &amp; Communication Cookies
            </Typography>
            <Typography component="ul">
              <li>Show relevant content</li>
              <li>Measure marketing effectiveness</li>
              <li>Understand campaign performance</li>
            </Typography>

            <Typography paragraph>
              We do not use cookies to sell your personal data.
            </Typography>

            {/* 4 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              4. Third-Party Cookies
            </Typography>
            <Typography paragraph>
              Some cookies may be placed by trusted third-party services such as:
            </Typography>

            <Typography component="ul">
              <li>Analytics tools</li>
              <li>Payment processors</li>
              <li>Customer support tools</li>
            </Typography>

            <Typography paragraph>
              These third parties have their own privacy and cookie policies.
            </Typography>

            {/* 5 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              5. How You Can Control Cookies
            </Typography>
            <Typography component="ul">
              <li>Accept or reject cookies via your browser</li>
              <li>Delete existing cookies</li>
              <li>Block cookies entirely</li>
            </Typography>

            <Typography paragraph>
              Please note: disabling cookies may affect how Apprelab works for you.
            </Typography>

            {/* 6 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              6. Updates to This Cookie Policy
            </Typography>
            <Typography paragraph>
              We may update this Cookie Policy from time to time to reflect legal
              changes, platform improvements, or new features.
            </Typography>

            <Typography paragraph>
              Any updates will be posted on this page.
            </Typography>

            {/* 7 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              7. Contact Us
            </Typography>
            <Typography paragraph>
              If you have questions about our Cookie Policy, contact us at{" "}
              <strong>support@apprelab.com</strong>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
