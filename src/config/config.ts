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
    cid: "bafybeihx2d3lrjtcuwzdywb7tm7uaff5yxse7xrgeq5prdskdruqvy4lvy", // HTML blog example
    nftId: [
      "0xa936060651b4d197e72ae8f5c99df01436aa99bc1f3632d3e572a43e8e435881",
    ], // You need to own 'GM #1' to unlock this.
  },
  {
    cid: "bafybeihtzdwvsokp2p3wunor2fvybkunetdcypbmiat4gwp4ebogx4aiem", // MP4 video example
    nftId: [
      "0xa936060651b4d197e72ae8f5c99df01436aa99bc1f3632d3e572a43e8e435881",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeia5df2n23zwggp43vy7tsuwizh4cfqjzkql2fcoymrauvnj6fjyri", // MP4 video example
    nftId: [
      "0xa936060651b4d197e72ae8f5c99df01436aa99bc1f3632d3e572a43e8e435881",
    ], // You need to own 'GM #2' to unlock this.
  },
  {
    cid: "bafybeiejnxrpxb5avhx7r2slbcbetmjo2ii4v6ablwowpfdqg2xmekzlly", // MP4 video example
    nftId: [
      "0xa936060651b4d197e72ae8f5c99df01436aa99bc1f3632d3e572a43e8e435881",
    ], // You need to own 'GM #2' to unlock this.
  },
];

export { unlockables };
