# Social Calendar

## Development

### Prerequisites
- Docker  
[Install Docker Desktop on Mac](https://docs.docker.com/docker-for-mac/install/)
- Xcode  
[Mac App Store - Xcode](https://apps.apple.com/us/app/xcode/id497799835)

### Steps
1. `git clone` the repository locally
2. Create a personal branch to work on `git checkout -b branch-name`
3. Run `make start` to start up docker containers  
They are configured for hot loading so all changes should load automatically
4. Commit and push your branch to the remote
5. Create a pull request to merge your branch to master

### Clean-up
- Run `make stop` to stop containers running in the background