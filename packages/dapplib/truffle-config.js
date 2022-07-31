require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind artwork grace deposit surge thing'; 
let testAccounts = [
"0xbc6da6a4c609da04f19228ffa035b6e1ee892ea31c9c6a7454d000fc08279cb2",
"0x5326e148deb6dbd18fecc27b264471fa8ea694374c2d5e16c1e8afc2a172f87c",
"0xed257c806c7787cb758ea573b72d3ad987f3c63859015db95fc61d4ce26553af",
"0xa4a26b94964aa2630dac77b27cef76126d4855dea2f9db0139843a48e3bb904d",
"0x0603541e48960d624eadcaec7e8666b71743240c5e6d52e861decdc35a437d6b",
"0x8ee690cd43170cba84a6fe852d7e8c4ef47df731fe66bfb016626518a8ef6321",
"0xee25eeed4601044ea1b45344adc3ac2a21d6c703bae28bb3c4abd964f6d4439c",
"0xe48a5155c79b837abff8b51b702d1a910f25fd27efbba43d6ac0f9b33cf77453",
"0x15348a438d420d8831cf827578d0d839533b9f7bc563bf6e830f03107b75c5f2",
"0x8af41a753b77ccad8a6582dcdb653a7179ddfdb694ce82d87d1eef60a3862614"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


