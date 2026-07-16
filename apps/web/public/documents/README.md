# CV Documents Directory

This directory is intended to host the PDF versions of Daniel Mira's professional resume.

The application expects the following exact file names to be placed in this folder:

- `daniel-mira-cv-es.pdf` (Spanish Version)
- `daniel-mira-resume-en.pdf` (English Version)

The portfolio will automatically detect the presence of these files at build time and conditionally display the "Download Resume" buttons in the corresponding language. If the file is not present, the button will be gracefully hidden to prevent 404 errors.
