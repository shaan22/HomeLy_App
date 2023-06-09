import React from 'react'

function HomeLgCard({image}) {
  return (
    <>
         <div className="hidden lg:block w-64 px-9">
        <div className="w-full h-52">
          <img
            className="w-full h-full object-cover object-center rounded-md"
            src={image}
            
          />
        </div>
       
      </div>
    </>
  )
}

function HomeCategory(props){
    return (
        <>
          <HomeLgCard {...props} />
        </>
      );
}

export default HomeCategory