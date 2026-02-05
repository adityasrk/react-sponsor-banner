import SponsorBanner from './components/SponsorBanner/SponsorBanner';

import adobe from './assets/adobe.png';
import amazon from './assets/amazon.png';
import amd from './assets/amd.png';
import chatgpt from './assets/chatgpt.png';
import discord from './assets/discord.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';
import intel from './assets/intel.png';
import microsoft from './assets/microsoft.png';
import slack from './assets/slack.png';


function App() {

const sponsors = [
  { src: adobe, url: "https://www.adobe.com/", alt: "Adobe", tier: "platinum" },
  { src: discord,  url: "https://discord.com/", alt: "Discord", tier: "platinum" },
  { src: microsoft, url: "https://www.microsoft.com/", alt: "Microsoft", tier: "platinum" },
  { src: amazon, url: "https://www.amazon.com/", alt: "Amazon", tier: "gold" },
  { src: google, url: "https://www.google.com/", alt: "Google", tier: "gold" },
  { src: slack, url: "https://www.slack.com/", alt: "Slack", tier: "gold" },
  { src: amd, url: "https://www.amd.com/", alt: "AMD", tier: "silver" },
  { src: instagram, url: "https://www.instagram.com/", alt: "Instagram", tier: "silver" },
  { src: chatgpt, url: "https://chat.openai.com/", alt: "ChatGPT", tier: "bronze" },
  { src: intel, url: "https://www.intel.com/", alt: "Intel", tier: "bronze" },
];

const Grid = {
  args: {
    backgroundColor: "#f7f7f7", // optional
    columns: sponsors.length,
    fontFamily: "Roboto, Helvetica, Arial, sans-serif", // optional
    fontSize: 14, // optional
    gap: 24, // optional
    layout: "grid",
    maxHeight: "fit-content",
    sortByTier: true,
    sponsors,
    showSponsorNames: false, // optional
    showTierTabs: true, // optional
    tierOrder: ["platinum", "gold", "silver", "bronze"]
  },
};

const Marquee = {
  args: {
    backgroundColor: "#fafafa", // optional
    direction: "left", // optional
    fontFamily: "Roboto, Helvetica, Arial, sans-serif", // optional
    fontSize: 14, // optional
    gap: 80, // optional
    layout: "marquee",
    maxHeight: "fit-content",
    separator: "|", // optional
    speed: 50, // optional
    sponsors,
    showSponsorNames: true, // optional
    showTierLabels: true, // optional
    tierOrder: ["platinum", "gold", "silver", "bronze"],
  },
};

  return (
    <SponsorBanner
      {...Marquee.args} />
  );
}

export default App;
