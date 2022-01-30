import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://thirsty-hugle-3daa6e.netlify.app//contact-us",
      },
      {
        label: "Blog",
        href: "https://buddybio.com/",
      },
      {
        label: "Community",
        href: "https://thirsty-hugle-3daa6e.netlify.app/contact-us/telegram",
      },
      {
        label: "Swap Crypto",
        href: "https://thirsty-hugle-3daa6e.netlify.app/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Swap Crypto Wallet",
        href: "https://play.google.com/store/apps/details?id=com.swapcrypto",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer Support",
        href: "https://t.me/swapcryptosupport",
      },
      {
        label: "Troubleshooting",
        href: "https://thirsty-hugle-3daa6e.netlify.app/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://thirsty-hugle-3daa6e.netlify.app/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Buddybio Social Media",
        href: "https://buddybio.com/",
      },
      {
        label: "Documentation",
        href: "https://thirsty-hugle-3daa6e.netlify.app/doc",
      },
      {
        label: "Bug Bounty",
        href: "https://t.me/swapcryptosupport",
      },
      {
        label: "Audits",
        href: "https://thirsty-hugle-3daa6e.netlify.app/doc",
      },
      {
        label: "Careers",
        href: "https://thirsty-hugle-3daa6e.netlify.app/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/swapcrypto2021",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "中文",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Italiano",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "русский",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Türkiye",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Português",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Español",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "日本語",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Français",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Datch",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Filipino",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/swapcrytonow",
      },
      {
        label: "Announcements",
        href: "https://t.me/swapcrytonow",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/pancakeswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/swapcrypto.ca",
  },
  {
    label: "FreedomShare Live",
    icon: "Github",
    href: "https://freedomshare.net/",
  },
  {
    label: "Android Wallet",
    icon: "Discord",
    href: "https://play.google.com/store/apps/details?id=com.swapcrypto",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
