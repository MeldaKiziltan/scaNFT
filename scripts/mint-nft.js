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

  //The link to the nft metadata
  mintNFT("https://gateway.pinata.cloud/ipfs/QmUH2raovQ7pxWv534fSEPpNW9XPQjCqXQUWeP9KMyuxaW"); //current NFT: G5_Adapted, CID for the actually NFT