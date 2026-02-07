import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Job } from "../types/job";

export default function CareerJobDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        if (!res.ok) throw new Error("Job not found");
        const data = await res.json();
        setJob(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ py: 10 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!job) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4">Job not found</Typography>
        <Button onClick={() => navigate("/careers")} sx={{ mt: 2 }}>
          Back to Careers
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 ,     pt: { xs: 4, md: 14 } }}>
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
        {job.title}
      </Typography>

      <Typography sx={{ mb: 2, color: "#475569", fontWeight: 600 }}>
        {job.type} · {job.location}
      </Typography>

      <Typography sx={{ mb: 4, whiteSpace: "pre-line" }}>
        {job.description}
      </Typography>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Responsibilities:
        </Typography>
        <ul>
          {job.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          Required Skills & Experience:
        </Typography>
        <ul>
          {job.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </Box>

      {job.niceToHave && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Nice-to-Have:
          </Typography>
          <ul>
            {job.niceToHave.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Box>
      )}

      {job.offer && (
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            What We Offer:
          </Typography>
          <ul>
            {job.offer.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </Box>
      )}

      <Button
        variant="contained"
        sx={{ background: "#0057FF" }}
        component="a"
        href={job.applicationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Here
      </Button>

      <Button variant="text" sx={{ ml: 2 }} onClick={() => navigate("/careers")}>
        Back
      </Button>
    </Container>
  );
}
