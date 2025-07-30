import React from "react";

const NavigationLoader = () => {
  return(
      <>
          <div className="placeholder relative h-[300px] bg-gray-50">
              <div className="preloader-wrap absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white/90">
                  <div className="loader"></div>
              </div>
          </div>
      </>
  )
}

export default NavigationLoader