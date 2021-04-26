import { GitHubClient } from 'types';
import axios, { AxiosResponse } from 'axios';

const getGithubClient = async (
  githubLogin = 'sevochka'
): Promise<GitHubClient | void> => {
  return await axios
    .get<GitHubClient>(`https://api.github.com/users/${githubLogin}`)
    .then((response: AxiosResponse<GitHubClient>) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

export { getGithubClient };
