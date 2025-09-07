import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const resources = [
  {
    title: 'Navigating the CaRMS Match: A Guide for Medical Students',
    slug: 'navigating-carms',
  },
  {
    title: 'Top Resources for Aspiring Orthopedic Surgeons',
    slug: 'ortho-resources',
  },
  {
    title: 'Effective Study Techniques for Medical School',
    slug: 'study-techniques',
  },
];

const ResourcesPage = () => {
  return (
    <div>
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-center">Resources</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource, index) => (
          <FadeIn key={resource.slug} delay={0.4 + index * 0.2}>
            <Link href={`/resources/${resource.slug}`}>
              <div className="bg-secondary p-6 rounded-lg shadow-lg h-full cursor-pointer hover:bg-secondary/90 transition-colors">
                <h2 className="text-2xl font-bold">{resource.title}</h2>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ResourcesPage;
