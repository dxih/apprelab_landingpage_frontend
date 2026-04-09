import { Box, Typography } from "@mui/material";

// 🔹 Image placeholders (you will replace these)
import learnerImg from "../assets/learner.png";
import mentorImg from "../assets/mentor.png";
import businessImg from "../assets/business.png";

interface Step {
  number: number;
  title: string;
  description: string;
}

const JourneySection = () => {
  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        px: { xs: 3, md: 13 },
        py: 10,
      }}
    >
      {/* HEADER */}
      <Box sx={{ textAlign: "center", mb: 9 }}>
        <Typography
          sx={{
            fontSize: 38,
            fontWeight: 800,
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Your Journey from Learning to <br></br>Earning in {" "}
                    <Box component="span" sx={{ backgroundColor: "#FECC04", px: 1 }}>
           {" "}3 Simple Steps{" "}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontSize: 16,
            color: "#64748B",
            mt: 1.5,
            maxWidth: 1000,
            mx: "auto",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Learn the easy processes involved for learners, mentors and businesses.
        </Typography>
      </Box>

      {/* FOR LEARNERS */}
      <SectionRow
        label="FOR LEARNERS"
        steps={[
          {
            number: 1,
            title: "Learn",
            description:
              "Choose from 500+ skills across tech, design, marketing, business, and creative fields. Complete micro-courses, join bootcamps, or follow structured learning paths.",
          },
          {
            number: 2,
            title: "Work",
            description:
              "Apply to real projects from businesses. Execute under mentor supervision. Build your portfolio with verified work.",
          },
          {
            number: 3,
            title: "Earn",
            description:
              "Get paid for every project (70% goes to you). Earn while you learn. Build experience and income simultaneously.",
          },
        ]}
        image={learnerImg}
      />

      {/* FOR MENTORS */}
      <SectionRow
        reverse
        label="FOR MENTORS"
        steps={[
          {
            number: 1,
            title: "Share Your Expertise",
            description:
              "Create courses, lead bootcamps, or offer 1-on-1 coaching in your field.",
          },
          {
            number: 2,
            title: "Guide Learners",
            description:
              "Supervise learners on real projects. Ensure quality. Build your reputation.",
          },
          {
            number: 3,
            title: "Earn Multiple Streams",
            description:
              "Course sales + bootcamp fees + project supervision + coaching sessions = sustainable income.",
          },
        ]}
        image={mentorImg}
      />

      {/* FOR BUSINESSES */}
      <SectionRow
        label="FOR BUSINESSES"
        steps={[
          {
            number: 1,
            title: "Post Your Project",
            description:
              "Describe what you need. Set your budget. Choose your timeline.",
          },
          {
            number: 2,
            title: "Get Matched",
            description:
              "Our algorithm recommends the best-fit learners. Mentors verify capabilities.",
          },
          {
            number: 3,
            title: "Collaborate & Succeed",
            description:
              "Work with mentored talent. Pay only when satisfied. Scale your team affordably.",
          },
        ]}
        image={businessImg}
      />
    </Box>
  );
};

export default JourneySection;

/* =========================
   INTERNAL COMPONENTS
   ========================= */

const SectionRow = ({
  label,
  steps,
  image,
  reverse = false,
}: {
  label: string;
  steps: Step[];
  image: string;
  reverse?: boolean;
}) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
      gap: 6,
      alignItems: "center",
      mb: 14,
      direction: reverse ? "rtl" : "ltr",
      "& > *": { direction: "ltr" },
    }}
  >
    {/* STEPS */}
    <Box>
      <Typography
        sx={{
          fontSize: 20,
          fontWeight: 700,
          color: "#010A45",
          letterSpacing: "0.04em",
          mb: 4,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        {label}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {steps.map((step) => (
          <Box key={step.number} sx={{ display: "flex", gap: 2 }}>
            {/* NUMBER */}
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#EEF2FF",
                color: "#010A45",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 17,
                fontWeight: 700,
                flexShrink: 0,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {step.number}
            </Box>

            {/* TEXT */}
            <Box>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 700,
                  mb: 0.5,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#64748B",
                  lineHeight: "22px",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>

    {/* IMAGE */}
    <Box
      component="img"
      src={image}
      alt=""
      sx={{
        width: "90%",
        borderRadius: 4,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    />
  </Box>
);
