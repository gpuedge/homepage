import { Link } from "@remix-run/react";
import RENDER_FARM from "~/assets/3199.jpg";
import BlogRightMenu from "~/components/blog/BlogRightMenu";

export const meta = () => ({
  title: 'Blender Rendering - Render Farm',
  description: `
    Render your blender animation on a distributed GPU render farm.
  `,
});

const Render = () => {
  return (
    <div className="blog-container-wrapper">
      <h1 className="blog-title">0% lost time</h1>
      <span className="blog-small-text">&#128640; 100x Boost</span>
      <img src={RENDER_FARM} alt="" />
      <hr />
      <h1>Introduction</h1>
      <p className="blog-desc">
            Do you want to eliminate your fixed costs? Are you looking for a simple, affordable and professional solution to render your Blender scenes? Do you want to have full control over the entire rendering process? If the answer is yes, then our Blender Network Render Farm is what you need!
      </p>
      <h1>Is time a huge concern in your animation and film production?</h1>
      <p className="blog-desc">
            Are you aware of how much time really matters in your animation and film production? Time is money, after all. And if you're working on a limited budget, every extra minute spent rendering will cost more than the average render farm employee would make in an hour!

            Solving this problem for you are our render farm services. We're one of the cheapest render farms out there, so even if you have a tight budget but still want to get things done quickly we can help.
      </p>
          <h1>Our Network is the fastest distributed render farm for Blender out there. You will be surprised!</h1>
      <p className="blog-desc">
            Our render farm is the fastest distributed rendering system out there. You can be sure that your renders will be done in a fraction of the time it would take on a single workstation. We have a network of thousands of computers, all connected together. This makes it possible to use all available GPUs (graphics cards) at once and get results even faster!
      </p>
          <h1>OctaneRender, Redshift, Cycles, Arnold or any other GPU or CPU renderer are fully supported by our render farm through Blender Cycles - Network Render addon</h1>
      <p className="blog-desc">
            Render farms are a great way to get the most out of your rendering. You can use render farms to render with GPU or CPU, batch renders and even easily scale up your farm by adding workers.
      </p>
          <h1>Eliminate all fixed costs while paying only for the actual rendering time per minute</h1>
      <p className="blog-desc">
            You can eliminate all fixed costs while paying only for the actual rendering time per minute. This means no contracts, no minimum usage requirements and no expensive equipment that you don't need.
      </p>
      <h1>Conclusion</h1>
      <p className="blog-desc">
            By using our Blender Render Farm, you will save precious time and resources. It is the perfect solution for your rendering needs. Whether you are an independent artist or professional production studio looking to rent our render farm on demand or as a monthly subscription service, we cater to all your needs
        <br></br>
        <br></br>
        Get started on <a href="https://gpux.ai/">GPUX</a> today!
      </p>
    </div>
  );
};

export default Render;
