import { Container, Typography, Box } from "@mui/material";
import PageHero from "../components/PageHero";

export default function Terms() {
  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 10 }}>
      <PageHero title="Apprelab Terms of Service" minHeight={{ xs: "30vh", md: "40vh" }} />

      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -8 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ background: "#FFFFFF", borderRadius: "40px", p: { xs: 4, md: 8 }, boxShadow: "0 20px 60px rgba(1, 10, 69, 0.05)", border: "1px solid rgba(203, 213, 225, 0.3)" }}>
          
          <Typography sx={{ color: "#64748b", mb: 4, fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
            Last Updated: December 2025
          </Typography>

          <Box sx={{ color: "#475569", lineHeight: 1.9, fontFamily: "Poppins, sans-serif", fontSize: "1.05rem", "& h6": { fontFamily: "Poppins, sans-serif" }, "& ul": { pl: 3, mb: 3 } }}>
            <Typography paragraph>
              Welcome to Apprelab. These Terms of Service (“Terms”) govern your use of
              our platform, website, and services. By accessing or using Apprelab,
              you agree to these Terms.
            </Typography>

            {/* 1 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              1. Who Can Use Apprelab
            </Typography>
            <Typography paragraph>
              To use Apprelab, you must:
            </Typography>
            <Typography component="ul">
              <li>Be at least 16 years old</li>
              <li>Provide accurate information</li>
              <li>Use the platform lawfully</li>
            </Typography>
            <Typography paragraph>
              We reserve the right to suspend accounts that violate these rules.
            </Typography>

            {/* 2 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              2. User Accounts
            </Typography>
            <Typography paragraph>
              You are responsible for:
            </Typography>
            <Typography component="ul">
              <li>Keeping your login details secure</li>
              <li>All activity under your account</li>
              <li>Providing accurate and updated information</li>
            </Typography>

            <Typography paragraph>
              You must not:
            </Typography>
            <Typography component="ul">
              <li>Share accounts</li>
              <li>Impersonate others</li>
              <li>Use fake identities</li>
            </Typography>

            {/* 3 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              3. Platform Roles
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              a. Learners
            </Typography>
            <Typography paragraph> Learners can: </Typography>
            <Typography component="ul">
              <li>Enroll in courses</li>
              <li>Join WorkLab projects</li>
              <li>Work with mentors</li>
              <li>Earn where applicable</li>
            </Typography>

            <Typography paragraph> Learners must: </Typography>
            <Typography component="ul">
              <li>Complete tasks honestly</li>
              <li>Respect mentors and teammates</li>
              <li>Follow project guidelines</li>
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              b. Mentors
            </Typography>
            <Typography paragraph> Mentors can: </Typography>
            <Typography component="ul">
              <li>Create courses</li>
              <li>Guide learners</li>
              <li>Host bootcamps</li>
              <li>Earn from projects</li>
            </Typography>

            <Typography paragraph> Mentors must: </Typography>
            <Typography component="ul">
              <li>Provide honest guidance</li>
              <li>Avoid exploitation</li>
              <li>Deliver quality mentorship</li>
              <li>Respect learners</li>
            </Typography>

            <Typography sx={{ fontWeight: 700, mt: 3, mb: 1, color: "#1E293B" }}>
              c. SMEs & Companies
            </Typography>
            <Typography paragraph> SMEs can: </Typography>
            <Typography component="ul">
              <li>Post jobs and projects</li>
              <li>Register and get verified</li>
              <li>Hire learners or mentors</li>
              <li>Partner with Apprelab</li>
            </Typography>

            <Typography paragraph> SMEs must: </Typography>
            <Typography component="ul">
              <li>Provide clear project requirements</li>
              <li>Pay agreed fees</li>
              <li>Respect platform rules</li>
            </Typography>

            {/* 4 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              4. Payments and Earnings
            </Typography>
            <Typography component="ul">
              <li>Apprelab may charge commissions or subscription fees</li>
              <li>Payments are processed via third-party providers</li>
              <li>Earnings may be held temporarily for verification</li>
              <li>
                We are not responsible for payment delays caused by third-party
                services
              </li>
            </Typography>
            <Typography paragraph>
              All fees are clearly communicated before transactions.
            </Typography>

            {/* 5 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              5. Content Ownership
            </Typography>
            <Typography paragraph>
              You own the content you create, but by using Apprelab, you grant us
              permission to:
            </Typography>
            <Typography component="ul">
              <li>Display your content</li>
              <li>Promote platform activities</li>
              <li>Improve services</li>
            </Typography>

            <Typography paragraph>You must not upload:</Typography>
            <Typography component="ul">
              <li>Illegal content</li>
              <li>Stolen materials</li>
              <li>Offensive or harmful content</li>
            </Typography>

            {/* 6 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              6. Prohibited Activities
            </Typography>
            <Typography component="ul">
              <li>Scam or defraud users</li>
              <li>Harass others</li>
              <li>Bypass platform systems</li>
              <li>Share private user data</li>
              <li>Use Apprelab for illegal purposes</li>
            </Typography>
            <Typography paragraph>
              Violations may result in suspension or permanent ban.
            </Typography>

            {/* 7 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              7. Termination of Accounts
            </Typography>
            <Typography paragraph>
              We may suspend or terminate accounts if:
            </Typography>
            <Typography component="ul">
              <li>Terms are violated</li>
              <li>Fraudulent activity is detected</li>
              <li>Platform safety is threatened</li>
            </Typography>
            <Typography paragraph>
              Users may also close their accounts at any time.
            </Typography>

            {/* 8 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              8. Disclaimer
            </Typography>
            <Typography component="ul">
              <li>Does not guarantee job placement</li>
              <li>Does not guarantee income</li>
              <li>Acts as a facilitator, not an employer</li>
            </Typography>
            <Typography paragraph>
              Results depend on effort, skill, and opportunity.
            </Typography>

            {/* 9 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              9. Limitation of Liability
            </Typography>
            <Typography component="ul">
              <li>Loss of income</li>
              <li>Project disputes between users</li>
              <li>Third-party service failures</li>
            </Typography>
            <Typography paragraph>
              We provide the platform “as is”.
            </Typography>

            {/* 10 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              10. Changes to Terms
            </Typography>
            <Typography paragraph>
              We may update these Terms from time to time. Continued use of the
              platform means acceptance of updates.
            </Typography>

            {/* 11 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              11. Governing Law
            </Typography>
            <Typography paragraph>
              These Terms are governed by the laws of the Federal Republic of Nigeria,
              unless otherwise stated. Disputes will be resolved in Nigerian courts.
              International users are subject to local laws, and some provisions may
              not apply in certain jurisdictions.
            </Typography>

            {/* 12 */}
            <Typography variant="h6" sx={{ mt: 5, mb: 1, fontWeight: 700, color: "#010A45" }}>
              12. Contact Information
            </Typography>
            <Typography paragraph>
              For questions or legal concerns, contact{" "}
              <strong>support@apprelab.com</strong>.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
