import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.webp'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank" 
        rel="noopener noreferrer"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
          <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Josh Deiner. I live in  the DC area and what do i Do',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Josh Deiner. I love to learn .
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Software engineering is not just about writing code; it’s a confluence of different fields such as mathematics, logic, design, psychology, and even sociology. Each project I embark on requires a unique blend of these disciplines, challenging me to think beyond conventional boundaries. This integration of diverse knowledge areas allows me to approach problems holistically and develop innovative solutions.</p>

            <p>One of the core values I hold dear is education. I believe that learning is a lifelong journey, and it is through continuous education that we grow and evolve. This belief drives my desire to share knowledge and empower others. I have been fortunate to learn from many brilliant minds throughout my career, and I strive to pay it forward by mentoring others and contributing to educational initiatives.</p>

            <p>Collaboration is another aspect of software engineering that I deeply value. Working with diverse teams allows me to learn from others and gain new perspectives. Each team member brings a unique set of skills and experiences, and it is through this diversity that we can tackle complex challenges and develop robust solutions. In my professional experience, I have found that the best ideas often emerge from collaborative efforts.</p>

            <p>Empowering others to learn and grow is a mission that is close to my heart. I believe that education is the key to unlocking potential and driving positive change in the world. This belief has guided my efforts in developing educational tools and resources that cater to different learning styles and needs. By making education engaging and accessible, I hope to inspire others to pursue their passions and achieve their goals.</p>

            <p>My journey in software engineering is fueled by a deep love for learning and a commitment to growth. The interdisciplinary nature of this field provides endless opportunities for exploration and innovation, allowing me to continuously expand my knowledge and skills. By valuing education and collaboration, I aim to empower others to learn and grow, contributing to a brighter and more knowledgeable future. Thank you for joining me on this journey, and I look forward to learning and growing with you.</p>
            <p>
              <cite>  generated by gpt model 4o</cite>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/joshdoesre88239" icon={XIcon}>
              Follow on X(Formerly Known as Twitter)
            </SocialLink>
            <SocialLink href="https://github.com/JoshDeiner" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/joshua-d-b23194105/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:joshdeiner75@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              joshdeiner75@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
