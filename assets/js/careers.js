
function filterJobs() {
  const area = document.getElementById("area").value;
  const type = document.getElementById("jobType").value;
  const jobs = document.querySelectorAll(".job");

  jobs.forEach(job => {
    const matchArea = !area || job.dataset.area === area;
    const matchType = !type || job.dataset.type === type;

    job.style.display = (matchArea && matchType) ? "block" : "none";
  });
}
