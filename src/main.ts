import GithubAPIClient from './services/github/GithubAPIClient'
async function run(): Promise<void> {
  try {
    // eslint-disable-next-line no-console
    console.log(
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
