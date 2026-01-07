import { useState } from 'react';
import { Box, Button, Stack, Typography, Paper, Alert } from '@mui/material';
import axios from '../../utils/api';

const DiagnosticTest = () => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (test: string, status: 'success' | 'error', message: string, data?: any) => {
    setResults(prev => [...prev, { test, status, message, data, timestamp: new Date().toISOString() }]);
  };

  const runTests = async () => {
    setResults([]);
    setLoading(true);

    // Test 1: Check sessionStorage
    console.log('=== TEST 1: Session Storage ===');
    const token = sessionStorage.getItem('adminToken');
    const adminData = sessionStorage.getItem('adminData');
    
    if (token) {
      addResult('Session Storage', 'success', `Token found (length: ${token.length})`, { token: token.substring(0, 20) + '...' });
    } else {
      addResult('Session Storage', 'error', 'No token found in sessionStorage');
    }

    if (adminData) {
      addResult('Admin Data', 'success', 'Admin data found', { adminData: JSON.parse(adminData) });
    } else {
      addResult('Admin Data', 'error', 'No admin data found');
    }

    // Test 2: Check axios baseURL
    console.log('=== TEST 2: Axios Configuration ===');
    addResult('Axios Config', 'success', `Base URL: ${axios.defaults.baseURL}`);

    // Test 3: Test health endpoint
    console.log('=== TEST 3: Health Check ===');
    try {
      const base = axios.defaults.baseURL;
      if (!base) {
        addResult('Health Check', 'error', 'axios.defaults.baseURL is undefined');
      } else {
        const healthUrl = base.replace('/api', '/health');
        const healthRes = await fetch(healthUrl);
        const healthData = await healthRes.json();
        addResult('Health Check', 'success', 'Backend is healthy', healthData);
      }
    } catch (err: any) {
      addResult('Health Check', 'error', err.message);
    }

    // Test 4: Get all jobs (admin)
    console.log('=== TEST 4: Get All Jobs ===');
    try {
      const jobsRes = await axios.get('/admin/jobs');
      const jobs = jobsRes.data.data || jobsRes.data;
      addResult('Get All Jobs', 'success', `Found ${jobs.length} jobs`, { 
        count: jobs.length,
        firstJob: jobs[0] 
      });

      // Test 5: Get first job by ID
      if (jobs.length > 0) {
        console.log('=== TEST 5: Get Single Job ===');
        const firstJobId = jobs[0]._id;
        try {
          const singleJobRes = await axios.get(`/admin/jobs/${firstJobId}`);
          addResult('Get Single Job', 'success', `Successfully fetched job: ${singleJobRes.data.data.title}`, {
            url: `/admin/jobs/${firstJobId}`,
            job: singleJobRes.data.data
          });
        } catch (err: any) {
          addResult('Get Single Job', 'error', `Failed: ${err.message}`, {
            status: err.response?.status,
            message: err.response?.data?.message,
            url: err.config?.url
          });
        }
      } else {
        addResult('Get Single Job', 'error', 'No jobs available to test');
      }
    } catch (err: any) {
      addResult('Get All Jobs', 'error', `Failed: ${err.message}`, {
        status: err.response?.status,
        message: err.response?.data?.message
      });
    }

    // Test 6: Check public jobs endpoint
    console.log('=== TEST 6: Public Jobs Endpoint ===');
    try {
      const publicUrl = axios.defaults.baseURL + '/jobs';
      const publicRes = await fetch(publicUrl);
      const publicData = await publicRes.json();
      const publicJobs = publicData.data || publicData;
      addResult('Public Jobs', 'success', `Found ${publicJobs.length} public jobs`);
    } catch (err: any) {
      addResult('Public Jobs', 'error', err.message);
    }

    setLoading(false);
    console.log('=== ALL TESTS COMPLETE ===');
  };

  const clearResults = () => {
    setResults([]);
  };

  return (
    <Box p={4} maxWidth="1200px" mx="auto">
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" mb={3} fontWeight="bold">
          🔍 API Diagnostic Tool
        </Typography>
        
        <Typography variant="body1" color="text.secondary" mb={3}>
          This tool will test your API endpoints and authentication to help identify issues.
        </Typography>

        <Stack direction="row" spacing={2} mb={4}>
          <Button 
            variant="contained" 
            onClick={runTests} 
            disabled={loading}
            size="large"
          >
            {loading ? 'Running Tests...' : 'Run All Tests'}
          </Button>
          <Button 
            variant="outlined" 
            onClick={clearResults}
            disabled={loading || results.length === 0}
          >
            Clear Results
          </Button>
        </Stack>

        <Stack spacing={2}>
          {results.map((result, index) => (
            <Alert 
              key={index} 
              severity={result.status === 'success' ? 'success' : 'error'}
              sx={{ 
                '& .MuiAlert-message': { 
                  width: '100%' 
                } 
              }}
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {result.test}
              </Typography>
              <Typography variant="body2">
                {result.message}
              </Typography>
              {result.data && (
                <Box 
                  sx={{ 
                    mt: 1, 
                    p: 2, 
                    bgcolor: 'rgba(0,0,0,0.05)', 
                    borderRadius: 1,
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    overflow: 'auto',
                    maxHeight: '200px'
                  }}
                >
                  <pre style={{ margin: 0 }}>
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </Box>
              )}
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                {result.timestamp}
              </Typography>
            </Alert>
          ))}
        </Stack>

        {results.length === 0 && !loading && (
          <Alert severity="info">
            Click "Run All Tests" to start diagnostics
          </Alert>
        )}
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" mb={2}>📋 Quick Checks</Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            ✓ Make sure you're logged in to the admin panel
          </Typography>
          <Typography variant="body2">
            ✓ Check browser console for additional error messages
          </Typography>
          <Typography variant="body2">
            ✓ Verify your backend is deployed and running on Render
          </Typography>
          <Typography variant="body2">
            ✓ Confirm MongoDB has job documents
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default DiagnosticTest;