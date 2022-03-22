console.log('***** Music Collection *****')
let collection = [];
// Factory funstion to add an object of album info to the collection array
const addTocollection = (albumTitle, artist, yearPublished) => {
    if (albumTitle && artist && yearPublished) {
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
console.log(addTocollection('Bloom','Rüfüs Du Sol', 2016));
console.log(addTocollection('American Candy','The Maine', 2015));
console.log(addTocollection('Solace','Rüfüs Du Sol', 2018));
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
//console.log(addTocollection('Bloom', 2016));

const findByArtist = artistSearch => {
    let artistArray = [];
    for (info of collection) {
        if (info.artist === artistSearch) {
            artistArray.push(info);
        }
    } return artistArray
}
 console.log(findByArtist('Rüfüs Du Sol'))