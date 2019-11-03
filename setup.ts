/* eslint-disable import/no-extraneous-dependencies */
import gitUserName from "git-username";
import gitRepoName from "git-repo-name";
import gitRepoUrl from "git-repo-url";
import gitHomepage from "pkg-homepage";
import promptly from "promptly";
/* eslint-enable import/no-extraneous-dependencies */
import { writeFileSync } from "fs";
import packageJson from "./package.json";

const ask = async (prompt: string, defaultValue: string | Promise<string>): Promise<string> => {
  const defaultVal = typeof defaultValue === "string" ? defaultValue : await defaultValue;
  return (await promptly.prompt(`${prompt} [${defaultVal}]: `, { default: defaultVal })) as string;
};

/* eslint-disable no-console */
(async () => {
  const repoName = await ask("Name", gitRepoName());
  const userName = await ask("User name", gitUserName() || "");
  const repoUrl = gitRepoUrl.https(userName, repoName);
  let formattedRepoUrl = `git+${gitRepoUrl.https(userName, repoName)}`;
  formattedRepoUrl = await ask("Repository url", repoUrl);

  const homepage = gitHomepage({ repository: { url: repoUrl } });
  packageJson.name = repoName;
  packageJson.author = userName;
  packageJson.repository.url = formattedRepoUrl;
  packageJson.bugs.url = `${homepage}/issues`;
  packageJson.homepage = `${homepage}#readme`;
  packageJson.keywords = [];

  const content = JSON.stringify(packageJson, null, 2);

  writeFileSync("./package.json", `${content}\n`);

  console.log("Successfully updated package.json");
})();
