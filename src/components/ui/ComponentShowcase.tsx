import React from 'react';
import { ArrowRight, Download, Star, Zap } from 'lucide-react';
import Button from './Button';
import Card from './Card';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Badge from './Badge';

/**
 * Component Showcase
 *
 * A demo page showing all UI components in the P0STMAN V3 Design System.
 * Use this for testing, documentation, and as a reference implementation.
 */

export default function ComponentShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Section paddingY="xl" bgColor="gradient">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-thin text-gray-900 mb-6">
            P0STMAN V3 Design System
          </h1>
          <p className="text-xl font-light text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive UI component library built with React, TypeScript, and Tailwind CSS
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="blue">Production Ready</Badge>
            <Badge variant="green">TypeScript</Badge>
            <Badge variant="purple">Responsive</Badge>
            <Badge variant="gray">Accessible</Badge>
          </div>
        </div>
      </Section>

      {/* Buttons */}
      <Section id="buttons">
        <SectionHeader
          title="Buttons"
          subtitle="Versatile button component with multiple variants, sizes, and icon support"
        />

        <div className="space-y-8">
          {/* Variants */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="solid">Solid Button</Button>
              <Button variant="gradient">Gradient Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="solid" disabled>Disabled Button</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* With Icons */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">With Icons</h3>
            <div className="flex flex-wrap gap-4">
              <Button iconRight={<ArrowRight size={18} />}>
                Continue
              </Button>
              <Button iconLeft={<Download size={18} />} variant="outline">
                Download
              </Button>
              <Button variant="gradient" iconLeft={<Star size={18} />} iconRight={<ArrowRight size={18} />}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Cards */}
      <Section id="cards" bgColor="gray">
        <SectionHeader
          title="Cards"
          subtitle="Flexible card components with hover effects and multiple variants"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="default">
            <h3 className="text-2xl font-light text-gray-900 mb-3">Default Card</h3>
            <p className="text-gray-600 font-light mb-4">
              Basic card with border and white background.
            </p>
            <Badge variant="blue" size="sm">Default</Badge>
          </Card>

          <Card variant="bordered" hover>
            <div className="flex items-center gap-2 mb-3">
              <Zap size={24} className="text-blue-600" />
              <h3 className="text-2xl font-light text-gray-900">Hover Card</h3>
            </div>
            <p className="text-gray-600 font-light mb-4">
              Card with hover effect and animation.
            </p>
            <Badge variant="green" size="sm">Interactive</Badge>
          </Card>

          <Card variant="elevated" padding="md">
            <h3 className="text-2xl font-light text-gray-900 mb-3">Elevated Card</h3>
            <p className="text-gray-600 font-light mb-4">
              Card with subtle shadow and medium padding.
            </p>
            <Badge variant="purple" size="sm">Elevated</Badge>
          </Card>
        </div>
      </Section>

      {/* Badges */}
      <Section id="badges">
        <SectionHeader
          title="Badges"
          subtitle="Small labels for status indicators, tags, and categories"
        />

        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Color Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="blue">Blue</Badge>
              <Badge variant="purple">Purple</Badge>
              <Badge variant="green">Green</Badge>
              <Badge variant="red">Red</Badge>
              <Badge variant="yellow">Yellow</Badge>
              <Badge variant="gray">Gray</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm" variant="blue">Small Badge</Badge>
              <Badge size="md" variant="blue">Medium Badge</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-4">Use Cases</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-900">Status:</span>
                <Badge variant="green">Active</Badge>
                <Badge variant="yellow">Pending</Badge>
                <Badge variant="red">Urgent</Badge>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-900">Features:</span>
                <Badge variant="blue" size="sm">New</Badge>
                <Badge variant="purple" size="sm">Hot</Badge>
                <Badge variant="gray" size="sm">Beta</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section Headers */}
      <Section id="headers" bgColor="gray">
        <SectionHeader
          title="Section Headers"
          subtitle="Consistent headers for page sections with optional subtitles"
        />

        <div className="space-y-12 bg-white rounded-2xl p-8">
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">Left Aligned</h3>
            <SectionHeader
              title="Example Section Title"
              subtitle="This is a subtitle that provides additional context about the section"
              animate={false}
            />
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">Centered</h3>
            <SectionHeader
              title="Centered Section Title"
              subtitle="Centered layout works great for hero sections and feature showcases"
              centered
              animate={false}
            />
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">Without Subtitle</h3>
            <SectionHeader
              title="Simple Section Title"
              animate={false}
            />
          </div>
        </div>
      </Section>

      {/* Complete Example */}
      <Section id="example">
        <SectionHeader
          title="Complete Example"
          subtitle="All components working together"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card hover>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-light text-gray-900">AI Agents</h3>
              <Badge variant="blue" size="sm">Hot</Badge>
            </div>
            <p className="text-gray-600 font-light mb-6">
              Voice agents, chat agents, code agents. From pilot to production.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge variant="green" size="sm">Fast</Badge>
                <Badge variant="purple" size="sm">Scalable</Badge>
              </div>
              <Button
                variant="solid"
                iconRight={<ArrowRight size={18} />}
                className="w-full"
              >
                Start a Pilot
              </Button>
            </div>
          </Card>

          <Card hover>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-light text-gray-900">MVP Development</h3>
              <Badge variant="green" size="sm">Fast</Badge>
            </div>
            <p className="text-gray-600 font-light mb-6">
              Full-stack web/mobile products. 6 days to 3 weeks.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge variant="blue" size="sm">Web</Badge>
                <Badge variant="purple" size="sm">Mobile</Badge>
              </div>
              <Button
                variant="outline"
                iconRight={<ArrowRight size={18} />}
                className="w-full"
              >
                Launch Your MVP
              </Button>
            </div>
          </Card>

          <Card hover>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-light text-gray-900">Leadership</h3>
              <Badge variant="purple" size="sm">Strategic</Badge>
            </div>
            <p className="text-gray-600 font-light mb-6">
              CPO/CTO/CIO services. Digital transformation expertise.
            </p>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Badge variant="yellow" size="sm">CPO</Badge>
                <Badge variant="red" size="sm">CTO</Badge>
              </div>
              <Button
                variant="gradient"
                iconRight={<ArrowRight size={18} />}
                className="w-full"
              >
                Discuss Strategy
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* Footer CTA */}
      <Section bgColor="gradient" paddingY="xl">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-thin text-gray-900 mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl font-light text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using the P0STMAN V3 Design System in your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="lg"
              iconRight={<ArrowRight size={18} />}
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
