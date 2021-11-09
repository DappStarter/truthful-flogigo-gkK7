require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remain snow hunt deputy flush team'; 
let testAccounts = [
"0xc511f6dc728194c5ca9594579352fce2d9985a1d2635267e185b45e8af842cda",
"0x6fa3a151fd5d3c6df181e217e09fa5415c18d86af406c30a49b4313df68eb1a4",
"0x5b9c15bf33c5c32bd29691262adbd161322d1dcdd05f3e7867e10d79e62b0bdb",
"0x48c2e70269b903249def843c2238877aaab8f5df27b163578e68dd116ac02ce6",
"0xa121b42ab273798a3c4036c00ea71757c507ebaccb92d6ca45af4d68a7b27ea7",
"0x09560780312e3e6a2e6b4e787d6eddd5978d1a4710ce509f518cd1cef14fcbc5",
"0x70276d66ae31bcb620c41a33a18acdd1435d2a7dbd46cf250bfb6f14fd8ba283",
"0x282ab707fe3951375e2174cc05dd52a94da4e3980c7db5bc3f27bf1f7210974f",
"0xa3034ec5770447146a724e29b00a52c4d1b59daa475e6b88c245fae88fe5e6a6",
"0x8076a8e82a775f813a15d87b8badbccd096ab80c9681edc0c9f9435093597a7b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

