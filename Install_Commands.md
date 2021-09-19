Before running this repo, you must perform the following:

1. Install Node.js and npm here: [Node.js](https://nodejs.org/en/download/)
2. Clone this repo
3. Open command prompt and navigate to the project directory
4. In the project directory, run `npm init`
5. Answer the questions as you like and press `Enter` to move onto the next until you get to end
6. In the project directory, run `npm install --save-dev hardhat`
7. In the project directory, run `npx hardhat` and use the arrow keys to select `Create an empty hardhat.config.js`
8. Navigate to the `Contracts` folder and run `npm install @openzeppelin/contracts@3.1.0-solc-0.7`
9. In the project directory, run `npm install dotenv --save`
10. In the project directory, run `npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"`
11. In the project directory, run `npx hardhat compile`
12. In the project directory, run `npx hardhat run scripts/deploy.js --network ropsten`
13. In the project directory, run `npm install @alch/alchemy-web3`
14. In the project directory, run `node scripts/mint-nft.js`

You should be done!