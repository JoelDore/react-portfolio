const projects = []

/**
 * headers: { Accept: application/vnd.github.v3+json }
 * https://api.github.com/repos/joeldore/{repo}
 * 
 * RESPONSE OBJECT w/ RELEVANT DATA:

  {
    "node_id": "MDEwOlJlcG9zaXRvcnkxMjk2MjY5",
    "name": "Hello-World",
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",
    "languages_url": "https://api.github.com/repos/octocat/Hello-World/languages",
    "language": null,
    "updated_at": "2011-01-26T19:14:43Z",
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT"
    }
  }

 */

export default projects