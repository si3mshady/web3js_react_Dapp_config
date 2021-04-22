const Web3 = require('web3')

var fs = require('fs');
var jsonFile = __dirname + '/artifacts/contracts/ElNFT.sol/ElNFT.json';
var parsed= JSON.parse(fs.readFileSync(jsonFile));
var abi = parsed.abi;
let ropsen_url = "https://ropsten.infura.io/v3/8f1d8783d38e46f484d5c9f026f5ac95"
let web3 = new Web3(ropsen_url)



var contract_address = "0x09aa12e09c6c31113e62fdf3bb940b3e0e5d34e9"

var YourContract= new web3.eth.Contract(abi, contract_address);

const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      // You should disable this button while the request is pending!
      await windows.ethereum.request({ method: 'eth_requestAccounts' });
    } catch (error) {
      console.error(error);
    }
  };

onClickConnect()
// console.log(YourContract)