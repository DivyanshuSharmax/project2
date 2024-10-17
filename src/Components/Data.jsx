import image1 from "../assets/img2.jpg";
import image2 from "../assets/img1.avif";
import image3 from "../assets/img3.jpg";

function Data() {
  const data = [
    {
      id: 1,
      imgurl: image1,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
    },
    {
      id: 2,
      imgurl: image2,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
    },
    {
      id: 3,
      imgurl: image3,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
    },
  ];

  return (
    <div className="h-screen w-full ">
      {data.map((item) => (
        <div 
          key={item.id}
          className="flex gap-4 p-4 justify-center h-[40vw] lg:h-[20vw] " >
          <div className="left h-[20vw] flex-shrink-0">
            <img
              style={{
                clipPath: "polygon(0% 10%, 95% 0%, 100% 100%, 0% 100%)",
              }}
              className="w-[40vw] h-[33vw] object-cover lg:w-[21vw] lg:h-[17vw]"
              
              src={item.imgurl}
              alt={item.heading} // Add alt text for accessibility
            />
          </div>
          <div className="right flex flex-col justify-between lg:h-[12vw] h-[20vw] max-w-4xl">
            <h1 className="text-2xl lg:text-[1.7vw]  text-blue-600 font-bold">{item.heading}</h1>
            <div className="text-blue-400 lg:mt-2 ">{item.read}</div>
            <div className="mt-3 lg:mt-7 lg:max-w-xl ">{item.paragraph}</div>
            <div className="text-blue-400 lg:mt-3">{item.p}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
