export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Ethan Carter",
    role: "Creative Director",
    image: "/images/about/team-1.png",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Sophia Bennett",
    role: "Marketing Manager",
    image: "/images/about/team-2.png",
    socials: {
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Liam Anderson",
    role: "Product Designer",
    image: "/images/about/team-3.png",
    socials: {
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Olivia Turner",
    role: "UI/UX Specialist",
    image: "/images/about/team-4.png",
    socials: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    name: "Noah Williams",
    role: "Frontend Engineer",
    image: "/images/about/team-5.png",
    socials: {
      twitter: "#",
      linkedin: "#",
    },
  },
];
