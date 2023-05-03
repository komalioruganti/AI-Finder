import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Button } from "@material-tailwind/react";
import NearMeIcon from "@mui/icons-material/NearMe";
import FavoriteIcon from "@mui/icons-material/Favorite";
import kid from "../../assets/images/kid.png";
import image from "../../assets/images/notes-bg.png";
import Divider from "./Divider";
import { useParams } from "react-router-dom";
import getAiHandler from "../../features/getAiHandler";

const CardDetail = () => {
  const { slug } = useParams();
  const { getAI } = getAiHandler();

  const [cardDetails, setCardDetails] = useState();

  const getAiDetails = () => {
    getAI(slug).then((res) => {
      console.log(res);
      setCardDetails(res.data[0]);
    });
  };
  useEffect(() => {
    getAiDetails();
  }, [slug]);

  return (
    <div className="container p-2 md:p-5 max-w-[1024px] mx-auto text-white ">
      <div className="flex gap-3 md:gap-8">
        <div className="">
          <div className="h-38 w-36 rounded-xl">
            <img
              src={cardDetails?.image}
              alt="ai-image"
              className="h-full w-full object-cover object-fit object-center rounded-xl"
            />
          </div>
          <div className="mt-2 flex justify-between ">
            <a href={cardDetails?.website}>
              <Button className="flex gap-1 items-center bg-indigo-600 px-4 py-2 rounded-md">
                <NearMeIcon sx={{ fontSize: "1.1rem" }} /> Visit
              </Button>
            </a>
            <Button className="bg-pink-500 px-4 py-2 rounded-md">
              <FavoriteIcon sx={{ fontSize: "1rem" }} />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-[20px]">{cardDetails?.name}</h1>
          {/* <p>Unclaimed</p>
          <p>200 per month</p> */}
          {/* <div className="flex gap-3">
            <Rating name="read-only" value={3} />
            <p>3.3</p>
          </div> */}
          <div className="flex gap-3 flex-wrap mt-3">
            {cardDetails?.tags?.map((el) => (
              <span
                key={el}
                className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl"
              >
                {el}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Divider DividerName="overview" />
        <div className="mt-5">
          <h1 className="text-xl md:text-2xl font-bold">
            {cardDetails?.desc_title}
          </h1>
          <p className="mt-1">{cardDetails?.description}</p>
          {/* <div className="mt-3">
            <img
              src={image}
              className="object-fit object-center w-auto h-auto object-cover rounded-xl"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="">
        <p className="text-center">More You might Like</p>
      </div> */}

      <div className="mt-10">
        <Divider DividerName="comments" />
        {/* 
        <div className="border border-gray-500 p-5 rounded-lg">
          <Rating name="read-only" value={3} />
          <p className="mt-3">Anime Video</p>
          <div className="flex gap-3 items-center mt-5">
            <img src={kid} className="h-8 w-8 rounded-full" />{" "}
            <p>Google User</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CardDetail;

// import React from "react";
// import Rating from "@mui/material/Rating";
// import { Button } from "@material-tailwind/react";
// import NearMeIcon from "@mui/icons-material/NearMe";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import kid from "../../assets/images/kid.png";
// import image from "../../assets/images/notes-bg.png";
// import Divider from "./Divider";

// const CardDetail = () => {
//   return (
//     <div className="container p-2 md:p-5 max-w-[1024px] mx-auto text-white">
//       <div className="flex gap-3 md:gap-8">
//         <div className="">
//           <div className="h-38 w-36 rounded-xl">
//             <img
//               src={kid}
//               className="object-cover object-fit object-center rounded-xl"
//             />
//           </div>
//           <div className="mt-2 flex justify-between ">
//             <Button className="flex gap-1 items-center bg-indigo-600 px-4 py-2 rounded-md">
//               <NearMeIcon sx={{ fontSize: "1.1rem" }} /> Visit
//             </Button>
//             <Button className="bg-pink-500 px-4 py-2 rounded-md">
//               <FavoriteIcon sx={{ fontSize: "1rem" }} />
//             </Button>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <h1 className="font-bold text-[20px]">Quickvideo.ai</h1>
//           <p>Unclaimed</p>
//           <p>200 per month</p>
//           <div className="flex gap-3">
//             <Rating name="read-only" value={3} />
//             <p>3.3</p>
//           </div>
//           <div className="flex gap-3 flex-wrap mt-3">
//             <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
//               Youtube Shorts
//             </span>
//             <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
//               Reacting Video
//             </span>
//             <span className="bg-indigo-200 px-3 py-1 text-gray-900 text-sm font-bold rounded-xl">
//               Content Creation
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10">
//         <Divider DividerName="overview" />
//         <div className="mt-5">
//           <h1 className="text-xl md:text-2xl font-bold">
//             Create YouTube Shorts and TikToks 10x faster with the power of AI
//           </h1>
//           <p className="mt-1">Some text here</p>
//           <div className="mt-3">
//             <img
//               src={image}
//               className="object-fit object-center w-auto h-auto object-cover rounded-xl"
//             />
//           </div>
//         </div>
//       </div>
//       {/* <div className="">
//         <p className="text-center">More You might Like</p>
//       </div> */}

//       <div className="mt-10">
//         <Divider DividerName="comments" />

//         <div className="border border-gray-500 p-5 rounded-lg">
//           <Rating name="read-only" value={3} />
//           <p className="mt-3">Anime Video</p>
//           <div className="flex gap-3 items-center mt-5">
//             <img src={kid} className="h-8 w-8 rounded-full" />{" "}
//             <p>Google User</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardDetail;
