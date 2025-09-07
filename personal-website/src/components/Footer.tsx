import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/Gavin-Thomas" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer hover:text-primary transition duration-300">
              GitHub
            </span>
          </Link>
          <Link href="https://scholar.google.ca/citations?user=iUa2y8wAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer hover:text-primary transition duration-300">
              Google Scholar
            </span>
          </Link>
          <Link href="https://www.researchgate.net/profile/Gavin-Thomas-21/research" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer hover:text-primary transition duration-300">
              ResearchGate
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/gavin-thomas-546942148/" target="_blank" rel="noopener noreferrer">
            <span className="cursor-pointer hover:text-primary transition duration-300">
              LinkedIn
            </span>
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Gavin Thomas. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
