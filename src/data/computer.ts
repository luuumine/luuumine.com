export type SpecRow = {
  key: string;
  value: string | string[];
};

export type Section = {
  title: string;
  specs: SpecRow[];
  note?: string;
};

export const sections: Section[] = [
  {
    title: "desktop",
    specs: [
      { key: "machine", value: "Custom Build - luminix" },
      { key: "os", value: "NixOS" },
      { key: "cpu", value: "AMD Ryzen 7 9800X3D" },
      { key: "gpu", value: "AMD Radeon RX 9070 XT" },
      { key: "ram", value: "32GB DDR5 6000MHz" },
      { key: "motherboard", value: "Gigabyte X870E Aorus Elite" },
      { key: "case", value: "Corsair 3500X" },
      {
        key: "storage",
        value: ["2x 2TB NVMe (Linux)", "256GB NVMe (Windows)"],
      },
      {
        key: "displays",
        value: ['27" 1440p 240Hz OLED (Main)', '24" 1080p 180Hz (Secondary)'],
      },
      { key: "wm", value: "Hyprland" },
    ],
    note: "my daily driver. for basically everything.",
  },
  {
    title: "server",
    specs: [
      { key: "machine", value: "HP ProDesk 405 G4 Mini - luminode" },
      { key: "os", value: "Arch Linux" },
      { key: "cpu", value: "AMD Athlon PRO 200GE" },
      { key: "gpu", value: "Radeon Vega 3 (Integrated)" },
      { key: "ram", value: "16GB DDR4" },
      { key: "storage", value: "500GB NVMe" },
    ],
    note: "home server. it runs 24/7 with services like pihole, jellyfin, and this website.",
  },
  {
    title: "laptop",
    specs: [
      { key: "machine", value: "MSI Delta 15 AE5FK - luminarch" },
      { key: "os", value: "Arch Linux" },
      { key: "cpu", value: "AMD Ryzen 9 5900HX" },
      { key: "gpu", value: "AMD Radeon RX 6700M" },
      { key: "ram", value: "16GB DDR4" },
      { key: "storage", value: "1TB NVMe" },
      { key: "display", value: '15.6" 1920x1080 @ 240Hz' },
      { key: "wm", value: "Hyprland" },
    ],
    note: "mostly used when traveling.",
  },
  {
    title: "peripherals",
    specs: [
      { key: "mouse", value: "Razer DeathAdder Essential (White)" },
      { key: "keyboard", value: "Wooting 60HE+" },
      { key: "headphones", value: "Razer Blackshark V2" },
      { key: "wrist rest", value: "Logitech G715 cloud palm rest" },
    ],
  },
];
