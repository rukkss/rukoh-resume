document.getElementById("generate").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value.trim();
  const skills = document.getElementById("skills").value.trim();
  const experience = document.getElementById("experience").value;

  if (!name || !role || !skills || !experience) {
    alert("Please fill in all fields.");
    return;
  }

  const skillList = skills.split(",").map(s => s.trim()).join(", ");

  const summary = `${name} is a dedicated and results-driven ${role} with ${experience} year(s) of experience. Skilled in ${skillList}, with a proven ability to contribute to high-impact projects and deliver results.`;

  document.getElementById("output").textContent = summary;
});
