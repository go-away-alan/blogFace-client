## How do I make a contribution?

### Initial Setup

1. Clone the repository to your local machine using `git clone`.

### Before you begin a NEW feature/fix

1. Ensure your local `master` branch is up to date with the `master` branch on GitHub by running `git pull origin master`.
2. Checkout the `master` branch. All new features/fixes should be created off of `master`.
3. Create a new branch for your feature/fix using `git checkout -b branch-name-here`.
4. Follow good commit practices to track the build-out of the new feature/fix. Add and commit changed files using `git add` and `git commit`.

### If there is a MERGE on GitHub when you have a feature in progress
1. Update your local `master` branch so it reflects the current version in GitHub by running `git pull origin master`
2. Checkout your feature branch (if you are not on it already) and run `git rebase master`. Your feature branch now includes all the most recent changes to `master`

### Before pushing a completed feature to GitHub
1. Run `git checkout master` and `git pull --rebase origin master` to make sure that your `master` branch incorporates any updates that were made on the repo on GitHub.
2. Run `git checkout my-feature-branch` and `git rebase master` to rebase your new feature on top of the (updated) `master` branch.
3. Validate you have completed ALL checks included in the Checklist outlined below. If the new feature touches the Client, complete ALL checks included in the Contributing file of the Client repo, as well.
4. Push the new feature to the team's GitHub repository using `git push origin
branch-name-here`.
5. Add manual tests for the new feature to the Feature Validation Checklist, below.
6. Submit a pull request for the feature on GitHub. This will notify the team that the feature is ready for review. :tada:

### Feature Validation Checklist
- Placeholder for manual validations to complete before submitting a pull request for ANY new feature. List should include regresssion tests for previously developed features.

### Team Review of Pull Requests
1. Copy pull request to local machine for validation? Or do we want to agree that code review is sufficient after the team member submitting the pull request has completed all Checklist validations?
2. Merge feature to `master`
3. Delete `my-feature-branch`.
