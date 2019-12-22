1: Install React-Native and dependencies
https://www.christianengvall.se/install-react-native/

2: Clone the repo from VSTS (On local directory)
git init
git clone https://ecrew.visualstudio.com/ecrews/_git/ecrew_mobile
  
3: Install the dependencies
cd ecrew_mobile
yarn install
    select the correct version of React (16.2.0) if lock file has incorrect version

4: Start the app
yarn start

5: Run the app in ios simulator (This might take a while for first time)
react-native run-ios