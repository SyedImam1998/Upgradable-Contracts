const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0xC451E95AEb1B99897d17516771EC0f963FE588a1';

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory('VendingMachineV3');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3);

  

  console.log("The current contract owner is: " + await upgraded.owner());
  const implementationAddress = await upgrades.erc1967.getImplementationAddress( proxyAddress);
  
  console.log('Implementation contract address: ' + implementationAddress);
  console.log('Upgraded VendingMachineV2 contract address: ' + upgraded.address);
}

main();