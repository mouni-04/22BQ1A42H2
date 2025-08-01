const axios = require('axios');

async function Log(stack, level, packageName, message) {
  try {
    // Validate allowed values
    const validStacks = ["backend", "frontend"];
    const validLevels = ["info", "warn", "error", "fatal", "debug", "trace"];

    if (!validStacks.includes(stack)) throw new Error("Invalid stack value");
    if (!validLevels.includes(level)) throw new Error("Invalid level value");

    // Send log to API
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
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWE0MmgyQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDI3MjAyLCJpYXQiOjE3NTQwMjYzMDIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1MjhlMmU5Ny03ODI4LTQxNGEtOTYyMy0wNTExNTc1MjQ3NzYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ5YW1hcnRoaSBtb3VuaWthIiwic3ViIjoiNGRmMDU5OGMtYzVjOC00NzY4LWFlYTAtN2Q0YzI5OWU0ZWZkIn0sImVtYWlsIjoiMjJicTFhNDJoMkB2dml0Lm5ldCIsIm5hbWUiOiJ5YW1hcnRoaSBtb3VuaWthIiwicm9sbE5vIjoiMjJicTFhNDJoMiIsImFjY2Vzc0NvZGUiOiJQblZCRlYiLCJjbGllbnRJRCI6IjRkZjA1OThjLWM1YzgtNDc2OC1hZWEwLTdkNGMyOTllNGVmZCIsImNsaWVudFNlY3JldCI6IlpaZ1dYUXRHQURIbU5GVWMifQ.iVLyLzyOUhI4W8maCYtHGjxLKK8-Fm9NyXGJpslZvGg`, // Replace with token
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log sent successfully:", response.data);
  } catch (error) {
    console.error("Logging failed:", error.message);
  }
}

module.exports = Log;
