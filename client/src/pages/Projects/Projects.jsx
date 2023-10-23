import React from "react";
import ProjectBanner from "./components/ProjectBanner";
import ImageGallery from "./components/ImageGallery";
import RecentProject from "./components/RecentProject";

const ProjectsPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-300 from-10% via-gray-200 via-30% to-gray-100 to-90% ">
      <ProjectBanner />
      <div className="container mx-auto py-12 px-4">
        <ImageGallery />
        <RecentProject />
      </div>
    </div>
  );
};

export default ProjectsPage;
