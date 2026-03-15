// Utility file to get abi encoded constructor arguments

import { ethers } from "hardhat";

async function getTokenArgs() {
    const args = [
        "MarketToken",
        "MKT",
        1000000
    ];
    const SimpleToken = await ethers.getContractFactory("contracts/SimpleToken.sol:SimpleToken");
    const encoded = SimpleToken.interface.encodeDeploy(args);
    return encoded;

}

async function getMarketplaceArgs() {
    const args = [
        "0x42f2B901E70339C06AdB15F71982b862222d6A5d"
    ];
    const NFTMarketplace = await ethers.getContractFactory("contracts/NFTMarketplace.sol:NFTMarketplace");
    const encoded = NFTMarketplace.interface.encodeDeploy(args);
    return encoded;
}

// Only run if executed directly (not imported)
if (require.main === module) {

    getTokenArgs().then(tokenArgs => {
        console.log("Token args:", tokenArgs);
    });
    getMarketplaceArgs().then(marketplaceArgs => {
        console.log("Marketplace args:", marketplaceArgs);
    });
}
  