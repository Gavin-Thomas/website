import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

type Project = {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    name: 'CLARA-AI',
    description:
      'A visual mnemonic generator for medical students (MCCQE-focused). Built with Vite + React + TypeScript; features a sleek, professional UI and mnemonic key overlays for each generated scene.',
    link: 'https://clara-ai-clinical-learning-through-augmented-reas-105700556943.us-west1.run.app/',
    linkLabel: 'Open App',
  },
  {
    name: 'Anki-Pacman',
    description:
      'An Anki add-on that turns reviews into playtime for a Pac-Man-style game. Includes deck selection, progress tracking, and difficulty scaling. Compatible with Anki 2.1.45+.',
    link: 'https://ankiweb.net/shared/info/927867318',
    linkLabel: 'View on AnkiWeb',
  },
  {
    name: 'Shoulder Press Tracker',
    description:
      'A lightweight workout tracker for progressive overload on the shoulder press. Log sets/reps, track estimated 1RM, and visualize trends over time.',
    link: 'https://github.com/Gavin-Thomas/Shoulder-Press-Tracker',
    linkLabel: 'View on GitHub',
  },
  {
    name: 'AutoManim',
    description:
      'A text-to-animation tool that generates Manim scenes from natural language with a Flask backend. Supports quick low-quality previews, code display, and REST API endpoints.',
    link: 'https://github.com/Gavin-Thomas/automanim',
    linkLabel: 'View on GitHub',
  },
];

const ProjectsPage = () => {
  return (
    <div>
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.name} delay={0.4 + index * 0.2}>
            <div className="bg-secondary p-6 rounded-lg shadow-lg flex flex-col h-full">
              <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
              <p className="text-secondary-foreground mb-4 flex-grow">{project.description}</p>

              {project.link ? (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="self-start">
                  <span className="text-ucalgary-red hover:underline cursor-pointer">
                    {project.linkLabel ?? 'View project'}
                  </span>
                </Link>
              ) : (
                <span className="text-secondary-foreground opacity-70 text-sm">Private / link pending</span>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
