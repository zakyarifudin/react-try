import React, { Component } from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import store from '../../reducers/store';
import {getProvinces, getCities} from './homeAction';


class Home extends Component { 
    constructor(props){
        super(props)
        this.state = {
            selectedProvince : null,
            selectedCity: null
        }
        //this.handleChange = this.handleChange.bind(this);
    }
    


    handleChangeSelectProvince(selectedProvince) {
        this.setState({selectedProvince, selectedCity:null});
        console.log(selectedProvince);
        getCities(selectedProvince);
        
    }

    handleChangeSelectCity(selectedCity) {
        this.setState({selectedCity});
        console.log(selectedCity);
        
    }

    handletest(param,e){
        alert(param);
    }

    componentDidMount()
    {
        getProvinces();
    }

    render (){
        let provinces = this.props.provinces.map(function (province) {
            return { value: province.id_province, label: province.province_name };
          })

        let cities = this.props.cities.map(function (city) {
        return { value: city.id_city, label: city.city_name };
        })

        const {selectedProvince, selectedCity} = this.state

        return (
            <div>
                <h2>Home</h2>
                <br />

                <br />
                <Select
                    value={selectedProvince} 
                    options={provinces} 
                    placeholder={'Pilih Provinsi'}
                    onChange={this.handleChangeSelectProvince.bind(this)}
                />
                <br />
                <Select
                    value={selectedCity} 
                    options={cities} 
                    placeholder={'Pilih Kota'}
                    onChange={this.handleChangeSelectCity.bind(this)}
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

const mapStateToProps = state => {
    // console.log(state);
    return {
        provinces: state.provinceReducer,
        cities: state.cityReducer,
    }
}


export default connect(mapStateToProps)(Home);