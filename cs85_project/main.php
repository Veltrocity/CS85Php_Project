<!DOCTYPE html>
<!-- Filename: interviews.php -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pc_Build_Database</title>
</head>

<style>
    .dropbtn {
        background-color: #3366ff;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #ddd;}

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {background-color: #3e8e41;}
    body {
        background-image: url("ADL_04.jpg");
    }
</style>
</head>


<body>
        <form>
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
                            <input type="text" id="Build_Name" name="Build_Name" value="" onChange={}/>
                        </div>
                    </fieldset>
                        <div class="dropdown">
                            <button class="dropbtn">CPU</button>
                            <div class="dropdown-content">
                            <a href="#cpu_01">Intel Core i9-9900k</a>
                            <a href="#cpu_02">Intel Core i7-9700k</a>
                            <a href="#cpu_03">Intel Core i5-9600k</a>
                                <a href = "#cpu_4"> Amd 2nd Gen Ryzen Threadripper</a>
                                <a href = "#cpu_5"> Amd Ryzen 7 2700x</a>
                                <a href = "#cpu_6"> Amd Ryzen 5 2600x </a>

                            </div>
                        </div>
                            <div class="dropdown">
                                <button class="dropbtn">Motherboard</button>
                                <div class="dropdown-content">
                                 <a href="#mobo_01">GIGABYTE X470</a>
                                    <a href="#mobo_02">MSI PERFORMANCE GAMING X470</a>
                                    <a href="#mobo_3">ASUS ROG STRIX B450-F</a>
                                    <a href = "#mobo_04"> ASUS ROG Strix Z390-E</a>
                                    <a href = "#mobo_05"> MSI MPG Z390</a>
                                    <a href = "#mobo_06"> GIGABYTE Z390 </a>

                                </div>
                            </div>
                        <div class="dropdown">
                            <button class="dropbtn">Ram</button>
                            <div class="dropdown-content">
                            <a href="#ram_01">G.SKILL TridentZ RGB Series 16GB</a>
                            <a href="#ram_02">CORSAIR Vengeance RGB Pro 16G</a>
                            <a href="#ram_03">CORSAIR Vengeance LPX 16GB</a>
                            <a href = "#ram_04"> G.SKILL Ripjaws V Series 16GB</a>
                            <a href = "#ram_05"> G.SKILL TridentZ RGB Series 16GB</a>
                            <a href = "#ram_06"> G.SKILL Ripjaws V Series 32GB </a>
                            </div>
                        </div>

                        <div class="dropdown">
                            <button class="dropbtn">Memory</button>
                            <div class="dropdown-content">
                            <a href="#hdd_01">SAMSUNG 860 EVO Series 2.5 500GB</a>
                            <a href="#hdd_02">WD Blue 3D NAND 1TB</a>
                            <a href="#hdd_03">Intel 660p Series M.2 2280 1TB</a>
                            <a href = "#hdd_04"> SAMSUNG 860 EVO Series 2.5 1TB</a>
                            <a href = "#hdd_05"> Kingston A400 2.5 240GB</a>
                            <a href = "#hdd_06"> Crucial MX500 2.5 500GB </a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="dropbtn">Power Supply</button>
                            <div class="dropdown-content">
                            <a href="#hdd_01">CORSAIR RMx Series RM650x</a>
                            <a href="#hdd_02">EVGA SuperNOVA 850 G2</a>
                            <a href="#hdd_03">Seasonic FOCUS Plus Series SSR-850FX 850W</a>
                            <a href = "#hdd_04"> CORSAIR RMx Series RM1000X 1000W</a>
                            <a href = "#hdd_05"> Rosewill PHOTON Series 1200W</a>
                            </div>
                        </div>

                        <p>
                            <button type="submit" onClick={this.handleSubmit}>Submit</button>
                        </p>

                </form>
<script>
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
</script>

</body>
</html>