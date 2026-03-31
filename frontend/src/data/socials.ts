export type SocialVisual =
  | { kind: "icon"; value: string }
  | { kind: "char"; value: string };

export type SocialItem = {
  id: string;
  label: string;
  username: string;
  visual: SocialVisual;
  path: string;
  url: string;
  hasLink: boolean;
  color: string;
};

export const socials: SocialItem[] = [
  {
    id: "email",
    label: "email",
    username: "hello [at] luuumine [dot] com",
    visual: { kind: "char", value: "@" },
    path: "email",
    url: "hello@luuumine.com",
    hasLink: false,
    color: "mediumvioletred",
  },
  {
    id: "github",
    label: "github",
    username: "luuumine",
    visual: { kind: "icon", value: "simple-icons:github" },
    path: "github",
    url: "https://github.com/luuumine",
    hasLink: true,
    color: "#000000",
  },
  {
    id: "discord",
    label: "discord",
    username: "luuumine",
    visual: { kind: "icon", value: "simple-icons:discord" },
    path: "discord",
    url: "https://discord.com/users/342580083162087425",
    hasLink: true,
    color: "#5865F2",
  },
  {
    id: "signal",
    label: "signal",
    username: "luuumine.428",
    visual: { kind: "icon", value: "simple-icons:signal" },
    path: "signal",
    url: "https://signal.me/#eu/KHAXJodtrJspzly3TI77e2q8nGleCOSeubR0I_X7KbMcTLFebjRJBZaS6Rdue1Y2",
    hasLink: true,
    color: "#3A76F0",
  },
  {
    id: "telegram",
    label: "telegram",
    username: "telumine",
    visual: { kind: "icon", value: "simple-icons:telegram" },
    path: "telegram",
    url: "https://t.me/telumine",
    hasLink: true,
    color: "#26A5E4",
  },
  {
    id: "spotify",
    label: "spotify",
    username: "Lumine",
    visual: { kind: "icon", value: "simple-icons:spotify" },
    path: "spotify",
    url: "https://open.spotify.com/user/31wdabke5p37rfvwkwpyijsm2ywq",
    hasLink: true,
    color: "#1DB964",
  },
  {
    id: "steam",
    label: "steam",
    username: "Luuumine_",
    visual: { kind: "icon", value: "simple-icons:steam" },
    path: "steam",
    url: "https://steamcommunity.com/id/Luuumine_",
    hasLink: true,
    color: "#061E52",
  },
  {
    id: "anilist",
    label: "anilist",
    username: "luuumine",
    visual: { kind: "icon", value: "simple-icons:anilist" },
    path: "anilist",
    url: "https://anilist.co/user/160300",
    hasLink: true,
    color: "#C063FF",
  },
  {
    id: "mangacollec",
    label: "mangacollec",
    username: "luuumine",
    visual: { kind: "icon", value: "simple-icons:mangacollec" },
    path: "mangacollec",
    url: "https://www.mangacollec.com/user/luuumine/collection",
    hasLink: true,
    color: "#FC3117",
  },
];
