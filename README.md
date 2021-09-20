<h1 align="center">
✨ HACK THE NORTH 2021 WINNER ✨
</h1>
  
# scaNFT
Welcome to scaNFT! We automate the process of minting an NFT to a click of a button! 	[Check out our Devpost here](https://devpost.com/software/scanft).
![Scanned Garlic](https://github.com/MeldaKiziltan/scaNFT/blob/main/Pictures/Polygon%20Garlic.png)

## Inspiration
We heard about NFTs only a few days ago and as the broke university students we are, we saw the hope that cryptocurrency sparks to pay off our tuition. Combining our team's skills, we were able to combine software and hardware to create an automated system to scan, upload, and mint NFTs.

## How to use:
1. Set your object in the middle of the turntable mount
2. Press a button!

## What's going on in the background?
Once the button is pressed, the **RasberryPi** instructs the table to move and the connected **RasberryPi camera** takes a series of 50 photos from all different angles. These images then get run through **3DF Zephyr** which then connects them all into a 3D model. This file is then uploaded to **Pinata** (using the **Pinata SDK** and **API**), a NFT token storage location, and then various background files are created and uploaded until your NFT is finally minted! The entire system is connected through the **Ethereum cryptocurrency**, **MetaMask** secure wallet, **Pinata FT** management, and **Alchemy** on the **Ropsten Network**.
![Hardware](https://github.com/MeldaKiziltan/scaNFT/blob/main/Pictures/hardware.jpg)

## Technical Workflow
1. Place item on rotating table
2. Press button
3. RasberryPi performs its tasks, rotating the table and taking pictures
4. Pictures are uploaded to 3DF Zephyr and meshed to create a 3D image
5. This image is saved as a `.glb` file which is them uploaded to Pinata via the Pinata SDK
6. The CID from the uploaded file is taken and put in the `nft_metadata.json` file
7. `nft_metadata.json` is then uploaded to Pinata and the CID is taken once again
8. Placed in `pinata-driver.js`
9. Run node `scripts/pinata-driver.js` and your NFT is minted to Ethereum!
10. (Optional) Add your NFT to your digital wallet in MetaMask.

## How we built it
We used Node.js, npm, JavaScript, Python, and 3DF Zephyr on the software end to create, process, and upload the NFT to Pinata. This will then mint the NFT for you automatically.
![Mempool Mined](https://github.com/MeldaKiziltan/scaNFT/blob/main/Pictures/Mempool%20Mined%20Small.png)

## Business Viability
NFT stands for non-fungible token. They are a unique digital token that cannot be copied authentically. NFTs are secure, protected, and traded via blockchain (Ethereum or other cryptocurrency) and can be purchased and resold via marketplaces. It's a rapidly growing sector, generating $2.5 billion+ this year, up from $13 million last year. NFTs are unique in the sense that every token can easily be authenticated and so fraudulent purchases and copied files are easily verified for the user. NFTs also bridge many different communities together. Some of them being artists, cryptocurrency enthusiasts, collectors, and normal people! It's a new way to financially support artists and for digital works to be verified as original copies - just like a Van Goh artwork would have a certificate of authentication with it. Even Jack Dorsey, CEO of Twitter, sold his very first tweet as an NFT for $2.9 million!

## Challenges we ran into
Our team had never worked with blockchain or computer vision, which made developing a project dependent on both a challenge. Combined with the time constraints and lack of knowledge, we had our work cut out for us. We had to become proficient in the creation and minting of NFTs as well as working with new hardware such as the RasberryPi camera and 2D to 3D image technology. Another challenge was simply free trials. To mesh and render a maximum of 50 photos gives us a decent and subpar quality to a fully professional render.

## Accomplishments that we're proud of
This entire project! It's been a huge feat of ours to accomplish this much in <24 hours. We figured out so many new technologies and languages in such a short time frame and well played to our strengths as a team.

## What we learned
So much! Everything we did here, we had never done before and had no idea how to do it before Hack the North. We learned about cryptocurrency, blockchain, NFT minting, 3D scanning and meshing and putting it all together!

## What's next for scaNFT
- Developing a true automation pipeline to completely automate the entire process
- Allow more personalization and ability to change users easily
- Contract option selection
- 3D Printing parts
- Adding prices to NFTs
- Creating a frontend for the user
