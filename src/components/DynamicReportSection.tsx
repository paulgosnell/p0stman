import React from 'react';
import { ReportSection } from '../utils/contentParser';
import { SectionCover, OpportunitySection, UseCasesSection, ChallengesSection } from './AIReportSections';
import ReactMarkdown from 'react-markdown';

interface DynamicReportSectionProps {
  section: ReportSection;
  icon?: React.ReactNode;
}

const DynamicReportSection: React.FC<DynamicReportSectionProps> = ({ section, icon }) => {
  // Parse content into structured sections
  const parseContentSections = (content: string) => {
    const sections = content.split(/(?=##\s)/);
    const parsed = {
      intro: '',
      opportunities: [] as string[],
      useCases: [] as Array<{title: string, description: string}>,
      challenges: [] as string[],
      nextSteps: [] as string[]
    };

    sections.forEach(sectionText => {
      const lines = sectionText.trim().split('\n');
      const heading = lines[0];
      const body = lines.slice(1).join('\n').trim();

      if (!heading.startsWith('##')) {
        parsed.intro = sectionText.trim();
      } else if (heading.toLowerCase().includes('opportunity') || 
                 heading.toLowerCase().includes('where we\'re heading')) {
        parsed.opportunities.push(body);
      } else if (heading.toLowerCase().includes('challenge') || 
                 heading.toLowerCase().includes('constraint')) {
        // Extract bullet points as challenges
        const bullets = body.match(/[-*]\s+(.+)/g);
        if (bullets) {
          parsed.challenges.push(...bullets.map(b => b.replace(/[-*]\s+/, '')));
        } else {
          parsed.challenges.push(body);
        }
      } else if (heading.toLowerCase().includes('next') || 
                 heading.toLowerCase().includes('what\'s next')) {
        const bullets = body.match(/[-*]\s+(.+)/g);
        if (bullets) {
          parsed.nextSteps.push(...bullets.map(b => b.replace(/[-*]\s+/, '')));
        }
      } else {
        // Treat as use case
        parsed.useCases.push({
          title: heading.replace('## ', ''),
          description: body
        });
      }
    });

    return parsed;
  };

  const parsedContent = parseContentSections(section.content.content);

  // Create use cases with icons
  const useCases = parsedContent.useCases.map((useCase, index) => ({
    ...useCase,
    icon: icon || <div className="w-6 h-6 bg-blue-400 rounded" />
  }));

  // Create challenges array
  const challenges = parsedContent.challenges.map((challenge, index) => ({
    title: `Challenge ${index + 1}`,
    description: challenge
  }));

  return (
    <div>
      {/* Section Cover */}
      <SectionCover
        title={section.title}
        stat={section.stat || ''}
        quote={section.quote || ''}
        author={section.author || ''}
        role={section.role || ''}
        icon={icon}
      />

      {/* Introduction/Opportunity Section */}
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center">
        <div className="container mx-auto px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-thin mb-8">The Opportunity</h2>
              <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown 
                  className="text-xl text-gray-300 leading-relaxed"
                  components={{
                    p: ({children}) => <p className="mb-6 text-xl text-gray-300 leading-relaxed">{children}</p>,
                    strong: ({children}) => <strong className="text-blue-400 font-medium">{children}</strong>,
                    h2: ({children}) => <h3 className="text-2xl font-light text-white mb-4 mt-8">{children}</h3>,
                    ul: ({children}) => <ul className="space-y-2 mb-6">{children}</ul>,
                    li: ({children}) => <li className="text-gray-300 flex items-start"><span className="text-blue-400 mr-2">•</span>{children}</li>
                  }}
                >
                  {parsedContent.intro}
                </ReactMarkdown>
              </div>
              
              {/* Key Stats */}
              {section.content.keyStats && (
                <div className="mt-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.content.keyStats.slice(0, 2).map((stat, index) => (
                      <div key={index} className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                        <div className="relative bg-gray-900/80 p-6 rounded-2xl border border-gray-800">
                          <div className="text-2xl font-thin text-green-400 mb-2">
                            {stat.match(/\d+%|\$\d+[BM]?|\d+[BM]?/)?.[0] || 'Key'}
                          </div>
                          <div className="text-sm text-gray-300">{stat}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              {/* Chart placeholder */}
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 h-80 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  <div>Growth Visualization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <UseCasesSection
          title="Key Applications"
          useCases={useCases}
          highlight={section.content.keyStats?.[0] || "Leading regional transformation"}
        />
      )}

      {/* Challenges Section */}
      {challenges.length > 0 && (
        <ChallengesSection
          title="Implementation Challenges"
          narrative="While progress is rapid, several key challenges must be addressed for successful AI adoption:"
          challenges={challenges}
        />
      )}

      {/* Next Steps Section */}
      {parsedContent.nextSteps.length > 0 && (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center">
          <div className="container mx-auto px-8 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-thin text-center mb-16">What's Next</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {parsedContent.nextSteps.map((step, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 p-8 rounded-2xl border border-blue-800/30">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl font-thin text-blue-400">{String(index + 1).padStart(2, '0')}</div>
                      <div>
                        <ReactMarkdown 
                          className="text-gray-300 leading-relaxed"
                          components={{
                            p: ({children}) => <p className="text-gray-300">{children}</p>,
                            strong: ({children}) => <strong className="text-blue-300">{children}</strong>
                          }}
                        >
                          {step}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default DynamicReportSection;