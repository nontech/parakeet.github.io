import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { FaLinkedin } from 'react-icons/fa';

const Team = () => {
    return (
        <div className="min-h-screen flex flex-col gradient-bg text-white">
            <Navbar />
            <div className="container mx-auto py-12 px-6 flex-grow">
                <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Aman Jaiswal */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h2 className="text-2xl font-bold text-white">Aman Jaiswal</h2>
                                <a
                                    href="https://www.linkedin.com/in/aman-jaiswal07/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#a8b1ff] transition-colors ml-2"
                                    aria-label="Aman Jaiswal LinkedIn"
                                >
                                    <FaLinkedin className="h-6 w-6" />
                                </a>
                            </div>
                            <p className="text-lg text-[#a8b1ff] mb-4">Co-founder & CTO</p>
                            <p className="text-white/80 mb-4">
                                Experience as a Full-stack founding engineer at acemate, Product manager at Transporeon, & Product owner at jovoto.
                            </p>
                            <p className="text-white/80">
                                Holds a Bsc in Software Engineering from CODE University of Applied Sciences.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Alejandro Camus Hernandez */}
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                        <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-2">
                                <h2 className="text-2xl font-bold text-white">Alejandro Camus Hernandez</h2>
                                <a
                                    href="https://www.linkedin.com/in/alejandrocamus/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#a8b1ff] transition-colors ml-2"
                                    aria-label="Alejandro Camus Hernandez LinkedIn"
                                >
                                    <FaLinkedin className="h-6 w-6" />
                                </a>
                            </div>
                            <p className="text-lg text-[#a8b1ff] mb-4">Co-founder & CEO</p>
                            <p className="text-white/80 mb-4">
                                Experience as a Product Manager at HeyData and Software engineer at Native Instruments.
                            </p>
                            <p className="text-white/80">
                                Holds a Bsc in Software Engineering from CODE University of Applied Sciences.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Team;

