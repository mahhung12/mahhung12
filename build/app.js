"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const fetchGithubData_1 = require("./fetchGithubData");
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
function generateMarkdown() {
    return __awaiter(this, void 0, void 0, function* () {
        const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;
        const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;
        const githubSponsorsBadge = `[![GitHub Sponsors Badge](https://img.shields.io/badge/-github%20sponsors-3B7EBF?style=for-the-badge&logo=github&logoColor=white)](${githubSponsorsUrl})`;
        const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;
        const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=mahhung12&show_icons=true&hide=&count_private=true&title_color=ef4444&text_color=ffffff&icon_color=ef4444&bg_color=000000&hide_border=true&show_icons=true)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;
        const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=mahhung12&show_icons=true&hide=&count_private=true&title_color=ef4444&text_color=ffffff&icon_color=ef4444&bg_color=000000&hide_border=true&show_icons=true)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;
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
  ${yield (0, fetchGithubData_1.fetchGitHubData)(ossProjectRepos)}\n
  </details>\n

  <details>\n
  <summary>Quick Tips</summary>\n\n
  - 💬 How to reach me: DM [@mhung](mailto:mhung.forwork@gmail.com) on Gmail.\n
  - 📬 Where to find me: [AgeOf23](https://age-of-23.vercel.app/)
  - 📖 Book recommendations: [Knowing God by J. I. Packer](https://bit.ly/3EdCFUW) and [Atomic Habits by James Clear](https://bit.ly/45r1kBH).\n
  </details>\n

  ---\n

  `;
        const result = md.render(markdownText);
        fs.writeFile("README.md", result, (error) => {
            if (error)
                throw new Error(`Something went wrong: ${error}.`);
            console.log(`✅ README.md file was succesfully generated.`);
        });
    });
}
generateMarkdown();
