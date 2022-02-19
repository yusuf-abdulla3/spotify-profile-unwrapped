import { useState, useEffect } from "react";
import { catchErrors } from "../utils";
import { getTopArtists } from "../spotify";
import { SectionWrapper, ArtistsGrid, TimeRangeButtons, Loader } from "../components";

const TopArtists = () => {
  const [topArtists, setTopArtists] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTopArtists = await getTopArtists(`${activeRange}_term`);
      setTopArtists(userTopArtists.data);
    };

    catchErrors(fetchData());
  }, [activeRange]);

  return (
    <>
      {topArtists ? (
        <SectionWrapper title="Top artists" breadcrumb="true">
          <main>
            <TimeRangeButtons
              activeRange={activeRange}
              setActiveRange={setActiveRange}
            />
          </main>
          <ArtistsGrid artists={topArtists.items} />
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TopArtists;
