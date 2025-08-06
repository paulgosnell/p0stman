import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Circle, CheckCircle, Clock, FileText } from 'lucide-react';

interface TimelineEvent {
  week: number;
  title: string;
  description: string;
  status?: 'pending' | 'in-progress' | 'completed';
  deliverables?: string[];
  tasks?: string[];
}

interface TimelineProps {
  events: TimelineEvent[];
  duration: number;
  currentWeek?: number;
}

export default function Timeline({ events, duration, currentWeek = 0 }: TimelineProps) {
  return (
    <div className="mt-8">
      {/* Timeline Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          <h4 className="font-medium text-gray-900">Project Timeline</h4>
        </div>
        <div className="text-sm text-gray-500">
          Duration: {duration} weeks
        </div>
      </div>

      {/* Timeline Track */}
      <div className="relative">
        <div className="absolute top-5 left-5 right-5 h-1 bg-gray-200 rounded-full" />
        <div 
          className="absolute top-5 left-5 h-1 bg-blue-600 rounded-full transition-all duration-500"
          style={{ width: `${(currentWeek / duration) * 100}%` }}
        />

        {/* Timeline Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative pt-8"
            >
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                {event.status === 'completed' ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : event.status === 'in-progress' ? (
                  <Circle className="w-6 h-6 text-blue-500" />
                ) : (
                  <Circle className="w-6 h-6 text-gray-300" />
                )}
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-2">
                  <Clock className="w-4 h-4" />
                  Week {event.week}
                </div>
                
                <div className="text-lg font-medium text-gray-900 mb-2">
                  {event.title}
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  {event.description}
                </p>

                {event.deliverables && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                      <FileText className="w-4 h-4 text-blue-600" />
                      Deliverables
                    </div>
                    <div className="space-y-2">
                      {event.deliverables.map((deliverable, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {event.tasks && (
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-900">
                      <Clock className="w-4 h-4 text-blue-600" />
                      Tasks
                    </div>
                    <div className="space-y-2">
                      {event.tasks.map((task, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 bg-purple-600 rounded-full" />
                          {task}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}