
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Test {
  uint256 randNonce = 0;
  function randMod(uint256 modulus) external returns(uint256) {
    // increase nonce
    randNonce ++; 
    return uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, randNonce)));
  }
}