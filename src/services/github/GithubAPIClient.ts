import * as core from '@actions/core'
import {GraphQLClient} from 'graphql-request'
import {getSdk} from './sdk' // THIS FILE IS THE GENERATED FILE
class GithubAPIClient {
  private static instance: GithubAPIClient
  sdk: ReturnType<typeof getSdk>
  private constructor() {
    const client = new GraphQLClient('https://api.github.com/graphql')
    client.setHeader('authorization', core.getInput('myToken'))
    this.sdk = getSdk(client)
  }

  static getInstance(): ReturnType<typeof getSdk> {
    if (!GithubAPIClient.instance) {
      GithubAPIClient.instance = new GithubAPIClient()
    }
    return GithubAPIClient.instance.sdk
  }
}
export default GithubAPIClient.getInstance()
