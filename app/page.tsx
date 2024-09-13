import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Clock, Cog, Layers, Award } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#14213d]">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#14213d] to-[#2a9d8f] text-white min-h-screen flex items-center justify-center">
        <div className="container mx-auto text-center px-4">
          <h1 className="font-poppins text-5xl font-bold mb-6">Empowering Moroccan Educators with AI-Driven Solutions</h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto">Revolutionize Your Classroom with AI: Save Time, Reduce Burnout, and Build Future-Ready Skills.</p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-[#e76f51] hover:bg-[#d35436] text-white text-lg px-8 py-3">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* AI Literacy Section */}
        <Card className="mb-16 bg-white rounded-lg shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-[#2a9d8f] uppercase tracking-wide font-semibold mb-2 flex items-center">
              <BookOpen className="mr-2" size={20} />
              Educator Empowerment
            </h3>
            <h1 className="font-poppins text-3xl font-bold mb-2">Foster AI Literacy Among Educators</h1>
            <h2 className="text-xl text-[#4a4a4a] mb-4">Empower Your Teaching with AI Literacy</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4">Equip yourself with essential AI competencies and skills to enhance your teaching methods. Our platform provides comprehensive training resources tailored for Moroccan educators, ensuring you stay ahead in the rapidly evolving educational landscape.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Interactive Courses: Learn AI fundamentals with engaging, easy-to-follow content.</li>
                  <li>Workshops & Webinars: Stay updated with the latest in AI education through expert-led sessions.</li>
                </ul>
                <Button className="bg-[#2a9d8f] hover:bg-[#1e7268] text-white">
                  Explore Our AI Literacy Program
                </Button>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <Image
                  src="/img1.jpeg"
                  alt="AI Literacy for Educators"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Time Section */}
        <Card className="mb-16 bg-white rounded-lg shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-[#2a9d8f] uppercase tracking-wide font-semibold mb-2 flex items-center">
              <Clock className="mr-2" size={20} />
              Efficiency Boost
            </h3>
            <h1 className="font-poppins text-3xl font-bold mb-2">Save Time, Fight Burnout, & Promote Sustainability</h1>
            <h2 className="text-xl text-[#4a4a4a] mb-4">AI Solutions Designed to Save You Time and Energy</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4">Reduce your workload with AI-powered tools that automate administrative tasks, leaving you more time to focus on what matters—teaching. Prevent burnout and promote sustainable teaching practices with our efficient solutions.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Smart Grading: Automate assessments and feedback for faster results.</li>
                  <li>Lesson Planning Assistant: Create curriculum-compliant lesson plans in minutes.</li>
                  <li>Resource Hub: Access a vast library of AI-enhanced teaching materials.</li>
                </ul>
                <Button className="bg-[#2a9d8f] hover:bg-[#1e7268] text-white">
                  Discover Time-Saving Tools
                </Button>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <Image
                  src="/img2.jpeg"
                  alt="Time-saving AI Solutions"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Competencies Section */}
        <Card className="mb-16 bg-white rounded-lg shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-[#2a9d8f] uppercase tracking-wide font-semibold mb-2 flex items-center">
              <Cog className="mr-2" size={20} />
              Skill Development
            </h3>
            <h1 className="font-poppins text-3xl font-bold mb-2">Build AI Competencies and Skills</h1>
            <h2 className="text-xl text-[#4a4a4a] mb-4">Robust AI Training Resources at Your Fingertips</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4">Develop your AI skills with our extensive resources designed for all levels of expertise. From foundational courses to advanced applications, we provide everything you need to become an AI-competent educator.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>AI Workshops: Hands-on learning experiences with AI experts.</li>
                  <li>Certification Programs: Earn recognized certifications to advance your career.</li>
                </ul>
                <Button className="bg-[#2a9d8f] hover:bg-[#1e7268] text-white">
                  Start Your AI Journey Today
                </Button>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <Image
                  src="/img3.jpeg"
                  alt="Building AI Competencies"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LMS Integration Section */}
        <Card className="mb-16 bg-white rounded-lg shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-[#2a9d8f] uppercase tracking-wide font-semibold mb-2 flex items-center">
              <Layers className="mr-2" size={20} />
              Seamless Integration
            </h3>
            <h1 className="font-poppins text-3xl font-bold mb-2">Seamless Integration with Your Existing LMS</h1>
            <h2 className="text-xl text-[#4a4a4a] mb-4">Works with Your Learning Management System</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4">Our platform integrates effortlessly with your existing LMS, offering easy data exports and full interoperability. Spend less time worrying about compatibility and more time on delivering impactful education.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>One-Click Exports: Easily export data and reports.</li>
                  <li>LMS Compatible: Supports major Learning Management Systems in Morocco.</li>
                </ul>
                <Button className="bg-[#2a9d8f] hover:bg-[#1e7268] text-white">
                  Learn More About Integration
                </Button>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <Image
                  src="/img4.jpg"
                  alt="Seamless LMS Integration"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Curriculum Compliance Section */}
        <Card className="mb-16 bg-white rounded-lg shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-[#2a9d8f] uppercase tracking-wide font-semibold mb-2 flex items-center">
              <Award className="mr-2" size={20} />
              Standards Alignment
            </h3>
            <h1 className="font-poppins text-3xl font-bold mb-2">Curriculum Compliant</h1>
            <h2 className="text-xl text-[#4a4a4a] mb-4">Aligned with the Moroccan Educational Standards</h2>
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <p className="mb-4">Our content and tools are fully aligned with the Moroccan national curriculum, ensuring relevance and compliance for a smooth teaching experience. Stay curriculum-compliant while embracing innovative AI tools.</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Localized Content: Tailored to Moroccan education standards.</li>
                  <li>Continuous Updates: Regular updates to keep in line with curriculum changes.</li>
                </ul>
                <Button className="bg-[#2a9d8f] hover:bg-[#1e7268] text-white">
                  See Curriculum Alignment
                </Button>
              </div>
              <div className="w-full lg:w-1/2 lg:pl-8">
                <Image
                  src="/img5.jpg"
                  alt="Curriculum Compliant AI Tools"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#14213d] text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the AI Revolution in Education</h2>
          <p className="mb-6">Be a part of a growing community of forward-thinking educators in Morocco. Start using AI to make a real difference in your classroom.</p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-[#e76f51] hover:bg-[#d35436] text-white mb-8">
              Sign Up Now
            </Button>
          </Link>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="text-white hover:text-[#2a9d8f]">About Us</a>
            <a href="#" className="text-white hover:text-[#2a9d8f]">Contact Us</a>
            <a href="#" className="text-white hover:text-[#2a9d8f]">Privacy Policy</a>
            <a href="#" className="text-white hover:text-[#2a9d8f]">Terms of Service</a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-[#2a9d8f]">Facebook</a>
            <a href="#" className="text-white hover:text-[#2a9d8f]">LinkedIn</a>
            <a href="#" className="text-white hover:text-[#2a9d8f]">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;