import React from 'react';

interface ProposalSlideProps {
  title: string;
  content: React.ReactNode;
}

export default function ProposalSlide({ title, content }: ProposalSlideProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {content}
    </div>
  );
}