console.log('***** Music Collection *****')
let collection = [];

const addTocollection = (albumTitle, artist, yearPublished) => {
    let newObject = {
        albumTitle: albumTitle,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newObject);
    return newObject;
}

