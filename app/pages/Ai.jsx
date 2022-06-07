import AI_IMG from "~/assets/rl_ai.gif";

const Ai = () => {
  return (
    <div className="ai-container web-align">
      <div>
        <h1>Zero interruption</h1>
        <img src={AI_IMG} alt="" />
        <p>
          Distributed learning for your neural net. Easily upload your dataset
          or run a graphical game + setup a RL environment. No spot
          interruption.
        </p>
      </div>
    </div>
  );
};

export default Ai;
