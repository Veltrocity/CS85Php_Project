import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from 'axios';
import background from './assets/ADL_04.jpg';

export default class PCentry extends Component {

    state = {
        buildName: '',
        buildDate: '',
        cpuSelection: '',
        motherboardSelection: '',
        ramSelection: '',
        hddSelection: '',
        psuSelection: '',
        listSent: false, 
        error: null
    }

    handlePartPick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.part.value);
        
        switch (e.currentTarget.part.value) {
            case "cpu":
                this.setState({cpuSelection: e.currentTarget.value})
                break;
            case "mobo":
                this.setState({motherboardSelection: e.currentTarget.value})
                break;
                case "ram":
                this.setState({ramSelection: e.currentTarget.value})
                break;
                case "hdd":
                this.setState({hddSelection: e.currentTarget.value})
                break;
                case "psu":
                this.setState({psuSelection: e.currentTarget.value})
                break;
            default:
            break;
        }
    }

    handleBuildName = e => {
        console.log(e.target.value);
        this.setState({buildName: e.target.value});
    }

    handleBuildDate = e => {
        console.log(e.target.value);
        this.setState({buildDate: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        let data = {
            buildDate: this.state.buildDate,
            buildName: this.state.buildName,
            cpu: this.state.cpuSelection,
            mobo: this.state.motherboardSelection,
            ram: this.state.ramSelection,
            hdd: this.state.hddSelection,
            psu: this.state.psuSelection,
        };
        console.log(data);

        axios({
            method: 'post',
            url: 'http://localhost:80/partpicker.php',
            data: data,
            headers : { 
                'Content-Type': 'application/json'
            }
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (response) {
            console.log(response);
        });
    }

    render () {

        let bgStyle = {
            backgroundImage: `url(${background})`,
            width: "100%",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }

        return (
            <div style={bgStyle}>
                    <form action="pcpartpicker_db.php" method="post">
                    <h1>ADL PC part builder</h1>
                    <h2>All the best parts in one location. 2019 edition </h2>
                    <h3></h3>
                    <fieldset>
                        <p>
                            <label for="pc_build_date">Pc build Date</label>
                            <input type="date" id="pc_build_date" name="pc_build_date" value={this.state.buildDate} onChange={this.handleBuildDate}/>
                        </p>
                    </fieldset>
                    <fieldset>
                        <legend>Build Info</legend>
                        <div>
                            <label for="Build_Name">Build Name</label>
                            <input type="text" id="Build_Name" name="Build_Name" value={this.state.buildName} onChange={this.handleBuildName}/>
                        </div>
                    </fieldset>
                    <div>
                        <legend>Part List</legend>       
                        <div>
                            <DropdownButton title={this.state.cpuSelection === '' ? 'Select CPU' : this.state.cpuSelection} variant="secondary">
                                <Dropdown.Item as="button" value="Intel Core i9-9900k" part="cpu" onClick={(e) => this.handlePartPick(e)}>Intel Core i9-9900k Coffee Lake 8-Core 16-thread 3.6GHz</Dropdown.Item>
                                <Dropdown.Item as="button" value="Intel Core i7-9700k" part="cpu" onClick={(e) => this.handlePartPick(e)}>Intel Core i7-9700k Coffee Lake 8-Core 3.6GHz</Dropdown.Item>
                                <Dropdown.Item as="button" value="Intel Core i5-9600k" part="cpu" onClick={(e) => this.handlePartPick(e)}>Intel Core i5-9600k Coffee Lake 6-core 3.7GHz</Dropdown.Item>
                                <Dropdown.Item as="button" value="AMD 2nd Gen Ryzen Threadripper 2950x" part="cpu" onClick={(e) => this.handlePartPick(e)}>AMD 2nd Gen Ryzen Threadripper 2950x, 16-core 32-thread 4.4GHz</Dropdown.Item>
                                <Dropdown.Item as="button" value="AMD Ryzen 7 2700x" part="cpu" onClick={(e) => this.handlePartPick(e)}>AMD Ryzen 7 2700x 8-core 3.7GHz</Dropdown.Item>
                                <Dropdown.Item as="button" value="Amd Ryzen 5 2600x" part="cpu" onClick={(e) => this.handlePartPick(e)}>Amd Ryzen 5 2600x 6-core 3.6GHz</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div>
                            <DropdownButton title={this.state.motherboardSelection === '' ? 'Select Motherboard' : this.state.motherboardSelection} variant="secondary">
                                <Dropdown.Item as="button" value="GIGABYTE X470" part="mobo" onClick={(e) => this.handlePartPick(e)}>GIGABYTE X470 AORUS ULTRA GAMING AM4</Dropdown.Item>
                                <Dropdown.Item as="button" value="MSI PERFORMANCE GAMING X470" part="mobo" onClick={(e) => this.handlePartPick(e)}>MSI PERFORMANCE GAMING X470 GAMING PLUS AM4</Dropdown.Item>
                                <Dropdown.Item as="button" value="ASUS ROG STRIX B450-F" part="mobo" onClick={(e) => this.handlePartPick(e)}>ASUS ROG STRIX B450-F GAMING AM4 AMD</Dropdown.Item>
                                <Dropdown.Item as="button" value="ASUS ROG Strix Z390-E" part="mobo" onClick={(e) => this.handlePartPick(e)}>ASUS ROG Strix Z390-E Gaming LGA 1151 (300 Series) Intel Z390</Dropdown.Item>
                                <Dropdown.Item as="button" value="MSI MPG Z390" part="mobo" onClick={(e) => this.handlePartPick(e)}>MSI MPG Z390 GAMING PRO CARBON AC LGA 1151 (300 Series) Intel Z390 </Dropdown.Item> 
                                <Dropdown.Item as="button" value="GIGABYTE Z390" part="mobo" onClick={(e) => this.handlePartPick(e)}>GIGABYTE Z390 AORUS PRO WIFI LGA 1151 (300 Series) Intel Z390</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div>
                            <DropdownButton title={this.state.ramSelection === '' ? 'Select RAM' : this.state.ramSelection} variant="secondary">
                                <Dropdown.Item as="button" value="G.SKILL TridentZ RGB Series 16GB" part="ram" onClick={(e) =>         this.handlePartPick(e)}>G.SKILL TridentZ RGB Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3200</Dropdown.Item>
                                <Dropdown.Item as="button" value="CORSAIR Vengeance RGB Pro 16G" part="ram" onClick={(e) => this.handlePartPick(e)}>CORSAIR Vengeance RGB Pro 16GB (2 x 8GB) 288-Pin DDR4 DRAM DDR4 3000 </Dropdown.Item>
                                <Dropdown.Item as="button" value="CORSAIR Vengeance LPX 16GB" part="ram" onClick={(e) => this.handlePartPick(e)}>CORSAIR Vengeance LPX 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3000</Dropdown.Item>
                                <Dropdown.Item as="button" value="G.SKILL Ripjaws V Series 16GB" part="ram" onClick={(e) => this.handlePartPick(e)}>G.SKILL Ripjaws V Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 2400</Dropdown.Item>
                                <Dropdown.Item as="button" value="G.SKILL TridentZ RGB Series 16GB" part="ram" onClick={(e) => this.handlePartPick(e)}>G.SKILL TridentZ RGB Series 16GB (2 x 8GB) 288-Pin DDR4 SDRAM DDR4 3000</Dropdown.Item>
                                <Dropdown.Item as="button" value="G.SKILL Ripjaws V Series 32GB" part="ram" onClick={(e) => this.handlePartPick(e)}>G.SKILL Ripjaws V Series 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3200</Dropdown.Item>
                                
                            </DropdownButton>
                        </div>
                        <div>
                            <DropdownButton title={this.state.hddSelection === '' ? 'Select Hard Drive' : this.state.hddSelection} variant="secondary">
                                <Dropdown.Item as="button" value="SAMSUNG 860 EVO Series 2.5 500GB" part="hdd" onClick={(e) => this.handlePartPick(e)}>SAMSUNG 860 EVO Series 2.5 500GB SATA III V-NAND 3-bit MLC Internal Solid State Drive</Dropdown.Item>
                                <Dropdown.Item as="button" value="WD Blue 3D NAND 1TB" part="hdd" onClick={(e) => this.handlePartPick(e)}>WD Blue 3D NAND 1TB Internal SSD - SATA III 6Gb/s 2.5"/7mm Solid State Drive</Dropdown.Item>
                                <Dropdown.Item as="button" value="Intel 660p Series M.2 2280 1TB" part="hdd" onClick={(e) => this.handlePartPick(e)}>Intel 660p Series M.2 2280 1TB PCIe NVMe 3.0 x4 3D2, QLC Internal Solid State Drive</Dropdown.Item>
                                <Dropdown.Item as="button" value="SAMSUNG 860 EVO Series 2.5 1TB" part="hdd" onClick={(e) => this.handlePartPick(e)}>SAMSUNG 860 EVO Series 2.5" 1TB SATA III V-NAND 3-bit MLC Internal Solid State Drive</Dropdown.Item>
                                <Dropdown.Item as="button" value="Kingston A400 2.5 240GB" part="hdd" onClick={(e) => this.handlePartPick(e)}>Kingston A400 2.5" 240GB SATA III TLC Internal Solid State Drive</Dropdown.Item>
                                <Dropdown.Item as="button" value="Crucial MX500 2.5 500GB" part="hdd" onClick={(e) => this.handlePartPick(e)}>Crucial MX500 2.5" 500GB SATA III 3D NAND Internal Solid State Drive </Dropdown.Item>
                                <Dropdown.Item as="button" value="SAMSUNG 970 EVO PLUS M.2 2280 250GB" part="hdd" onClick={(e) => this.handlePartPick(e)}>SAMSUNG 970 EVO PLUS M.2 2280 250GB PCIe Gen 3.0 x4, NVMe 1.3 V-NAND 3-bit MLC Internal Solid State Drive</Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div>
                            <DropdownButton title={this.state.psuSelection === '' ? 'Select Power Supply' : this.state.psuSelection} variant="secondary">
                                <Dropdown.Item as="button" value="CORSAIR RMx Series RM650x" part="psu" onClick={(e) => this.handlePartPick(e)}>CORSAIR RMx Series RM650x 2018 CP-9020178-NA 650W ATX12V / EPS12V 80 PLUS GOLD Certified Full Modular</Dropdown.Item>
                                <Dropdown.Item as="button" value="EVGA SuperNOVA 850 G2" part="psu" onClick={(e) => this.handlePartPick(e)}>EVGA SuperNOVA 850 G2 220-G2-0850-XR 80+ GOLD 850W Fully Modular </Dropdown.Item>
                                <Dropdown.Item as="button" value="Seasonic FOCUS Plus Series SSR-850FX 850W" part="psu" onClick={(e) => this.handlePartPick(e)}>Seasonic FOCUS Plus Series SSR-850FX 850W 80+ Gold ATX12V & EPS12V Full Modular</Dropdown.Item>
                                <Dropdown.Item as="button" value="CORSAIR RMx Series RM1000X 1000W" part="psu" onClick={(e) => this.handlePartPick(e)}>CORSAIR RMx Series RM1000X 1000W 80 PLUS GOLD Haswell Ready Full Modular ATX12V & EPS12V Power Supply</Dropdown.Item>
                                <Dropdown.Item as="button" value="Rosewill PHOTON Series 1200W" part="psu" onClick={(e) => this.handlePartPick(e)}>Rosewill PHOTON Series 1200W Full Modular Gaming Power Supply, 80 PLUS Gold Certified</Dropdown.Item>
                                
                            </DropdownButton>
                        </div>     
                    
                    </div>
                    <p>
                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    </p>
                </form>
            </div>
        );
    }
}