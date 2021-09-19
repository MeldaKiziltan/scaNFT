const pinataSDK = require('C:\\Users\\User\\node_modules\\@pinata\\sdk');
const pinata = pinataSDK('877ae951bf1596ff167b', '541a0d30041eeb1e3fc7d65a11215bbff08cd791f358b80cf85b747636447ef1');
var IPFS;


require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json"); //contract directory
const contractAddress = "0x4d3fc6783591a66f5e521393f1bce5a45b1ac222"; //wallet address
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
    const noncePromise = web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
    noncePromise.then((nonce) => {
        //the transaction
        const tx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 1999999987,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
        };

        return web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    }).then((signedTx) => {
  
      web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
          console.log("The hash of your transaction is: ", hash, "\nCheck Alchemy's Mempool to view the status of your transaction!"); 
        } else {
          console.log("Something went wrong when submitting your transaction:", err)
        }
      });
    }).catch((err) => {
      console.log("Promise failed:", err);
    });
  }


pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
function setIPFS (IpfsHash)
{
    IPFS = IpfsHash;
}
const fs = require('fs');
const readableStreamForFile = fs.createReadStream('C:\\Users\\User\\OneDrive - University of Waterloo\\Pictures\\Textured_mesh_2.glb');
const options = {
    pinataMetadata: {
        name: "GLB NFT",
        description: '3D Scan',
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    return setIPFS( String(result.IpfsHash));
    console.log(result);
    console.log(IPFS);
}).then( () => {
    const metadata = {
        image: ("https://gateway.pinata.cloud/" + IPFS),   
    };
    console.log(metadata.image);

    pinata.hashMetadata(IPFS, metadata).then((result) => {
        //handle results here
        console.log(result);
        mintNFT("https://gateway.pinata.cloud/ipfs/"+IPFS);
    }).catch((err) => {
        //handle error here
        console.log(err);
    });
    
}).catch((err) => {
    //handle error here
    console.log(err);
});

/*
pinata.hashMetadata(IPFS, metadata).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
const options = {
    pinataMetadata: {
        name: 'G5_Adapted.json',
        description: '3 Phase DC/AC Inverter for SVPWM',
        image: ('https://gateway.pinata.cloud/ipfs/QmUH2raovQ7pxWv534fSEPpNW9XPQjCqXQUWeP9KMyuxaW'),    
        keyvalues: {
            customKey: '100',
            customKey2: '3'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const body = options.pinataMetadata;

pinata.pinJSONToIPFS(body, options).then((result) => {
    //handle results here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
*/

console.log ("works");