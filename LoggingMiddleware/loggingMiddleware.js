const axios = require('axios');

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message
      },
      {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWE0MmgyQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDI5MTE3LCJpYXQiOjE3NTQwMjgyMTcsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI2NjhjZDM2Ny01M2Q1LTQ4NGEtYWMzYS1mZmZjMzg4ZjFiZjUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ5YW1hcnRoaSBtb3VuaWthIiwic3ViIjoiNGRmMDU5OGMtYzVjOC00NzY4LWFlYTAtN2Q0YzI5OWU0ZWZkIn0sImVtYWlsIjoiMjJicTFhNDJoMkB2dml0Lm5ldCIsIm5hbWUiOiJ5YW1hcnRoaSBtb3VuaWthIiwicm9sbE5vIjoiMjJicTFhNDJoMiIsImFjY2Vzc0NvZGUiOiJQblZCRlYiLCJjbGllbnRJRCI6IjRkZjA1OThjLWM1YzgtNDc2OC1hZWEwLTdkNGMyOTllNGVmZCIsImNsaWVudFNlY3JldCI6IlpaZ1dYUXRHQURIbU5GVWMifQ.-ubMVYmzDEJInwINAV4NJSixxRK0E_RhuVQ_ylbbnpE",
          "Content-Type": "application/json"
        }
      }
    );
    console.log("Log sent successfully:", response.data);
  } catch (error) {
    console.error("Logging failed:", error.response?.data || error.message);
  }
}

// Test log
Log("backend", "error", "auth", "Sample error log test");
