type GitHubClient = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  blog: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
};
type ProjLink = {
  title: string;
  link: string;
};
type ProjFeature = {
  text: string;
  tooltipText: string;
};
type ProjImage = {
  original: string;
  thumbnail: string;
};
type ProjectData = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  features: ProjFeature[];
  links: ProjLink[];
  images: ProjImage[];
};
type AchievementData = {
  title: string;
  description: string;
  images?: ProjImage[];
  links?: ProjLink[];
  thumbnailImage?: string;
  date: Date;
  projectId?: number;
};
type SkillData = {
  icon: string;
  cardContentText: string;
  link: string;
};
export type {
  GitHubClient,
  ProjectData,
  ProjLink,
  ProjFeature,
  ProjImage,
  AchievementData,
  SkillData,
};
