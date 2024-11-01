{//////////////////////////////////////////////
// Generic with interface
interface Developer<T,X=null> { //Incase the developer doesn't have a bike, the default value is set to null
    name:string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number
    }
    smartWatch: T;
    bike? :X
}

type AppleWatchPro = { //written in type can use interface as well
    brand: string;
    model: string;
    display: string
}
interface AppleWatchPro2  { //written in interface can be written in type as well
    brand: string;
    model: string;
    display: string;
    heartTrack: boolean;
    sleepTrack: boolean
}

interface YamahaBike {
    model: string;
    engineCapacity: string
}

const poorDeveloper: Developer<AppleWatchPro>={ //used type alias to keep things cleaner and easier to read 
    name: 'Maheen',
    computer: {
        brand: 'MSI',
        model: 'Katana 15',
        releaseYear: 2022
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Watch Pro',
        display: 'OLED'
    }
}
const richDeveloper2: Developer<AppleWatchPro2,YamahaBike>={ //used interface to keep things cleaner and easier to read
    name: 'Rich',
    computer: {
        brand: 'MSI',
        model: 'Katana 16',
        releaseYear: 2024
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Watch Pro 2',
        display: 'AMOLED',
        heartTrack: true,
        sleepTrack: true
    },
    bike: {
        model: 'Yamaha',
        engineCapacity: '100cc'
    }
}
}//////////////////////////////////////////////