import React, { Component } from 'react';

import Layout from './Components/Layout/Layout';

class App extends Component {
    render() {
          return (
            <div>
              <Layout/>
            </div>
          );
        }
  // state = {
  //   selectedFoods: [],
  // };
  //
  // removeFoodItem = (itemIndex) => {
  //   const filteredFoods = this.state.selectedFoods.filter(
  //     (item, idx) => itemIndex !== idx,
  //   );
  //   this.setState({ selectedFoods: filteredFoods });
  // };
  //
  // addFood = (food) => {
  //   const newFoods = this.state.selectedFoods.concat(food);
  //   this.setState({ selectedFoods: newFoods });
  // };
  // goToPDP = (item) =>{
  //   debugger;
  // };
  //
  // render() {
  //   const { selectedFoods } = this.state;
  //
  //   return (
  //     <div className='App'>
  //       <div className='ui text container'>
  //         <SelectedFoods
  //           foods={selectedFoods}
  //           onFoodClick={this.removeFoodItem}
  //         />
  //         <FoodSearch
  //           onFoodClick={this.addFood}
  //         />
  //         <ItemSearch
  //             onItemClick={this.goToPDP}
  //         />
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;
