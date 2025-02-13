const ProjectCard = ({ title, description, image, link }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View Project
          </a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  