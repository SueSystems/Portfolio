20th June 2025 
npx create-react-app portfolio
cd portfolio
npm start   # the code ran
dev branch pushed to github, Photo added to src and App.js edited. npm start run ran

21st June 2025
mkdir portfolio/src/components/
touch  portfolio/src/components/Header.js About.js Projects.js Contact.js # creation of all the 4 files or pages at once
mkdir portfolio/src/css/
touch portfolio/src/css/Header.css About.css Projects.css Contact.css  # creation of all the 4 files styles
git add . && git commit -m " Creation of Application Strucure: Components and Style directories" && git push
npm install react-router-dom # adding routing with React Router inisde of reacth app( at SUE2023 ➜ /workspaces/Portfolio/portfolio (dev)  )
updated App.js with routes of the application:About, Content, Project
git add src/components/Header.js && git commit -m "Header component content added"
git add src/components/About.js && git commit -m "About component content added"
git add portfolio/src/components/Projects.js && git commit -m "Projects Page: Added  contented" 
git add portfolio/src/components/Contact.js && git commit -m"Contact Page: Added content"
styled header and navbar, edited Package.json with build-pages, root

24th June 2025
npm install gh-pages --save-dev
npm install     # installed just incase is the cause of the application not running at github pages
npm run deploy  # build the project
git add . && git commit -m "Deploy code" && git push

NB : Error: spawn E2BIG    experience 
*************************************
❌ Problem: Error: spawn E2BIG
This error means the system hit the maximum argument length limit when trying to spawn a Git process (via the gh-pages package).

This is common in Codespaces or cloud environments when:

There are too many files in the build/ directory (e.g., very deep node_modules)

OR you are inside a monorepo or nested directory

OR Git is trying to track too many files

SOLUTION
********
 Clean up .gitignore
vim .gitignore
node_modules/
build/
.env
.DS_Store

npx gh-pages-clean      # cleaning gh-pages caches

NB Error Persisted 
**********
npx gh-pages --dotfiles --message "Deploy to GitHub Pages" -d build     # error persisted
Reason
*******
the issue is related to argument list length limits in the current environment (GitHub Codespaces + WSL/Linux backend). This is a known limitation.

SOLUTION : CREATING GITHUB ACTION in deployment
**********
mkdir -p .github/workflows
vim .github/workflows/deploy.yml
git add . && git commit -m "Creating Github Action for Deployment" && git push

git add . && git commit -m "Added: deploy_branch: gh-pages -to enable deployment from githubpage" && git push
at application repository:
Setting -> Action -> General -> scroll to "Workflow Permission" -> Select "Read and Write Permission" Save
In yalm file add:
permissions:
  contents: write
  pages: write
  id-token: write

At top of fiule after file name

