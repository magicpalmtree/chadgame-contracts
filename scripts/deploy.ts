import { ethers } from "hardhat";

async function main() {

  const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const operatorAddress = "0xF815f417f326578D841025fA5e5f968AAD972439";
  const rewardTokenAddress = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
  const awardHolderAddress = "0xd2282C37C3D9b3b3199180fb9a115f552cAB9381";
 
  const FatToken = await ethers.getContractFactory("FatToken");
  const fatToken = await FatToken.deploy(routerAddress, operatorAddress, rewardTokenAddress, awardHolderAddress);
  await fatToken.deployed();

  console.log(fatToken.address);
}

main();