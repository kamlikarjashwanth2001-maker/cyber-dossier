import { createFileRoute } from "@tanstack/react-router";
import { Magazine } from "@/components/Magazine";
import { SplashScreen } from "@/components/SplashScreen";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hackers In Threat Hunt — Classified Cyber Intelligence Dossier" },
      {
        name: "description",
        content:
          "Turn the pages of a top-secret editorial exhibit on elite threat hunting, penetration testing, SOC operations, digital forensics, incident response, and the Viranetra AI defense platform.",
      },
      { property: "og:title", content: "Hackers In Threat Hunt — Vol. 01" },
      {
        property: "og:description",
        content:
          "An immersive editorial dossier of modern cyber defense. Hunt threats before they become breaches.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered && <SplashScreen onComplete={() => setHasEntered(true)} />}
      <Magazine />
    </>
  );
}
