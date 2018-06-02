/*
  Example
*/
const Bridge = artifacts.require('Bridge')

module.exports = async (deployer) => {

  /*
    Setup these parameters before deploy
  */
  const minimalGoal = 1
  const hardCap = 1
  const tokenAddress = "0x2A22e5cCA00a3D63308fa39f29202eB1b39eEf52"

  if (minimalGoal == 0 || hardCap == 0) {
    throw new Error('Cannot deploy contract with empty arguments.')
  }

  await deployer.deploy(Bridge, minimalGoal, hardCap, tokenAddress)
}
