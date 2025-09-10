import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './Projects';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectDemo: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = Number(id);
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);

  if (isNaN(projectIndex) || projectIndex < 0 || projectIndex >= projects.length) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white p-10">
        <p>Project not found.</p>
        <Link to="/" className="ml-4 text-blue-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    );
  }

  const project = projects[projectIndex];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline mb-6 inline-block">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title} - Demo</h1>
        <p className="text-gray-400 mb-6">{project.description}</p>

        {/* Buttons moved here */}
        <div className="mb-8 flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            <Github />
            <span>View Code</span>
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
            >
              <ExternalLink />
              <span>View Deployed</span>
            </a>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {project.demoMedia?.map((media, index) =>
            media.type === 'image' ? (
              <img
                key={index}
                src={media.url}
                alt={`${project.title} screenshot ${index + 1}`}
                className="rounded-lg shadow-lg object-cover cursor-pointer max-h-96 w-full"
                onClick={() => setSelectedMedia(media)}
              />
            ) : (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedMedia(media)}
              >
                <video
                  src={media.url}
                  className="w-full h-full object-cover"
                  controls
                ></video>
              </div>
            )
          )}
        </div>
      </div>

      {/* Modal for expanded media */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={28} />
          </button>

          {selectedMedia.type === 'image' ? (
            <img
              src={selectedMedia.url}
              alt="Expanded media"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <video
              src={selectedMedia.url}
              controls
              autoPlay
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDemo;
