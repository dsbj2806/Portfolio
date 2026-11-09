# Daniel Sibaja — Portfolio

A responsive, single-page professional portfolio for Daniel Sibaja, built with plain HTML, CSS, and JavaScript. It presents documented experience in data science, statistics, research, data operations, and business intelligence.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page content, contact information, section order, and links |
| `css/styles.css` | Layout, responsive styling, colors, and typography |
| `js/main.js` | Mobile navigation, current year, and subtle scroll reveals |
| `ProfilePicture.jpg` | Supplied profile photograph used in the small header portrait |
| `Resume_Daniel_Sibaja.pdf` | Résumé linked from the page for download |
| `favicon.svg` | Browser tab icon |
| `VisualGuide.txt` | The Deep Current brand reference |
| `CVGuide.pdf` | Recruitment and résumé-writing reference |
| `LinkedInWebLink.txt` | Source of the LinkedIn URL |

There is no build step, framework, or package to install. The page uses relative paths and can be published as a static GitHub Pages site.

## Preview on your computer

The simplest reliable preview uses Python’s small built-in web server:

1. Open the portfolio folder in File Explorer.
2. Click the address bar, type `powershell`, and press **Enter**.
3. In the PowerShell window, run:

   ```powershell
   py -m http.server 8000
   ```

4. Open [http://localhost:8000](http://localhost:8000) in a browser.
5. To stop the local server, return to PowerShell and press **Ctrl+C**.

If Python is not installed, you can open `index.html` directly in a browser for a quick check. A local web server is preferable because it behaves more like the published site.

## Update personal information

Open `index.html` in a text editor such as Visual Studio Code or Notepad. Search for the section heading or text described below, then replace only the relevant content between its HTML tags. Keep the surrounding tags and quotation marks intact.

| Information | Where to edit |
| --- | --- |
| Name, professional identity, and opening statement | `#top`, inside `<section class="hero">` |
| Professional introduction | `#about`, inside `<section class="intro-section">` |
| Selected accomplishments | `#highlights`, inside the four `<article class="highlight-card">` elements |
| Employment history | `#experience`, inside the `<article class="timeline-entry">` elements |
| Skills and languages | `#expertise`, inside the `<article class="skill-group">` elements |
| Degree and school | `#education`, inside `<article class="education-card">` |
| Email, phone, and contact message | `#contact`, inside `<section class="contact-section">` |
| Page title and search description | The `<title>` and `<meta name="description">` elements in `<head>` |

When adding a new job, copy one complete `<article class="timeline-entry">...</article>` block and update its title, organization, dates, and bullet points. Remove a whole article block to remove an entry. Update the navigation only if you add or rename a section.

Keep all claims consistent with the résumé and other reliable source documents. The accomplishments section is intentionally based on documented work rather than invented sample projects.

## Replace the profile picture

The page uses `ProfilePicture.jpg` in the project’s main folder as a small portrait beside the name in the header. To replace it:

1. Save a clear, square portrait in the project folder.
2. Rename it to exactly `ProfilePicture.jpg`, replacing the existing image.
3. Keep the image’s proportions; the page crops it into a small circle without stretching it.

A square JPEG at about 1,000 × 1,000 pixels or larger is a good starting point. The current supplied image is 1,223 × 1,223 pixels. If you choose a different filename or format, update the `src="ProfilePicture.jpg"` value on the header image in `index.html`.

## Update the résumé PDF

Replace `Resume_Daniel_Sibaja.pdf` with the updated PDF and keep that exact filename. Both résumé download links in `index.html` point to it. If you use another filename, change the `href` on both links: one is in the hero and one is in the contact section.

## Change links and contact details

- **LinkedIn:** Replace the full URL in both LinkedIn links in `index.html`. Keep the `https://` prefix.
- **Email:** Update the displayed email and the address after `mailto:` in the contact section.
- **Phone:** Update the displayed number and the number after `tel:`. Use a plus sign and country code in the `tel:` value if international dialing is needed.
- **Résumé:** Follow the filename instructions above.

External LinkedIn links open in a new tab. Keep `target="_blank"` together with `rel="noopener noreferrer"` for safer external navigation.

## Make visual changes carefully

All layout and visual styling live in `css/styles.css`. Near the beginning, `:root` defines the approved palette from `VisualGuide.txt`: Current Blue, Abyss, Ocean Navy, Petrol, Sea Glass, Arctic Mist, Warm Ivory, Stone, Coral, and Amber. Use these existing variables for any visual adjustment instead of introducing unrelated colors. Coral and Amber are intended as restrained accents.

The rest of the stylesheet is grouped by component and section, followed by tablet/mobile breakpoints and reduced-motion support. Content is centered and capped at 1,440 pixels on wide screens, while section backgrounds still span the page. Prefer editing the existing section rules. For example, adjust `.hero h1` to change the hero title size, or the declarations inside `@media (max-width: 680px)` to tune small-screen spacing. Keep text readable and check the page on both a wide and narrow screen after styling changes.

To add a section, create a semantic `<section>` in `index.html`, give it a unique `id`, and add a matching navigation link if visitors should be able to jump to it. Follow the existing heading order and color variables. Remove a section by deleting its complete `<section>...</section>` block and its navigation link, if any.

`VisualGuide.txt` remains the reference for future visual decisions. The supplied photo, resume, CV guide, and LinkedIn text are source materials; only the photo and resume are linked from the website.

## Publish with GitHub Pages

You need a GitHub account. A public repository is the simplest option for a free public portfolio.

1. **Create a repository:** On GitHub, choose **New repository**. Give it a name such as `daniel-sibaja-portfolio`. Choose **Public**, then create the repository.
2. **Upload the website:** On the new repository page, choose **Add file → Upload files**. Upload `index.html`, `favicon.svg`, the original `ProfilePicture.jpg` and `Resume_Daniel_Sibaja.pdf`, and the `css` and `js` folders with their files. Do not upload the PDFs or text files used only as references unless you intend to publish those too.
3. **Save the upload:** Enter a short commit message, such as `Add portfolio website`, then choose **Commit changes**.
4. **Enable Pages:** Open the repository’s **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/(root)` folder, then choose **Save**.
7. **Find the site:** Return to **Settings → Pages**. GitHub displays the published URL after deployment. A project site usually has the form `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.
8. **Update later:** Edit files locally, then upload the changed files to the same repository paths and commit them. GitHub Pages republishes the site after the update completes.

The homepage must remain named `index.html` at the repository root. Preserve the `css` and `js` folder names and file paths when uploading; paths are case-sensitive after publishing.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| Profile picture does not appear | Confirm `ProfilePicture.jpg` is in the same folder as `index.html`, and that its spelling and capitalization match the `src` value. |
| Résumé download does not work | Confirm `Resume_Daniel_Sibaja.pdf` is beside `index.html` and the link filename matches exactly. |
| LinkedIn does not open | Check that the full profile URL starts with `https://` and that it is enclosed in the link’s `href` quotes. |
| Changes do not appear | Wait for the Pages deployment to finish, refresh the page, and try a hard refresh (`Ctrl+F5`). |
| GitHub Pages reports an error | Check **Settings → Pages** and the **Actions** tab. Verify the `main` branch, `/(root)` folder, root-level `index.html`, and exact filenames. |
| A link or asset breaks after publishing | Check that paths are relative, match capitalization, and point to files included in the repository. Do not use a path that starts with a computer-specific folder such as `C:\`. |
| Mobile menu or scroll effect is missing | Confirm `js/main.js` remains in the `js` folder and the `<script src="js/main.js">` path in `index.html` has not changed. The content remains available even if JavaScript is unavailable. |

## Content notes

The portfolio uses the supplied portrait, the exact LinkedIn profile URL, and information documented in the résumé. The CV guide’s practical recommendations are reflected in the concise opening summary, scannable experience entries, accomplishment-led highlights, and emphasis on outcomes rather than unsupported claims. No separate project list, certifications, or additional qualifications were documented in the supplied résumé, so none have been invented.
