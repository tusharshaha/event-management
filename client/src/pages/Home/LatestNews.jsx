import React from "react";
import ContainerBox from "../../components/Shared/ContainerBox";
import SectionTitle from "../../components/Shared/SectionTitle";

const LatestNews = () => {
  return (
    <div className="bg-white py-14 min-h-screen">
      <ContainerBox>
        <SectionTitle
          title="News & Blogs"
          subtitle="Explore Our Latest News And Blogs"
        />
      </ContainerBox>
    </div>
  );
};

export default LatestNews;
