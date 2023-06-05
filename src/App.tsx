import { DataView } from 'primereact/dataview';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import { Card } from 'primereact/card';
import { TrackFrame } from './components/TrackFrame';
import { setlist, surpriseSongs } from './data/setlist';
import { Chart } from 'primereact/chart';
import React, { useState, useEffect } from 'react';
import { Setlist } from './types/Setlist';

function App() {

  // Color data for each era

  const colorData = {
    "debut": "#adffc2",
    "fearless": "#fff3ad",
    "speakNow": "plum",
    "red": "#FF6666",
    "1989": "lightblue",
    "reputation": "#818589",
    "lover": "lightpink", 
    "folklore": "#D3D3D3",
    "evermore": "#C4A484",
    "midnights": "#acace6",
    "misc": "#013220"
  }


  // Chart data

  // const genRelativeData = () => {
  //   const albumData = {
  //     "debut": 0,
  //     "fearless": 0,
  //     "speakNow": 0,
  //     "red": 0,
  //     "1989": 0,
  //     "reputation": 0,
  //     "lover": 0, 
  //     "folklore": 0,
  //     "evermore": 0,
  //     "midnights": 0,
  //   }
  //   for (const album in albumData) {
  //     albumData[album] = 
  //   }
  // }

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
      const data = {
          labels: Object.keys(colorData),
          datasets: [
              {
                  data: [540, 325, 702],
                  backgroundColor: Object.values(colorData),
                  hoverBackgroundColor: Object.values(colorData)
              }
          ]
      }
      const options = {
          plugins: {
              legend: {
                  labels: {
                      usePointStyle: true
                  }
              }
          }
      };

      setChartData(data);
      setChartOptions(options);
  }, []);

  const genHeader = () => (
    <div className=''>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>TAYLOR SWIFT: THE ERAS TOUR</h1>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>Surprise Song Tracker</h1>
    </ div>
  );

  return (
  <>
    <div className="grid">
      <div className="col md:col-8 fadeinleft animation-duration-500 animation-iteration ">
        <Card className="" title={genHeader}>
        </Card> 
      </div>
      <div className="col md:col-4 fadeinright animation-duration-500 animation-iteration">
        <Card className="" title={"Last Played Surprise Songs:"}>
          <DataView value={surpriseSongs} itemTemplate={TrackFrame}></DataView>

        </Card> 
      </div>
    </div>
    <br />
    <div className="grid">
        <div className="col md:col-6 fadeinleft animation-duration-500 animation-iteration">
          <Card style = {{backgroundColor: colorData.debut}}>
            <h1 style={{fontFamily: "Debut", textAlign: "center"}}>Taylor Swift</h1>
            <DataView value={setlist.debut} itemTemplate={TrackFrame} />
          </Card>
          <br />
            <Card style = {{backgroundColor: colorData.speakNow}}>
              <h1 style={{fontFamily: "Speak-Now", textAlign: "center"}}>Speak Now</h1>
              <DataView value={setlist.speakNow} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: colorData["1989"]}}>
              <h1 style={{fontFamily: "nine", textAlign: "center"}}>1989</h1>
              <DataView value={setlist["1989"]} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: colorData.lover}}>
              <h1 style={{fontFamily: "Lover", textAlign: "center"}}>Lover</h1>
              <DataView value={setlist.lover} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: colorData.evermore}}>
              <h1 style={{fontFamily: "folklore", textAlign: "center"}}>evermore</h1>
              <DataView value={setlist.evermore} itemTemplate={TrackFrame} />
            </Card>
            <br/>
            <Card style = {{backgroundColor: colorData.midnights}}>
              <h1 style={{fontFamily: "Neue Haas Grotesk Display Pro", textAlign: "center", color: ""}}>Midnights</h1>
              <DataView className="bg-purple-600" value={setlist.midnights} itemTemplate={TrackFrame} />
          </Card>

        </div>
        

        <div className="col md:col-6 fadeinright animation-duration-500 animation-iteration">
          <Card style = {{backgroundColor: colorData.fearless}}>
            <h1 style={{fontFamily: "Fearless", textAlign: "center"}}>Fearless</h1>
            <DataView value={setlist.fearless} itemTemplate={TrackFrame} />
          </Card>
          <br />
            <Card style = {{backgroundColor: colorData.red}}>
              <h1 style={{fontFamily: "Impact, fantasy", textAlign: "center"}}>RED</h1>
              <DataView value={setlist.red} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: colorData.reputation}}>
              <h1 style={{fontFamily: "reputation", color: "black", textAlign: "center"}}>reputation</h1>
              <DataView value={setlist.reputation} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: colorData.folklore}}>
              <h1 style={{fontFamily: "folklore", textAlign: "center"}}>folklore</h1>
              <DataView value={setlist.folklore} itemTemplate={TrackFrame} />
            </Card>
            <br />
            <Card style = {{backgroundColor: colorData.misc}}>
              <h1 style={{fontFamily: "", textAlign: "center", color: "white"}}>Miscellaneous</h1>
              <DataView className="bg-purple-600" value={setlist.misc} itemTemplate={TrackFrame} />
          </Card>
          <br/>
          <Card style = {{backgroundColor: colorData.folklore}}>
                {/* <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" /> */}
                <h1 style={{fontFamily: "Midnights", textAlign: "center"}}> Analytics coming soon!</h1>
          </Card>
        </div>

    </div>
      <footer>
        Made by <a href="https://github.com/bunceandbean" style={{color:"inherit"}}>bunceandbean</a>
        <br />
        Beta v2.1
      </footer>
  </>
  );
}

export default App;