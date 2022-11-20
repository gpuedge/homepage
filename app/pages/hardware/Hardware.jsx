import "../dedicated-server/dedicated.css";
import A100 from "../../assets/A100.png";
import RTX3060 from "../../assets/3060.png";
import RTX3070 from "../../assets/3070.png";
import RTX3090 from "../../assets/3090.png";
import datacenter from "../../assets/datacenter.png";
import { TiTick } from "react-icons/ti";

export const meta = () => ({
  title: "GPUX - Blog",
  description: `
    GPUX is a distributed supercomputer. 
  `,
});

const Hardware = () => {
  return (
    <div className="dedicated_container">
      <div className="dedicated_header">
        <div className="dedicated_header_wrapper web-align">
          <div>
            <h1>Buy hardware</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              accusantium.
            </p>
          </div>
          <div>
            <img src={datacenter} alt="" />
          </div>
        </div>
      </div>
      {/* pricing table for desktop */}

      <div className="dedicated_pricing_desktop web-align">
        <table className="dedicated_pricing_table">
          <thead>
            <tr>
              <th></th>
              <th>
                <div className="dedicated_pricing_card">
                  <div className="pricing_title">
                    <img src={A100} alt="" />
                    <h3>A 100</h3>
                  </div>
                  <div className="pricing_specs">
                    <p>AMD EPYC 7252 (8 cores, 16 threads)</p>
                  </div>

                  <div className="pricing_price">
                    <p>$0.15 / hour</p>
                    <p>
                      <span>Setup fee:</span> $50
                    </p>
                  </div>
                  <div className="pricing_buy">
                    <button>Buy</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="dedicated_pricing_card">
                  <div className="pricing_title">
                    <img src={A100} alt="" />
                    <h3>A 100</h3>
                  </div>
                  <div className="pricing_specs">
                    <p>AMD EPYC 7252 (8 cores, 16 threads)</p>
                  </div>

                  <div className="pricing_price">
                    <p>$0.15 / hour</p>
                    <p>
                      <span>Setup fee:</span> $50
                    </p>
                  </div>
                  <div className="pricing_buy">
                    <button>Buy</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="dedicated_pricing_card">
                  <div className="pricing_title">
                    <img src={A100} alt="" />
                    <h3>A 100</h3>
                  </div>
                  <div className="pricing_specs">
                    <p>AMD EPYC 7252 (8 cores, 16 threads)</p>
                  </div>

                  <div className="pricing_price">
                    <p>$0.15 / hour</p>
                    <p>
                      <span>Setup fee:</span> $50
                    </p>
                  </div>
                  <div className="pricing_buy">
                    <button>Buy</button>
                  </div>
                </div>
              </th>
              <th>
                <div className="dedicated_pricing_card">
                  <div className="pricing_title">
                    <img src={A100} alt="" />
                    <h3>A 100</h3>
                  </div>
                  <div className="pricing_specs">
                    <p>AMD EPYC 7252 (8 cores, 16 threads)</p>
                  </div>

                  <div className="pricing_price">
                    <p>$0.15 / hour</p>
                    <p>
                      <span>Setup fee:</span> $50
                    </p>
                  </div>
                  <div className="pricing_buy">
                    <button>Buy</button>
                  </div>
                </div>
              </th>
            </tr>
            <div>
              <p>Hardware</p>
            </div>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>
              <td>AMD Ryzen™ 5 3600</td>
              <td>AMD Ryzen™ 5 3600</td>
              <td>AMD Ryzen™ 5 3600</td>
              <td>AMD Ryzen™ 5 3600</td>
            </tr>
            <tr>
              <td>GPU</td>
              <td>A100</td>
              <td>A4000</td>
              <td>RTX 3060</td>
              <td>RTX 3090</td>
            </tr>
            <tr>
              <td>RAM</td>
              <td>64GB</td>
              <td>64GB</td>
              <td>64GB</td>
              <td>64GB</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>1TB</td>
              <td>1TB</td>
              <td>1TB</td>
              <td>1TB</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>
                <TiTick />
              </td>
              <td>
                <TiTick />
              </td>
              <td>
                <TiTick />
              </td>
              <td>
                <TiTick />
              </td>
            </tr>

            <tr>
              <td>Price</td>
              <td>$2.02 / hour</td>
              <td>$0.25 / hour</td>
              <td>$0.15 / hour</td>
              <td>$0.45 / hour</td>
            </tr>

            <div style={{ margin: "10px 0 5px 0" }}>
              <p>Software</p>
            </div>
            <tr className="next_section">
              <td>Windows</td>
              <td>Windows 10</td>
              <td>Windows 10</td>
              <td>Windows 10</td>
              <td>Windows 10</td>
            </tr>
            <tr>
              <td>Linux</td>
              <td>Ubuntu 20.04</td>
              <td>Ubuntu 20.04</td>
              <td>Ubuntu 20.04</td>
              <td>Ubuntu 20.04</td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
      {/* for mobile */}
      <div className="dedicated_pricing_mobile web-align">
        <div className="dedicated_pricing_card">
          <div className="pricing_title">
            <img src={A100} alt="" />
            <h3>A 100</h3>
          </div>
          <div className="pricing_specs">
            <li>
              <span>Modal: </span>AMD EPYC 7252 (8 cores, 16 threads)
            </li>
            <li>
              <span>Memory: </span>256GB DDR4 3200GHZ
            </li>
            <li>
              <span>Storage: </span>1TB NVMe Gen4 SSD
            </li>
            <li>
              <span>Bandwidth: </span> Unmetered
            </li>
            <li>
              <span>OS: </span> Linux
            </li>
          </div>

          <div className="horizontal_line"></div>

          <div className="pricing_price">
            <p>
              <span>Price:</span> $500
            </p>
            <p>
              <span>Setup fee:</span> $50
            </p>
          </div>
          <div className="pricing_buy">
            <button>Buy</button>
            <p>Details</p>
          </div>
        </div>
        <div className="dedicated_pricing_card">
          <div className="pricing_title">
            <img src={A100} alt="" />
            <h3>A 100</h3>
          </div>
          <div className="pricing_specs">
            <li>
              <span>Modal: </span>AMD EPYC 7252 (8 cores, 16 threads)
            </li>
            <li>
              <span>Memory: </span>256GB DDR4 3200GHZ
            </li>
            <li>
              <span>Storage: </span>1TB NVMe Gen4 SSD
            </li>
            <li>
              <span>Bandwidth: </span> Unmetered
            </li>
            <li>
              <span>OS: </span> Linux
            </li>
          </div>

          <div className="horizontal_line"></div>

          <div className="pricing_price">
            <p>
              <span>Price:</span> $500
            </p>
            <p>
              <span>Setup fee:</span> $50
            </p>
          </div>
          <div className="pricing_buy">
            <button>Buy</button>
            <p>Details</p>
          </div>
        </div>
        <div className="dedicated_pricing_card">
          <div className="pricing_title">
            <img src={A100} alt="" />
            <h3>A 100</h3>
          </div>
          <div className="pricing_specs">
            <li>
              <span>Modal: </span>AMD EPYC 7252 (8 cores, 16 threads)
            </li>
            <li>
              <span>Memory: </span>256GB DDR4 3200GHZ
            </li>
            <li>
              <span>Storage: </span>1TB NVMe Gen4 SSD
            </li>
            <li>
              <span>Bandwidth: </span> Unmetered
            </li>
            <li>
              <span>OS: </span> Linux
            </li>
          </div>

          <div className="horizontal_line"></div>

          <div className="pricing_price">
            <p>
              <span>Price:</span> $500
            </p>
            <p>
              <span>Setup fee:</span> $50
            </p>
          </div>
          <div className="pricing_buy">
            <button>Buy</button>
            <p>Details</p>
          </div>
        </div>
        <div className="dedicated_pricing_card">
          <div className="pricing_title">
            <img src={A100} alt="" />
            <h3>A 100</h3>
          </div>
          <div className="pricing_specs">
            <li>
              <span>Modal: </span>AMD EPYC 7252 (8 cores, 16 threads)
            </li>
            <li>
              <span>Memory: </span>256GB DDR4 3200GHZ
            </li>
            <li>
              <span>Storage: </span>1TB NVMe Gen4 SSD
            </li>
            <li>
              <span>Bandwidth: </span> Unmetered
            </li>
            <li>
              <span>OS: </span> Linux
            </li>
          </div>

          <div className="horizontal_line"></div>

          <div className="pricing_price">
            <p>
              <span>Price:</span> $500
            </p>
            <p>
              <span>Setup fee:</span> $50
            </p>
          </div>
          <div className="pricing_buy">
            <button>Buy</button>
            <p>Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hardware;
