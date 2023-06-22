import React from "react";
import CampaignCard from "../components/campaignCard/CampaignCard";
import CampaignFilter from "../components/campaingFilter/CampaingFilter";

const Campaign = () => {
  const campaign = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="mt-5 min-h-screen">
      <h1 className="text-center font-bold text-gray-800">TÜM KAMPANYALAR</h1>
      <div className="flex  m-5 h-full ">
        <CampaignFilter />

        {/* CARD COMPONENTS */}
        <div className="flex gap-4 flex-wrap justify-center items-center">
          {campaign.map((item, index) => (
            <CampaignCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaign;
