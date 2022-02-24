import { createContext, useContext, useState } from "react";
import { DataRickAndMortyInterface } from "../interfaces/dataRickAndMortyInterface";

export const RickAndMortyDataContext = createContext<
  DataRickAndMortyInterface[]
>([]);

export const useRickAndMortyData = () => {
  const context = useContext(RickAndMortyDataContext);
  return context;
};
export const RickAndMortyDataProvider = (props: any) => {
  const data: Array<DataRickAndMortyInterface> = [
    {
      "id": "1",
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "1",
          "name": "Pilot",
          "episode": "S01E01"
        },
        {
          "id": "2",
          "name": "Lawnmower Dog",
          "episode": "S01E02"
        },
        {
          "id": "3",
          "name": "Anatomy Park",
          "episode": "S01E03"
        },
        {
          "id": "4",
          "name": "M. Night Shaym-Aliens!",
          "episode": "S01E04"
        },
        {
          "id": "5",
          "name": "Meeseeks and Destroy",
          "episode": "S01E05"
        },
        {
          "id": "6",
          "name": "Rick Potion #9",
          "episode": "S01E06"
        },
        {
          "id": "7",
          "name": "Raising Gazorpazorp",
          "episode": "S01E07"
        },
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        },
        {
          "id": "9",
          "name": "Something Ricked This Way Comes",
          "episode": "S01E09"
        },
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        },
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        },
        {
          "id": "13",
          "name": "Mortynight Run",
          "episode": "S02E02"
        },
        {
          "id": "14",
          "name": "Auto Erotic Assimilation",
          "episode": "S02E03"
        },
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        },
        {
          "id": "16",
          "name": "Get Schwifty",
          "episode": "S02E05"
        },
        {
          "id": "17",
          "name": "The Ricks Must Be Crazy",
          "episode": "S02E06"
        },
        {
          "id": "18",
          "name": "Big Trouble in Little Sanchez",
          "episode": "S02E07"
        },
        {
          "id": "19",
          "name": "Interdimensional Cable 2: Tempting Fate",
          "episode": "S02E08"
        },
        {
          "id": "20",
          "name": "Look Who's Purging Now",
          "episode": "S02E09"
        },
        {
          "id": "21",
          "name": "The Wedding Squanchers",
          "episode": "S02E10"
        },
        {
          "id": "22",
          "name": "The Rickshank Rickdemption",
          "episode": "S03E01"
        },
        {
          "id": "23",
          "name": "Rickmancing the Stone",
          "episode": "S03E02"
        },
        {
          "id": "24",
          "name": "Pickle Rick",
          "episode": "S03E03"
        },
        {
          "id": "25",
          "name": "Vindicators 3: The Return of Worldender",
          "episode": "S03E04"
        },
        {
          "id": "26",
          "name": "The Whirly Dirly Conspiracy",
          "episode": "S03E05"
        },
        {
          "id": "27",
          "name": "Rest and Ricklaxation",
          "episode": "S03E06"
        },
        {
          "id": "28",
          "name": "The Ricklantis Mixup",
          "episode": "S03E07"
        },
        {
          "id": "29",
          "name": "Morty's Mind Blowers",
          "episode": "S03E08"
        },
        {
          "id": "30",
          "name": "The ABC's of Beth",
          "episode": "S03E09"
        },
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        },
        {
          "id": "32",
          "name": "Edge of Tomorty: Rick, Die, Rickpeat",
          "episode": "S04E01"
        },
        {
          "id": "33",
          "name": "The Old Man and the Seat",
          "episode": "S04E02"
        },
        {
          "id": "34",
          "name": "One Crew Over the Crewcoo's Morty",
          "episode": "S04E03"
        },
        {
          "id": "35",
          "name": "Claw and Hoarder: Special Ricktim's Morty",
          "episode": "S04E04"
        },
        {
          "id": "36",
          "name": "Rattlestar Ricklactica",
          "episode": "S04E05"
        },
        {
          "id": "37",
          "name": "Never Ricking Morty",
          "episode": "S04E06"
        },
        {
          "id": "38",
          "name": "Promortyus",
          "episode": "S04E07"
        },
        {
          "id": "39",
          "name": "The Vat of Acid Episode",
          "episode": "S04E08"
        },
        {
          "id": "40",
          "name": "Childrick of Mort",
          "episode": "S04E09"
        },
        {
          "id": "41",
          "name": "Star Mort: Rickturn of the Jerri",
          "episode": "S04E10"
        },
        {
          "id": "42",
          "name": "Mort Dinner Rick Andre",
          "episode": "S05E01"
        },
        {
          "id": "43",
          "name": "Mortyplicity",
          "episode": "S05E02"
        },
        {
          "id": "44",
          "name": "A Rickconvenient Mort",
          "episode": "S05E03"
        },
        {
          "id": "45",
          "name": "Rickdependence Spray",
          "episode": "S05E04"
        },
        {
          "id": "46",
          "name": "Amortycan Grickfitti",
          "episode": "S05E05"
        },
        {
          "id": "47",
          "name": "Rick & Morty's Thanksploitation Spectacular",
          "episode": "S05E06"
        },
        {
          "id": "48",
          "name": "Gotron Jerrysis Rickvangelion",
          "episode": "S05E07"
        },
        {
          "id": "49",
          "name": "Rickternal Friendshine of the Spotless Mort",
          "episode": "S05E08"
        },
        {
          "id": "50",
          "name": "Forgetting Sarick Mortshall",
          "episode": "S05E09"
        },
        {
          "id": "51",
          "name": "Rickmurai Jack",
          "episode": "S05E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      "id": "2",
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "1",
          "name": "Pilot",
          "episode": "S01E01"
        },
        {
          "id": "2",
          "name": "Lawnmower Dog",
          "episode": "S01E02"
        },
        {
          "id": "3",
          "name": "Anatomy Park",
          "episode": "S01E03"
        },
        {
          "id": "4",
          "name": "M. Night Shaym-Aliens!",
          "episode": "S01E04"
        },
        {
          "id": "5",
          "name": "Meeseeks and Destroy",
          "episode": "S01E05"
        },
        {
          "id": "6",
          "name": "Rick Potion #9",
          "episode": "S01E06"
        },
        {
          "id": "7",
          "name": "Raising Gazorpazorp",
          "episode": "S01E07"
        },
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        },
        {
          "id": "9",
          "name": "Something Ricked This Way Comes",
          "episode": "S01E09"
        },
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        },
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        },
        {
          "id": "13",
          "name": "Mortynight Run",
          "episode": "S02E02"
        },
        {
          "id": "14",
          "name": "Auto Erotic Assimilation",
          "episode": "S02E03"
        },
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        },
        {
          "id": "16",
          "name": "Get Schwifty",
          "episode": "S02E05"
        },
        {
          "id": "17",
          "name": "The Ricks Must Be Crazy",
          "episode": "S02E06"
        },
        {
          "id": "18",
          "name": "Big Trouble in Little Sanchez",
          "episode": "S02E07"
        },
        {
          "id": "19",
          "name": "Interdimensional Cable 2: Tempting Fate",
          "episode": "S02E08"
        },
        {
          "id": "20",
          "name": "Look Who's Purging Now",
          "episode": "S02E09"
        },
        {
          "id": "21",
          "name": "The Wedding Squanchers",
          "episode": "S02E10"
        },
        {
          "id": "22",
          "name": "The Rickshank Rickdemption",
          "episode": "S03E01"
        },
        {
          "id": "23",
          "name": "Rickmancing the Stone",
          "episode": "S03E02"
        },
        {
          "id": "24",
          "name": "Pickle Rick",
          "episode": "S03E03"
        },
        {
          "id": "25",
          "name": "Vindicators 3: The Return of Worldender",
          "episode": "S03E04"
        },
        {
          "id": "26",
          "name": "The Whirly Dirly Conspiracy",
          "episode": "S03E05"
        },
        {
          "id": "27",
          "name": "Rest and Ricklaxation",
          "episode": "S03E06"
        },
        {
          "id": "28",
          "name": "The Ricklantis Mixup",
          "episode": "S03E07"
        },
        {
          "id": "29",
          "name": "Morty's Mind Blowers",
          "episode": "S03E08"
        },
        {
          "id": "30",
          "name": "The ABC's of Beth",
          "episode": "S03E09"
        },
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        },
        {
          "id": "32",
          "name": "Edge of Tomorty: Rick, Die, Rickpeat",
          "episode": "S04E01"
        },
        {
          "id": "33",
          "name": "The Old Man and the Seat",
          "episode": "S04E02"
        },
        {
          "id": "34",
          "name": "One Crew Over the Crewcoo's Morty",
          "episode": "S04E03"
        },
        {
          "id": "35",
          "name": "Claw and Hoarder: Special Ricktim's Morty",
          "episode": "S04E04"
        },
        {
          "id": "36",
          "name": "Rattlestar Ricklactica",
          "episode": "S04E05"
        },
        {
          "id": "37",
          "name": "Never Ricking Morty",
          "episode": "S04E06"
        },
        {
          "id": "38",
          "name": "Promortyus",
          "episode": "S04E07"
        },
        {
          "id": "39",
          "name": "The Vat of Acid Episode",
          "episode": "S04E08"
        },
        {
          "id": "40",
          "name": "Childrick of Mort",
          "episode": "S04E09"
        },
        {
          "id": "41",
          "name": "Star Mort: Rickturn of the Jerri",
          "episode": "S04E10"
        },
        {
          "id": "42",
          "name": "Mort Dinner Rick Andre",
          "episode": "S05E01"
        },
        {
          "id": "43",
          "name": "Mortyplicity",
          "episode": "S05E02"
        },
        {
          "id": "44",
          "name": "A Rickconvenient Mort",
          "episode": "S05E03"
        },
        {
          "id": "45",
          "name": "Rickdependence Spray",
          "episode": "S05E04"
        },
        {
          "id": "46",
          "name": "Amortycan Grickfitti",
          "episode": "S05E05"
        },
        {
          "id": "47",
          "name": "Rick & Morty's Thanksploitation Spectacular",
          "episode": "S05E06"
        },
        {
          "id": "48",
          "name": "Gotron Jerrysis Rickvangelion",
          "episode": "S05E07"
        },
        {
          "id": "49",
          "name": "Rickternal Friendshine of the Spotless Mort",
          "episode": "S05E08"
        },
        {
          "id": "50",
          "name": "Forgetting Sarick Mortshall",
          "episode": "S05E09"
        },
        {
          "id": "51",
          "name": "Rickmurai Jack",
          "episode": "S05E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      "id": "3",
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        {
          "id": "6",
          "name": "Rick Potion #9",
          "episode": "S01E06"
        },
        {
          "id": "7",
          "name": "Raising Gazorpazorp",
          "episode": "S01E07"
        },
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        },
        {
          "id": "9",
          "name": "Something Ricked This Way Comes",
          "episode": "S01E09"
        },
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        },
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        },
        {
          "id": "14",
          "name": "Auto Erotic Assimilation",
          "episode": "S02E03"
        },
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        },
        {
          "id": "16",
          "name": "Get Schwifty",
          "episode": "S02E05"
        },
        {
          "id": "17",
          "name": "The Ricks Must Be Crazy",
          "episode": "S02E06"
        },
        {
          "id": "18",
          "name": "Big Trouble in Little Sanchez",
          "episode": "S02E07"
        },
        {
          "id": "19",
          "name": "Interdimensional Cable 2: Tempting Fate",
          "episode": "S02E08"
        },
        {
          "id": "20",
          "name": "Look Who's Purging Now",
          "episode": "S02E09"
        },
        {
          "id": "21",
          "name": "The Wedding Squanchers",
          "episode": "S02E10"
        },
        {
          "id": "22",
          "name": "The Rickshank Rickdemption",
          "episode": "S03E01"
        },
        {
          "id": "23",
          "name": "Rickmancing the Stone",
          "episode": "S03E02"
        },
        {
          "id": "24",
          "name": "Pickle Rick",
          "episode": "S03E03"
        },
        {
          "id": "25",
          "name": "Vindicators 3: The Return of Worldender",
          "episode": "S03E04"
        },
        {
          "id": "26",
          "name": "The Whirly Dirly Conspiracy",
          "episode": "S03E05"
        },
        {
          "id": "27",
          "name": "Rest and Ricklaxation",
          "episode": "S03E06"
        },
        {
          "id": "29",
          "name": "Morty's Mind Blowers",
          "episode": "S03E08"
        },
        {
          "id": "30",
          "name": "The ABC's of Beth",
          "episode": "S03E09"
        },
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        },
        {
          "id": "32",
          "name": "Edge of Tomorty: Rick, Die, Rickpeat",
          "episode": "S04E01"
        },
        {
          "id": "33",
          "name": "The Old Man and the Seat",
          "episode": "S04E02"
        },
        {
          "id": "34",
          "name": "One Crew Over the Crewcoo's Morty",
          "episode": "S04E03"
        },
        {
          "id": "35",
          "name": "Claw and Hoarder: Special Ricktim's Morty",
          "episode": "S04E04"
        },
        {
          "id": "36",
          "name": "Rattlestar Ricklactica",
          "episode": "S04E05"
        },
        {
          "id": "38",
          "name": "Promortyus",
          "episode": "S04E07"
        },
        {
          "id": "39",
          "name": "The Vat of Acid Episode",
          "episode": "S04E08"
        },
        {
          "id": "40",
          "name": "Childrick of Mort",
          "episode": "S04E09"
        },
        {
          "id": "41",
          "name": "Star Mort: Rickturn of the Jerri",
          "episode": "S04E10"
        },
        {
          "id": "42",
          "name": "Mort Dinner Rick Andre",
          "episode": "S05E01"
        },
        {
          "id": "43",
          "name": "Mortyplicity",
          "episode": "S05E02"
        },
        {
          "id": "44",
          "name": "A Rickconvenient Mort",
          "episode": "S05E03"
        },
        {
          "id": "45",
          "name": "Rickdependence Spray",
          "episode": "S05E04"
        },
        {
          "id": "46",
          "name": "Amortycan Grickfitti",
          "episode": "S05E05"
        },
        {
          "id": "47",
          "name": "Rick & Morty's Thanksploitation Spectacular",
          "episode": "S05E06"
        },
        {
          "id": "48",
          "name": "Gotron Jerrysis Rickvangelion",
          "episode": "S05E07"
        },
        {
          "id": "49",
          "name": "Rickternal Friendshine of the Spotless Mort",
          "episode": "S05E08"
        },
        {
          "id": "51",
          "name": "Rickmurai Jack",
          "episode": "S05E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      "id": "4",
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        {
          "id": "6",
          "name": "Rick Potion #9",
          "episode": "S01E06"
        },
        {
          "id": "7",
          "name": "Raising Gazorpazorp",
          "episode": "S01E07"
        },
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        },
        {
          "id": "9",
          "name": "Something Ricked This Way Comes",
          "episode": "S01E09"
        },
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        },
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        },
        {
          "id": "14",
          "name": "Auto Erotic Assimilation",
          "episode": "S02E03"
        },
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        },
        {
          "id": "16",
          "name": "Get Schwifty",
          "episode": "S02E05"
        },
        {
          "id": "18",
          "name": "Big Trouble in Little Sanchez",
          "episode": "S02E07"
        },
        {
          "id": "19",
          "name": "Interdimensional Cable 2: Tempting Fate",
          "episode": "S02E08"
        },
        {
          "id": "20",
          "name": "Look Who's Purging Now",
          "episode": "S02E09"
        },
        {
          "id": "21",
          "name": "The Wedding Squanchers",
          "episode": "S02E10"
        },
        {
          "id": "22",
          "name": "The Rickshank Rickdemption",
          "episode": "S03E01"
        },
        {
          "id": "23",
          "name": "Rickmancing the Stone",
          "episode": "S03E02"
        },
        {
          "id": "24",
          "name": "Pickle Rick",
          "episode": "S03E03"
        },
        {
          "id": "25",
          "name": "Vindicators 3: The Return of Worldender",
          "episode": "S03E04"
        },
        {
          "id": "26",
          "name": "The Whirly Dirly Conspiracy",
          "episode": "S03E05"
        },
        {
          "id": "27",
          "name": "Rest and Ricklaxation",
          "episode": "S03E06"
        },
        {
          "id": "28",
          "name": "The Ricklantis Mixup",
          "episode": "S03E07"
        },
        {
          "id": "29",
          "name": "Morty's Mind Blowers",
          "episode": "S03E08"
        },
        {
          "id": "30",
          "name": "The ABC's of Beth",
          "episode": "S03E09"
        },
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        },
        {
          "id": "32",
          "name": "Edge of Tomorty: Rick, Die, Rickpeat",
          "episode": "S04E01"
        },
        {
          "id": "33",
          "name": "The Old Man and the Seat",
          "episode": "S04E02"
        },
        {
          "id": "34",
          "name": "One Crew Over the Crewcoo's Morty",
          "episode": "S04E03"
        },
        {
          "id": "35",
          "name": "Claw and Hoarder: Special Ricktim's Morty",
          "episode": "S04E04"
        },
        {
          "id": "36",
          "name": "Rattlestar Ricklactica",
          "episode": "S04E05"
        },
        {
          "id": "38",
          "name": "Promortyus",
          "episode": "S04E07"
        },
        {
          "id": "39",
          "name": "The Vat of Acid Episode",
          "episode": "S04E08"
        },
        {
          "id": "40",
          "name": "Childrick of Mort",
          "episode": "S04E09"
        },
        {
          "id": "41",
          "name": "Star Mort: Rickturn of the Jerri",
          "episode": "S04E10"
        },
        {
          "id": "42",
          "name": "Mort Dinner Rick Andre",
          "episode": "S05E01"
        },
        {
          "id": "43",
          "name": "Mortyplicity",
          "episode": "S05E02"
        },
        {
          "id": "44",
          "name": "A Rickconvenient Mort",
          "episode": "S05E03"
        },
        {
          "id": "45",
          "name": "Rickdependence Spray",
          "episode": "S05E04"
        },
        {
          "id": "46",
          "name": "Amortycan Grickfitti",
          "episode": "S05E05"
        },
        {
          "id": "47",
          "name": "Rick & Morty's Thanksploitation Spectacular",
          "episode": "S05E06"
        },
        {
          "id": "48",
          "name": "Gotron Jerrysis Rickvangelion",
          "episode": "S05E07"
        },
        {
          "id": "49",
          "name": "Rickternal Friendshine of the Spotless Mort",
          "episode": "S05E08"
        },
        {
          "id": "51",
          "name": "Rickmurai Jack",
          "episode": "S05E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      "id": "5",
      "name": "Jerry Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "6",
          "name": "Rick Potion #9",
          "episode": "S01E06"
        },
        {
          "id": "7",
          "name": "Raising Gazorpazorp",
          "episode": "S01E07"
        },
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        },
        {
          "id": "9",
          "name": "Something Ricked This Way Comes",
          "episode": "S01E09"
        },
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        },
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        },
        {
          "id": "13",
          "name": "Mortynight Run",
          "episode": "S02E02"
        },
        {
          "id": "14",
          "name": "Auto Erotic Assimilation",
          "episode": "S02E03"
        },
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        },
        {
          "id": "16",
          "name": "Get Schwifty",
          "episode": "S02E05"
        },
        {
          "id": "18",
          "name": "Big Trouble in Little Sanchez",
          "episode": "S02E07"
        },
        {
          "id": "19",
          "name": "Interdimensional Cable 2: Tempting Fate",
          "episode": "S02E08"
        },
        {
          "id": "20",
          "name": "Look Who's Purging Now",
          "episode": "S02E09"
        },
        {
          "id": "21",
          "name": "The Wedding Squanchers",
          "episode": "S02E10"
        },
        {
          "id": "22",
          "name": "The Rickshank Rickdemption",
          "episode": "S03E01"
        },
        {
          "id": "23",
          "name": "Rickmancing the Stone",
          "episode": "S03E02"
        },
        {
          "id": "26",
          "name": "The Whirly Dirly Conspiracy",
          "episode": "S03E05"
        },
        {
          "id": "29",
          "name": "Morty's Mind Blowers",
          "episode": "S03E08"
        },
        {
          "id": "30",
          "name": "The ABC's of Beth",
          "episode": "S03E09"
        },
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        },
        {
          "id": "32",
          "name": "Edge of Tomorty: Rick, Die, Rickpeat",
          "episode": "S04E01"
        },
        {
          "id": "33",
          "name": "The Old Man and the Seat",
          "episode": "S04E02"
        },
        {
          "id": "35",
          "name": "Claw and Hoarder: Special Ricktim's Morty",
          "episode": "S04E04"
        },
        {
          "id": "36",
          "name": "Rattlestar Ricklactica",
          "episode": "S04E05"
        },
        {
          "id": "38",
          "name": "Promortyus",
          "episode": "S04E07"
        },
        {
          "id": "39",
          "name": "The Vat of Acid Episode",
          "episode": "S04E08"
        },
        {
          "id": "40",
          "name": "Childrick of Mort",
          "episode": "S04E09"
        },
        {
          "id": "41",
          "name": "Star Mort: Rickturn of the Jerri",
          "episode": "S04E10"
        },
        {
          "id": "42",
          "name": "Mort Dinner Rick Andre",
          "episode": "S05E01"
        },
        {
          "id": "43",
          "name": "Mortyplicity",
          "episode": "S05E02"
        },
        {
          "id": "44",
          "name": "A Rickconvenient Mort",
          "episode": "S05E03"
        },
        {
          "id": "45",
          "name": "Rickdependence Spray",
          "episode": "S05E04"
        },
        {
          "id": "46",
          "name": "Amortycan Grickfitti",
          "episode": "S05E05"
        },
        {
          "id": "47",
          "name": "Rick & Morty's Thanksploitation Spectacular",
          "episode": "S05E06"
        },
        {
          "id": "48",
          "name": "Gotron Jerrysis Rickvangelion",
          "episode": "S05E07"
        },
        {
          "id": "49",
          "name": "Rickternal Friendshine of the Spotless Mort",
          "episode": "S05E08"
        },
        {
          "id": "50",
          "name": "Forgetting Sarick Mortshall",
          "episode": "S05E09"
        },
        {
          "id": "51",
          "name": "Rickmurai Jack",
          "episode": "S05E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
      "id": "6",
      "name": "Abadango Cluster Princess",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Female",
      "episode": [
        {
          "id": "27",
          "name": "Rest and Ricklaxation",
          "episode": "S03E06"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
    },
    {
      "id": "7",
      "name": "Abradolf Lincler",
      "status": "unknown",
      "species": "Human",
      "type": "Genetic experiment",
      "gender": "Male",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "11",
          "name": "Ricksy Business",
          "episode": "S01E11"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg"
    },
    {
      "id": "8",
      "name": "Adjudicator Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "28",
          "name": "The Ricklantis Mixup",
          "episode": "S03E07"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
    },
    {
      "id": "9",
      "name": "Agency Director",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "24",
          "name": "Pickle Rick",
          "episode": "S03E03"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
    },
    {
      "id": "10",
      "name": "Alan Rails",
      "status": "Dead",
      "species": "Human",
      "type": "Superhuman (Ghost trains summoner)",
      "gender": "Male",
      "episode": [
        {
          "id": "25",
          "name": "Vindicators 3: The Return of Worldender",
          "episode": "S03E04"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
    },
    {
      "id": "11",
      "name": "Albert Einstein",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "12",
          "name": "A Rickle in Time",
          "episode": "S02E01"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
    },
    {
      "id": "12",
      "name": "Alexander",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "3",
          "name": "Anatomy Park",
          "episode": "S01E03"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
    },
    {
      "id": "13",
      "name": "Alien Googah",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "unknown",
      "episode": [
        {
          "id": "31",
          "name": "The Rickchurian Mortydate",
          "episode": "S03E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg"
    },
    {
      "id": "14",
      "name": "Alien Morty",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg"
    },
    {
      "id": "15",
      "name": "Alien Rick",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg"
    },
    {
      "id": "16",
      "name": "Amish Cyborg",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "episode": [
        {
          "id": "15",
          "name": "Total Rickall",
          "episode": "S02E04"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg"
    },
    {
      "id": "17",
      "name": "Annie",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "episode": [
        {
          "id": "3",
          "name": "Anatomy Park",
          "episode": "S01E03"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg"
    },
    {
      "id": "18",
      "name": "Antenna Morty",
      "status": "Alive",
      "species": "Human",
      "type": "Human with antennae",
      "gender": "Male",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        },
        {
          "id": "28",
          "name": "The Ricklantis Mixup",
          "episode": "S03E07"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg"
    },
    {
      "id": "19",
      "name": "Antenna Rick",
      "status": "unknown",
      "species": "Human",
      "type": "Human with antennae",
      "gender": "Male",
      "episode": [
        {
          "id": "10",
          "name": "Close Rick-counters of the Rick Kind",
          "episode": "S01E10"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg"
    },
    {
      "id": "20",
      "name": "Ants in my Eyes Johnson",
      "status": "unknown",
      "species": "Human",
      "type": "Human with ants in his eyes",
      "gender": "Male",
      "episode": [
        {
          "id": "8",
          "name": "Rixty Minutes",
          "episode": "S01E08"
        }
      ],
      "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg"
    }
  ];
  const [DataRickAndMortyInterface, setDataRickAndMortyInterface] =
    useState(data);
  return (
    <RickAndMortyDataContext.Provider value={DataRickAndMortyInterface}>
      {props.children}
    </RickAndMortyDataContext.Provider>
  );
};
