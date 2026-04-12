import { Card, CardContent, Typography, Button } from "@mui/material";
import { Job } from "../types/job";
import { Link } from "react-router-dom";

interface CareerJobsProps {
  job: Job;
}

export default function CareerJobs({ job }: CareerJobsProps) {
  return (
    <Card
      elevation={0}
      sx={{
        flex: "1 1 calc(50% - 32px)",
        minWidth: "300px",
        borderRadius: "24px",
        background: "#F8FAFC",
        border: "1px solid rgba(203, 213, 225, 0.4)",
        p: { xs: 3, md: 4 },
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 16px 32px rgba(1, 10, 69, 0.06)",
        },
        transition: "all 0.3s ease",
      }}
    >
      <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, fontFamily: "Poppins, sans-serif" }}>
          {job.title}
        </Typography>

        <Typography sx={{ mb: 2, color: "#64748B", fontWeight: 600, fontFamily: "Poppins, sans-serif", fontSize: "14px" }}>
          {job.type} · {job.location}
        </Typography>

        <Typography sx={{ mb: 4, color: "#475569", fontFamily: "Poppins, sans-serif", lineHeight: 1.7 }}>
          {job.shortDescription}
        </Typography>

        <Link to={`/careers/${job._id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" sx={{ background: "#0B1C5D", borderRadius: "12px", textTransform: 'none', fontWeight: 600, fontFamily: "Poppins, sans-serif", px: 3, py: 1.2, "&:hover": { background: "#09184A" } }}>
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
