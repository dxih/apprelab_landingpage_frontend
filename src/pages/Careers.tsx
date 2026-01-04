import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import CareerJobs from "../components/CareerJobs";
import { Job } from "../types/job";

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
    <Container sx={{ py: 7 }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
        Careers at <span style={{ color: "#0057FF" }}>apprelab™</span>
      </Typography>

      <Typography sx={{ color: "#475569", mb: 6, fontSize: "1.1rem" }}>
        Apply for available roles before our official launch. Join the early team
        and help shape the future of practical tech education!
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "space-between",
          }}
        >
          {jobs.map((job) => (
            <CareerJobs key={job._id} job={job} />
          ))}
        </Box>
      )}
    </Container>
  );
}
