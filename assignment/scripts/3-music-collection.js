console.log('***** Music Collection *****')
let collection = [];
// Factory function to add an object of album info to the collection array
const addTocollection = (albumTitle, artist, yearPublished) => {
    if (albumTitle && artist && yearPublished) {
        albumTitle =albumTitle.toUpperCase();
        artist =artist.toUpperCase();
        let newObject = {
            albumTitle: albumTitle,
            artist: artist,
            yearPublished: yearPublished
        }
        collection.push(newObject);
        return newObject;
    } else {
        return 'Need more info. Check to make sure you have an album title, artist, and year published.'
    }
}
// adding albums to collection array
console.log(addTocollection('Bloom','Rufus Du Sol', 2016));
console.log(addTocollection('American Candy','The Maine', 2015));
console.log(addTocollection('Solace','Rufus Du Sol', 2018));
console.log(addTocollection('Love Your Neighbors','Your Neighbors', 2021));
console.log(addTocollection('For Ever','Jungle', 2018));
console.log(addTocollection('Thrill of the Arts','Vulfpeck', 2015));
console.log(collection);

const showCollection = array => {
    console.log(`There are ${array.length} albums in this collection.`);
    for (album of array) {
        console.log(`${album.albumTitle} by ${album.artist} , published in ${album.yearPublished}.`)
    }

}
showCollection(collection);
//Test if addToCollection does not have enough info
console.log(addTocollection('Bloom', 2016));

//function for find all albums by an artist in the collection array
const findByArtist = artistSearch => {
    artistSearch = artistSearch.toUpperCase();
    let artistArray = [];
    for (info of collection) {
        if (info.artist === artistSearch) {
            artistArray.push(info);
        } 
    } return artistArray
}

//testing findByArtist function
 console.log(findByArtist('rufus du sol'));
 console.log(findByArtist('junGle'));
 console.log(findByArtist('arcade fire'));
 
 const search = searchObject => {
    let artistSearchByYear =[];
    if (typeof(searchObject) === 'undefined') {
        artistSearchByYear = collection;
    } else {
     for (artistYear of collection){
        if (Object.keys(searchObject).length === 0) {
            artistSearchByYear = collection;
        }else if (Object.keys(searchObject).length > 0) {
            if (artistYear.artist === searchObject.artist.toUpperCase() && artistYear.yearPublished === searchObject.year) {
                artistSearchByYear.push(artistYear)
        }
       }
     }
    }  return artistSearchByYear;
   }
   console.log(search({artist:'the maine', year: 2015}));
   
  
  /* else if (artistYear.artist === searchObject.artist && artistYear.yearPublished === searchObject.year) {
    artistSearchByYear.push(artistYear)*/
 
  /* if (searchObject.length === 0) {
    artistSearchByYear = collection
    }
 
*/

  /* const search = searchObject => {
    searchObject.artist= searchObject.artist.toUpperCase();
    let artistSearchByYear =[];
    for (artistYear of collection){
        
       if (artistYear.artist === searchObject.artist && artistYear.yearPublished === searchObject.year) {
           artistSearchByYear.push(artistYear)
       }
    } return artistSearchByYear
   }
   console.log(search({artist:'the maine', year: 2015}));*/
