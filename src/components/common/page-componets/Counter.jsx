import CountUp from 'react-countup';


const Counter = () => {
  return (
    <div className="flex-wrap justify-center gap-4 px-4 py-8 flex-align-center sm:justify-between bg-secondary">
      <div className="text-center">
        <h1 className="heading !text-slate-100">   <CountUp start={0} end={12}duration={15}></CountUp>k+</h1>
        <p className="text-slate-100">Renovation Projects</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">   <CountUp start={0} end={100}duration={15}></CountUp>+</h1>
        <p className="text-slate-100">Team Members</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">   <CountUp start={0} end={15}duration={15}></CountUp>k+</h1>
        <p className="text-slate-100">Projects Completed</p>
      </div>
      <div className="text-center">
        <h1 className="heading !text-slate-100">   <CountUp start={0} end={100}duration={15}></CountUp>%</h1>
        <p className="text-slate-100">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Counter;
