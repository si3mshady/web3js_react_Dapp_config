async function main() {
    const ElNFT = await ethers.getContractFactory("ElNFT");
    
    // Start deployment, returning a promise that resolves to a contract object
    const elNFT = await ElNFT.deploy();
    console.log("Contract deployed to address:", elNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });