import * as fs from "fs";
import { fetchGitHubData } from "./fetchGithubData";
const md = require("markdown-it")({
    html: true, // Enable HTML tags in source
    breaks: true, // Convert '\n' in paragraphs into <br>
    linkify: true // Autoconvert URL-like text to links
});


const ossProjectRepos = [
    "mahhung12",
];

const githubUsername = "mHung";
const websiteUrl = "https://age-of-23.vercel.app";
const linkedinUrl = "https://linkedin.com/in/mhung";
const githubSponsorsUrl = "https://github.com/sponsors/mahhung12";

async function generateMarkdown() {
    const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;

    const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;

    const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;

    const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;

    const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=mahhung12&show_icons=true&hide=&count_private=true&title_color=ef4444&text_color=ffffff&icon_color=ef4444&bg_color=000000&hide_border=true&show_icons=true" alt="mahhung12's GitHub stats" />)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
    const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=mahhung12&show_icons=true&hide=&count_private=true&title_color=ef4444&text_color=ffffff&icon_color=ef4444&bg_color=000000&hide_border=true&show_icons=true" alt="mahhung12's GitHub stats" />)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

    const markdownText = `<div align="center">\n

  ${websiteBadge} ${linkedinBadge} ${githubSponsorsBadge} ${profileCountBadge}\n

  ---\n

  Hi there 👋🏾! I'm an innovative technology professional with progressive IT, web engineering, data, embedded systems, developer relations, documentation, technical writing, open-source, community building, and entrepreneurship experience in for-profit startups and non-profit technology and education organizations. I create technical content, build open-source projects and learning materials, speak/teach at developer meetups/conferences, and build several technical communities.\n

  ---\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n

  ---\n

  ## Highlights

  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n

  <summary>Quick Tips</summary>\n\n
  - 💬 How to reach me: DM [@mhung](https://twitter.com/iambolajiayo) on Gmail.\n
  - 📬 Where to find me: [AgeOf23](https://age-of-23.vercel.app/)
  - 📖 Book recommendations: [Knowing God by J. I. Packer](https://bit.ly/3EdCFUW) and [Atomic Habits by James Clear](https://bit.ly/45r1kBH).\n
  </details>\n

  ---\n

  <a href="#">Learn how this works.</a> <a href="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml"><img src="https://github.com/BolajiAyodeji/BolajiAyodeji/actions/workflows/build.yml/badge.svg" align="right" alt="Rebuild README.md file"></a>\n

  <div align="center">\n
   <a href="https://bolajiayodeji.com" target="_blank" rel="noopener noreferrer"><img src="https://bolajiayodeji.com/favicon.png" width="30" /></a>\n
  </div>`;

    const result = md.render(markdownText);

    fs.writeFile("README.md", result, (error) => {
        if (error) throw new Error(`Something went wrong: ${error}.`);
        console.log(`✅ README.md file was succesfully generated.`);
    });
}

generateMarkdown();
