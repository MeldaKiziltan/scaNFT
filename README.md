# scaNFT

Welcome to scaNFT! We automate the process of minting an NFT to a click of a button!


## How to use:

1. Set your object in the middle of the turntable mount
2. Press a button!


## What's going on in the background?

Once the button is pressed, the **RasberryPi** instructs the table to move and the connected **RasberryPi camera** takes a series of 50 photos from all different angles. These images then get run through **3DF Zephyr** which then connects them all into a 3D model. This file is then uploaded to **Pinata** (using the Pinata SDK and API), a NFT token storage location, and then various background files are created and uploaded until your NFT is finally minted!


## Technical Workflow

1. Place item on rotating table
2. Press button
3. RasberryPi performs its tasks, rotating the table and taking pictures
4. Pictures are uploaded to 3DF Zephyr and meshed to create a 3D image
5. This image is saved at a `.glb` file which is them uploaded to Pinata via the Pinata SDK
6. The CID from the uploaded file is taken and put in the `nft_metadata.json` file
7. `nft_metadata.json` is then uploaded to Pinata and the CID is taken once again
8. Placed in `mint-nft.js`
9. Run `node scripts/mint-nft.js` and your NFT is minted to Eretheum!