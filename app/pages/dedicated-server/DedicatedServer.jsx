import "./dedicated.css";
import A100 from "../../assets/A100.png";
import RTX3060 from "../../assets/3060.png";
import RTX3070 from "../../assets/3070.png";
import RTX3090 from "../../assets/3090.png";
import CPU from "../../assets/cpu.png";
import datacenter from "../../assets/datacenter.png";
import { TiTick } from "react-icons/ti";

export const meta = () => ({
  title: "GPUX - Dedicated Server",
  description: `
    Rent bare metal.
  `,
});

const offering = [
  {img: CPU, name: "Ryzen 7950X", cpu: "Ryzen 7950X (16/32 cores)", cpu_name: "Ryzen™ 9 7950x", price_mon: 160, setup: 160, 
    deployment: "2 weeks", gpu_name: "None",
    ram: 128, ram_gen: "DDR5", ram_speed: "5200", per_hour: 0.21, avx512: true, sgx: false, tdx: false, sev: false,
    bandwidth: "10G", storage: "2T NVMe"},
  {img: RTX3090, name: "4xRTX4090", cpu: "Xeon 8350C (32/64 cores)", cpu_name: "Xeon™ 8350C", price_mon: 2334, setup: 2334, 
  deployment: "2 weeks", gpu_name: "RTX 4090",
    ram: 256, ram_gen: "DDR4", ram_speed: "3200", per_hour: 3.2, avx512: true, sgx: true, tdx: false, sev: false,
    bandwidth: "10G", storage: "2T NVMe"},
  {img: A100, name: "1xA100", cpu: "EPYC 7252 (8/16 cores)", cpu_name: "EPYC™ 7252", price_mon: 999, setup: 999, 
  deployment: "2 weeks", gpu_name: "A100",
    ram: 256, ram_gen: "DDR4", ram_speed: "3200", per_hour: 1.37, avx512: true, sgx: false, tdx: false, sev: true,
    bandwidth: "1G", storage: "1T NVMe"},
  {img: A100, name: "8xA100", cpu: "EPYC 7542 (64/128 cores)", cpu_name: "EPYC™ 7542", price_mon: 9600, setup: 9600, deployment: "2 weeks",
    ram: 1024, ram_gen: "DDR4", ram_speed: "3200", per_hour: 13.16, avx512: true, sgx: false, tdx: false, sev: true,
    gpu_name: "A100",
    bandwidth: "10G", storage: "2x 2T NVMe"}, 
  {img: A100, name: "8xH100", cpu: "EPYC 7542 (64/128 cores)", cpu_name: "EPYC™ 7542", price_mon: 0, setup: 0, deployment: "Unknown",
    ram: 1024, ram_gen: "DDR4", ram_speed: "3200", per_hour: 0.0, avx512: true, sgx: false, tdx: false, sev: true,
    gpu_name: "H100",
    bandwidth: "10G", storage: "2T NVMe"},
]

const DedicatedServer = () => {
  return (
    <div className="dedicated_container">
      <div className="dedicated_header">
        <div className="dedicated_header_wrapper web-align">
          <div>
            <h1>Run on bare-metal</h1>
            <p>
              {" "}
              All instances have linux preinstalled.
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
              {offering.map(o=> 
                <th>
                  <div className="dedicated_pricing_card">
                    <div className="pricing_title">
                      <img src={o.img} alt="" />
                      <h3>{o.name}</h3>
                    </div>
                    <div className="pricing_specs">
                      <p>{o.cpu}</p>
                    </div>

                    <div className="pricing_price">
                      <p>${o.price_mon} / Month</p>
                      <p>
                        <span>Setup:</span> ${o.setup}
                      </p>
                      <p>
                        <span>Deployment:</span> {o.deployment}
                      </p>
                    </div>
                    <div className="pricing_buy">
                      <button>Rent</button>
                      <p>Buy It</p>
                    </div>
                  </div>
                </th>
              )}
            </tr>
            <div>
              <p>Hardware</p>
            </div>
          </thead>
          <tbody>
            <tr>
              <td>CPU</td>
              {offering.map(o=> <td>{o.cpu_name}</td>)}
            </tr>
            <tr>
              <td>GPU</td>
              {offering.map(o=> <td>{o.gpu_name}</td>)}
            </tr>
            <tr>
              <td>RAM</td>
              {offering.map(o=> <td>{o.ram}G-{o.ram_speed}</td>)}
            </tr>
            <tr>
              <td>Storage</td>
              {offering.map(o=> <td>{o.storage}</td>)}
            </tr>
            <tr>
              <td>Bandwidth</td>
              {offering.map(o=> <td>{o.bandwidth}</td>)}
            </tr>
            <tr>
              <td>Unmetered</td>
              {offering.map(o=> <td><TiTick /></td>)}
            </tr>

            <tr>
              <td>Price</td>
              {offering.map(o=> <td>${o.per_hour} / hour</td>)}
            </tr>

            <div style={{ margin: "10px 0 5px 0" }}>
              <p>Perks</p>
            </div>
            <tr className="next_section">
              <td>AVX512</td>
              {offering.map(o=> <td>{o.avx512 ? <TiTick /> : null}</td>)}
            </tr>
            <tr>
              <td>SGX</td>
              {offering.map(o=> <td>{o.sgx ? <TiTick /> : null}</td>)}
            </tr>
            <tr>
              <td>TDX</td>
              {offering.map(o=> <td>{o.tdx ? <TiTick /> : null}</td>)}
            </tr>
            <tr>
              <td>SEV</td>
              {offering.map(o=> <td>{o.sev ? <TiTick /> : null}</td>)}
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
      {/* for mobile */}
      <div className="dedicated_pricing_mobile web-align">
        {offering.map(o=> 
          <div className="dedicated_pricing_card">
            <div className="pricing_title">
              <img src={o.img} alt="" />
              <h3>{o.name}</h3>
            </div>
            <div className="pricing_specs">
              <li>
                <span>Modal: </span>{o.cpu}
              </li>
              <li>
                <span>Memory: </span>{o.ram}G-{o.ram_speed}
              </li>
              <li>
                <span>Storage: </span>{o.storage}
              </li>
              <li>
                <span>Bandwidth: </span> {o.bandwidth} Unmetered
              </li>
              <li>
                <span>OS: </span> Linux
              </li>
            </div>
            <div className="horizontal_line"></div>
            <div className="pricing_price">
              <p>
                <span>Price:</span> ${o.price_mon} / Month
              </p>
              <p>
                <span>Setup fee:</span> ${o.setup}
              </p>
            </div>
            <div className="pricing_buy">
              <button>Rent</button>
              <p>Buy It</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DedicatedServer;
