function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;

    const output = `
    <section class="about">
        <h2>${name}</h2>
        <p>Email: ${email} | Phone: ${phone}</p>
        <p>${summary}</p>
    </section>
    <section class="experience">
        <h3>Work Experience</h3>
        <p>${experience.replace(/\n/g, '<br>')}</p>
    </section>
    <section class="certifications">
        <h3>Education</h3>
        <p>${education.replace(/\n/g, '<br>')}</p>
    </section>
    <section class="projects">
        <h3>Skills</h3>
        <p>${skills.replace(/\n/g, '<br>')}</p>
    </section>
    `;

    document.getElementById('resume-output').innerHTML = output;
    document.getElementById('resume-output').scrollIntoView({behavior:'smooth'});
}
