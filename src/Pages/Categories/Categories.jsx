import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Categories.css"

const Categories = () => {
  return (
    <div className="mt-5 mb-5 custom-navbar container mx-auto ">
       <div className="">
       <Tabs>
    <TabList className="text-white tablist">
      <Tab>Racing Cars</Tab>
      <Tab>Sports Cars</Tab>
      <Tab>Classic Cars</Tab>
     
    </TabList>

    <TabPanel>
      <p className="text-white">
        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
        game franchise, owned by Nintendo and created by Japanese video game designer
        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
        of the series, Mario has appeared in over 200 video games since his creation.
        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
        Kingdom, his adventures generally center upon rescuing Princess Peach from the
        Koopa villain Bowser. His younger brother and sidekick is Luigi.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p className="text-white">
        <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
        Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
        released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
        as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
        appears in many games throughout the Mario franchise, often as a sidekick to his brother.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Luigi" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
    <TabPanel>
      <p className="text-white">
        <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
        is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
        Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
        attack by Bowser. She often plays the damsel in distress role within the series and
        is the lead female. She is often portrayed as Mario's love interest and has appeared
        in Super Princess Peach, where she is the main playable character.
      </p>
      <p>
        Source:{' '}
        <a href="https://en.wikipedia.org/wiki/Princess_Peach" target="_blank">
          Wikipedia
        </a>
      </p>
    </TabPanel>
   
   
  </Tabs>
       </div>

    </div>
  );
};

export default Categories;
