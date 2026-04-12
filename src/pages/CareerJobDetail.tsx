import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box, Button, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Job } from "../types/job";
import PageHero from "../components/PageHero";

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
      <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
        <PageHero minHeight={{ xs: "30vh", md: "40vh" }} />
        <Container sx={{ py: 10, textAlign: "center" }}>
          <CircularProgress />
        </Container>
      </Box>
    );
  }

  if (!job) {
    return (
      <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh" }}>
        <PageHero title="Job not found" minHeight={{ xs: "30vh", md: "40vh" }} />
        <Container sx={{ py: 10, textAlign: "center" }}>
          <Button variant="contained" onClick={() => navigate("/careers")} sx={{ background: "#0B1C5D", borderRadius: "12px", textTransform: "none", fontWeight: 600, fontFamily: "Poppins, sans-serif" }}>
            Back to Careers
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#F6F7FF", minHeight: "100vh", pb: 10 }}>
      <PageHero
        title={job.title}
        subtitle={`${job.type} · ${job.location}`}
        minHeight={{ xs: "30vh", md: "40vh" }}
      />
      
      <Container maxWidth="md" sx={{ mt: { xs: -4, md: -8 }, position: 'relative', zIndex: 10 }}>
        <Box sx={{ background: "#FFFFFF", borderRadius: "24px", p: { xs: 4, md: 6 }, boxShadow: "0 12px 30px rgba(0,0,0,0.04)" }}>
          <Typography sx={{ mb: 4, whiteSpace: "pre-line", color: "#475569", fontFamily: "Poppins, sans-serif", fontSize: "1.05rem", lineHeight: 1.8 }}>
            {job.description}
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontFamily: "Poppins, sans-serif" }}>
              Responsibilities:
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: "#475569", fontFamily: "Poppins, sans-serif", lineHeight: 1.8 }}>
              {job.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </Box>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, fontFamily: "Poppins, sans-serif" }}>
              Required Skills & Experience:
            </Typography>
            <Box component="ul" sx={{ pl: 3, color: "#475569", fontFamily: "Poppins, sans-serif", lineHeight: 1.8 }}>
              {job.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </Box>
          </Box>

          {job.niceToHave && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Poppins, sans-serif', color: '#1E293B' }}>
                Nice-to-Have:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {job.niceToHave.map((r, i) => (
                  <Typography component="li" key={i} sx={{ mb: 1, color: '#475569', fontFamily: 'Poppins, sans-serif', lineHeight: 1.8 }}>{r}</Typography>
                ))}
              </Box>
            </Box>
          )}

          {job.offer && job.offer.length > 0 && (
            <Box sx={{ mb: 5 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, fontFamily: 'Poppins, sans-serif', color: '#1E293B' }}>
                What We Offer:
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {job.offer.map((r, i) => (
                  <Typography component="li" key={i} sx={{ mb: 1, color: '#475569', fontFamily: 'Poppins, sans-serif', lineHeight: 1.8 }}>{r}</Typography>
                ))}
              </Box>
            </Box>
          )}

          <Box sx={{ display: 'flex', gap: 3, pt: 2, borderTop: '1px solid #E2E8F0', alignItems: 'center' }}>
            <Button
              variant="contained"
              sx={{ background: "#0057FF", px: 4, py: 1.5, borderRadius: '12px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textTransform: 'none', fontSize: '1rem', '&:hover': { background: '#004DE6' } }}
              component="a"
              href={job.applicationLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Here
            </Button>

            <Button variant="outlined" sx={{ px: 4, py: 1.5, borderRadius: '12px', fontWeight: 600, fontFamily: 'Poppins, sans-serif', textTransform: 'none', fontSize: '1rem', borderColor: '#CBD5E1', color: '#64748B', '&:hover': { background: '#F8FAFC', borderColor: '#94A3B8' } }} onClick={() => navigate("/careers")}>
              Back to Careers
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
