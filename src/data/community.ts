export const groupUrl = "https://www.facebook.com/groups/highlevelbangladesh";
export const albumUrl =
  "https://www.playbook.com/s/ghlprojects/QpYamYiVaSVjLdKCfJoqWhuU";

export interface Member {
  slug: string;
  name: string;
  role: string;
  about: string;
  photo?: string;
  alt?: string;
  focus?: string;
  sample?: boolean;
  links: { label: string; url: string }[];
}

// Add a profile only when its name, photo, role and links are confirmed.
export const members: Member[] = [
  {
    slug: "mehedi-sharif",
    name: "Mehedi Sharif",
    role: "Chapter leader",
    about:
      "HighLevel Certified Admin and the chapter leader for HighLevel Bangladesh. Organises our local meetups.",
    photo: "mehedi-portrait",
    alt: "Mehedi Sharif speaking at the GHL Bangladesh meetup",
    focus: "46% center",
    links: [
      {
        label: "Facebook",
        url: "https://www.facebook.com/mehedi.sharif.titas",
      },
      { label: "Website", url: "https://mehedisharif.com" },
    ],
  },
  {
    slug: "shariful-islam",
    name: "Shariful Islam",
    role: "Co-organiser",
    about: "Co-organised GHL Meetup Bangladesh 2026 with Mehedi Sharif.",
    photo: "dsc08543",
    alt: "Shariful Islam speaking into a microphone at the GHL Bangladesh meetup",
    focus: "62% center",
    links: [
      { label: "Facebook", url: "https://www.facebook.com/vidmshariful" },
    ],
  },
];

// These are visibly labelled placeholders, not community member profiles.
export const sampleMembers: Member[] = Array.from(
  { length: 18 },
  (_, index) => ({
    slug: `sample-member-${index + 1}`,
    name: "Member name",
    role: "Role",
    about: "A sentence or two about what this member does.",
    sample: true,
    links: [],
  }),
);

export const resources = [
  {
    number: "01",
    type: "GET UNSTUCK",
    title: "HighLevel Help Center",
    description: "Find step-by-step answers for the tools you use every day.",
    url: "https://help.gohighlevel.com/",
  },
  {
    number: "02",
    type: "EXPLORE THE PLATFORM",
    title: "Discover HighLevel",
    description: "Explore the platform and find what fits your business.",
    url: "https://www.gohighlevel.com/",
  },
  {
    number: "03",
    type: "BUILD YOUR SKILLS",
    title: "HighLevel Certification",
    description: "Explore structured learning and certification opportunities.",
    url: "https://www.gohighlevel.com/certifications",
  },
  {
    number: "04",
    type: "STAY IN THE LOOP",
    title: "Product Updates",
    description: "Keep up with new features, improvements, and releases.",
    url: "https://ideas.gohighlevel.com/changelog",
  },
];
export const photos = [
  {
    name: "meetup",
    alt: "GHL Bangladesh meetup attendees gathered for a group photograph",
    caption: "The HighLevel Bangladesh community.",
  },
  {
    name: "conversations",
    alt: "Meetup attendees sitting together and exchanging ideas",
    caption: "Members talking together at the meetup.",
  },
  {
    name: "speaker",
    alt: "A speaker sharing ideas with the GHL Bangladesh meetup audience",
    caption: "A presentation at the Bangladesh meetup.",
  },
  {
    name: "building",
    alt: "A GHL Bangladesh attendee working on a laptop",
    caption: "An attendee working on a laptop.",
  },
  {
    name: "workshop",
    alt: "An attendee presenting alongside a projected screen at the meetup",
    caption: "A session with a projected presentation.",
  },
  {
    name: "dsc08436",
    alt: "Bangladesh Parliament building beyond green trees in Dhaka",
    caption: "A view toward the Bangladesh Parliament building.",
  },
  {
    name: "dsc08687",
    alt: "GHL Bangladesh meetup members gathered in front of the event banner",
    caption: "Together at the GHL Bangladesh meetup.",
  },
  {
    name: "dsc08636",
    alt: "Two meetup attendees reviewing a laptop together beside the GHL Bangladesh banner",
    caption: "Working through ideas together.",
  },
  {
    name: "dsc08567",
    alt: "A speaker addressing meetup attendees in front of a projected screen as an audience member raises a hand",
    caption: "Questions and conversation during a meetup session.",
  },
  {
    name: "dsc08546",
    alt: "Meetup attendees listening to a session, with an attendee holding a phone",
    caption: "Listening to the discussion.",
  },
  {
    name: "dsc08543",
    alt: "A meetup speaker holding a microphone in front of a projected presentation",
    caption: "Sharing ideas with the room.",
  },
  {
    name: "dsc08517",
    alt: "Rows of attendees seated in the GHL Bangladesh meetup venue",
    caption: "The meetup in session.",
  },
  {
    name: "dsc08501",
    alt: "GHL Bangladesh attendees gathered in rows of chairs beside the purple meetup banner",
    caption: "The community gathered at the meetup venue.",
  },
  {
    name: "dsc08489",
    alt: "Five attendees posing together in front of the GHL Bangladesh meetup banner",
    caption: "A photo together by the event banner.",
  },
  {
    name: "dsc08463",
    alt: "Three meetup attendees sitting together in a small group",
    caption: "A conversation at the meetup.",
  },
  {
    name: "dsc08408",
    alt: "Three attendees smiling and posing while seated at the meetup",
    caption: "Faces from the meetup.",
  },
  {
    name: "dsc08339",
    alt: "Meetup attendees seen from behind facing a speaker and projected presentation",
    caption: "Following a meetup session.",
  },
  {
    name: "dsc08278",
    alt: "Attendees seated in the meetup venue among rows of white chairs",
    caption: "A moment in the meetup audience.",
  },
  {
    name: "dsc08260",
    alt: "Three seated meetup attendees talking together with other small groups behind them",
    caption: "Conversations around the meetup room.",
  },
  {
    name: "dsc08237",
    alt: "A GHL Bangladesh meetup attendee working at an open laptop",
    caption: "Working at the meetup.",
  },
];
// Events on the homepage. Facts come from docs/redesign.md; update `nextEvent`
// once the date and venue of the next meetup are confirmed.
export const lastEvent = {
  name: "GHL Meetup Bangladesh 2026",
  date: "2026-06-11",
  dateLabel: "11 June 2026",
  summary:
    "An unofficial, community-driven meetup: GHL users in one room, asking questions and sharing what was actually working for them.",
  organisers: "Co-organised by Mehedi Sharif and Shariful Islam",
  galleryUrl: "/events/meetup-2026",
  // group photo shown on the event card (one of the gallery photos above)
  photo: "meetup",
};
export const nextEvent = {
  dateLabel: "Date to be announced",
  place: "Bangladesh",
  title: "Your next local connection starts here.",
  summary:
    "Details of the next Bangladesh chapter meetup will be shared here once confirmed.",
};
// Volunteers page: roles volunteers commonly take on at community meetups
// (based on public volunteer pages such as WordCamp's). They are examples,
// not confirmed GHL Bangladesh roles; replace them once roles are announced.
// `photo` is a gallery photo from the 2026 meetup shown next to the role; its
// own caption is used, so the page does not claim the people are volunteers.
export const volunteerRoles = [
  {
    title: "Welcome & check-in",
    description:
      "Greet people at the door, help with check-in and point the way.",
    when: "On the day",
    photo: "dsc08687",
  },
  {
    title: "Setup & logistics",
    description:
      "Arrange chairs, signs and screens before the start, and tidy up after.",
    when: "On the day",
    photo: "dsc08278",
  },
  {
    title: "Photos & video",
    description:
      "Capture the talks and the conversations around them. A phone camera is often enough.",
    when: "On the day",
    photo: "dsc08489",
  },
  {
    title: "Social media",
    description:
      "Share live updates and photos, and help put the recap together afterwards.",
    when: "During & after",
    photo: "dsc08546",
  },
  {
    title: "Session support",
    description: "Help speakers with microphones, slides and timing.",
    when: "On the day",
    photo: "dsc08543",
  },
  {
    title: "Content & design",
    description:
      "Write announcements and make simple graphics for upcoming meetups.",
    when: "Before meetups",
    photo: "dsc08237",
  },
];
