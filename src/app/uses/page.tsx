import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
};

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="Here are some of my favorite tools I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2016)">
              mac booted to ubuntu. very fun and i regret it so.
          </Tool>
         
          
          <Tool title="the floor">
            i like to sit down and stand up. keeps my hip flexors warmed up in case my dog wants to scrap
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="VS Code">
            pretty pretty good. supporting our microsoft overlords.
          </Tool>
          <Tool title="space vim">
            Telling people i use vim and/or formerly use vim makes up for all the time wasted using vim
          </Tool>
          <Tool title="llm tool">
            some ai junk
          </Tool>
        </ToolsSection>
        <ToolsSection title="Design">
          <Tool title="Figma">

            i like talking to designers and figma is the spot. <br />
            also, Trying to get good at figma so i can learn how to automate my job when the agents start talking to each other better.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
        <Tool title="Pomodro Timer">
            because there seems to be such a thing as too lazy. even among developers.
          </Tool>
          <Tool title="Notion">
            shits dope. i like to write and organize my life. it helps me focus. some great apis and tools to consume your own content too. hard to consider why not notion.
            maybe there is a reason depending on who you are.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
};
