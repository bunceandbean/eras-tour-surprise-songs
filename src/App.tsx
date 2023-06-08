import { DataView } from 'primereact/dataview';
import { MultiSelect } from 'primereact/multiselect';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import { Card } from 'primereact/card';
import { TrackFrame } from './components/TrackFrame';
import { Albums, setlist, surpriseSongs } from './data/setlist';
import { Chart } from 'primereact/chart';
import React, { useState, useEffect } from 'react';
import { SetlistData } from './types/Setlist';
import { albumSort } from './util/albumSort';

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
  const [albumsToShow, setAlbumsToShow] = useState<{[key in Albums]: SetlistData}>(setlist);
  const [selectedAlbums, setSelectedAlbums] = useState<string[]>([]);
  const orderedSetlist = albumSort(setlist);
  const albumsToSelect = orderedSetlist.map(album => ({name: album[1].albumName, value: album[0]}));

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

  const filterAlbums = (albums: string[]) => {
    if (albums.length === 0) {
      setAlbumsToShow(setlist);
      setSelectedAlbums(albums);
      return;
    }
    
    const filteredAlbumsToShow: {[key: string]: SetlistData} = {};
    const filteredAlbums = orderedSetlist.filter(album => albums.includes(album[0]));
    filteredAlbums.forEach(a => {
      filteredAlbumsToShow[a[0]] = a[1];
    })
    setAlbumsToShow(filteredAlbumsToShow as {[key in Albums]: SetlistData})
    setSelectedAlbums(albums);
    return filteredAlbumsToShow;
  }

  const genHeader = () => (
    <>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>TAYLOR SWIFT: THE ERAS TOUR</h1>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>Surprise Song Tracker</h1>
    </>
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
      <div className='col md:col-12 fadein animation-duration-1000 animation-iteration'>
        <MultiSelect value={selectedAlbums} onChange={(e) => filterAlbums(e.value)} options={albumsToSelect} optionLabel="name" 
          placeholder="Select Album(s)" className="w-full" />
        </div>
    </div>
    <br />
    <div className="grid">
      <div className="col md:col-6 fadeinleft animation-duration-500 animation-iteration">
        {albumSort(albumsToShow).filter(album => album[1].columnNumber === 1).map((album) => {
          return (
            <>
              <Card style={{backgroundColor: album[1].colorData}}>
                <h1 style={album[1].headerCssStyle}>{album[1].albumName}</h1>
                  <DataView className={album[1].dataViewClassName} value={album[1].setList} itemTemplate={TrackFrame} />
              </Card>
              <br />
            </>
          )
        })}
        </div>

        <div className="col md:col-6 fadeinright animation-duration-500 animation-iteration">
        {albumSort(albumsToShow).filter(album => album[1].columnNumber === 2).map((album) => {
          return (
            <>
              <Card style={{backgroundColor: album[1].colorData}}>
                <h1 style={album[1].headerCssStyle}>{album[1].albumName}</h1>
                  <DataView className={album[1].dataViewClassName} value={album[1].setList} itemTemplate={TrackFrame} />
              </Card>
              <br />
            </>
          )
        })}
        {/* Nuking the analytics card for now because it was causing a design headache with the rendering columns */}
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