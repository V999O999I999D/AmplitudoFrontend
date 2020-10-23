class Studenti {

    constructor(studenti){
        this.studenti = studenti;
    }

    sortByIndex() {
        for(let i = 0; i < this.studenti.length-1; i++)
            for(let j = i+1; j < this.studenti.length; j++)
                if(this.studenti[i].index > this.studenti[j].index){
                    let temp = this.studenti[i];
                    this.studenti[i] = this.studenti[j];
                    this.studenti[j] = temp;
                }

        return this.studenti;
    };


    filter(godinaStudija) {
        let filteredArray = [];
    
        for(let i = 0; i < this.studenti.length; i++)
            if(this.studenti[i].godinaStudija === godinaStudija)
                filteredArray.push(this.studenti[i]);
    
        return filteredArray;
    };

    deleteOldestStudent() {
        let result = [];
        let oldest = 0, index = -1;
    
        for(let i = 0; i < this.studenti.length; i++)
            if(this.studenti[i].godine > oldest){
                oldest = this.studenti[i].godine;
                index = i;
            }
    
        for(let i = 0; i < this.studenti.length; i++)
            if(i !== index)
                result.push(this.studenti[i]);
                
        return result;
    };
}


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


let studentiObjekat = new Studenti(studenti);


console.log(studentiObjekat.deleteOldestStudent());