import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCheck,
  ClipboardList,
  Factory,
  FlaskConical,
  Leaf,
  Orbit,
  Target,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const factChips = [
  {
    label: "Near-term targets",
    value: "typically 5-10 years",
  },
  {
    label: "Net-zero horizon",
    value: "long-term by 2050",
  },
  {
    label: "Validation focus",
    value: "credible emissions pathways",
  },
  {
    label: "SME route",
    value: "simplified criteria available",
  },
];

const signalCards = [
  {
    title: "What SBTI means",
    description:
      "SBTI usually refers to the Science Based Targets initiative, a framework that helps companies align emissions targets with climate science instead of arbitrary percentages.",
    icon: FlaskConical,
  },
  {
    title: "Why companies use it",
    description:
      "A validated target gives climate commitments more credibility with investors, procurement teams, customers, and internal operators who need a concrete operating plan.",
    icon: Building2,
  },
  {
    title: "What the review checks",
    description:
      "The submission is judged on scope coverage, ambition level, methodological fit, and whether the claimed reduction pathway matches accepted sector criteria.",
    icon: BadgeCheck,
  },
  {
    title: "Where teams stall",
    description:
      "Most delays come from incomplete inventories, weak boundary decisions, unclear target language, or a mismatch between ambition and available baseline data.",
    icon: ClipboardList,
  },
];

const timelineSteps = [
  {
    step: "1. Commit",
    detail:
      "Declare the intent to set a science-based target and define who owns the target-setting program internally.",
  },
  {
    step: "2. Inventory",
    detail:
      "Build a defensible emissions baseline across Scope 1, 2, and the material Scope 3 categories that will determine the target boundary.",
  },
  {
    step: "3. Design",
    detail:
      "Choose the target type, target year, reduction pathway, and sector method that match the company footprint and operating model.",
  },
  {
    step: "4. Submit",
    detail:
      "Package the inventory logic, target wording, and required forms into a submission that can survive an external methodology review.",
  },
  {
    step: "5. Validate",
    detail:
      "Respond to reviewer questions, tighten assumptions, and secure formal approval that the target is science-based.",
  },
  {
    step: "6. Disclose",
    detail:
      "Publish the target, communicate it with precision, and track progress with annual reporting instead of leaving the commitment static.",
  },
];

const glossary = [
  {
    term: "Near-term target",
    definition:
      "A shorter-horizon reduction target that normally covers a 5-10 year window and pushes immediate operational change.",
  },
  {
    term: "Net-zero target",
    definition:
      "A long-term commitment that pairs deep emissions cuts with neutralization of the limited residual emissions that remain.",
  },
  {
    term: "Scope 3 relevance",
    definition:
      "For many businesses, the hard part is not owned operations but the value-chain emissions that dominate total impact.",
  },
  {
    term: "Validation",
    definition:
      "The formal check that your targets, boundaries, and methodology match the rules rather than just sounding ambitious in a press release.",
  },
];

const checklist = [
  "A traceable emissions baseline and reporting year",
  "Scope definitions that match how the business actually operates",
  "Target language written for review, not marketing",
  "A method choice that fits the sector and footprint",
  "Evidence that the plan can be maintained in annual disclosure",
];

const faqItems = [
  {
    question: "What does SBTI stand for?",
    answer:
      "SBTI stands for the Science Based Targets initiative. It is the most common meaning behind the keyword and the focus of this site.",
  },
  {
    question: "Is SBTI the same as a net-zero pledge?",
    answer:
      "Not exactly. A net-zero commitment is the destination. SBTi validation is the discipline around how targets are set, measured, and reviewed against climate science.",
  },
  {
    question: "How long does SBTi validation usually take?",
    answer:
      "Timelines vary by company complexity and submission quality. Teams with clean inventories and precise target wording move faster than teams still reconciling baseline logic.",
  },
  {
    question: "Do smaller companies need the same process?",
    answer:
      "The rigor stays high, but there are simplified routes for SMEs. The hard part is still getting the footprint, ownership, and target language right.",
  },
  {
    question: "Why build a site around the keyword SBTI?",
    answer:
      "Because the term attracts high-intent readers: operators, sustainability leads, consultants, and buyers who want a concise explanation before they dive into a full validation workflow.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "SBTI | Science-Based Targets, Decoded",
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_left,rgba(184,93,43,0.20),transparent_45%),radial-gradient(circle_at_top_right,rgba(31,68,52,0.20),transparent_42%)]" />

        <section className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-14 pt-5 sm:px-8 lg:px-10">
          <header className="mb-12 flex flex-col gap-5 border-b border-foreground/10 pb-6 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/" className="flex w-fit items-center gap-3">
              <Image
                src="/brand/my-sbti-mark.svg"
                alt="My SBTI logo"
                width={52}
                height={52}
                priority
              />
              <div className="space-y-1">
                <p className="font-heading text-3xl leading-none tracking-[0.04em] text-foreground">
                  My SBTI
                </p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.34em] text-muted-foreground">
                  Science-based targets, decoded
                </p>
              </div>
            </Link>

            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a className="transition-colors hover:text-foreground" href="#framework">
                Framework
              </a>
              <a className="transition-colors hover:text-foreground" href="#glossary">
                Glossary
              </a>
              <a className="transition-colors hover:text-foreground" href="#faq">
                FAQ
              </a>
            </nav>
          </header>

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-7">
              <Badge
                variant="outline"
                className="h-auto rounded-full border-foreground/15 bg-background/70 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.26em] text-foreground"
              >
                Keyword site / editorial climate briefing
              </Badge>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-heading text-6xl leading-[0.9] tracking-tight text-balance text-foreground sm:text-7xl lg:text-[5.7rem]">
                  SBTI, decoded for teams that need targets that hold up.
                </h1>

                <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  My SBTI is a cleaner way to understand the keyword{" "}
                  <strong className="font-medium text-foreground">SBTI</strong>:
                  what the Science Based Targets initiative stands for, how
                  science-based targets are reviewed, what net-zero pathways
                  imply, and where most submissions break down before
                  validation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#framework"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 rounded-full px-5 text-sm tracking-[0.02em]",
                  )}
                >
                  Explore the framework
                  <ArrowUpRight />
                </a>
                <a
                  href="#faq"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 rounded-full border-foreground/15 bg-background/60 px-5 text-sm tracking-[0.02em]",
                  )}
                >
                  See common questions
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {factChips.map((chip) => (
                  <div
                    key={chip.label}
                    className="paper-panel rounded-[1.4rem] px-4 py-4"
                  >
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                      {chip.label}
                    </p>
                    <p className="mt-2 text-base leading-6 text-foreground">
                      {chip.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <TargetDiagram />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {signalCards.map(({ title, description, icon: Icon }) => (
              <Card
                key={title}
                className="paper-panel gap-0 rounded-[1.6rem] border-0 bg-transparent py-0"
              >
                <CardHeader className="gap-4 px-5 py-5">
                  <div className="flex size-11 items-center justify-center rounded-full border border-foreground/12 bg-background/70">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="font-heading text-2xl text-foreground">
                      {title}
                    </CardTitle>
                    <CardDescription className="text-[0.98rem] leading-7 text-muted-foreground">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="framework"
          className="mx-auto w-full max-w-7xl px-5 pb-12 pt-6 sm:px-8 lg:px-10"
        >
          <div className="mb-7 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground">
                How science-based targets move from idea to approval
              </p>
              <h2 className="max-w-3xl font-heading text-5xl leading-none text-foreground sm:text-6xl">
                The framework is rigorous, but the shape of it is simple.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              If you strip away the jargon, most SBTI work is a sequence: know
              the emissions, choose the method, write the target precisely, and
              survive external scrutiny.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timelineSteps.map((step) => (
              <Card
                key={step.step}
                className="paper-panel rounded-[1.5rem] border-0 bg-transparent py-0"
              >
                <CardHeader className="space-y-4 px-5 py-5">
                  <div className="flex items-center justify-between text-muted-foreground">
                    <Target className="size-4 text-primary" />
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em]">
                      workflow
                    </span>
                  </div>
                  <CardTitle className="font-heading text-2xl text-foreground">
                    {step.step}
                  </CardTitle>
                  <CardDescription className="text-[0.98rem] leading-7 text-muted-foreground">
                    {step.detail}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section
          id="glossary"
          className="mx-auto w-full max-w-7xl px-5 pb-14 sm:px-8 lg:px-10"
        >
          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="paper-panel rounded-[2rem] border-0 bg-transparent py-0">
              <CardHeader className="space-y-4 px-6 py-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                    Narrative
                  </span>
                  <Orbit className="size-4 text-primary" />
                </div>
                <CardTitle className="max-w-2xl font-heading text-4xl leading-none text-foreground sm:text-5xl">
                  The keyword matters because it attracts people who are close
                  to a real decision.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-7 text-[1.02rem] leading-8 text-muted-foreground">
                <p>
                  Search intent around <strong className="text-foreground">SBTI</strong>{" "}
                  is unusually practical. People rarely search the term for
                  entertainment. They search because a client asked for target
                  alignment, a procurement form needs a credible answer, a board
                  wants a climate plan, or an internal team is preparing for
                  validation and needs a fast mental model before the detailed
                  work starts.
                </p>
                <p>
                  That makes a keyword site valuable when it does two things
                  well: first, it defines the term cleanly; second, it reduces
                  the fog around process, scope, and language. A good SBTI page
                  is not a splashy sustainability promise. It is a crisp field
                  guide for people who need the next right question.
                </p>
                <p>
                  The result should feel closer to an editorial briefing than a
                  software landing page. That is why this site uses a restrained
                  archive-like visual system: target rings, dossier typography,
                  quiet color, and text that earns its space.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-5">
              <Card className="paper-panel rounded-[2rem] border-0 bg-transparent py-0">
                <CardHeader className="space-y-3 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                      Glossary
                    </span>
                    <Leaf className="size-4 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-4xl leading-none text-foreground">
                    Four terms worth keeping straight
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-6 pb-6">
                  {glossary.map((item, index) => (
                    <div key={item.term} className="space-y-3">
                      {index > 0 ? <Separator className="bg-foreground/10" /> : null}
                      <div className="pt-1">
                        <p className="font-medium text-foreground">{item.term}</p>
                        <p className="mt-2 text-sm leading-7 text-muted-foreground">
                          {item.definition}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="paper-panel rounded-[2rem] border-0 bg-transparent py-0">
                <CardHeader className="space-y-3 px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                      Submission checklist
                    </span>
                    <CheckCheck className="size-4 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-4xl leading-none text-foreground">
                    What a serious team prepares first
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 px-6 pb-6">
                  {checklist.map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-foreground/10 bg-background/60 px-4 py-3">
                      <CheckCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-5xl px-5 pb-20 sm:px-8 lg:px-10"
        >
          <div className="paper-panel rounded-[2.2rem] px-6 py-7 sm:px-8 sm:py-9">
            <div className="mb-6 space-y-3">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground">
                FAQ
              </p>
              <h2 className="font-heading text-5xl leading-none text-foreground sm:text-6xl">
                The short answers people usually need first.
              </h2>
            </div>

            <Accordion multiple className="gap-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.question}
                  value={item.question}
                  className="rounded-2xl border border-foreground/10 bg-background/65 px-4 py-1"
                >
                  <AccordionTrigger className="py-4 text-base font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-[0.98rem] leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <footer className="border-t border-foreground/10">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div className="space-y-3">
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted-foreground">
                My SBTI
              </p>
              <h2 className="max-w-2xl font-heading text-4xl leading-none text-foreground sm:text-5xl">
                A keyword site built like an editorial field manual.
              </h2>
            </div>
            <div className="max-w-xl space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                Designed for readers who search SBTI because they actually need
                to move a target-setting decision forward.
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a className="transition-colors hover:text-foreground" href="#framework">
                  Framework
                </a>
                <a className="transition-colors hover:text-foreground" href="#glossary">
                  Glossary
                </a>
                <a className="transition-colors hover:text-foreground" href="#faq">
                  FAQ
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function TargetDiagram() {
  return (
    <div className="paper-panel grain-mask relative min-h-[430px] overflow-hidden rounded-[2.2rem] px-6 py-6 sm:min-h-[500px] sm:px-8 sm:py-8">
      <div className="absolute inset-5 rounded-[1.8rem] border border-foreground/10" />

      <div className="absolute inset-x-[14%] top-[13%] h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
      <div className="absolute inset-y-[16%] left-[50%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-foreground/18 to-transparent" />

      <div className="target-ring left-1/2 top-1/2 size-[13rem] -translate-x-1/2 -translate-y-1/2 sm:size-[16rem]" />
      <div className="target-ring left-1/2 top-1/2 size-[9.5rem] -translate-x-1/2 -translate-y-1/2 sm:size-[11.5rem]" />
      <div className="target-ring left-1/2 top-1/2 size-[6.1rem] -translate-x-1/2 -translate-y-1/2 sm:size-[7.4rem]" />
      <div className="target-ring left-1/2 top-1/2 size-[2.8rem] -translate-x-1/2 -translate-y-1/2 sm:size-[3.4rem]" />

      <div className="absolute left-[17%] top-[21%] h-px w-[48%] rotate-[19deg] bg-copper/80" />
      <div className="absolute left-[63%] top-[29%] size-3 rounded-full border border-copper bg-background shadow-[0_0_0_6px_rgba(247,242,231,0.88)]" />
      <div className="absolute left-[25%] top-[67%] size-3 rounded-sm bg-primary/85 shadow-[0_0_0_6px_rgba(247,242,231,0.88)]" />
      <div className="absolute right-[17%] top-[58%] size-3 rotate-45 rounded-[2px] border border-primary bg-sand shadow-[0_0_0_6px_rgba(247,242,231,0.88)]" />

      <div className="absolute left-[10%] top-[11%] max-w-[11rem] rounded-2xl border border-foreground/10 bg-background/85 px-3 py-2">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-foreground">
          Validation lens
        </p>
        <p className="mt-2 text-sm leading-6 text-foreground">
          ambition, scope coverage, methodological fit
        </p>
      </div>

      <div className="absolute right-[9%] top-[19%] max-w-[10rem] rounded-2xl border border-foreground/10 bg-background/85 px-3 py-2">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-foreground">
          Near-term focus
        </p>
        <p className="mt-2 text-sm leading-6 text-foreground">
          real cuts inside a 5-10 year operating window
        </p>
      </div>

      <div className="absolute left-[12%] bottom-[15%] max-w-[10rem] rounded-2xl border border-foreground/10 bg-background/85 px-3 py-2">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-foreground">
          Inventory first
        </p>
        <p className="mt-2 text-sm leading-6 text-foreground">
          the clean baseline is what makes every later claim believable
        </p>
      </div>

      <div className="absolute right-[10%] bottom-[18%] max-w-[11rem] rounded-2xl border border-foreground/10 bg-background/85 px-3 py-2">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-muted-foreground">
          Net-zero arc
        </p>
        <p className="mt-2 text-sm leading-6 text-foreground">
          long-term target design anchored by deep reductions
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-2 border-t border-foreground/10 bg-background/70 px-5 py-4 backdrop-blur-sm">
        <StatPill icon={Factory} label="Scope logic" />
        <StatPill icon={Target} label="Target language" />
        <StatPill icon={BadgeCheck} label="External review" />
      </div>
    </div>
  );
}

function StatPill({
  icon: Icon,
  label,
}: {
  icon: typeof Factory;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-foreground/10 bg-background/75 px-3 py-2">
      <Icon className="size-3.5 text-primary" />
      <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-foreground">
        {label}
      </span>
    </div>
  );
}
