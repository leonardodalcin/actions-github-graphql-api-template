import * as core from '@actions/core'
import GithubAPIClient from './services/github/GithubAPIClient'
async function run(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(core.getInput('github-token'))
  try {
    core.debug(
      JSON.stringify(
        await GithubAPIClient.getCollaboratorsNames({
          name: 'api_pt',
          owner: 'warrenbrasil'
        })
      )
    )
  } catch (e) {
    throw e
  }
}

run()
