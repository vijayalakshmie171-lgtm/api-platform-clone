document.getElementById("send").addEventListener("click", async () => {
  const method = document.getElementById("method").value;
  const url = document.getElementById("url").value;

  try {
    const response = await fetch(url, { method });
    const data = await response.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error;
  }
});
