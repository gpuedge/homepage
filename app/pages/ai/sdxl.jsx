import { Link } from "@remix-run/react";
import AI_IMG from "~/assets/aii.jpg";
import BLOG_SDXL_BIG from "~/assets/sdxl_big.jpg";
import BlogRightMenu from "~/components/blog/BlogRightMenu";

export const meta = () => ({
  title: 'StableDiffusionXL - 50% speed up',
  description: `
    Speed up your StableDiffusionXL or other pytorch pipelines on rtx 4090 and h100 cloud gpus.
  `,
});

const SDXL = () => {
  return (
    <div className="blog-container web-align">
      <div className="blog-container-left">
        <div className="blog-container-wrapper">
          <h1 className="blog-title">Make StableDiffusionXL 50% faster on RTX 4090</h1>
          <span className="blog-small-text">⚡AI Technology</span>
          <img src={BLOG_SDXL_BIG} alt="" />
          <hr />
          <h1>The Problem</h1>
          <p className="blog-desc">
            Pytorch2 has a lot of optimization improvements but the upstream version when
            running <pre><code>pip3 install pytorch</code></pre> will pull pytorch2.0.1 with cu117. 
          </p>
          <p className="blog-desc">
            The problem with this is cu117 does not properly support newer GPUs like the RTX4090
            or H100, infact cu117 wont even run on a H100. 
          </p>
          <p className="blog-desc">
            Popular cloud gpu providers that are used for deep learning often carry the cu117 default, 
            hurting performance.
          </p>
          <h1>The Fix</h1>
          <p className="blog-desc">
            To fix this we should be targetting cu118 until its adapted in upstream pip packages.
          </p>
          <p className="blog-desc">
            This means upgrading to an image cuda version of atleast 11.8, this can be done in docker by using
            <pre><code>docker.io/nvidia/cuda:12.2.0-devel-ubuntu22.04</code></pre> as our base image.
            Or by upgrading our NVIDIA driver + CUDA version.
          </p>
          <p className="blog-desc">
            Also we need to pull pytorch with cu118 by doing
            <pre><code>
                pip3 install torch==2.0.1+cu118 \<br/>
                --extra-index-url https://download.pytorch.org/whl/cu118
            </code></pre>
          </p>
          <p className="blog-desc">
            We can grab torchvision and torchaudio as well
            <pre><code>
                pip3 install torch==2.0.1+cu118 \<br/>
                torchvision==0.15.2+cu118 \<br/>
                torchaudio \<br/>
                --extra-index-url https://download.pytorch.org/whl/cu118
            </code></pre>
          </p>
          <h1>The Reward</h1>
          <p className="blog-desc">
            Enjoy an overall 50% speedup on all ADA LOVELACE workloads now!
            <pre><code>
                -- cu117 -- <br/>
                {"68%|███████▏  | 34/50 [00:04<00:01,  4.88it/s]"}<br/>
                {"70%|███████▍  | 35/50 [00:04<00:01,  4.88it/s]"}<br/>
                -- cu118 -- <br/>
                {"72%|███████▏  | 36/50 [00:04<00:01,  7.78it/s]"}<br/>
                {"74%|███████▍  | 37/50 [00:04<00:01,  7.78it/s]"}<br/>
                {"76%|███████▌  | 38/50 [00:04<00:01,  7.78it/s]"}<br/>
                {"78%|███████▊  | 39/50 [00:05<00:01,  7.78it/s]"}<br/>
                {"80%|████████  | 40/50 [00:05<00:01,  7.78it/s]"}<br/>
            </code></pre>
          </p>
        </div>
      </div>
      <BlogRightMenu />
    </div>
  );
};

export default SDXL;
