import { Container, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CareerJobs from "../components/CareerJobs";
import { Job } from "../types/job";
import PageHero from "../components/PageHero";

export default function Careers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const json = await res.json();
        setJobs(json.data || []); // ✅ FIX
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
      <PageHero
        title={
          <>
            Careers at <Box component="span" sx={{ color: "#FFD93D" }}>Apprelab</Box>
          </>
        }
        subtitle="Apply for available roles before our official launch. Join the early team and help shape the future of practical tech education!"
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 4,
              backgroundColor: "#FFFFFF",
              borderRadius: "40px",
              p: { xs: 4, md: 8 },
              boxShadow: "0 20px 60px rgba(1, 10, 69, 0.05)",
              border: "1px solid rgba(203, 213, 225, 0.3)"
            }}
          >
            {jobs.map((job) => (
              <CareerJobs key={job._id} job={job} />
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
