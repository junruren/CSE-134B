import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './css/signup.css';

const BasicInfo = () => {
  return (
    <div style={styles.outerStretch}>
      <div style={styles.flex} className="names-field">
        <input type="text" name="firstname" placeholder="First Name" style={{...styles.innerPadding, ...styles.vertical, ...styles.namesInput}} />
        <input type="text" name="lastname" placeholder="Last Name" style={{...styles.innerPadding, ...styles.vertical, ...styles.namesInput}} />
      </div>
      <div>
        <input type="number" name="phone-number" placeholder="Phone Number" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
      <div>
        <input type="password" name="confirm-password" placeholder="Confirm Password" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}} />
      </div>
    </div>
  );
};

class DriverInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }
  
  render() {
    var yearOptions = years.map((year) => <option key={year.toString()}>{year}</option>);
    var makeOptions = makes.map((make) => <option key={make.toString()}>{make}</option>);
    var colorOptions = colors.map((color) => <option key={color.toString()}>{color}</option>);
    var numPassengersOptions = [1,2,3,4,5,6,7].map((num) => <option key={num.toString()}>{num}</option>);
    var airportOptions = airports.map((airport) => <option key={airport.toString()}>{airport}</option>);
    var modelOptions = this.state.models.map((model) => <option key={model.toString()}>{model}</option>);
    
    const makeChanged = (e) => {
      this.setState({
        models: vehicles[e.target.value]
      });
    }
    
    return (
      <div style={styles.outerStretch}>
        <hr/>
        <div>
          <input type="text" name="driver-license-number" placeholder="Driver License Number" style={{...styles.innerStretch, ...styles.innerPadding, ...styles.vertical}}/>
        </div>
        <div>
          <Link to="/">Upload scanned license</Link>
        </div>
        <div className="vehicle" style={styles.flex}>
          <select className="vehicle-info" name="year" id="vehicle-year" style={{...styles.vertical, ...styles.vehicleSelect}} defaultValue="Year">
            <option disabled>Year</option>
            {yearOptions}
          </select>
          <select className="vehicle-info" name="make" id="vehicle-make" style={{...styles.vertical, ...styles.vehicleSelect}} defaultValue="Make" onChange={makeChanged}>
            <option disabled>Make</option>
            {makeOptions}
          </select>
          <select className="vehicle-info" name="model" id="vehicle-model" style={{...styles.vertical, ...styles.vehicleSelect}} defaultValue="Model">
            <option disabled>Model</option>
            {modelOptions}
          </select>
          <select className="vehicle-info" name="color" id="vehicle-color" style={{...styles.vertical, ...styles.vehicleSelect}} defaultValue="Color">
            <option disabled>Color</option>
            {colorOptions}
          </select>
        </div>
        <div className="num-passengers" style={styles.flex}>
          <label>Max number of passengers</label>
          <select className="vehicle-info" name="max-passengers" id="max-passengers" style={{...styles.vertical, height: '30px', width: '20%'}}>
            {numPassengersOptions}
          </select>
        </div>
        <hr/>
        <div>
          <select className="airport" name="airport" id="airport" style={{...styles.vertical, ...styles.innerStretch}} defaultValue="Home Base Airport">
            <option disabled>Home Base Airport</option>
            {airportOptions}
          </select>
        </div>
      </div>
    );
  }
};

const SignUpButtons = (props) => {
  var loginURL = '/';
  if (props.userType === 'Driver') {
    loginURL = '/driver/login';
  } else if (props.userType === 'Rider') {
    loginURL = '/rider/login';
  }
  return (
    <div style={styles.outerStretch}>
      <div>
        <button className="button" style={styles.innerStretch}>Sign Up</button>
      </div>
      <p style={{textAlign: 'center'}}>Already have an account? <Link to={loginURL}>Log In</Link></p>
    </div>
  );
};

export const RiderSignup = () => {
  return (
    <div className="vertical-middle">
      <h1 style={{fontSize: '2.5em', textAlign: 'center'}}>Sign Up as a Rider</h1>
      <BasicInfo />
      <SignUpButtons userType="Rider" />
    </div>
  );
};

export const DriverSignup = () => {
  return (
    <div className="vertical-middle">
      <h1 style={{fontSize: '2.5em', textAlign: 'center'}}>Sign Up as a Driver</h1>
      <BasicInfo />
      <DriverInfo />
      <SignUpButtons userType="Driver" />
    </div>
  );
};

const styles = {
  outerStretch: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '60%'
  },
  innerStretch: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%'
  },
  innerPadding: {
    paddingLeft: '10px'
  },
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  namesInput: {
    marginLeft: '0',
    marginRight: '0',
    marginBottom: '0',
    width: '40%'
  },
  vertical: {
    height: '40px',
    display: 'block',
    fontSize: '1em',
    border: '1px solid black',
    borderRadius: '5px',
    marginTop: '20px',
    marginBottom: '20px'
  },
  vehicleSelect: {
    width: '20%',
    marginLeft: '0',
    marginRight: '0',
    height: '30px'
  }
};

const vehicles = {
    "ASTON MARTIN": [
        "DB9 COUPE",
        "DB9 COUPE MANUAL",
        "DB9 VOLANTE",
        "V12 VANQUISH S",
        "V8 VANTAGE"
    ],
    "AUDI": [
        "A3",
        "A4",
        "A4 AVANT QUATTRO",
        "A4 CABRIOLET",
        "A4 CABRIOLET QUATTRO",
        "A4 QUATTRO",
        "A6",
        "A6 AVANT QUATTRO",
        "A6 QUATTRO",
        "A8 L",
        "GTI",
        "PASSAT",
        "S4",
        "S4 AVANT",
        "S4 CABRIOLET",
        "TT COUPE",
        "TT ROADSTER"
    ],
    "BENTLEY MOTORS LTD.": [
        "BENTLEY ARNAGE",
        "CONTINENTAL FLYING SPUR",
        "CONTINENTAL GT"
    ],
    "BMW": [
        "325CI CONVERTIBLE",
        "325I",
        "325XI",
        "325XI SPORT WAGON",
        "330CI CONVERTIBLE",
        "330I",
        "330XI",
        "525I",
        "525XI",
        "530I",
        "530XI",
        "530XI SPORT WAGON",
        "550I",
        "650CI",
        "650CI CONVERTIBLE",
        "750LI",
        "760LI",
        "M3",
        "M3 CONVERTIBLE",
        "M5",
        "M6",
        "MINI COOPER",
        "MINI COOPER CONVERTIBLE",
        "MINI COOPER S",
        "MINI COOPER S CONVERTIBLE",
        "X3",
        "X5",
        "X5 4.8IS",
        "Z4 3.0 SI COUPE",
        "Z4 3.0I",
        "Z4 3.0SI",
        "Z4 M ROADSTER"
    ],
    "Bugatti Automobiles S.A.S.": [
        "VEYRON"
    ],
    "DaimlerChrysler": [
        "300C/SRT-8",
        "CARAVAN 2WD",
        "CHARGER",
        "COMMANDER 4WD",
        "CROSSFIRE ROADSTER",
        "DAKOTA PICKUP 2WD",
        "DAKOTA PICKUP 4WD",
        "DURANGO 2WD",
        "DURANGO 4WD",
        "GRAND CHEROKEE 2WD",
        "GRAND CHEROKEE 4WD",
        "LIBERTY/CHEROKEE 2WD",
        "LIBERTY/CHEROKEE 4WD",
        "PACIFICA 2WD",
        "PACIFICA AWD",
        "PT CRUISER",
        "RAM 1500 PICKUP 2WD",
        "RAM 1500 PICKUP 4WD",
        "SEBRING 4-DR",
        "STRATUS 4-DR",
        "TOWN & COUNTRY 2WD",
        "VIPER CONVERTIBLE",
        "WRANGLER/TJ 4WD"
    ],
    "FERRARI": [
        "F430",
        "FERRARI 612 SCAGLIETTI",
        "FERRARI F141"
    ],
    "FUJI HEAVY IND": [
        "B9 TRIBECA AWD",
        "BAJA AWD",
        "FORESTER AWD",
        "IMPREZA AWD",
        "IMPREZA WGN/OUTBACK SPT AWD",
        "LEGACY AWD",
        "LEGACY WAGON AWD",
        "OUTBACK AWD",
        "OUTBACK WAGON AWD"
    ],
    "Ford": [
        "B4000 4WD",
        "CROWN VICTORIA POLICE",
        "E150 CLUB WAGON",
        "E150 ECONOLINE 2WD",
        "ESCAPE 4WD",
        "ESCAPE FWD",
        "ESCAPE HYBRID 4WD",
        "ESCAPE HYBRID FWD",
        "EXPEDITION 2WD",
        "EXPLORER 2WD",
        "EXPLORER 4WD",
        "F150 FFV  2WD",
        "F150 FFV  4WD",
        "F150 PICKUP 2WD",
        "F150 PICKUP 4WD",
        "FIVE HUNDRED AWD",
        "FIVE HUNDRED FWD",
        "FOCUS  FWD",
        "FOCUS STATION WAG",
        "FREESTAR WAGON FWD",
        "FREESTYLE AWD",
        "FREESTYLE FWD",
        "GRAND MARQUIS",
        "GT        2WD",
        "LS",
        "MARK LT",
        "MILAN",
        "MONTEREY WAGON FWD",
        "MOUNTAINEER 4WD",
        "MUSTANG",
        "NAVIGATOR 2WD",
        "RANGER PICKUP 2WD",
        "RANGER PICKUP 4WD",
        "TAURUS",
        "TAURUS ETHANOL FFV",
        "THUNDERBIRD",
        "TOWN CAR",
        "ZEPHYR"
    ],
    "GM": [
        "9-3 CONVERTIBLE",
        "9-3 SPORT SEDAN",
        "9-5 SEDAN",
        "C15 SILVERADO HYBRID 2WD",
        "C1500 SILVERADO 2WD",
        "C1500 SUBURBAN 2WD",
        "C1500 TAHOE 2WD",
        "C1500 YUKON 2WD",
        "COBALT",
        "COLORADO 2WD",
        "COLORADO 4WD",
        "COLORADO CAB CHASSIS INC 2WD",
        "COLORADO CREW CAB 2WD",
        "COLORADO CREW CAB 4WD",
        "CORVETTE",
        "CTS",
        "DTS",
        "ENVOY 2WD",
        "ENVOY XL 4WD",
        "EQUINOX AWD",
        "EQUINOX FWD",
        "ESCALADE 2WD",
        "ESCALADE ESV AWD",
        "G15/25CHEV VAN 2WD CONV",
        "G1500/2500 CHEVY EXPRESS 2WD",
        "G1500/2500 CHEVY VAN 2WD",
        "G6",
        "G6 GT/GTP CONVERTIBLE",
        "GRAND PRIX",
        "GTO",
        "H3 4WD",
        "HHR FWD",
        "I-280 2WD EXT CAB",
        "IMPALA",
        "K15 SILVERADO HYBRID 4WD",
        "K1500 AVALANCHE 4WD",
        "K1500 SILVERADO 4WD",
        "K1500 TAHOE 4WD",
        "LACROSSE/ALLURE",
        "LIMOUSINE",
        "MALIBU",
        "MONTANA SV6 AWD",
        "MONTE CARLO",
        "RENDEZVOUS AWD",
        "RENDEZVOUS FWD",
        "SOLSTICE",
        "SRX 2WD",
        "SRX AWD",
        "SSR PICKUP 2WD",
        "STS",
        "STS AWD",
        "TERRAZA FWD",
        "TRAILBLAZER 2WD",
        "TRAILBLAZER 4WD",
        "TRAILBLAZER AWD",
        "TRAILBLAZER EXT 4WD",
        "UPLANDER FWD",
        "VUE AWD",
        "VUE FWD",
        "XLR"
    ],
    "GM Daewoo ": [
        "AVEO",
        "FORENZA",
        "FORENZA WAGON",
        "VERONA"
    ],
    "HONDA": [
        "ACCORD",
        "ACCORD HYBRID",
        "CIVIC",
        "CIVIC HYBRID",
        "CR-V 2WD",
        "CR-V 4WD",
        "ELEMENT 2WD",
        "ELEMENT 4WD",
        "INSIGHT",
        "MDX 4WD",
        "ODYSSEY 2WD",
        "PILOT 2WD",
        "PILOT 4WD",
        "RIDGELINE 4WD",
        "RL",
        "RSX",
        "S2000",
        "TL",
        "TSX"
    ],
    "HYUNDAI": [
        "ACCENT",
        "AZERA",
        "ELANTRA",
        "SANTAFE 2WD",
        "SANTAFE 4WD",
        "SONATA",
        "TIBURON",
        "TUCSON 2WD",
        "TUCSON 4WD"
    ],
    "JAGUAR CARS INC": [
        "JAGUAR S-TYPE 3.0 LITRE",
        "JAGUAR S-TYPE 4.2 LITRE",
        "JAGUAR S-TYPE R",
        "JAGUAR VDP LWB",
        "JAGUAR XJ8",
        "JAGUAR XK8 CONVERTIBLE",
        "JAGUAR XKR CONVERTIBLE",
        "JAGUAR X-TYPE",
        "JAGUAR X-TYPE SPORT BRAKE"
    ],
    "KIA MOTORS CORPORATION": [
        "KIA AMANTI",
        "KIA OPTIMA",
        "KIA OPTIMA(MS)",
        "KIA RIO",
        "KIA SEDONA",
        "KIA SORENTO 2WD",
        "KIA SORENTO 4WD",
        "KIA SPECTRA(LD)",
        "KIA SPORTAGE 2WD",
        "KIA SPORTAGE 4WD"
    ],
    "LAMBORGHINI": [
        "L-140/715 GALLARDO",
        "L-147/148 MURCIELAGO"
    ],
    "LAND ROVER": [
        "LR3",
        "RANGE ROVER",
        "RANGE ROVER SPORT"
    ],
    "LOTUS": [
        "ELISE/EXIGE"
    ],
    "MASERATI": [
        "COUPE CAMBIOCORSA/GT/G-SPORT",
        "MASERATI QUATTROPORTE"
    ],
    "MAZDA MOTOR CORP.": [
        "MAZDA 3",
        "MAZDA 5",
        "MAZDA 6",
        "MAZDA 6 SPORT WAGON",
        "MAZDA RX-8",
        "MPV",
        "MX-5"
    ],
    "MERCEDES BENZ": [
        "C230",
        "C280",
        "C280 4MATIC",
        "C350",
        "C350 4MATIC",
        "C55 AMG",
        "CL65 AMG",
        "CLK350",
        "CLK350 (CABRIOLET)",
        "CLK55 AMG (CABRIOLET)",
        "CLS500",
        "CLS55 AMG",
        "E320 CDI",
        "E350",
        "E350 (WAGON)",
        "E350 4MATIC",
        "E350 4MATIC (WAGON)",
        "E500",
        "E55 AMG",
        "E55 AMG (WAGON)",
        "MAYBACH 57S",
        "MAYBACH 62",
        "ML350",
        "ML500",
        "R350",
        "R500",
        "S350",
        "S430",
        "SL500",
        "SL600",
        "SL65 AMG",
        "SLK280",
        "SLK350",
        "SLR"
    ],
    "Mitsubishi ": [
        "ECLIPSE",
        "ENDEAVOR 2WD",
        "ENDEAVOR 4WD",
        "GALANT",
        "LANCER",
        "LANCER EVOLUTION",
        "LANCER SPORTBACK",
        "MONTERO",
        "OUTLANDER 2WD",
        "OUTLANDER 4WD"
    ],
    "NEW UNITED MOTOR MFG INC": [
        "VIBE"
    ],
    "Nissan": [
        "350Z",
        "350Z ROADSTER",
        "ALTIMA",
        "ARMADA 2WD",
        "ARMADA 4WD",
        "FRONTIER 2WD",
        "FRONTIER V6-2WD",
        "FRONTIER V6-4WD",
        "FX35 AWD",
        "FX35 RWD",
        "FX45 AWD",
        "G35",
        "M35",
        "M35X",
        "M45",
        "MAXIMA",
        "MURANO AWD",
        "MURANO FWD",
        "PATHFINDER 2WD",
        "PATHFINDER 4WD",
        "Q45",
        "Q45 SPORT",
        "QUEST",
        "QX56 4WD",
        "SENTRA",
        "TITAN 2WD",
        "TITAN 4WD",
        "XTERRA 2WD",
        "XTERRA 4WD"
    ],
    "PORSCHE": [
        "BOXSTER",
        "BOXSTER S",
        "CARRERA 2 COUPE",
        "CAYENNE",
        "CAYENNE S",
        "CAYENNE TURBO",
        "CAYMAN S"
    ],
    "Rolls-Royce ": [
        "PHANTOM"
    ],
    "SUZUKI": [
        "AERIO",
        "AERIO SX",
        "AERIO SX AWD",
        "GRAND VITARA XL-7",
        "GRAND VITARA XL-7 4WD",
        "GRAND VITARA XV6",
        "GRAND VITARA XV6 AWD"
    ],
    "Spyker Automobielen BV": [
        "C8 SPYDER"
    ],
    "TOYOTA": [
        "4RUNNER 2WD",
        "4RUNNER 4WD",
        "AVALON",
        "CAMRY",
        "CAMRY SOLARA",
        "CAMRY SOLARA CONVERTIBLE",
        "COROLLA",
        "COROLLA MATRIX",
        "ES 330",
        "GS 300 4WD",
        "GS 300/GS 430",
        "GX 470",
        "HIGHLANDER 2WD",
        "HIGHLANDER 4WD",
        "HIGHLANDER HYBRID 2WD",
        "HIGHLANDER HYBRID 4WD",
        "IS 250",
        "IS 250 AWD",
        "IS 350",
        "LS 430",
        "LX 470",
        "PRIUS",
        "RAV4 2WD",
        "RAV4 4WD",
        "RX 330 2WD",
        "RX 330 4WD",
        "RX 400H 4WD",
        "SC 430",
        "SCION TC",
        "SCION XA",
        "SCION XB",
        "SEQUOIA 2WD",
        "SEQUOIA 4WD",
        "SIENNA 2WD",
        "SIENNA 4WD",
        "TOYOTA TACOMA 2WD",
        "TOYOTA TACOMA 4WD",
        "TOYOTA TUNDRA 2WD",
        "TOYOTA TUNDRA 4WD",
        "YARIS"
    ],
    "VOLKSWAGEN": [
        "A3 QUATTRO",
        "GOLF",
        "JETTA",
        "NEW BEETLE",
        "NEW BEETLE CONVERTIBLE",
        "PASSAT WAGON 4MOTION",
        "PHAETON",
        "RABBIT",
        "TOUAREG",
        "TT COUPE QUATTRO",
        "TT ROADSTER QUATTRO"
    ],
    "VOLVO": [
        "NEW C70 CONVERTIBLE",
        "S40 AWD",
        "S40 FWD",
        "S60 AWD",
        "S60 FWD",
        "S60 R AWD",
        "S80 FWD",
        "V50 AWD",
        "V70 FWD",
        "V70 R AWD",
        "XC 70 AWD",
        "XC 90 AWD",
        "XC 90 FWD"
    ]
};

var years = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
var makes = [];
for (var make in vehicles) {makes.push(make);}
var models = [];
var colors = ['Blue', 'Maroon', 'Yellow', 'Silver', 'Purple', 'Orange', 'Green',
  'Gray', 'Pink', 'Tan', 'Brown', 'Black', 'Red', 'Gold', 'Beige', 'White'];
var airports = ['LAX', 'SAN', 'LGA', 'JFK', 'SFO', 'SEA', 'ORD', 'PIT', 'ATL', 'LAS'];