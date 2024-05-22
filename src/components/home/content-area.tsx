import ProfileInfoModel from "@/interfaces/profile-info/profile-info.model";
import { Link } from "react-router-dom";
import { ContentAreaData } from "./content-area-data";
import { useGetProfileInfoByIdQuery } from "@/services/profile-info";
import { useProfileInfo } from "./content-area-hooks";

function ContentArea({ id }: { id: number }) {
  const {
    data: profileData,
    isLoading,
    isError,
  } = useGetProfileInfoByIdQuery(id);

  console.log("profileData______", profileData);

  const {
    toggleUpdateModal,
    handleDelete,
    searchData,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
  } = useProfileInfo();

  return (
    <div className="content p-8 bg-gray-100 mt-5">
      <div className="mb-5 p-20">
        <div className="row">
          <div
            className="big-container p-12 bg-white rounded-lg shadow-md relative"
            style={{
              width: "466px",
              height: "500px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              className="top-0 left-0 right-0 h-1/4 bg-cover bg-center relative"
              style={{ backgroundImage: "url(assets/images/CVcover.png)" }}
            >
              <span className="absolute top-2 right-2">
                <Link to="/CV">
                  <button className="rounded-full bg-[#7e6a4276] text-white w-8 h-8 flex items-center justify-center">
                    <i className="fas fa-pencil-alt"></i>
                  </button>
                </Link>
              </span>
            </div>

            <div className="relative z-10 mb-18">
              <div className="flex flex-row mt-9">
                <button className="bg-[#7e6a4276] hover:bg-gray-700 text-white text-sm  py-1 px-4 rounded mr-4 mt-4 mb-4">
                  DraftButton
                </button>
                <button className="bg-transparent hover:bg-gray-500 text-gray-500 text-sm hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded mt-4 mb-4">
                  NorwegianButton
                </button>
              </div>
              <div>
                {filteredItems?.map((item: ProfileInfoModel) => (
                  <p
                    key={item.Id}
                    className="text-2xl font-bold mb-4 times-new-roman-font"
                  >
                    Job Title:{item.JobTitle} <ContentAreaData id={item.Id} />
                  </p>
                ))}
                <p className="text-md">{profileData?.JobTitle}</p>{" "}
              </div>
              <p className="text-md">Senior Developer</p>
            </div>

            <div className="flex flex-col items-start">
              <p className="text-xl font-bold mt-2">CV Strength</p>
              <div className="h-1 w-full rounded bg-[#1eeb7ac3] dark:bg-green mt-2">
                <div className="h-1 bg-primary" style={{ width: "45%" }}></div>
              </div>
              <span className="text-sm mt-1">
                <i className="far fa-calendar "></i> Last Modified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
