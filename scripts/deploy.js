const {ethers} =require("hardhat");

async function main(){
    const viper = await ethers.getContractFactory("viper");
    const deployedvipercontract = await vipercontract.deploy(1);
    await deployedwhitelistcontract.deployed();
    console.log("whitelist contract address", deployedwhitelistcontract.address);
     
}
main()
  .then(()=> process.exit(0))
  .catch((error)=>{
      console.error(error);
      process.exit(1);
  });
