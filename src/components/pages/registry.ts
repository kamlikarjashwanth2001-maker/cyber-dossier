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

import { Page04ServicesHub } from "./Page04ServicesHub";
import { Page08CloudSecurity } from "./Page08CloudSecurity";
import { Page09AppSec } from "./Page09AppSec";
import { Page12Consulting } from "./Page12Consulting";

export const pages: { title: string; component: ComponentType<{ goToIndex?: (i: number) => void }> }[] = [
  { title: "Cover", component: Page01Cover },
  { title: "Threat Landscape", component: Page03Landscape },
  { title: "Operations Directory", component: Page04ServicesHub },
  { title: "Threat Hunting", component: Page04Hunting },
  { title: "Penetration Testing", component: Page05Pentest },
  { title: "SOC Operations", component: Page06SOC },
  { title: "Cloud Security", component: Page08CloudSecurity },
  { title: "Application Security", component: Page09AppSec },
  { title: "Digital Forensics", component: Page07Forensics },
  { title: "Incident Response", component: Page08Incident },
  { title: "Security Consulting", component: Page12Consulting },
  { title: "Viranetra Platform", component: Page09Viranetra },
  { title: "Editor's Note", component: Page02Editor },
  { title: "Closing Spread", component: Page10Closing },
];
