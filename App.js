import { Component } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';


const App = () => {
  console.log('render');

  const [searchFeild, setsearchFeild] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  console.log({searchFeild});

useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => 
    setMonsters(users)
)
}, []);

useEffect(() => {

  const newfilterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchFeild);

});

  setFilterMonsters(newfilterMonsters);

}, [monsters, searchFeild])


  const onserachChange = (event) => {

         const searchFeildString = event.target.value.toLocaleLowerCase()
         setsearchFeild(searchFeildString)
         
       }

  const onTitle = (event) => {

        const TitleFeildString = event.target.value.toLocaleLowerCase()
        setTitle(TitleFeildString)
        
  }

  // const filterMonsters = monsters.filter((monster) => {
  //         return monster.name.toLocaleLowerCase().includes(searchFeild);
  //     });

  return (
    <div className='App'>
        <h1 className='app-title'>{title}</h1>

        
        <SearchBox 
          
              onChangeHandler={onserachChange}
              placeholder='Andermatt'
              classname='Monster-search-box' 
          
        />

        <br/>

        <SearchBox 
          
            onChangeHandler={onTitle}
            placeholder='set title'
            classname='Title-search-box' 
        
        />

        <CardList monsters={filteredMonsters}/>
          
    </div>
  )
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchFeild: ''
//   }
// }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState(
//         () => {
//           return {monsters: users};
//         },
//         () => {
          
//         }
//       )
//     )
//   }

//   onserachChange = (event) => {
//     const searchFeild = event.target.value.toLocaleLowerCase()
//     this.setState(() => {
//       return {searchFeild};
//     })
//   }

//   render() {

//     const {monsters, searchFeild} = this.state;
//     const {onserachChange} = this;

//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchFeild);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>MONSTER ANDERMATT</h1>
        
//         <header className="App-header">

//           <SearchBox 
          
//           onChangeHandler={onserachChange}
//           placeholder='Andermatt'
//           classname='Monster-search-box' 

//           />

//           <CardList monsters={filterMonsters}/>

//           {/* {
//             filterMonsters.map((monster) => {
//               return <div key={monster.id}>
//                 <h1>{monster.name}</h1>
                
//               </div>
//             })
//           } */}

//         </header>
//       </div>
//     );
//   }
  
//   }
  
export default App;
