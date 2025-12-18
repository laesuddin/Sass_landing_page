import Tag from "@/components/Tag";
import figma from "@/assets/images/figma-logo.svg";
import notion from "@/assets/images/notion-logo.svg";
import slack from "@/assets/images/slack-logo.svg";
import relume from "@/assets/images/relume-logo.svg";
import framer from "@/assets/images/framer-logo.svg";
import github from "@/assets/images/github-logo.svg";
import Image from "next/image";

const integrations = [
  {
    name: "Figma",
    icon: figma,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notion,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slack,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relume,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framer,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: github,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <Tag>Integration</Tag>
        <h2 className="text-6xl font-medium mt-6">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="text-white/50 mt-4 text-lg">
          Layers seamlessly connects with your favorite tool, making it easy to
          plug into any workflow and collaborate across platforms.
        </p>
        <div className="h-100 mt-8 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-col gap-4 pb-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
              >
                <div className="flex justify-center">
                  <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    className="size-24"
                  />
                </div>
                <h3 className="text-3xl text-center mt-6">
                  {integration.name}
                </h3>
                <p className="text-center text-white/50 mt-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
