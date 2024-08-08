# Commands for Linux and Windows

## Basic Commands

### Linux Commands

#### `pwd`
- **Description**: Print Working Directory
- **Usage**: Displays the current directory path.
  - **Example**: 
    ```bash
    pwd
    # Output: /home/user
    ```

#### `cd`
- **Description**: Change Directory
- **Usage**:
  - `cd dir` - Change to the specified directory.
  - `cd ..` - Move one directory up.
  - `cd ../..` - Move two directories up.
  - `cd ~` - Move to the home directory.
  - `cd dir1/dir2` - Move into subdirectories.
  - **Example**:
    ```bash
    cd Documents
    # Moves into the Documents directory

    cd ..
    # Moves one directory up

    cd ~/Projects
    # Moves to the Projects directory inside the home directory
    ```

#### `ls`
- **Description**: List Directory Contents
- **Usage**: Displays files and directories in the current directory.
  - `ls -l` - Display detailed information about files and directories.
  - `ls -R` - Recursively list contents of directories.
  - `ls -t` - Sort by modification time, with the newest first.
  - `ls -la` - Show all files, including hidden files.
  - `ls -r` - Reverse the order of the listing.
  - `ls -s` - Show file sizes.
  - `ls | grep .json` - List JSON files.
  - `ls *.json` - List files with a `.json` extension.
  - **Example**:
    ```bash
    ls
    # Output: file1.txt file2.txt dir1

    ls -l
    # Output: -rw-r--r-- 1 user group 1234 Aug 8 12:34 file1.txt

    ls -R
    # Output: dir1/
    #         dir1/file3.txt

    ls -t
    # Output: file2.txt file1.txt

    ls -la
    # Output: drwxr-xr-x  2 user group 4096 Aug 8 12:34 . 
    #         drwxr-xr-x 12 user group 4096 Aug 8 12:34 .. 
    #         -rw-r--r--  1 user group 1234 Aug 8 12:34 .hiddenfile
    ```

#### `mkdir`
- **Description**: Make Directory
- **Usage**: Create a new directory.
  - **Example**:
    ```bash
    mkdir test1
    # Creates a directory named test1

    mkdir -p dir1/dir2
    # Creates nested directories dir1 and dir2
    ```

#### `touch`
- **Description**: Create or Update a File
- **Usage**: Create a new file or update the timestamp of an existing file.
  - **Example**:
    ```bash
    touch index.js
    # Creates an empty file named index.js or updates its timestamp if it exists
    ```

#### `cat`
- **Description**: View and Create Files
- **Usage**:
  - `cat file` - Display the contents of a file.
  - `cat > file` - Create or overwrite a file with new content.
  - `cat >> file` - Append content to a file.
  - **Example**:
    ```bash
    cat index.js
    # Displays the contents of index.js

    cat > newfile.txt
    # Creates newfile.txt and allows you to enter content (Ctrl+D to save)

    cat >> existingfile.txt
    # Appends content to existingfile.txt
    ```

#### `vi` (or `vim`)
- **Description**: Text Editor
- **Usage**: Edit files using the `vi` or `vim` text editor.
  - **Example**:
    ```bash
    vi index.js
    # Opens index.js in the vi editor
    ```

#### `mv`
- **Description**: Move or Rename Files
- **Usage**:
  - `mv file destination` - Move a file to a different directory.
  - `mv file newname` - Rename a file.
  - **Example**:
    ```bash
    mv test.js /path/to/destination/
    # Moves test.js to the specified directory

    mv test.js newname.js
    # Renames test.js to newname.js
    ```

#### `cp`
- **Description**: Copy Files
- **Usage**: Copy a file to a new location.
  - **Example**:
    ```bash
    cp file.txt /path/to/destination/
    # Copies file.txt to the specified directory
    ```

### Windows Commands

#### `pwd`
- **Description**: Print Working Directory (Equivalent in PowerShell)
- **Usage**: Displays the current directory path.
  - **Example**:
    ```powershell
    Get-Location
    # Output: C:\Users\User
    ```

#### `cd`
- **Description**: Change Directory
- **Usage**:
  - `cd dir` - Change to the specified directory.
  - `cd ..` - Move one directory up.
  - `cd ..\..` - Move two directories up.
  - `cd \` - Move to the root directory.
  - `cd dir1\dir2` - Move into subdirectories.
  - **Example**:
    ```cmd
    cd Documents
    # Moves into the Documents directory

    cd ..
    # Moves one directory up

    cd C:\Projects
    # Moves to the Projects directory on the C drive
    ```

#### `dir`
- **Description**: List Directory Contents (Windows Equivalent of `ls`)
- **Usage**: Displays files and directories in the current directory.
  - `dir /a` - Show all files, including hidden files.
  - `dir /o-t` - Sort by modification time, with the newest first.
  - `dir /s` - Recursively list contents of directories.
  - **Example**:
    ```cmd
    dir
    # Output: Volume in drive C has no label.
    #         Directory of C:\Users\User\Documents

    dir /a
    # Output: Shows all files including hidden ones

    dir /o-t
    # Output: Lists files with the most recently modified first
    ```

#### `mkdir`
- **Description**: Make Directory
- **Usage**: Create a new directory.
  - **Example**:
    ```cmd
    mkdir test1
    # Creates a directory named test1

    mkdir dir1\dir2
    # Creates nested directories dir1 and dir2
    ```

#### `type`
- **Description**: View File Contents (Windows Equivalent of `cat`)
- **Usage**: Display the contents of a file.
  - **Example**:
    ```cmd
    type index.js
    # Displays the contents of index.js
    ```

#### `move`
- **Description**: Move or Rename Files
- **Usage**:
  - `move file destination` - Move a file to a different directory.
  - `move file newname` - Rename a file.
  - **Example**:
    ```cmd
    move test.js C:\path\to\destination\
    # Moves test.js to the specified directory

    move test.js newname.js
    # Renames test.js to newname.js
    ```

#### `copy`
- **Description**: Copy Files
- **Usage**: Copy a file to a new location.
  - **Example**:
    ```cmd
    copy file.txt C:\path\to\destination\
    # Copies file.txt to the specified directory
    ```

## Additional Information

### Getting Help

- **Linux**:
  - To learn more about a command, use:
    - `man command` - Display the manual page for a command (e.g., `man ls`).
    - `command --help` - Show help information for a command.

- **Windows**:
  - To learn more about a command, use:
    - `command /?` - Show help information for a command (e.g., `dir /?`).

### Opening Files

- **Linux**:
  - To open a file with the default application, use:
    - `xdg-open file` (e.g., `xdg-open workbook.pdf`).

- **Windows**:
  - To open a file with the default application, use:
    - `start file` (e.g., `start workbook.pdf`).

### Handling Spaces in Directory Names

- **Linux**:
  - For directories with spaces in their names, use backslashes to escape spaces:
    - Example: `cd Important\ Pdfs\ and\ Documents/`

- **Windows**:
  - For directories with spaces in their names, use quotes:
    - Example: `cd "Important Pdfs and Documents"`

### Auto-completion

- **Linux**:
  - Use the Tab key for auto-completion of file and directory names. For example, typing `cd Dow` and pressing Tab will show directories starting with "Dow."

- **Windows**:
  - Use the Tab key for auto-completion of file and directory names in Command Prompt and PowerShell.

> As engineers, we appreciate abstraction—it makes complex tasks easier!
