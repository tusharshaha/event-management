import React from 'react';

const Opportunity = () => {
  const opportunities = [
    {
      title: "Be a developer",
      subTitle: "Experience based roles",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi error, soluta expedita ad consequuntur facilis aperiam ducimus exercitationem dolorum. Quas laborum esse expedita id non neque quos, possimus perferendis."
    },
    {
      title: "Be an analyst",
      subTitle: "Business analyst roles",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi error, soluta expedita ad consequuntur facilis aperiam ducimus exercitationem dolorum. Quas laborum esse expedita id non neque quos, possimus perferendis."
    },
    {
      title: "Be a designer",
      subTitle: "User experience, visual and interaction based roles",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi error, soluta expedita ad consequuntur facilis aperiam ducimus exercitationem dolorum. Quas laborum esse expedita id non neque quos, possimus perferendis."
    },
    {
      title: "Be a researcher",
      subTitle: "User experience roles",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi error, soluta expedita ad consequuntur facilis aperiam ducimus exercitationem dolorum. Quas laborum esse expedita id non neque quos, possimus perferendis."
    },
    {
      title: "Be a tester",
      subTitle: "Software tester roles",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sequi error, soluta expedita ad consequuntur facilis aperiam ducimus exercitationem dolorum. Quas laborum esse expedita id non neque quos, possimus perferendis."
    }
  ]
  return (
    <div className='clip_path_bottom log_bg h-auto flex items-center justify-center'>
      <div className="max-w-4xl mx-auto py-20 md:py-40 mt-20 md:mt-40">
        <div className='px-5'>
          {
            opportunities.map((ele, i) => (
              <div className='mb-10 pb-10 border-b border-slate-300' key={i}>
                <div>
                  <h3 className='font-bold text-3xl md:text-4xl uppercase text-sky-500'>{ele.title}</h3>
                  <h4 className='font-bold text-base md:text-1xl uppercase text-sky-700 mt-1 tracking-widest'>{ele.subTitle}</h4>
                </div>
                <p className='font-semibold text-sm md:text-base text-slate-600 mt-5'>{ele.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Opportunity;