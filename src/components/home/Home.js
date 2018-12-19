import React, { Component } from 'react';
import Select from 'react-select'


class Home extends Component { 
    constructor(props){
        super(props)
        this.state = {
            fruits : [
                { id: 1, label: 'Chocolate' },
                { id: 2, label: 'Strawberry' },
                { id: 3, label: 'Vanilla' }
            ],
            fruitSelected : '',

        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        console.log(this.refs.fruit)
        let fruit = this.refs.fruit.state.value;
        if(fruit!=null){
            this.setState({ fruitSelected: this.refs.fruit.state.value.label});
        }
        
        
    }


    render (){
        const fruits = this.state.fruits; 
        return (
            <div>
                <h2>Home {this.state.fruitSelected}</h2>
                <br />
                {/* <select
                    ref="fruit"
                    //value={fruits.} 
                    //options={fruits} 
                    placeholder={'Pilih Buah buahan'}
                    onChange={this.handleChange}
                >
                    
                    {fruits.map((fruit,index) =>
                        <option  key={fruit.id} value={fruit.id}>
                            {fruit.label}
                        </option>
                    )}
                    
                </select> */}
                <Select
                    ref="fruit"
                    //value={fruits.} 
                    options={fruits} 
                    placeholder={'Pilih Buah buahan'}
                    onChange={this.handleChange}
                />

            </div>
        );
    }  
}

export default Home;