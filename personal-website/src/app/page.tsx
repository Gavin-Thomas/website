'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <FadeIn>
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
            <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/profile-placeholder.jpg" // Placeholder image
                alt="Profile Picture"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4">Gavin Thomas</h1>
            <TypeAnimation
              sequence={[
                'Curious learner',
                1000,
                'Teammate',
                1000,
                'Pleasant, hard worker',
                1000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl text-primary mb-6"
              repeat={Infinity}
            />
            <p className="text-lg mb-8">
              Hello! I am a medical student at the University of Calgary with a background in 
              kinesiology and an MSc degree, where I built AI models to help predict dementia. 
              I am excited about medicine not just for the science, but for the people it serves. 
              Outside of school, you will often find me cycling, running, or spending time with family 
              and friends. I also enjoy coding and creating tools that make life a little easier for others.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="/projects">
                <span className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                  View Projects
                </span>
              </Link>
              <Link href="/cv.pdf">
                <span className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
                  View CV
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default HomePage;
