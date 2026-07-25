import type { ComponentType } from "react";
import { Page01Cover } from "./Page01Cover";
import { Page02Editor } from "./Page02Editor";
import { Page03Landscape } from "./Page03Landscape";
import { Page04Hunting } from "./Page04Hunting";
import { Page05Pentest } from "./Page05Pentest";
import { Page06SOC } from "./Page06SOC";
import { Page07Forensics } from "./Page07Forensics";
import { Page08Incident } from "./Page08Incident";
import { Page09Viranetra } from "./Page09Viranetra";
import { Page10Closing } from "./Page10Closing";

export const pages: { title: string; component: ComponentType }[] = [
  { title: "Cover", component: Page01Cover },
  { title: "Threat Landscape", component: Page03Landscape },
  { title: "Editor's Note", component: Page02Editor },
  { title: "Threat Hunting", component: Page04Hunting },
  { title: "Penetration Testing", component: Page05Pentest },
  { title: "SOC Operations", component: Page06SOC },
  { title: "Digital Forensics", component: Page07Forensics },
  { title: "Incident Response", component: Page08Incident },
  { title: "Viranetra Platform", component: Page09Viranetra },
  { title: "Closing Spread", component: Page10Closing },
];
