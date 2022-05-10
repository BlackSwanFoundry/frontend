// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BasicToken is ERC20, Ownable {

  uint8 private _decimals = 18;

  constructor(string memory name, string memory symbol, uint8 decimals_, uint256 supply) ERC20(name,symbol) {
    if(decimals_ > 0){
      _decimals = decimals_;
    }

    if(supply > 0){
      _mint(_msgSender(),supply);
    }
  }

  function decimals() public view override returns (uint8) {
        return _decimals;
  }
}
