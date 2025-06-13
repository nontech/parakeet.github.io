const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-white border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-6 md:mb-0">
            <div>
              <img
                src="/parakeet_logo.png"
                alt="Parakeet Logo"
                className="h-14"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div>
              <h3 className="font-medium mb-2">App</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#features"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/#languages"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Languages
                  </a>
                </li>
                <li>
                  <a
                    href="/#testimonials"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-2">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacypolicy"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/imprint"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Imprint
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Parakeet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
