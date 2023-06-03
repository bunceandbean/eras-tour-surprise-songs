import { DataView } from 'primereact/dataview';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';                                   // css utility
import { Card } from 'primereact/card';
import { TrackFrame } from './components/TrackFrame';
import { Album, constructAlbum } from './types/Album';
import { debut, fearless, speakNow, red, nine, reputation, lover, folklore, evermore, midnights } from './data/tracklists';
import { albumSearch } from './util/albumSearch'
import { Track } from './types/Track';

function App() {

  const debutAlbum: Album = constructAlbum("Debut", debut);
  const fearlessAlbum: Album = constructAlbum("Fearless", fearless);
  const speakNowAlbum: Album = constructAlbum("Speak Now", speakNow);
  const redAlbum: Album = constructAlbum("Red", red);
  const nineAlbum: Album = constructAlbum("1989", nine);
  const reputationAlbum: Album = constructAlbum("reputation", reputation);
  const loverAlbum: Album = constructAlbum("Lover", lover);
  const folkloreAlbum: Album = constructAlbum("folklore", folklore);
  const evermoreAlbum: Album = constructAlbum("evermore", evermore);
  const midnightsAlbum: Album = constructAlbum("Midnights", midnights);

  const surpriseSongs = [
    {
      title: 'Welcome to New York',
      venue: 'NJ-3',
      isPlayed: true
    },
    {
      title: 'Clean',
      venue: 'NJ-3',
      isPlayed: true
    }
  ] 

  const genHeader = () => (
    <div className=''>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>TAYLOR SWIFT: THE ERAS TOUR</h1>
      <h1 style={{fontFamily: "era", textAlign: "center"}}>Suprise Song Tracker</h1>
    </ div>
  );

  return (
  <>
    <div className="grid">
      <div className="col-8 fadeinleft animation-duration-500 animation-iteration ">
        <Card className="" title={genHeader}>
        </Card> 
      </div>
      <div className="col-4 fadeinright animation-duration-500 animation-iteration">
        <Card className="" title={"Last Played Surprise Songs:"}>
          <DataView value={surpriseSongs} itemTemplate={TrackFrame}></DataView>

        </Card> 
      </div>
    </div>
    <br />
    <div className="grid">
        <div className="col-6 fadeinleft animation-duration-500 animation-iteration">
          <Card style = {{backgroundColor: "#adffc2"}}>
            <h1 style={{fontFamily: "Debut", textAlign: "center"}}>Taylor Swift</h1>
            <DataView className="bg-purple-600" value={debutAlbum.trackList} itemTemplate={TrackFrame} />
          </Card>
          <br />
            <Card style = {{backgroundColor: "plum"}}>
              <h1 style={{fontFamily: "Speak-Now", textAlign: "center"}}>Speak Now</h1>
              <DataView value={speakNowAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: "lightblue"}}>
              <h1 style={{fontFamily: "nine", textAlign: "center"}}>1989</h1>
              <DataView value={nineAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: "lightpink"}}>
              <h1 style={{fontFamily: "Lover", textAlign: "center"}}>Lover</h1>
              <DataView value={loverAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: "#C4A484"}}>
              <h1 style={{fontFamily: "folklore", textAlign: "center"}}>evermore</h1>
              <DataView value={evermoreAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
        </div>
        

        <div className="col-6 fadeinright animation-duration-500 animation-iteration">
          <Card style = {{backgroundColor: "#fff3ad"}}>
            <h1 style={{fontFamily: "Fearless", textAlign: "center"}}>Fearless</h1>
            <DataView value={fearlessAlbum.trackList} itemTemplate={TrackFrame} />
          </Card>
          <br />
            <Card style = {{backgroundColor: "#FF6666"}}>
              <h1 style={{fontFamily: "Red", textAlign: "center"}}>RED</h1>
              <DataView value={redAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: "#818589"}}>
              <h1 style={{fontFamily: "reputation", color: "black", textAlign: "center"}}>reputation</h1>
              <DataView value={reputationAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
          <br />
            <Card style = {{backgroundColor: "#D3D3D3"}}>
              <h1 style={{fontFamily: "folklore", textAlign: "center"}}>folklore</h1>
              <DataView value={folkloreAlbum.trackList} itemTemplate={TrackFrame} />
            </Card>
        </div>
        <div className="col-6 col-offset-3">
          <Card style = {{backgroundColor: "#acace6"}}>
              <h1 style={{fontFamily: "Neue Haas Grotesk Display Pro", textAlign: "center", color: ""}}>Midnights</h1>
              <DataView className="bg-purple-600" value={midnightsAlbum.trackList} itemTemplate={TrackFrame} />
          </Card>
        </div>

    </div>
  </>
  );
}

export default App;