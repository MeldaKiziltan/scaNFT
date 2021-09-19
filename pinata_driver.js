const pinataSDK = require('/Users/shabana/node_modules/@pinata/sdk');
const pinata = pinataSDK('877ae951bf1596ff167b', '541a0d30041eeb1e3fc7d65a11215bbff08cd791f358b80cf85b747636447ef1');
var IPFS;

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
});
function setIFSP (IpfsHash)
{
    IPFS = IpfsHash;
}
const fs = require('fs');
const readableStreamForFile = fs.createReadStream('/Users/shabana/Downloads/fruits_baskets_play.png');
const options = {
    pinataMetadata: {
        name: "Fruits Basket",
        description: 'Play',
    },
    pinataOptions: {
        cidVersion: 0
    }
};
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //handle results here
    return setIFSP( String(result.IpfsHash));
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