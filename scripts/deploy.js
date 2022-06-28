const {ethers} =require("hardhat");

async function main(){
    const whitelistcontract = await ethers.getContractFactory("whitelist");
    const deployedwhitelistcontract = await whitelistcontract.deploy(15);
    await deployedwhitelistcontract.deployed();
    console.log("whitelist contract address", deployedwhitelistcontract.address);
     
}
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
      console.error(error);
      process.exit(1);
  });
