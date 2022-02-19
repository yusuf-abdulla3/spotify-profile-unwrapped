import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import { getTopTracks } from "../spotify";
import { SectionWrapper, TimeRangeButtons, TrackList, Loader } from "../components";


  const TopTracks = () => {
    const [topTracks, setTopTracks] = useState(null);
    const [activeRange, setActiveRange] = useState("short");
  
    useEffect(() => {
      const fetchData = async () => {
        const userTopTracks = await getTopTracks(`${activeRange}_term`);
        setTopTracks(userTopTracks.data);
      };
  
      catchErrors(fetchData());
    }, [activeRange]);

  return (
    <>
    {topTracks ? (
      <SectionWrapper title="Top Tracks" breadcrumb="true">
        <main>
          <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          />
        </main>
        <TrackList tracks={topTracks.items} />
      </SectionWrapper>
      ) : (
        <Loader />
      )}
    </>
    );
  };
export default TopTracks;