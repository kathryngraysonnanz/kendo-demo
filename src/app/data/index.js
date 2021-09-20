import React, {Component} from 'react';
import './data.scss';
import { Button } from '@progress/kendo-react-buttons'
import { Breadcrumb, StackLayout } from "@progress/kendo-react-layout";
import { Tooltip } from "@progress/kendo-react-tooltip";
import Frame from '../frame'
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";

let items = [
  {
    id: "category",
    text: "Category",
    iconClass: "k-i-file-txt",
  }
];

export default class DataBank extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: items,
      category: null,
      error: null,
      isLoaded: false,
      result: []
    };
  }

  componentDidMount() {

    fetch("http://stapi.co/api/v1/rest/animal/search")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            result: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  updateCategory(category) {
    let items = this.state.data

    if (category == 'species') {
      category = 'Alien Species'
    } else if (category == 'character') {
      category = 'Notable Individuals'
    }

    items.push({id: category, text: category})
    this.setState({category: category, data: items});
  }

  reset(){
      this.setState({category: null});
  }

render () {
  const handleItemSelect = (event) => {
      let data = this.state.data
      const itemIndex = data.findIndex((curValue) => curValue.id === event.id);
      const newData = data.slice(0, itemIndex + 1);
      this.setState({ data: newData })
      console.log(this.state.data)
      this.reset();
    };

    const handleButtonClick = (event) => {
      if (event) {
        this.setState({ data: items })
      }
    };

    const handleKeyDown = (event) => {
      let data = this.state.data;
      if (event.nativeEvent.keyCode === 13) {
        const itemIndex = data.findIndex((curValue) => curValue.id === event.id);
        const newData = data.slice(0, itemIndex + 1);
        this.setState({ data: newData })
      }
    };

  return (
    <Frame>
      <div class="data-wrapper">
        <h1>Data Bank</h1>
        <Breadcrumb
          data={this.state.data}
          onItemSelect={handleItemSelect}
          onKeyDown={handleKeyDown}
        />
      { this.state.category == null &&
        <StackLayout orientation={"horizontal"} align={{horizontal: 'start', vertical: 'middle'}} gap={15}>
          <Tooltip anchorElement="pointer" position="bottom" parentTitle={true}>
            <svg height="162.147" width="100.041" version="1.1">
              <title>Badgey says: "Can I help you find something?"</title>
              <g transform="translate(-299.9795,-451.28869)">
                <path style={{enableBackground: 'accumulate', color: 'black'}} d="M350.6714,451.2887c-36.3264,51.9337-48.7244,103.6278-50.6919,162.147,11.98671-11.7398,50.14366-58.4529,63.7557-61.16914,9.08363-1.81174,19.47003,12.64405,36.2853,49.08336-2.19193-50.75678-22.49534-116.4719-49.34906-150.0612z"  fill="#f9f9f9"/>
                <path style={{enableBackground: 'accumulate', color: 'black'}} d="m350.6579,451.2887c-35.59494,50.64347-48.41479,99.37433-50.34267,156.4396,11.74539-11.44722,49.13407-57.00074,62.47212-59.64864,8.90069-1.76736,16.72784,8.97178,35.21875,44.1712-4.49726-49.49654-25.06368-108.5433-47.3482-140.9622z" fill="#ffb634"/>
              </g>
            </svg>
          </Tooltip>
          <div>
            <h2>Select a research category:</h2>
            <StackLayout orientation={"horizontal"} gap={30}>
              <Button onClick={()=>this.updateCategory('species')}>Alien Species</Button>
              <Button onClick={()=>this.updateCategory('character')}>Notable Individuals</Button>
              <Button onClick={()=>this.updateCategory('spacecraft')}>Spacecraft</Button>
            </StackLayout>
          </div>
        </StackLayout>
       }

       { this.state.category != null &&
         <div>
          <h2> Search {this.state.category}</h2>

         </div>
       }
       </div>
    </Frame>


  )
  {/* const { error, isLoaded, items } = this.state;
    if (error) {
      return (<Frame><h2>Error</h2></Frame>);
    } else if (!isLoaded) {
      return (<Frame><div>Loading...</div></Frame>);
    } else {
      return (
        <Frame>
           <div class="data-wrapper">
             <h1>Starfleet Data Bank</h1>
             {console.log(this.state)}
           </div>
        </Frame>
      );
    }
  } */}
}
}
