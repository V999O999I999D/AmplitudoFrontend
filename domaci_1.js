let studenti = [
    student1 = {
        id: 5,
        index: 23,
        ime: 'Marko',
        prezime: 'Markovic',
        godine: '20',
        fakultet: 'Fakultet1',
        smjer: 'A',
        godinaStudija: 2,
        adresa: 'Adresa1'
    },
    student2 = {
        id: 3,
        index: 95,
        ime: 'Petar',
        prezime: 'Petrovic',
        godine: '22',
        fakultet: 'Fakultet2',
        smjer: 'B',
        godinaStudija: 3,
        adresa: 'Adresa2'
    },
    student3 = {
        id: 9,
        index: 65,
        ime: 'Filip',
        prezime: 'Filipovic',
        godine: '25',
        fakultet: 'Fakultet3',
        smjer: 'C',
        godinaStudija: 5,
        adresa: 'Adresa3'
    },
    student4 = {
        id: 15,
        index: 42,
        ime: 'Pavle',
        prezime: 'Pavlovic',
        godine: '21',
        fakultet: 'Fakultet2',
        smjer: 'A',
        godinaStudija: 3,
        adresa: 'Adresa9'
    },
]; 

//-------------------------------------------------------------------------------------------------------------

let sortByIndex = () => {
    for(let i = 0; i < studenti.length-1; i++)
        for(let j = i+1; j < studenti.length; j++)
            if(studenti[i].index > studenti[j].index){
                let temp = studenti[i];
                studenti[i] = studenti[j];
                studenti[j] = temp;
            }
    return studenti;
};

//-------------------------------------------------------------------------------------------------------------

const filter = (godinaStudija) => {
    let filteredArray = [];

    for(let i = 0; i < studenti.length; i++)
        if(studenti[i].godinaStudija === godinaStudija)
            filteredArray.push(studenti[i]);

    return filteredArray;
};

//-------------------------------------------------------------------------------------------------------------

const deleteOldestStudent = () => {
    let result = [];
    let oldest = 0, index = -1;

    for(let i = 0; i < studenti.length; i++)
        if(studenti[i].godine > oldest){
            oldest = studenti[i].godine;
            index = i;
        }

    for(let i = 0; i < studenti.length; i++)
        if(i !== index)
            result.push(studenti[i]);
            
    return result;
};

//-------------------------------------------------------------------------------------------------------------

const addNewStudent = (id, index, ime, prezime, godine, fakultet, smjer, godinaStudija, adresa) => {
    let newStudent = {
        id: id,
        index: index,
        ime: ime,
        prezime: prezime,
        godine: godine,
        fakultet: fakultet,
        smjer: smjer,
        godinaStudija: godinaStudija,
        adresa: adresa
    };
    studenti.push(newStudent);
};

//-------------------------------------------------------------------------------------------------------------
console.log(sortByIndex());