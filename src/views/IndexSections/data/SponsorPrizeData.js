import polygon from "assets/sponsor-logo/polygon.png";
import filecoin from "assets/sponsor-logo/filecoin.png";
import solana from "assets/sponsor-logo/solana.png";
import replit from "assets/sponsor-logo/replit.png";
import { Typography } from "@mui/material";

export const sponsorData = [
  {
    img: polygon,
    body: (
      <>
        <Typography sx={{mt: -0.4}}>
          <a href={"https://polygon.technology"}>Polygon</a> is a protocol and a
          framework for building and connecting Ethereum-compatible blockchain
          networks.
        </Typography>
        <Typography>
          Prizes up for grabs:
          <ul style={{ "list-style-type": "circle" }}>
            <li style={{ color: "#D2D2D2" }}>
              ₹10,000 for the best hack built on Ethereum, or
            </li>
            <li style={{ color: "#D2D2D2" }}>
              ₹15,000 for the best hack built on Ethereum + Polygon,
            </li>
            <li style={{ color: "#D2D2D2" }}>
              Eligibility to apply for internship/full-time roles and seed
              funding of up to 5,000 USD for winners!
            </li>
          </ul>
        </Typography>
        <Typography>
          Read about the bounty details and find code templates for Polygon
          here:
        </Typography>
      </>
    ),
    link: "https://nsb.dev/polygon-bounty",
    style: { width: "80%", margin: "auto", my: 4 },
  },
  {
    img: filecoin,
    body: (
      <>
        <Typography sx={{mt: -0.7}}>
          <a href={"https://protocol.ai/"}>Protocol Labs</a> is an open-source
          R&D lab. They build protocols, tools, and services to radically
          improve the internet. Their products serve thousands of organizations
          and millions of people.
        </Typography>
        <Typography>
          <ul style={{ "list-style-type": "circle" }}>
            <li style={{ color: "#D2D2D2" }}>
              <a href={"https://ipfs.io/"}>IPFS</a>: IPFS powers the Distributed
              Web. It's a peer-to-peer hypermedia protocol designed to preserve
              and grow humanity's knowledge by making the web upgradeable,
              resilient, and more open.
            </li>
            <li style={{ color: "#D2D2D2" }}>
              <a href={"https://filecoin.io/"}>Filecoin</a>: An open-source
              cloud storage marketplace, protocol, and cryptocurrency.
            </li>
          </ul>
        </Typography>
        <Typography>
          Prizes up for grabs:
          <ul style={{ "list-style-type": "circle" }}>
            <li style={{ color: "#D2D2D2" }}>
              ₹20000 for best use of IPFS and/or Filecoin
            </li>
          </ul>
        </Typography>
        <Typography>
          Read about the bounty details and find code templates for Filecoin
          here:
        </Typography>
      </>
    ),
    link: "https://nsb.dev/filecoin-bounty",
    style: { width: "80%", margin: "auto", my: 3 },
  },
  {
    img: solana,
    body: (
      <>
        <Typography>
          <a href={"https://solana.com"}>Solana</a> is the fastest blockchain in
          the world and the fastest growing ecosystem in crypto, with thousands
          of projects spanning DeFi, NFTs, Web3 and more.
        </Typography>
        <Typography>
          Prizes up for grabs:
          <ul style={{ "list-style-type": "circle" }}>
            <li style={{ color: "#D2D2D2" }}>
              young gun - $USDC 100 for the best project beginners just starting
              out on Solana and/or
            </li>
            <li style={{ color: "#D2D2D2" }}>
              rising teknoking - $USDC 250 for the best project that goes into
              depth, demonstrating higher-order code and/or
            </li>
            <li style={{ color: "#D2D2D2" }}>
              master glasseater - $USDC 500 for the best advanced project that
              is almost ready for full-time development.
            </li>
          </ul>
        </Typography>
        <Typography>
          Read about the bounty details and find code templates for Solana here:
        </Typography>
      </>
    ),
    link: "https://nsb.dev/solana-bounty",
    style: { width: "80%", margin: "auto", my: 5 },
  },
  {
    img: replit,
    body: (
      <>
        <Typography sx={{mt: 0.8}}>
          <a href={"https://replit.com/"}>Replit</a> is the best platform for
          quickly starting, sharing, and developing projects in any programming
          language, right from your browser.
        </Typography>
        <Typography>
          <ul style={{ "list-style-type": "circle" }}>
            <li style={{ color: "#D2D2D2" }}>
              5,000 INR to winning project of the hackathon (must be deployed on
              Replit)
            </li>
            <li style={{ color: "#D2D2D2" }}>
              Replit schwags to 5 eligible submissions deployed on Replit.
            </li>
            <li style={{ color: "#D2D2D2" }}>
              Eligibility to apply for internship/full-time roles at Replit
            </li>
          </ul>
        </Typography>
        <Typography>
          Read more about the bounty details for Replit here:
        </Typography>
      </>
    ),
    link: "https://nsb.dev/replit-bounty",
    style: { width: "80%", margin: "auto", my: 2 },
  },
];
