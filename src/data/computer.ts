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
		title: "laptop",
		specs: [
			{ key: "machine", value: "MSI Delta 15 AE5FK" },
			{ key: "os", value: ["Arch Linux", "Windows 11"] },
			{ key: "cpu", value: "AMD Ryzen 9 5900HX" },
			{ key: "gpu", value: "AMD Radeon RX 6700M" },
			{ key: "ram", value: "16GB DDR4" },
			{ key: "storage", value: ["1 TB NVMe (Linux)", "256 GB NVMe (Windows)"] },
			{ key: "display", value: "1920x1080 @ 240Hz" },
			{ key: "wm", value: "Hyprland" },
		],
		note: "daily driver. i mainly use linux but i have windows installed for locked software.",
	},
	{
		title: "server",
		specs: [
			{ key: "machine", value: "HP Prodesk 405 G4" },
			{ key: "os", value: "Arch Linux" },
			{ key: "cpu", value: "AMD Pro " },
			{ key: "ram", value: "16GB DDR4" },
			{ key: "storage", value: "500 GB NVMe" },
		],
		note: "home server. it runs 24/7 with services like pihole, jellyfin, and this website.",
	},
	{
		title: "peripherals",
		specs: [
			{ key: "mouse", value: "Razer Mamba Elite" },
			{ key: "keyboard", value: "Wooting 60HE+" },
			{ key: "wrist rest", value: "Logitech G715 cloud palm rest" },
			{ key: "headphones", value: "Razer Blackshark V2" },
		],
	},
];
