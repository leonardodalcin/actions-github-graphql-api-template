import GithubAPIClient from './services/github/GithubAPIClient'
import * as core from '@actions/core'
async function run(): Promise<void> {
  core.debug(
    JSON.stringify(
      await GithubAPIClient.getCollaboratorsNames({
        name: 'api_pt',
        owner: 'warrenbrasil'
      })
    )
  )
  return
}

run()
