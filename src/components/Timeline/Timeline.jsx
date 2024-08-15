import Time from '../../assets/Images/Timeline.png';
import steps from '../../assets/Images/steps2.png';
import stepsMobile from '../../assets/Images/stepsmobile.png';

const Timeline = () => {
  return <div className=''>
      <img src={Time} className='float-right w-2/3 pt-5 mr-5 md:pt-10 md:w-2/5' loading="lazy"/>
      <img src={steps} loading="lazy" className='hidden sm:block'/>
      <img src={stepsMobile} loading="lazy" className='block sm:hidden'/>

  </div>;
};
export default Timeline;
