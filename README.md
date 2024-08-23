
Extend the file system of EBS volumes

1. sudo lsblk
2. sudo growpart /dev/xvda 1
3. sudo lsblk
4. df -hT
5. sudo resize2fs /dev/xvda1

VS Code extension
1. ES7 + React/Redux/React - Native snippets
2. Auto Rename Tag
3. GitHub Copilot
4. GitHub Copilot Chat
5. Multiple cursor case preserve
6. Prettier
7. 

rmdir \'--\'
cp -TRv foo/ bar/

Build modules
1.   npx shadcn-ui@latest init
2.   npx shadcn-ui@latest add button
3.   yarn add qs
4.   yarn add @types/qs
5.   npx shadcn-ui@latest add card label input
6. yarn add zod
7. npx shadcn-ui@latest add textarea
8. npx shadcn-ui@latest add sonner
9. yarn add node-html-parser
10. yarn add @langchain/openai langchain
11. yarn add react-player
12. yarn add use-debounce
13. npx shadcn-ui@latest add pagination

Frontend src
1. app/page.tsx
2. components/custom/HeroSection.tsx
3. src/lib/utils.ts
4. src/app/components/StrapiImage.tsx
5. next.config.mjs (hardcoded the http://54.177.136.157/ addr for 1337 admin portal)
6. src/app/components/custom/FeaturesSection.tsx
7. loaders.tsx
8. Logo.tsx
9. Header.tsx
10. src/app/layout.tsx
11. Footer.tsx
12. not-found.js
13. loading.tsx
14. error.ts
15. app/(auth)/signin/page.tsx
16. app/(auth)/signup/page.tsx
17. app/(auth)/layout.tsx
18. SignupForm.tsx
19. SingupForm.tsx
20. auth-actions.ts
21. ZodErrors.tsx
22. auth-service.ts
23. StrapiErrors.tsx
24. SubmitButton.tsx
25. app/dashboard/page.tsx
26. src/middleware.ts
27. services/get-token.ts
28. get-user-me-loader.ts
29. LogoutButton.tsx
30. dashboard/layout.tsx
31. src/components/custom/Header.tsx -> (ChatwootWidget.js)
32. dashboard/account/page.tsx
33. ProfileForm.tsx                     (go to backend to add user's fields firstName:shortText, lastName:shortText, bio:longText, credits:Number:0)
34. profile-actions.ts
35. mutate-data.ts
36. ImagePicker.tsx
37. ProfileImageForm.tsx                (go to backend to add user's fields image:single:images only)
38. file-service.ts
39. SummaryForm.tsx
40. app/api/summarize/route.ts
41. summary-service.ts
42. src/lib/youtube-transcript.ts
43. .env.local
44. summary-actions.ts
45. dashboard/summaries/page.tsx
46. dashboard/summaries/[videoId]/layout.tsx
47. dashboard/summaries/[videoId]/page.tsx
48. YouTubePlayer.tsx
49. SummaryCardForm.tsx

50. BACKEND ACTION: yarn strapi generate (generate a "route middleware" for an API, to set User/Summary Relation in Strapi backend platform)
50.1. (vs "global middleware", a more limited scope in comparison. For example, route middleware can be used 1. instead of polices to control access to an endpoint. 2. to modify the context before passing it down to further core elements of the Strapi Server)
50.2. backend/src/api/summary/middlewares
50.3  backend/src/middlewares/is-owner.js user-find-many.js user-can-update.js
50.4  backend/src/api/summary/routes/summary.js
50.4 yarn strapi console (type strapi, see a long list of all available methods and objects)
50.5 yarn strapi middlewares:list (list all available middleware)

51. src/components/custom/Search.tsx
52. PaginationComponent.tsx
53. Pagination.tsx
54. DeleteButton.tsx

Debugging (local machine)

1. Adding debugger (.vscode/launch.json)

{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "runtimeArgs": ["--inspect"],
      "skipFiles": ["<node_internals>/**"],
      "serverReadyAction": {
        "action": "debugWithEdge",
        "killOnServerStop": true,
        "pattern": "- Local:.+(https?://.+)",
        "uriFormat": "%s",
        "webRoot": "${workspaceFolder}"
      }
    }
  ]
}


-  yarn add qs
-  yarn add @types/qs
- yarn add zod
- yarn add node-html-parser
- yarn add @langchain/openai langchain
- yarn add react-player
- yarn add use-debounce
- npm install --save clsx

GIT related
1. git init         (cd to the newly created directory and git init)
1.1 git remote -v
2. git remote remove origin
3. git remote add origin [url].git
3.1 or (git remote set-url origin [new-url])
4. git pull --rebase origin master
5. git push --set-upstream origin master
5.1 git push -u back V1/local (the first time to link up the sync tracking changes between local repo and Github repo )
5.2 git pull origin main --allow-unrelated-histories (force Git to merge the two despite the unrelated histories)
6. git stash
7. git pull origin master
8. git switch -c new_branch_name
9. git branch --show-current
10. git branch -d branch-to-delete

proper way to get up-date data from origin/main to local branch having the same remote branch
100. git checkout patch001
101. git fetch origin
102. git merge origin/main

200. git fetch -all
201. git reset --hard <remote>/<branch_name>
202. git merge front/main

Installing gh on Linux and BSD
1. (type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
&& sudo mkdir -p -m 755 /etc/apt/keyrings \
&& wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
&& sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
&& echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
&& sudo apt update \
&& sudo apt install gh -y
2. gh auth login

INCREASE VOL SIZE
1. increase the attached volume size in console
2. sudo growpart /dev/xvda 1
3. sudo resize2fs /dev/xvda1
4. sudo lsblk

INCREASE SWAP MEMORY
1. free -h
2. df -h
3. sudo fallocate -l 4G /swapfile
4. ls -lh /swapfile
5. sudo chmod 600 /swapfile
6. ls -lh /swapfile
7. sudo mkswap /swapfile                # mark the file as swap
8. sudo swapon /swapfile                # enable the swap file
9. sudo swapon --show
10. free -h
11. sudo cp /etc/fstab /etc/fstab.bak    # making the swap file permanent
12. echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
13. cat /proc/sys/vm/swappiness          # tunning the swap settings
14. sudo sysctl vm.swappiness=10
15. sudo nano /etc/sysctl.conf
15.1 vm.swappiness=10                    # add to the file's bottom
16. cat /proc/sys/vm/vfs_cache_pressure
17. sudo sysctl vm.vfs_cache_pressure=50
18. sudo nano /etc/sysctl.conf
18.1 vm.vfs_cache_pressure=50                    # add to the file's bottom

BACKEND install
XXXXX1. sudo snap install node --classic
1. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh
1.1 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
1.2 source ~/.bashrc
1.3 nvm list-remote
1.4 nvm install v20.16.0
1.5

2. nohup `NODE_OPTIONS="--max-old-space-size=2048" npx create-strapi-app@latest backend --quickstart --no-run --skip-cloud`
3. if error cd to the backend directory and continue install 'yarn install`
4. NODE_ENV=production yarn build
5. NODE_ENV=develop yarn develop
6. NODE_ENV=production yarn start
7. pm2 start npm --name myBackend -- run start
8. pm2 restart myBackend

FRONTEND install
1. npx create-next-app@latest frontend --skip-cloud
2. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
3. nvm install 20.16.0
4. sudo apt install yarn
5. sudo apt install nginx
6. sudo nano /etc/nginx/sites-available/default
7. sudo nginx -t
8. sudo service nginx restart
9. sudo snap install core; sudo snap refresh core
10. sudo apt remove certbot
11. sudo snap install --classic certbot
12. sudo ln -s /snap/bin/certbot /usr/bin/certbot
13. sudo certbot --nginx -d app.example.com 
14. sudo systemctl status snap.certbot.renew.service
15. sudo certbot renew --dry-run
16. sudo npm install -g pm2
17. pm2 start app.js --name=my-running-server-name
18. pm2 list
19. pm2 save
19. pm2 startup
18. pm2 delete [id]
19. pm2 kill

>> minikube --extra-config=kubeadm.ignore-preflight-errors=NumCPU --force --cpus=1 start

CHATWOOT
1. wget https://get.chatwoot.app/linux/install.sh
2. chmod +x install.sh
3. ./install.sh --install
4. sudo -i -u chatwoot
5. cd chatwoot
6. nano .env
6. FRONTEND_URL='https://chat.tutorbot.ca'
7. sudo systemctl restart chatwoot.target
