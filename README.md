# Node Starting Template

### Objective
The purpose of this package is to provide the starting template for nodejs development.

#### Features
- Bare-bones babel setup
    - Support for ec6 import statements
    - Breakpoints work correctly in WebStorm ( >= 2020.1)
- Support for jest unit testing
- Support for code coverage reports
- Support for npm or yarn

#### How to use
1. Do a git clone into your local workspace
    ```bash 
    $ git clone git@github.com:pyriter/nodeStartingTemplate.git 
    ```
2. Start up WebStorm
3. Within WebStorm select File -> New Project
4. Select 'Empty Project' on the left panel
5. Point to project directory to the root of the package that you just cloned
6. Hit next
7. Test out that you can run the main.test.js by putting a breakpoint

#### Development Tips
- Rename the package
- Remove the .git directory
- Do ```$ git init``` 
- Update the package.json with your new project name
