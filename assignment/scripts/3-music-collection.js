console.log('***** Music Collection *****')

let collection = [];
// Factory function to add an object of album info to the collection array


const addTocollection = (albumTitle, artist, yearPublished, trackArray) => {
    if (albumTitle && artist && yearPublished && trackArray) {
        let newObject = {
            albumTitle: albumTitle,
            artist: artist,
            yearPublished: yearPublished,
            tracks: trackArray
        }
        collection.push(newObject);
        return newObject;
    } else {
        console.log('Need more info. Check to make sure you have an album title, artist, year published and a track array.')
    }
}




const showCollection = (albumArray) => {
    console.log(`There are ${albumArray.length} albums in this collection.`);
    for (album of albumArray) {
        console.log(`${album.albumTitle} by ${album.artist} , published in ${album.yearPublished}: ${album.tracks}`)
    }

}

//function for find all albums by an artist in the collection array
const findByArtist = artistSearch => {
    let artistArray = [];
    for (info of collection) {
        if (info.artist.toUpperCase() === artistSearch.toUpperCase()) {
            artistArray.push(info);
        } 
    } return artistArray
}

const search = searchObject => {
    let artistSearchByYear =[];
    if (typeof(searchObject) === 'undefined'|| Object.keys(searchObject).length === 0) {
        artistSearchByYear = collection;
    }else {
     for (let artistYear of collection){
         let trackArrayToSearch= artistYear.tracks
         if (Object.keys(searchObject).length > 0) {
            if (artistYear.artist.toUpperCase() === searchObject.artist.toUpperCase() && artistYear.yearPublished === searchObject.year) {
                for (let i = 0; i < collection.length; i++) {
                    for (let j = 0; j < 3; j++  ) {
                        let singleTrack = collection[i].tracks[j].toUpperCase();
                        if (singleTrack.includes(searchObject.track.toUpperCase())) {
                            artistSearchByYear.push(artistYear);
                            break;
                        }
                    }
                }
                
                
             }
         }
       }
     } return artistSearchByYear;
   }
   
   
  


// adding albums to collection array
addTocollection('Bloom','Rufus Du Sol', 2016,['1. Brighter: 4:43', '2. Like an Animal: 4:04', '3. Say a Prayer for Me: 4:38']);
addTocollection('American Candy','The Maine', 2015,['1. Miles Away: 3:38', '2. Same Suit, Different Tie: 3:018', '3. My Hair: 3:15']);
addTocollection('Solace','Rufus Du Sol', 2018, ['1. Treat You Better: 4:33', '2. Eyes: 3:50', '3. New Sky: 5:27']);
addTocollection('Love Your Neighbors','Your Neighbors', 2021, ['1. Eggs: 3:49', '2. Pseudo: 2:34', '3. Track 3: 4:03']);
addTocollection('For Ever','Jungle', 2018, ['1. Smile: 3:07', '2. Heavy, California: 3:05', '3. Beat 54 (All Good Now): 4:07']);
addTocollection('Thrill of the Arts','Vulfpeck', 2015, ['1. Welcome to Vulf Records: 2:43', '2. Back Pocket: 3:01', '3. Funky Duck: 2:10']);
console.log('TEST 1 expect to see an array with 6 album objects in it', collection);
console.log('TEST 2 expect the string - There are 6 albums in this collection. and logging all 6 albums with artist, album name , year published and track list ')
showCollection(collection);
//Test if addToCollection does not have enough info
console.log('TEST 3 Expect to see - Need more info. Check to make sure you have an album title, artist, year published and a track array 3 times.')
addTocollection('Bloom', 2016);
addTocollection('Bloom', 2016, 'rufus du sol');
addTocollection('Bloom');

//testing findByArtist function
console.log('expect to see 2 album objects')
console.log(findByArtist('rufus dU sol'));
console.log('expect to see 1 album object')
console.log(findByArtist('junGle'));
console.log('expect to see 1 album object')
console.log(findByArtist('tHe MAINE'));
console.log('expect to see an empty array')
console.log(findByArtist('arcade fire')); 



 //testing search function
console.log('expect to see 1 album object')
console.log(search({artist:'rufus du sol', year: 2016, track: 'say A PrAyer for Me'}));

console.log('expect to see 1 album object')
console.log(search({artist:'rufus du sol', year: 2018, track: 'NEW sKy'}));

console.log('expect to see 1 album object')
console.log(search({artist:'your neighbors', year: 2021, track: 'eGGs'}));

console.log('expect to see an empty array')
console.log(search({artist:'the maine', year: 2016, track: 'Miles Away' }));

console.log('expect to see 6 album objects')
console.log(search({}));

console.log('expect to see 6 album objects')
console.log(search()); 
