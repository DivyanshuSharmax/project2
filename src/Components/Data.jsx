import image1 from "../assets/img2.jpg";
import image2 from "../assets/img1.avif";
import image3 from "../assets/img3.jpg";
import { useState } from "react";

function Data() {

  const [bar1, setBar1] = useState(false)
  const [bar2, setBar2] = useState(false)
  const [bar3, setBar3] = useState(false)

  const[showabledata, setshowabledata] = useState([])

  function bar1change() {
    setshowabledata([])
    
    setBar1(true)
    setBar2(false)
    setBar3(false)

    setshowabledata(data)
    console.log(showabledata)
  }

  function bar2change() {
    setshowabledata([])

    setBar1(false)
    setBar2(true)
    setBar3(false)

    data.filter((item) => {
      if (item.type === 'article') {
        setshowabledata((prevItems) => [...prevItems, item])
        console.log(showabledata)
      }
    })

  }

  function bar3change() {
    setshowabledata([])
    setBar1(false)
    setBar2(false)
    setBar3(true)

    data.filter((item) => {
      if (item.type === 'product') {
        setshowabledata((prevItems) => [...prevItems, item])
        console.log(showabledata)
      }
    })
  }


  const data = [
    {
      id: 1,
      imgurl: image1,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
      type: 'article'
    },
    {
      id: 2,
      imgurl: image2,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
      type: 'product'
    },
    {
      id: 3,
      imgurl: image3,
      heading: "Create Successful Content by Planning Ahead",
      read: "2 minutes read",
      paragraph:
        "Creating successful content requires thoughtful planning and clear goals. Start by defining your objective—whether it’s to inform, engage, or persuade your audience. Next, identify who your target audience is and tailor the message to their needs or interests.",
      p: "I don't know",
      type: "article"
    },
  ];

  return (
    <>
      <div className='bg-blue-300 w-80 h-16 relative left-60 clip-custom p-5 smm:left-[28vw]  lg:left-[37vw] mb-20'>

        {bar1 ?
          <>
            <a className='text-blue-900 font-semibold underline decoration-orange-600 decoration-4 m-2 cursor-pointer'>All</a>
          </>
          : <a className='text-blue-900 m-2 cursor-pointer' onClick={bar1change}>All</a>}

        {bar2 ?
          <>
            <a className='text-blue-900 font-semibold underline decoration-orange-600 decoration-4 m-3 cursor-pointer' onClick={bar2change}>Articles</a>
          </> : <a className='text-blue-900 m-3 cursor-pointer' onClick={bar2change}>Articles</a>}

        {bar3 ?
          <>
            <a className='text-blue-900 m-1 font-semibold underline decoration-orange-600 decoration-4 cursor-pointer' onClick={bar3change}>Product Updates</a>
          </> : <a className='text-blue-900 m-1 cursor-pointer' onClick={bar3change}>Product Updates</a>}
      </div>
      <div className="h-screen w-full ">
        {showabledata.map((item) => (
          <>
         
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
          </>
        ))}
      </div>

    </>
  );
}

export default Data;
