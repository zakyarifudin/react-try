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
        //this.handletest = this.handletest.bind(this);
    }


    handleChange(selectedOption) {
        console.log(selectedOption)
        let fruit = this.refs.fruit.state.value;
        if(fruit!=null){
            console.log("test")
            this.setState({ fruitSelected: this.refs.fruit.state.value.label});
        }
        
        
        
    }

    handletest(param,e){
        alert(param);
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
                    onInputChange={this.handleChange}
                />
                <Item coba="jadi" onClick={this.handletest.bind(this,"coba")} />
                <Item coba="jadi 3" onClick={this.handletest.bind(this,"coba 2")} />
                <Item coba="jadi 5" onClick={this.handletest.bind(this,"coba 5")} />
            </div>
        );
    }  
}

class Item extends Component{
    render(){
        return(
            <div className="test" onClick={this.props.onClick}>
                {this.props.coba}
            </div>
        )
    }
} 

export default Home;