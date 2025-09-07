import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

const publications = [
  {
    title:
      'Maximal active force in skinned muscle fibres from children with cerebral palsy',
    authors:
      'Venus Joumaa, Faizan Syed, Jason J. Howard, Gavin Thomas, Latif Omerkhil, Sach Dabgotra, Isaac Obrigewitsch, Shuyue Liu, Robert J. Holash, Timothy R. Leonard, Walter Herzog',
    journal: 'Journal of Biomechanics',
    year: 2025,
    link: 'https://www.sciencedirect.com/science/article/pii/S0021929025002222',
  },
  {
    title:
      'Machine Learning Approaches for Cognitive Disorder Detection using Administrative Health Data',
    authors: 'Gavin Thomas',
    journal: 'University of Calgary, Master’s Thesis',
    year: 2025,
    link: 'https://dx.doi.org/10.11575/PRISM/49572',
  },
  {
    title:
      'Clinical Learning through Augmented Reasoning & Art (CLARA.AI): AI-Based Visual Mnemonic Software',
    authors: 'Gavin Thomas',
    journal: 'Online Resource',
    year: 2025,
    link: 'https://clara-ai-clinical-learning-through-augmented-reas-105700556943.us-west1.run.app/',
  },
  {
    title:
      'Estimating Potential Eligibility for Disease Modifying Therapies for Alzheimer’s Disease Using Population-Based Data in Alberta, Canada',
    authors:
      'Mohammad ZI Chowdhury, Gavin Thomas, Eric E Smith, Susan E Bronskill, Julia G Kirkham, Zahinoor Ismail, Zahra Goodarzi, Pamela Roach, Vivian Ewa, Isabelle Vedel, Andrea Gruneir, Dallas Seitz',
    journal:
      "Alzheimer's & Dementia. Alzheimer's Association International Conference (AAIC)",
    year: 2024,
    link: 'https://alz-journals.onlinelibrary.wiley.com/doi/abs/10.1002/alz.085900',
  },
  {
    title:
      'Eligibility for Treatment with Disease Modifying Therapies for Alzheimer’s Disease Among Individuals Assessed in a Tertiary Care Specialty Dementia Clinical Program in Calgary, Alberta',
    authors:
      'Gavin Thomas, Eric Smith, Zahinoor Ismail, Zahra Goodarzi, Julia Kirkham, Dallas Seitz',
    journal:
      'Canadian Geriatrics Journal. Canadian Geriatrics Society Annual Meeting',
    year: 2024,
    link: 'https://search.proquest.com/openview/959c920343fbdb6efef6c639d11ec7c4/1?pq-origsite=gscholar&cbl=1246350',
  },
  {
    title:
      'An Investigation of Active Force in Skeletal Muscle Fibers from Children With Cerebral Palsy',
    authors:
      'Gavin Thomas, Venus Joumaa, Tim Leonard, Jason Howard, Robert Holash, Walter Herzog',
    journal: 'Clinical Journal of Sport Medicine. CASEM Annual Conference',
    year: 2023,
    link: 'https://doi.org/10.1097/JSM.0000000000001124',
  },
];

const ResearchPage = () => {
  return (
    <div>
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-center">Research</h1>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex justify-center space-x-4 mb-12">
          <Link
            href="https://scholar.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
              Google Scholar
            </span>
          </Link>
          <Link
            href="https://www.researchgate.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 cursor-pointer">
              ResearchGate
            </span>
          </Link>
        </div>
      </FadeIn>

      <div className="space-y-8">
        {publications.map((pub, index) => (
          <FadeIn key={index} delay={0.6 + index * 0.2}>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{pub.title}</h2>
              <p className="text-gray-400 mb-2">{pub.authors}</p>
              <p className="text-gray-500 italic mb-4">
                {pub.journal}, {pub.year}
              </p>
              <Link href={pub.link} target="_blank" rel="noopener noreferrer">
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Read Publication
                </span>
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default ResearchPage;
