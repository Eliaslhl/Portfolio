import { ReactNode } from "react";

// ─── Navigation ────────────────────────────────────────────────────────────────

export interface NavLink {
  _id: number;
  title: string;
  link: string;
}

// ─── Skills / Compétences ───────────────────────────────────────────────────────

export interface SkillItem {
  id: number;
  icon: ReactNode;
  title: string;
  des: string;
}

export type SkillsData = Record<string, SkillItem[]>;

// ─── Projects ──────────────────────────────────────────────────────────────────

export interface ProjectCardProps {
  title: string;
  des: string;
  src: string;
  githubLink: string;
  websiteLink: string;
}

// ─── Resume ────────────────────────────────────────────────────────────────────

export interface ResumeCardProps {
  title: string;
  subTitle: string;
  result: string;
  des: ReactNode;
}

// ─── Layout ────────────────────────────────────────────────────────────────────

export interface TitleProps {
  title: string;
  des: string;
}

// ─── Contact ───────────────────────────────────────────────────────────────────

export interface EmailPayload {
  username: string;
  phoneNumber: string;
  email: string;
  subject: string;
  message: string;
}

// ─── 3D Model ──────────────────────────────────────────────────────────────────

export interface ThreeDModelProps {
  path: string;
}
