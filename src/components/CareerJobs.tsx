import { Card, CardContent, Typography, Button } from "@mui/material";
import { Job } from "../types/job";
import { Link } from "react-router-dom";

interface CareerJobsProps {
  job: Job;
}

export default function CareerJobs({ job }: CareerJobsProps) {
  return (
    <Card
      sx={{
        flex: "1 1 calc(50% - 16px)",
        minWidth: "300px",
        p: 3,
        borderRadius: 3,
        background: "#F9FAFB",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
        },
        transition: "0.3s",
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
          {job.title}
        </Typography>

        <Typography sx={{ mb: 2, color: "#475569", fontWeight: 500 }}>
          {job.type} · {job.location}
        </Typography>

        <Typography sx={{ mb: 2 }}>
          {job.shortDescription}
        </Typography>

        <Link to={`/careers/${job._id}`}>
          <Button variant="contained" sx={{ background: "#0057FF" }}>
            Read More
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
