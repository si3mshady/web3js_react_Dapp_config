//Contractbasedonhttps://docs.openzeppelin.com/contracts/3.x/erc721
//SPDX-License-Identifier:MIT
pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ElNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address[16] public adopters;    


    constructor() public ERC721("CodeNFT", "CODENFT") {}

    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (
            // onlyOwner
            uint256
        )
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }






}
