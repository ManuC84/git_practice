//MYSTERIOUS ORGANISM CODEACADEMY CHALLENGE.

// Returns a random DNA base.
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases.
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase());
    }
    return newStrand;
};

// Factory function for creating many objects.

const pAequorFactory = (num, dnaStrand) => {

    return {
        specimenNum: num,
        dna: dnaStrand,

        //Mutate method.
        mutate() {
            const randIdx = Math.floor(Math.random() * Math.floor(15));
            const randBase = returnRandBase();
            newBase = '';
            console.log(this.dna)
            while (this.dna[randIdx] != randBase) {
                newBase = randBase;
                this.dna.splice(randIdx, 1, newBase)

            }
            return this.dna;

        },

        //Compare original pAequor with another instance of pAequor.
        compareDna(obj) {
            let match = 0;
            for (let i = 0; i < obj.dna.length; i++) {
                if (obj.dna[i] === this.dna[i]) {
                    match++
                }
            }
            const percent = Math.floor((match * 100) / this.dna.length);
            return `specimen ${obj.specimenNum} and specimen ${this.specimenNum} have ${percent}% DNA in common.`;
        },

        //Determine survival rate.
        willLikelySurvive() {
            let match = 0;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === 'C' || this.dna[i] === 'G') {
                    match++;
                }
            }
            const percent = Math.floor((match * 100) / this.dna.length);
            const result = percent >= 60 ? true : false;
            return result;
        },


        //return complementary DNA.
        complementStrand() {
            const arr = [];
            console.log(this.dna)
            for (let i in this.dna) {
                switch (this.dna[i]) {
                    case 'C':
                        arr.push('G');
                        break;
                    case 'G':
                        arr.push('C');
                        break;
                    case 'A':
                        arr.push('T');
                        break;
                    case 'T':
                        arr.push('A');
                        break;
                }
            }
            return arr;
        },
    }
};

//Create 30 instances of surviving pAequor.
const survivors30 = () => {
    arr = []
    count = 1;
    while (count <= 30) {
        const specimen = pAequorFactory(count, mockUpStrand());
        if (specimen.willLikelySurvive()) {
            count++;
            arr.push(specimen);
        }
    }
    return arr;
};

//find most related instances of pAequor.
const findMostRelated = () => {
    const survivors = survivors30();
    for (let i = 0; i < survivors.length; i++) {

        for (let j = 0; j < survivors.length; j++) {
            survivors[i].compareDna(survivors[j]);
            
            //if (survivors[i].specimenNum != survivors[j].specimenNum && )

        }
    }
};

const dnaTest1 = pAequorFactory(1, mockUpStrand());
const dnaTest2 = pAequorFactory(2, mockUpStrand());
//console.log(dnaTest1)
//console.log(dnaTest1.compareDna(dnaTest2))
console.log(findMostRelated())




