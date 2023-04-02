import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeibhyjnvm22x7z46pal25cnq3ch6fv6vjs3jhhlc3ry5uha5dujjjq", // HTML blog example
    nftId: [
      "0x29dbf2301349bf9031942db013c8b81e6bbcea66e436f844b46f5b8d2a95ae96",
    ], // You need to own 'GM #1' to unlock this.
  },
  {
    cid: "bafybeibhyjnvm22x7z46pal25cnq3ch6fv6vjs3jhhlc3ry5uha5dujjjq", // MP4 video example
    nftId: [
      "0x29dbf2301349bf9031942db013c8b81e6bbcea66e436f844b46f5b8d2a95ae96",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },
];

export { unlockables };
