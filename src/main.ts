import GithubAPIClient from './services/github/GithubAPIClient'
import * as core from '@actions/core'
async function run(): Promise<void> {
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
    core.debug(e)
  }
}

run()
