"use strict";
let __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    let desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
let __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
let __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    let result = {};
    if (mod != null) for (let k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Home = () => {
    const [data, setData] = (0, react_1.useState)([]);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b91f3eccdbmshc4638551fffa5fdp1ba5c6jsnf5654dcdc4d5',
            'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
        }
    };
    const getMovies = () => {
        fetch('https://lyrics-finder1.p.rapidapi.com/artists/name/g', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    };
    (0, react_1.useEffect)(() => {
        getMovies();
    }, []);
    return (<react_native_1.View style={{ flex: 1, padding: 24 }}>
      {data ? data.map((data, index) => { <react_native_1.View key={index}><react_native_1.Text>{data}</react_native_1.Text></react_native_1.View>; }) : <react_native_1.View><react_native_1.Text>...Loading</react_native_1.Text></react_native_1.View>}
        
    </react_native_1.View>);
};
exports.default = Home;
