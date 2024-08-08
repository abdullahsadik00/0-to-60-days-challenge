# Git Commands

## Basic Commands

### `git init`
- **Description**: Initialize a new Git repository.
- **Usage**: Creates a new Git repository in the current directory.
- **Example**:
  ```bash
  git init
  # Initializes a new Git repository in the current directory
git clone
Description: Clone a repository into a new directory.
Usage: Copies an existing repository from a remote server.
Example:
bash
Copy code
git clone https://github.com/user/repo.git
# Clones the repository from the specified URL into a new directory
git status
Description: Show the working directory status.
Usage: Displays changes between the working directory and the index.
Example:
bash
Copy code
git status
# Shows the status of files in the working directory and staging area
git add
Description: Add file contents to the index (staging area).
Usage: Stages changes to be committed.
Example:
bash
Copy code
git add file.txt
# Stages file.txt for the next commit

git add .
# Stages all changes in the current directory for the next commit
git commit
Description: Record changes to the repository.
Usage: Commits the staged changes to the repository.
Example:
bash
Copy code
git commit -m "Add new feature"
# Commits staged changes with the message "Add new feature"
git log
Description: Show the commit logs.
Usage: Displays a list of commits for the repository.
Example:
bash
Copy code
git log
# Displays the commit history
git diff
Description: Show changes between commits, commit and working tree, etc.
Usage: Displays the differences between various states.
Example:
bash
Copy code
git diff
# Shows changes in the working directory not yet staged

git diff --cached
# Shows changes staged for the next commit
git branch
Description: List, create, or delete branches.
Usage: Manages branches in the repository.
Example:
bash
Copy code
git branch
# Lists all branches in the repository

git branch new-branch
# Creates a new branch named new-branch

git branch -d old-branch
# Deletes the branch named old-branch
git checkout
Description: Switch branches or restore working tree files.
Usage: Checks out a branch or a specific commit.
Example:
bash
Copy code
git checkout new-branch
# Switches to the branch named new-branch

git checkout -b feature-branch
# Creates and switches to a new branch named feature-branch
git merge
Description: Join two or more development histories together.
Usage: Merges changes from one branch into the current branch.
Example:
bash
Copy code
git merge feature-branch
# Merges changes from feature-branch into the current branch
git pull
Description: Fetch from and integrate with another repository or a local branch.
Usage: Updates the local repository with changes from a remote repository.
Example:
bash
Copy code
git pull origin main
# Fetches changes from the remote repository and merges them into the local branch
git push
Description: Update remote refs along with associated objects.
Usage: Pushes local changes to a remote repository.
Example:
bash
Copy code
git push origin main
# Pushes local commits on the main branch to the remote repository
git remote
Description: Manage set of tracked repositories.
Usage: Lists, adds, or removes remote repositories.
Example:
bash
Copy code
git remote -v
# Lists all configured remote repositories

git remote add origin https://github.com/user/repo.git
# Adds a new remote named origin
git fetch
Description: Download objects and refs from another repository.
Usage: Fetches updates from a remote repository without merging them.
Example:
bash
Copy code
git fetch origin
# Fetches updates from the remote repository named origin
git reset
Description: Reset current HEAD to the specified state.
Usage: Resets the index and working directory to a previous commit.
Example:
bash
Copy code
git reset --hard HEAD~1
# Resets the index and working directory to one commit before the current HEAD
git rm
Description: Remove files from the working directory and index.
Usage: Deletes files and stages the deletion for the next commit.
Example:
bash
Copy code
git rm file.txt
# Removes file.txt from the working directory and stages the deletion
git tag
Description: Create, list, delete, or verify a tag object signed with GPG.
Usage: Tags specific commits with a name for easy reference.
Example:
bash
Copy code
git tag v1.0
# Creates a tag named v1.0 at the current commit

git tag -d v1.0
# Deletes the tag named v1.0